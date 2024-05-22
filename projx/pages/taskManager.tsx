// pages/index.tsx
import {
    Card,
    CardContent,
    CardHeader,
    Container,
    Grid,
    IconButton,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
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
const TaskManager: React.FC = () => {
    const classes = useStyles();
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
                                    <IconButton>
                                        <AddIcon />
                                    </IconButton>
                                }
                            />
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    
                                </Typography>
                                <Typography variant="body2" component="p">
                                    
                                </Typography>
                                <Typography variant="body2" component="p">
                                    
                                </Typography>
                                <Typography variant="body2" component="p">
                                    
                                </Typography>
                                <div className={classes.addCard}>
                                    <Typography variant="body2" component="p">
                                        Add
                                    </Typography>
                                </div>
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
                                    <IconButton>
                                        <AddIcon />
                                    </IconButton>
                                }
                            />
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    
                                </Typography>
                                <Typography variant="body2" component="p">
                                    
                                </Typography>
                                <Typography variant="body2" component="p">
                                    
                                </Typography>
                                <Typography variant="body2" component="p">
                                    
                                </Typography>
                                <div className={classes.addCard}>
                                    <Typography variant="body2" component="p">
                                        Add
                                    </Typography>
                                </div>
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
                                    <IconButton>
                                        <AddIcon />
                                    </IconButton>
                                }
                            />
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    
                                </Typography>
                                <Typography variant="body2" component="p">
                                    
                                </Typography>
                                <Typography variant="body2" component="p">
                                   
                                </Typography>
                                <Typography variant="body2" component="p">
                                    
                                </Typography>
                                <div className={classes.addCard}>
                                    <Typography variant="body2" component="p">
                                        Add
                                    </Typography>
                                </div>
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
                                    <IconButton>
                                        <AddIcon />
                                    </IconButton>
                                }
                            />
                            <CardContent>
                                <Typography variant="body2" component="p">
                                   
                                </Typography>
                                <Typography variant="body2" component="p">
                                   
                                </Typography>
                                <Typography variant="body2" component="p">
                                    
                                </Typography>
                                <Typography variant="body2" component="p">
                                   
                                </Typography>
                                <Typography variant="body2" component="p">
                                    
                                </Typography>
                                <div className={classes.addCard}>
                                    <Typography variant="body2" component="p">
                                        Add
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
export default TaskManager;
