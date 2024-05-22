import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useReducer, useState } from "react";
import NavigationMenu from "./components/NavigationMenu";
const useStyles = makeStyles((theme: any) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    card: {
        marginBottom: theme.spacing(2),
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
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
type Task = {
    id: number;
    content: string;
};
type Action =
    | { type: "ADD_TASK"; payload: { column: string; content: string } }
    | { type: "DELETE_TASK"; payload: { column: string; id: number } };
const taskReducer = (state: any, action: Action) => {
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
const TaskManager: React.FC = () => {
    const classes = useStyles();
    const [state, dispatch] = useReducer(taskReducer, {
        resources: [],
        todo: [],
        doing: [],
        done: [],
    });
    const [taskContent, setTaskContent] = useState({
        resources: "",
        todo: "",
        doing: "",
        done: "",
    });
    const handleInputChange = (column: string, value: string) => {
        setTaskContent((prev) => ({
            ...prev,
            [column]: value,
        }));
    };
    const handleAddTask = (column: string) => {
        if (taskContent[column].trim() !== "") {
            dispatch({
                type: "ADD_TASK",
                payload: { column, content: taskContent[column] },
            });
            setTaskContent((prev) => ({
                ...prev,
                [column]: "",
            }));
        }
    };
    const handleDeleteTask = (column: string, id: number) => {
        dispatch({ type: "DELETE_TASK", payload: { column, id } });
    };
    const renderTaskList = (tasks: Task[], column: string) => (
        <List>
            {tasks.map((task) => (
                <ListItem key={task.id}>
                    <ListItemText primary={task.content} />
                    <ListItemSecondaryAction>
                        <IconButton
                            edge="end"
                            onClick={() => handleDeleteTask(column, task.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
    return (
        <>
            <NavigationMenu></NavigationMenu>
            <Container maxWidth="lg" className={classes.root}>
                <Grid container spacing={3}>
                    {/* Column: Resources */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                className={classes.cardHeader}
                                title="Resources"
                                action={
                                    <IconButton onClick={() => handleAddTask("resources")}>
                                        <AddIcon />
                                    </IconButton>
                                }
                            />
                            <CardContent>
                                <TextField
                                    label="New Task"
                                    value={taskContent.resources}
                                    onChange={(e) =>
                                        handleInputChange("resources", e.target.value)
                                    }
                                    fullWidth
                                    variant="outlined"
                                    margin="dense"
                                />
                                <Button
                                    onClick={() => handleAddTask("resources")}
                                    color="primary"
                                >
                                    Add Task
                                </Button>
                                {renderTaskList(state.resources, "resources")}
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Column: To Do */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                className={classes.cardHeader}
                                title="To Do"
                                action={
                                    <IconButton onClick={() => handleAddTask("todo")}>
                                        <AddIcon />
                                    </IconButton>
                                }
                            />
                            <CardContent>
                                <TextField
                                    label="New Task"
                                    value={taskContent.todo}
                                    onChange={(e) => handleInputChange("todo", e.target.value)}
                                    fullWidth
                                    variant="outlined"
                                    margin="dense"
                                />
                                <Button onClick={() => handleAddTask("todo")} color="primary">
                                    Add Task
                                </Button>
                                {renderTaskList(state.todo, "todo")}
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Column: Doing */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                className={classes.cardHeader}
                                title="Doing"
                                action={
                                    <IconButton onClick={() => handleAddTask("doing")}>
                                        <AddIcon />
                                    </IconButton>
                                }
                            />
                            <CardContent>
                                <TextField
                                    label="New Task"
                                    value={taskContent.doing}
                                    onChange={(e) => handleInputChange("doing", e.target.value)}
                                    fullWidth
                                    variant="outlined"
                                    margin="dense"
                                />
                                <Button onClick={() => handleAddTask("doing")} color="primary">
                                    Add Task
                                </Button>
                                {renderTaskList(state.doing, "doing")}
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Column: Done */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                className={classes.cardHeader}
                                title="Done"
                                action={
                                    <IconButton onClick={() => handleAddTask("done")}>
                                        <AddIcon />
                                    </IconButton>
                                }
                            />
                            <CardContent>
                                <TextField
                                    label="New Task"
                                    value={taskContent.done}
                                    onChange={(e) => handleInputChange("done", e.target.value)}
                                    fullWidth
                                    variant="outlined"
                                    margin="dense"
                                />
                                <Button onClick={() => handleAddTask("done")} color="primary">
                                    Add Task
                                </Button>
                                {renderTaskList(state.done, "done")}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
export default TaskManager;
