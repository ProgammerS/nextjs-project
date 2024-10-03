import { NextResponse } from 'next/server';
import { tasks } from '@/models/task'

export async function GET() {
  return NextResponse.json(tasks); // Return all tasks as JSON
}
