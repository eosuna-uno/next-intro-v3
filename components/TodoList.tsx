'useClient'
import type { Todo } from "@prisma/client";
import TodoComponent from "./Todo";

export default function TodoList({todos}: {todos:Todo[]}) {
    return todos.map( (item, index) => {
        return <div>
            <TodoComponent todo={item} key={index} />
        </div>
    })
}