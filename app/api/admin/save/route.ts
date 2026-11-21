import { handleSave } from 'next-inline-editor/api/save';
import { type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  return handleSave(request);
}
