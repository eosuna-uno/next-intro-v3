import NewTodoForm from '@/components/NewTodoForm'
import TodoList from '@/components/TodoList'
import db from '@/utils/db/main'
const getData = async () => {
   return await db.todo.findMany()
}

export default async function Todos() {
    const data = await getData()
    return <div>
        <NewTodoForm />
        <TodoList todos={data} />
    </div>
}