// Imports
import { IPageProps, IPageState } from 'Interfaces';
import * as React from 'react';

// Styles
import './Page.scss';

// Components


export class Page extends React.Component<IPageProps, IPageState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="container" data-page="Page1">
                <div id="page" className="box">
                    <h1>Page</h1>
                </div>
            </div>
        );
    }
}