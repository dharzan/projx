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
    TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BookIcon from "@material-ui/icons/Book";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import SyncIcon from "@material-ui/icons/Sync";
import React, { useReducer, useState } from "react";
import type { Column, Task } from "../styles/taskManangerStyles";
import { taskReducer, useStyles } from "../styles/taskManangerStyles";
import NavigationMenu from "./components/NavigationMenu";


const TaskManager: React.FC = () => {
    const classes = useStyles();
    const [state, dispatch] = useReducer(taskReducer, {
        resources: [],
        todo: [],
        doing: [],
        done: [],
    });
    const [taskContent, setTaskContent] = useState<Record<Column, string>>({
        resources: "",
        todo: "",
        doing: "",
        done: "",
    });
    const handleInputChange = (column: Column, value: string) => {
        setTaskContent((prev) => ({
            ...prev,
            [column]: value,
        }));
    };
    const handleAddTask = (column: Column) => {
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
    const handleDeleteTask = (column: Column, id: number) => {
        dispatch({ type: "DELETE_TASK", payload: { column, id } });
    };
    const renderTaskList = (tasks: Task[], column: Column) => (
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
            <NavigationMenu />
            <Container maxWidth="lg" className={classes.root}>
                <Grid container spacing={3}>
                    {/* Column: Resources */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                className={`${classes.cardHeader} ${classes.resourcesHeader}`}
                                avatar={<BookIcon className={classes.cardIcon} />}
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
                                className={`${classes.cardHeader} ${classes.todoHeader}`}
                                avatar={<AssignmentIcon className={classes.cardIcon} />}
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
                                className={`${classes.cardHeader} ${classes.doingHeader}`}
                                avatar={<SyncIcon className={classes.cardIcon} />}
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
                                className={`${classes.cardHeader} ${classes.doneHeader}`}
                                avatar={<CheckCircleIcon className={classes.cardIcon} />}
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
