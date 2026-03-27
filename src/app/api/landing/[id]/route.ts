import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { error } = await supabase
    .from('landing_pages')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const { html_content } = await req.json() as { html_content?: string }

  if (!html_content) {
    return NextResponse.json({ error: 'html_content requerido' }, { status: 400 })
  }

  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { error } = await supabase
    .from('landing_pages')
    .update({ html_content })
    .eq('id', id)
    .eq('user_id', user.id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params

  if (!id) {
    return NextResponse.json({ error: 'ID requerido' }, { status: 400 })
  }

  const supabase = await createClient()

  const { data, error } = await supabase
    .from('landing_pages')
    .select('id, html_content, business_name, survey_data, status, metadata')
    .eq('id', id)
    .single()

  if (error || !data) {
    return NextResponse.json({ error: 'Landing no encontrada' }, { status: 404 })
  }

  return NextResponse.json({
    html:         data.html_content,
    businessName: data.business_name,
    status:       data.status,
    surveyData:   data.survey_data,
    metadata:     data.metadata,
  })
}
