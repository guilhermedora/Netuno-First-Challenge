import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.main,
    },
    title: {
        flexGrow: 1,
    },
    button: {
        color: 'white',
        marginRight: theme.spacing(2),
    },
}));

function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Button className={classes.button} onClick={handleClick}>
                    Opções de Menu <ExpandMoreIcon />
                </Button>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Opção 1</MenuItem>
                    <MenuItem onClick={handleClose}>Opção 2</MenuItem>
                    <MenuItem onClick={handleClose}>Opção 3</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
