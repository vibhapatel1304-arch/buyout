import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function generateToken(id: number, name: string): string {
  const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const rand = Math.random().toString(36).slice(2, 8);
  return `pkg-${id}-${slug}-${rand}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Insert package into Supabase
    const { data: pkg, error: pkgError } = await supabase
      .from('packages')
      .insert({
        name:              body.name,
        trade:             body.trade,
        pm:                body.pm,
        project:           body.project,
        csi:               body.csi,
        due_date:          body.dueDate,
        on_site_date:      body.onSiteDate || null,
        priority:          body.priority,
        status:            body.status || 'Not Started',
        budget:            body.budget || 0,
        risk:              body.risk || 'Medium',
        long_lead:         body.longLead || false,
        urgent:            body.urgent || false,
        notes:             body.notes || '',
        coverage_count:    0,
        contract_status:   'Not Started',
        contract_progress: 0,
      })
      .select()
      .single();

    if (pkgError) throw pkgError;

    // 2. Generate a unique bid token for this package
    const token = generateToken(pkg.id, pkg.name);

    const { error: tokenError } = await supabase
      .from('bid_tokens')
      .insert({ token, package_id: pkg.id });

    if (tokenError) throw tokenError;

    return NextResponse.json({ package: pkg, token }, { status: 201 });
  } catch (err: any) {
    console.error('POST /api/packages error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('packages')
      .select('*, bids(count)')
      .order('order', { ascending: true });

    if (error) throw error;
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}