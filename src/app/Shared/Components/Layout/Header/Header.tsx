// Imports
import { IHeaderProps, IHeaderState } from 'Interfaces';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './Header.scss';

// Components
import Routes from '../../../../Routes';

export class Header extends React.Component<IHeaderProps, IHeaderState> {

    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return (
            <nav id="header">
                <ul>
                    {Routes.map((link, index) =>
                        <li key={index}>
                            <NavLink exact={link.exact} to={link.path} activeClassName="active">{link.name}</NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}