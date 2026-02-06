# Exam Template Builder (Astro)

A single-page Astro app for building exam question paper cover templates with drag-and-drop blocks.

## Features

- Add/remove/reorder template sections:
  - Header
  - Exam info metadata grid
  - Candidate details
  - Candidate instructions
- Inline editing for section text.
- Alignment controls (left/center/right).
- Save template to Supabase using `POST /api/templates`.
- Shows a list of recently saved active templates in the sidebar.

## Environment variables

Copy `.env.example` to `.env` and set values:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## Database assumptions

The app expects a `document_templates` table with at least:

- `id` (uuid / primary key)
- `name` (text)
- `content_json` (json/jsonb)
- `is_active` (boolean)
- `created_at` (timestamp)

## Run

```bash
npm install
npm run dev
```
