'use client'
import { completeTodo } from "@/utils/actions";
import { Todo } from "@prisma/client";
import { useTransition } from "react";

export default function TodoComponent({todo}: {todo: Todo}) {
    const [isPending, startTransition] = useTransition()
    
    return <div 
        className={`border border-black/20  ${todo.completed?'line-through text-gray-700 cursor-not-allowed':'cursor-pointer'}`}
        onClick={() => startTransition(() => {
        completeTodo(todo.id)
        })
    }>
        {todo.content}
    </div>
}