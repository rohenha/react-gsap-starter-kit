// Imports
import { ISingleListProps, ISingleListState } from 'Interfaces';
import * as React from 'react';

// Styles
import './SingleList.scss';

// Components


export class SingleList extends React.Component<ISingleListProps, ISingleListState> {

    constructor(props: any) {
        super(props);
        this.state  = {
            removeElement : this.props.remove.bind(this, this.props.element.id)
        };
    }

    public render(): React.ReactElement<any> {
        return (
            <li>
                <p>{this.props.element.value}</p>
                <button onClick={this.state.removeElement} >Remove</button>
            </li>
        );
    }
}