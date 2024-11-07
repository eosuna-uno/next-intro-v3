import { NextResponse } from "next/server";

import db from '@/utils/db/main'
export async function GET(request: Request) {
    const todos = await db.todo.findMany()
    return NextResponse.json(todos)
}