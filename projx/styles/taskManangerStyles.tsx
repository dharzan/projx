import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: any) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    card: {
        marginBottom: theme.spacing(2),
    },
    cardHeader: {
        display: "flex",
        alignItems: "center",
    },
    cardIcon: {
        marginRight: theme.spacing(1),
    },
    resourcesHeader: {
        backgroundColor: theme.palette.info.light,
    },
    todoHeader: {
        backgroundColor: theme.palette.warning.light,
    },
    doingHeader: {
        backgroundColor: theme.palette.primary.light,
    },
    doneHeader: {
        backgroundColor: theme.palette.success.light,
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
    addCard: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: theme.palette.grey[100],
    },
}));

export type Task = {
    id: number;
    content: string;
};
export type Column = "resources" | "todo" | "doing" | "done";
export type Action =
    | { type: "ADD_TASK"; payload: { column: Column; content: string } }
    | { type: "DELETE_TASK"; payload: { column: Column; id: number } };
export const taskReducer = (state: Record<Column, Task[]>, action: Action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                [action.payload.column]: [
                    ...state[action.payload.column],
                    { id: Date.now(), content: action.payload.content },
                ],
            };
        case "DELETE_TASK":
            return {
                ...state,
                [action.payload.column]: state[action.payload.column].filter(
                    (task: Task) => task.id !== action.payload.id
                ),
            };
        default:
            return state;
    }  
};
