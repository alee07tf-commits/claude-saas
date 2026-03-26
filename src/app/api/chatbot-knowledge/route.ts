import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

// GET — list knowledge items for a landing
export async function GET(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const landingId = req.nextUrl.searchParams.get('landingId')
  if (!landingId) return NextResponse.json({ error: 'landingId requerido' }, { status: 400 })

  const { data, error } = await supabase
    .from('chatbot_knowledge')
    .select('id, title, content_type, content_text, file_url, created_at')
    .eq('landing_page_id', landingId)
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ items: data ?? [] })
}

// POST — add a knowledge item (text or file)
export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const contentType = req.headers.get('content-type') || ''

  // Handle file upload via FormData
  if (contentType.includes('multipart/form-data')) {
    const form = await req.formData()
    const landingId = form.get('landingId') as string
    const title = form.get('title') as string || 'Archivo'
    const file = form.get('file') as File | null

    if (!landingId) return NextResponse.json({ error: 'landingId requerido' }, { status: 400 })
    if (!file || file.size === 0) return NextResponse.json({ error: 'Archivo requerido' }, { status: 400 })

    // 10 MB limit for knowledge files
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'Archivo demasiado grande (máx 10 MB)' }, { status: 400 })
    }

    // Extract text from TXT files
    let extractedText = ''
    if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
      extractedText = await file.text()
      if (extractedText.length > 15000) extractedText = extractedText.slice(0, 15000) + '...'
    }

    // Upload file to Supabase storage
    const ext = (file.name.split('.').pop() || 'bin').toLowerCase()
    const fileName = `${user.id}/${landingId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`
    const buffer = Buffer.from(await file.arrayBuffer())

    const { error: uploadError } = await supabase.storage
      .from('chatbot-knowledge')
      .upload(fileName, buffer, { contentType: file.type, upsert: false })

    let fileUrl = ''
    if (!uploadError) {
      const { data: { publicUrl } } = supabase.storage
        .from('chatbot-knowledge')
        .getPublicUrl(fileName)
      fileUrl = publicUrl
    }

    const { data, error } = await supabase
      .from('chatbot_knowledge')
      .insert({
        landing_page_id: landingId,
        content_type: 'file',
        title,
        content_text: extractedText || null,
        file_url: fileUrl || null,
      })
      .select('id, title, content_type, content_text, file_url, created_at')
      .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ item: data })
  }

  // Handle JSON text input
  const body = await req.json() as { landingId?: string; title?: string; content?: string }
  const { landingId, title, content } = body

  if (!landingId) return NextResponse.json({ error: 'landingId requerido' }, { status: 400 })
  if (!content?.trim()) return NextResponse.json({ error: 'Contenido requerido' }, { status: 400 })

  const { data, error } = await supabase
    .from('chatbot_knowledge')
    .insert({
      landing_page_id: landingId,
      content_type: 'text',
      title: title || 'Información adicional',
      content_text: content.trim().slice(0, 15000),
    })
    .select('id, title, content_type, content_text, file_url, created_at')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ item: data })
}

// DELETE — remove a knowledge item by ID
export async function DELETE(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { id } = await req.json() as { id?: string }
  if (!id) return NextResponse.json({ error: 'id requerido' }, { status: 400 })

  const { error } = await supabase
    .from('chatbot_knowledge')
    .delete()
    .eq('id', id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
