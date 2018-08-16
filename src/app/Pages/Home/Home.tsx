// Imports
import { IHomeProps, IHomeState } from 'Interfaces';
import * as React from 'react';

// Styles
import './Home.scss';

// Components
import { Input, List } from 'Components';

export class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            addTodoFunction: this.addTodo.bind(this),
            form : {
                todo: ''
            },
            list: [],
            removeTodoFunction: this.handleRemove.bind(this),
        }
    }

    public getInputVal = (value: string) : void => {
        this.setState({ form: { todo: value} });
    }

    public addTodo = (e: Event) : void => {
        e.preventDefault();
        const newList = [...this.state.list, { value: this.state.form.todo, id: this.state.list.length}];
        this.setState({ list: newList, form: { todo: '' } });
    }

    public handleRemove(index: number) : void {
        const remainder = this.state.list.filter((todo :any) => {
            return todo.id !== index ? todo : null;
        });
        this.setState({ list: remainder });
    };

    public render(): React.ReactElement<any> {
        return (
            <div className="container" data-page="Todo">
                <div id="home" className="box">
                    <h1>Todo List</h1>
                    <form onSubmit={this.state.addTodoFunction}>
                        <Input exportValue={this.getInputVal} name="TodoVal" type="text" placeholder="Todo à ajouter" label="Input" />
                        <button
                        className={this.state.form.todo === '' ? 'disabled' : ''}
                        disabled={this.state.form.todo === ''}>
                        Ajouter</button>
                    </form>
                    <List list={this.state.list} remove={this.state.removeTodoFunction} />
                </div>
            </div>
        );
    }
}