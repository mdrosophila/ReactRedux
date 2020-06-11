import { FetchTodosAction, DeleteToDoAction } from "./index";

export enum ActionTypes {
    fetchTodos,
    deleteTodo
}

export type Action = FetchTodosAction | DeleteToDoAction;