'use client'
import { completeTodo } from "@/utils/actions";
import { Todo } from "@prisma/client";
import { useTransition } from "react";

export default function TodoComponent({todo}: {todo: Todo}) {
    const [isPending, startTransition] = useTransition()
    
    return <div onClick={() => startTransition(() => {completeTodo(todo.id)})}>
        {todo.content}
    </div>
}