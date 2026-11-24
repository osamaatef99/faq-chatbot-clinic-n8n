const rows = $input.all().map(i => i.json);
const q = String($('Chat Webhook').item.json.body?.question || '').trim().slice(0, 500);
if (!q) { return [{ json: { error: 'missing question' } }]; }
const faq = rows.map(r => `Q: ${r.question_en || ''} / ${r.question_ar || ''}\nA: ${r.answer_en || ''} / ${r.answer_ar || ''}`).join('\n\n').slice(0, 8000);
return [{ json: { question: q, prompt: `FAQ:\n${faq}\n\nCustomer question: ${q}` } }];
