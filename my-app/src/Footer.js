import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: 'grey',
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <footer className={classes.footer}>
                <Container maxWidth="md">
                    <Grid container alignItems="center">
                        <Avatar alt="Remy Sharp" src={require("./1.jpg")} className={classes.bigAvatar} />
                        <Avatar alt="Remy Sharp" src={require("./2.jpg")} className={classes.bigAvatar} />
                        <Avatar alt="Remy Sharp" src={require("./3.jpg")} className={classes.bigAvatar} />
                        <Avatar alt="Remy Sharp" src={require("./4.jpg")} className={classes.bigAvatar} />
                        <Avatar alt="Remy Sharp" src={require("./5.jpg")} className={classes.bigAvatar} />
                    </Grid>
                    <Typography variant="body1">Joey is a god of the team</Typography>
                    <Typography variant="body2">Currently v0.0.1.</Typography>

                </Container>
            </footer>
        </div>
    );
}
