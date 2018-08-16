// Imports
import { IFooterProps, IFooterState } from 'Interfaces';
import * as React from 'react';

// Styles
import './Footer.scss';

// Components

export class Footer extends React.Component<IFooterProps, IFooterState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <div id="footer">
                <p>Footer</p>
            </div>
        );
    }
}