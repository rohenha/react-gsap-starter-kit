import { Page } from "Pages";

export interface IPath {
    component: typeof Page,
    exact: boolean,
    name: string,
    path: string
}