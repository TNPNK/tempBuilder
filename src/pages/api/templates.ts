import type { APIRoute } from 'astro';
import { getSupabaseClient } from '../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return new Response(
      JSON.stringify({
        error:
          'Supabase credentials are not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.',
      }),
      { status: 500 },
    );
  }

  const payload = await request.json().catch(() => null);

  if (!payload || !payload.name || !Array.isArray(payload.content_json)) {
    return new Response(
      JSON.stringify({ error: 'Invalid payload. Provide name and content_json array.' }),
      { status: 400 },
    );
  }

  const { data, error } = await supabase
    .from('document_templates')
    .insert({
      name: payload.name,
      content_json: payload.content_json,
      is_active: true,
    })
    .select('id, name')
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ data }), { status: 201 });
};
