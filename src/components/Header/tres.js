import { AppBar, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.main,
    },
}));

function Header() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AppBar position="static" className={classes.appBar}>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Página Inicial" />
                <Tab label="Sobre" />
                <Tab label="Contato" />
            </Tabs>
        </AppBar>
    );
}

export default Header;
