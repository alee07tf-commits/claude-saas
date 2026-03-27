/**
 * Forgi Chatbot Widget
 * Self-contained vanilla JS injected into published landing pages at deploy time.
 * No React, no Next.js — pure browser JS.
 */

export function buildForgiWidget(
  landingId: string,
  appUrl: string,
  bizName: string,
  whiteLabel: boolean = false,
): string {
  // Escape values for safe JS string embedding
  const safeId      = JSON.stringify(landingId)
  const safeAppUrl  = JSON.stringify(appUrl.replace(/\/$/, ''))
  const safeBizName = JSON.stringify(bizName)
  const wl          = whiteLabel ? 'true' : 'false'

  const script = /* js */`
(function() {
  var LANDING_ID = ${safeId};
  var APP_URL    = ${safeAppUrl};
  var BIZ_NAME   = ${safeBizName};
  var WHITE_LABEL = ${wl};
  var API_URL    = APP_URL + '/api/forgi-chat';
  var HISTORY    = [];   // kept separately for the fetch payload

  // ── Styles ──────────────────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = [
    '#forgi-btn {',
    '  position:fixed; bottom:24px; right:24px; z-index:9999;',
    '  width:56px; height:56px; border-radius:50%; border:none; cursor:pointer;',
    '  background:linear-gradient(135deg,var(--primary,#00E5A0),var(--secondary,#00B8D4));',
    '  box-shadow:0 4px 20px rgba(0,0,0,.35);',
    '  display:flex; align-items:center; justify-content:center;',
    '  font-size:24px; transition:transform .2s, box-shadow .2s;',
    '}',
    '#forgi-btn:hover { transform:scale(1.08); box-shadow:0 6px 28px rgba(0,0,0,.45); }',
    '#forgi-panel {',
    '  position:fixed; bottom:92px; right:24px; z-index:9999;',
    '  width:340px; max-width:calc(100vw - 32px);',
    '  background:#111827; border-radius:16px;',
    '  border:1px solid rgba(255,255,255,.1);',
    '  box-shadow:0 12px 48px rgba(0,0,0,.6);',
    '  display:none; flex-direction:column; overflow:hidden;',
    '  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;',
    '}',
    '#forgi-panel.open { display:flex; animation:forgiSlideUp .22s ease; }',
    '@keyframes forgiSlideUp {',
    '  from { opacity:0; transform:translateY(12px); }',
    '  to   { opacity:1; transform:translateY(0); }',
    '}',
    '#forgi-header {',
    '  padding:14px 16px; display:flex; align-items:center; gap:10px;',
    '  border-bottom:1px solid rgba(255,255,255,.08);',
    '  background:linear-gradient(135deg,var(--primary,#00E5A0)18,var(--secondary,#00B8D4));',
    '}',
    '#forgi-header-avatar {',
    '  width:32px; height:32px; border-radius:50%; background:rgba(0,0,0,.25);',
    '  display:flex; align-items:center; justify-content:center; font-size:15px; flex-shrink:0;',
    '}',
    '#forgi-header-title { font-weight:700; font-size:14px; color:#fff; }',
    '#forgi-header-sub   { font-size:11px; color:rgba(255,255,255,.7); }',
    '#forgi-close {',
    '  margin-left:auto; background:none; border:none; cursor:pointer;',
    '  color:rgba(255,255,255,.8); font-size:18px; line-height:1; padding:2px 4px;',
    '}',
    '#forgi-messages {',
    '  flex:1; overflow-y:auto; padding:16px; display:flex;',
    '  flex-direction:column; gap:10px; max-height:320px;',
    '  scrollbar-width:thin; scrollbar-color:rgba(255,255,255,.1) transparent;',
    '}',
    '.forgi-msg {',
    '  max-width:82%; padding:9px 13px; border-radius:12px;',
    '  font-size:13px; line-height:1.5; color:#F1F5F9;',
    '}',
    '.forgi-msg.bot  { background:#1E293B; align-self:flex-start; border-bottom-left-radius:4px; }',
    '.forgi-msg.user { background:linear-gradient(135deg,var(--primary,#00E5A0),var(--secondary,#00B8D4));',
    '  color:#0A0E17; align-self:flex-end; border-bottom-right-radius:4px; font-weight:500; }',
    '.forgi-typing { display:flex; gap:4px; align-items:center; padding:10px 14px; }',
    '.forgi-dot { width:6px; height:6px; border-radius:50%; background:#94A3B8;',
    '  animation:forgiBounce 1.1s infinite ease-in-out; }',
    '.forgi-dot:nth-child(2) { animation-delay:.18s; }',
    '.forgi-dot:nth-child(3) { animation-delay:.36s; }',
    '@keyframes forgiBounce {',
    '  0%,80%,100% { transform:translateY(0); }',
    '  40%         { transform:translateY(-5px); }',
    '}',
    '#forgi-input-row {',
    '  display:flex; gap:8px; padding:10px 12px;',
    '  border-top:1px solid rgba(255,255,255,.08);',
    '}',
    '#forgi-input {',
    '  flex:1; background:#1E293B; border:1px solid rgba(255,255,255,.1);',
    '  border-radius:8px; padding:9px 12px; color:#F1F5F9; font-size:13px;',
    '  outline:none; resize:none; font-family:inherit; line-height:1.4;',
    '}',
    '#forgi-input::placeholder { color:#475569; }',
    '#forgi-input:focus { border-color:var(--primary,#00E5A0); }',
    '#forgi-send {',
    '  width:36px; height:36px; border-radius:8px; border:none; cursor:pointer;',
    '  background:linear-gradient(135deg,var(--primary,#00E5A0),var(--secondary,#00B8D4));',
    '  color:#0A0E17; font-size:16px; display:flex; align-items:center;',
    '  justify-content:center; align-self:flex-end; flex-shrink:0;',
    '  transition:opacity .15s;',
    '}',
    '#forgi-send:disabled { opacity:.4; cursor:default; }',
  ].join('');
  document.head.appendChild(style);

  // ── DOM ──────────────────────────────────────────────────────────────────────
  var btn = document.createElement('button');
  btn.id = 'forgi-btn';
  btn.title = 'Habla con nosotros';
  btn.innerHTML = '💬';

  var panel = document.createElement('div');
  panel.id = 'forgi-panel';
  panel.innerHTML = [
    '<div id="forgi-header">',
    '  <div id="forgi-header-avatar">✨</div>',
    '  <div>',
    '    <div id="forgi-header-title">' + (WHITE_LABEL ? BIZ_NAME : 'Forgi · ' + BIZ_NAME) + '</div>',
    '    <div id="forgi-header-sub">' + (WHITE_LABEL ? 'Chat en vivo' : 'Asistente virtual') + '</div>',
    '  </div>',
    '  <button id="forgi-close" title="Cerrar">✕</button>',
    '</div>',
    '<div id="forgi-messages"></div>',
    '<div id="forgi-input-row">',
    '  <textarea id="forgi-input" rows="1" placeholder="Escribe tu pregunta…"></textarea>',
    '  <button id="forgi-send">➤</button>',
    '</div>',
  ].join('');

  document.body.appendChild(panel);
  document.body.appendChild(btn);

  // ── State ────────────────────────────────────────────────────────────────────
  var loading = false;

  // ── Helpers ──────────────────────────────────────────────────────────────────
  function msgs()  { return document.getElementById('forgi-messages'); }
  function input() { return document.getElementById('forgi-input');    }
  function send()  { return document.getElementById('forgi-send');     }

  function addMessage(role, text) {
    var div = document.createElement('div');
    div.className = 'forgi-msg ' + (role === 'user' ? 'user' : 'bot');
    div.textContent = text;
    msgs().appendChild(div);
    msgs().scrollTop = msgs().scrollHeight;
    return div;
  }

  function showTyping() {
    var el = document.createElement('div');
    el.className = 'forgi-msg bot forgi-typing';
    el.id = 'forgi-typing';
    el.innerHTML = '<div class="forgi-dot"></div><div class="forgi-dot"></div><div class="forgi-dot"></div>';
    msgs().appendChild(el);
    msgs().scrollTop = msgs().scrollHeight;
  }

  function hideTyping() {
    var el = document.getElementById('forgi-typing');
    if (el) el.remove();
  }

  function setLoading(val) {
    loading = val;
    send().disabled = val;
    input().disabled = val;
  }

  function autoResizeInput() {
    var el = input();
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 100) + 'px';
  }

  // ── Toggle panel ─────────────────────────────────────────────────────────────
  function openPanel() {
    panel.classList.add('open');
    btn.innerHTML = '✕';
    if (history.length === 0) {
      addMessage('bot', '¡Hola! Soy el asistente de ' + BIZ_NAME + '. ¿En qué puedo ayudarte hoy?');
    }
    setTimeout(function() { input().focus(); }, 50);
  }

  function closePanel() {
    panel.classList.remove('open');
    btn.innerHTML = '💬';
  }

  btn.addEventListener('click', function() {
    panel.classList.contains('open') ? closePanel() : openPanel();
  });

  document.getElementById('forgi-close').addEventListener('click', closePanel);

  // ── Send message ─────────────────────────────────────────────────────────────
  function sendMessage() {
    var text = input().value.trim();
    if (!text || loading) return;

    addMessage('user', text);
    input().value = '';
    input().style.height = 'auto';
    setLoading(true);
    showTyping();

    var snapshot = HISTORY.slice(-10);

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        landing_page_id:      LANDING_ID,
        message:              text,
        conversation_history: snapshot,
      }),
    })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        hideTyping();
        if (data.error) {
          addMessage('bot', data.error);
          return;
        }
        var reply = data.reply || 'Lo siento, no pude procesar tu mensaje.';
        addMessage('bot', reply);
        HISTORY.push({ role: 'user', content: text });
        HISTORY.push({ role: 'assistant', content: reply });
      })
      .catch(function() {
        hideTyping();
        addMessage('bot', 'Hubo un error. Por favor inténtalo de nuevo.');
      })
      .finally(function() {
        setLoading(false);
      });
  }

  send().addEventListener('click', sendMessage);

  input().addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  input().addEventListener('input', autoResizeInput);
})();
`.trim()

  return `<script data-forgi-widget="1">\n${script}\n</script>`
}
