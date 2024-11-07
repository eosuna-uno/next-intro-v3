import { newTodo } from "@/utils/actions"
export default function NewTodoForm() {
    return <form action={newTodo}>
        <label htmlFor="todo">Todo:</label>
        <input id="todo" name="content" type="text" className="border-2 border-solid border-indigo-800" />
        <button type="submit">New Todo</button>
    </form>
}