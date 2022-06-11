import { useReducer } from 'react'
import AddTODO, {TodoEntity} from '../components/todo/AddTodo'
import TodoCardList from '../components/todo/TodoCardList'
export enum ACTION {
    ADD = 'add',
    TOGGLE = 'toggle',
    DELETE = 'delete'
}

export type todoData = {
    type: ACTION,
    payload: TodoEntity
}
function reducer(todos: TodoEntity[], action: todoData) {
    switch (action.type) {
        case ACTION.ADD:
            return [...todos, {id: Date.now(), ...action.payload}]
        case ACTION.TOGGLE:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    todo = action.payload
                }
                return todo
            })
        case ACTION.DELETE:
            return todos.filter(todo => todo.id !== action.payload.id)
    }
}
export default function Todo() {
    const [todos, dispatch] = useReducer(reducer, [])

    function addTodoHandler(todo: TodoEntity) {
        dispatch({ type: ACTION.ADD, payload: todo })
    }
    return (
        <>
            <AddTODO addTodoHandler={addTodoHandler} />
            <TodoCardList todos={todos} dispatch={dispatch} />
        </>
    )
}
