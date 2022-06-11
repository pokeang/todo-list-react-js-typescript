
import { TodoEntity } from './AddTodo'
import { ACTION, todoData } from '../../pages/Todo'

type TodoCardType = {
    todo: TodoEntity;
    dispatch: (obj: todoData) => void;
}

export default function TodoCard({ todo, dispatch }: TodoCardType) {
    return (
        <>
            <tr style={{ color: todo.completed ? '#ccc' : '#000' }}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{(todo.completed) ? 'Complted' : 'Imcompleted'}</td>
                <td>
                    <i
                        className="check circle alternate outline icon"
                        style={{ color: "green", marginTop: "7px" }}
                        onClick={() => dispatch({ type: ACTION.TOGGLE, payload: { id: todo.id, name: todo.name, completed: !todo.completed} })}
                    ></i>
                    <span>&nbsp;|&nbsp;</span>
                    <i
                        className="trash alternate outline icon"
                        style={{ color: "red", marginTop: "7px" }}
                        onClick={() => dispatch({ type: ACTION.DELETE, payload: todo })}
                    ></i>
                </td>
            </tr>
        </>
    )
}