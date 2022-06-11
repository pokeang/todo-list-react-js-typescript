import { TodoEntity } from './AddTodo';
import { todoData } from '../../pages/Todo'
import TodoCard from './TodoCard';

type todoCardListType = {
    todos: TodoEntity[];
    dispatch: (obj: todoData) => void;
}

export default function TodoCardList({ todos, dispatch }: todoCardListType) {
    // const renderTodoList = todos.map(todo => {
    //     return (<TodoCard todo={todo} dispatch={dispatch} key={todo.id} />);
    // });
    return (
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {(todos.length > 0) && todos.map(todo => {
                    return (<TodoCard todo={todo} dispatch={dispatch} key={todo.id} />);
                })}
                {todos.length === 0 &&
                    <tr>
                        <td colSpan={4}>No date</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}
