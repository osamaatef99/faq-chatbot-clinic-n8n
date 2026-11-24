const raw = $json.choices?.[0]?.message?.content ?? '';
let out; try { out = JSON.parse(raw); } catch (e) { out = null; }
if (!out || !out.answer) out = { answer: 'Sorry, I could not answer that. The team will get back to you. / عذرا، سيرد عليك فريقنا قريبا.', answered_from_faq: false };
return [{ json: { answer: String(out.answer), answered_from_faq: !!out.answered_from_faq } }];
