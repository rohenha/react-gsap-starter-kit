// Imports
import { TweenMax } from 'gsap';
import { IBaseProps, IBaseState, IPath} from 'Interfaces';
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import {  Transition, TransitionGroup } from 'react-transition-group';

// Styles
import 'Styles/Index.scss';

// Components
import Animations from 'Animations';
import Routes from './Routes';


export default class Base extends React.Component<IBaseProps, IBaseState> {
    public enterTrans: (node: any) => void = this.enter.bind(this);
    public exitTrans: (node: any) => void = this.exit.bind(this);
    constructor(props: any) {
        super(props);
        this.state = {
            pageEnter: '',
            pageLeave: '',
        };
    }

    public enter(node: any): void {
        TweenMax.killTweensOf(node);
        const page = node.getAttribute('data-page');
        this.setState({
            pageEnter: page
        }, () => {
            Animations[this.state.pageEnter].enter(
                node,
                Animations[this.state.pageEnter].duration,
                this.state.pageLeave !== '' ? Animations[this.state.pageLeave].duration : 0
            );
        });
    }

    public exit(node: any): void{
        TweenMax.killTweensOf(node);
        const page = node.getAttribute('data-page');
        this.setState({
            pageLeave: page
        }, () => {
            Animations[this.state.pageLeave].exit(node, Animations[this.state.pageLeave].duration);
        });
    }

    public render(): React.ReactElement<any> {
        return (
            <TransitionGroup component="div" id="content">
                <Transition
                    key={this.props.location.pathname}
                    timeout={2000}
                    onEnter={this.enterTrans}
                    onExit={this.exitTrans}
                    appear={true}
                >
                    <Switch location={this.props.location}>
                        {Routes.map((route: IPath, index: number) =>
                            <Route key={index} path={route.path} exact={route.exact} component={route.component}/>
                        )}
                    </Switch>
                </Transition>
            </TransitionGroup>
        );
    }
}