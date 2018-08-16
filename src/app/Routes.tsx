import { IPath } from 'Interfaces';
import { Page, Page2 } from 'Pages';

const Routes: IPath[] = [
    {
        component: Page,
        exact: true,
        name: 'Page1',
        path: "/",
    },
    {
        component: Page2,
        exact: true,
        name: 'Page2',
        path: "/page-2",
    }
];

export default Routes;