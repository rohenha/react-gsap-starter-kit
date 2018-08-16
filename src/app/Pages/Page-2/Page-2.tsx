// Imports
import { IPageProps, IPageState } from 'Interfaces';
import * as React from 'react';

// Styles
import './Page-2.scss';

// Components

export class Page2 extends React.Component<IPageProps, IPageState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div className="container" data-page="Page2">
                <div id="page2" className="box">
                    <h1>Page 2</h1>
                </div>
            </div>
        );
    }
}