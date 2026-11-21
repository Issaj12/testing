import { handleUpload } from 'next-inline-editor/api/upload';
import { type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  return handleUpload(request);
}
