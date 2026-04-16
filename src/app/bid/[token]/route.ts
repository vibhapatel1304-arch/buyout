// src/app/bid/token/route.ts
// GET  — returns package info for the vendor form
// POST — vendor submits their bid

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// GET /api/bid/[token]
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  const { data: tokenRow, error } = await supabase
    .from('bid_tokens')
    .select('*, packages(id, name, trade, project, csi, due_date, notes, budget)')
    .eq('token', token)
    .eq('active', true)
    .single();

  if (error || !tokenRow) {
    return NextResponse.json({ error: 'Invalid or expired bid link.' }, { status: 404 });
  }

  if (new Date(tokenRow.expires_at) < new Date()) {
    return NextResponse.json({ error: 'This bid link has expired.' }, { status: 410 });
  }

  return NextResponse.json({ package: tokenRow.packages, token });
}

// POST /api/bid/[token]
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  try {
    const body = await req.json();

    const { data: tokenRow, error: tokenError } = await supabase
      .from('bid_tokens')
      .select('package_id, expires_at, active')
      .eq('token', token)
      .single();

    if (tokenError || !tokenRow || !tokenRow.active) {
      return NextResponse.json({ error: 'Invalid bid link.' }, { status: 404 });
    }

    if (new Date(tokenRow.expires_at) < new Date()) {
      return NextResponse.json({ error: 'This bid link has expired.' }, { status: 410 });
    }

    if (!body.vendorName || !body.contactEmail || !body.bidAmount) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const { data: bid, error: bidError } = await supabase
      .from('bids')
      .insert({
        package_id:     tokenRow.package_id,
        vendor:         body.vendorName,
        contact_name:   body.contactName || '',
        contact_email:  body.contactEmail,
        contact_phone:  body.contactPhone || '',
        amount:         Number(body.bidAmount) || 0,
        scope_complete: body.scopeComplete || 'Complete',
        inclusions:     body.inclusions || '',
        exclusions:     body.exclusions || 'None',
        alternates:     body.alternates || 'None',
        qualifications: body.qualifications || '',
        notes:          body.notes || '',
        status:         'pending',
        leveled:        false,
        rank:           99,
      })
      .select()
      .single();

    if (bidError) throw bidError;

    return NextResponse.json({ success: true, bidId: bid.id }, { status: 201 });
  } catch (err: any) {
    console.error('POST /api/bid/[token] error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}