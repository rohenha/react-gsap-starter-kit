// tslint:disable-next-line:no-empty-interface
export interface IHomeProps {}

export interface IHomeState {
    // list: Array<{ value: string, id: number }>,
    list: any,
    removeTodoFunction: any,
    form: { todo: string},
    addTodoFunction : any,
}