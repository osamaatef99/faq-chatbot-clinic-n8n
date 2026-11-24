# Arabic + English FAQ Chatbot for Clinics and Pharmacies (n8n + Groq)

A webhook chatbot that answers customer questions **only from a FAQ stored in Google Sheets**, in the customer's language (Arabic or English). Works behind any website chat box or WhatsApp bridge that can POST JSON.

## Usage
`POST /webhook/faq-chat` with `{"question": "ما هي مواعيد العمل؟"}`
Response: `{"answer": "...", "answered_from_faq": true}`

## Flow
Webhook > Sheets (read FAQ) > Build Prompt > Groq > Format Answer > Respond

## Setup
1. Import `workflow.json`. Add Google Sheets OAuth2 and Groq credential (free API key).
2. Create a sheet from `sample-faq.csv` (columns question_en, question_ar, answer_en, answer_ar) and set its ID in the Sheets node.
3. Activate and POST a test question.

## Safety choices
- Answers only from the FAQ. Unknown questions get a hand-off message asking for a phone number, no invented answers.
- Prompt forbids medical advice and dosages.
- Question length capped at 500 characters; empty questions rejected.

## Status
Tested on n8n cloud (Nov 25 2026) in a throwaway copy with a dummy question and a 2-row FAQ: Groq answered from the FAQ and the formatted answer was correct. The webhook, Sheets read and Respond nodes were replaced or disabled in the test, so they are untested. Model: openai/gpt-oss-20b on Groq (Llama models on Groq now require an enterprise plan). Credentials and IDs are blank placeholders.
