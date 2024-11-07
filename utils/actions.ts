'use server'
import db from '@/utils/db/main'
import { revalidatePath } from 'next/cache';
import { todo } from 'node:test';
export const newTodo = async (formData: FormData) => {
    const content = formData.get('content')
    if (content) {
        const todo = await db.todo.create({ data: {
            content: content.toString()
        }}); 
        //return todo.id;
    }
    revalidatePath('/todos')
}

export const completeTodo = async (id: string) => {
    await db.todo.update({data: {
        completed: true,
    },where: {
        id: id
    }})
    revalidatePath('/todos')
}