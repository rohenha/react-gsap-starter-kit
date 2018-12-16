// Imports
import { IListProps, IListState } from 'Interfaces';
import * as React from 'react';

// Styles
import './List.scss';

// Components
import { SingleList } from 'Components'; 

export class List extends React.Component<IListProps, IListState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="container">
            <h4>Mes tâches</h4>
            <ul className="todoList">
                {this.props.list.map((element, index) =>
                    <SingleList key={index} element={element} remove={this.props.remove} />
                )}
            </ul>
            </div>
        );
    }
}