import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  const slugPath = (params.slug || []).join('/');

  let filePath = path.join(process.cwd(), 'public', slugPath, 'index.html');
  if (!fs.existsSync(filePath)) {
    filePath = path.join(process.cwd(), 'public', `${slugPath}.html`);
  }
  if (!fs.existsSync(filePath)) {
    filePath = path.join(process.cwd(), 'public', 'index.html');
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
