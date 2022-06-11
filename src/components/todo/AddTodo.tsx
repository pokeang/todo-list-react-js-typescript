import React from 'react'
import { InputField } from '../common/InputField';
export interface TodoEntity {
    id?: number;
    name: string;
    completed: boolean;
}

interface Props {
    addTodoHandler: (todo: TodoEntity) => void
}

interface State {
    todo: TodoEntity
}

class AddTodo extends React.Component<Props, State> {
    state = {
        todo: { id: 0, name: '', completed: false }
    }
    add = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (this.state.todo.name === "") {
            alert("name is require")
            return
        }
        this.props.addTodoHandler(this.state.todo)
        this.setState({todo: { id: 0, name: '', completed: false}})
    }
    handleChange = (str: string) => {
        this.setState({ todo: { name: str, completed: false }})
    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Todo</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <InputField
                            onChange={this.handleChange}
                            name="name"
                            placeholder="Enter your todo name"
                            value={this.state.todo.name}
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;
