import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Tabs, Tab, Button, Menu, MenuItem } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { makeStyles } from '@material-ui/styles'

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "8em"
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: "50px",
        marginRight: "25px",

        height: "45px",

    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: 0
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    }
}))

export default function Header(props) {

    const classes = useStyles();
    const [value, setvalue] = useState(0);
    const [anchorEl, setanchorEl] = useState(null);
    const [open, setopen] = useState(false);
    const [selectedIndex, setselectedIndex] = useState(0);

    const handleChange = (e, value) => {
        setvalue(value)
    }

    const handleClick = (e) => {
        setanchorEl(e.currentTarget);
        setopen(true);
    }

    const handleMenuItemClick = (e, i) => {
        setanchorEl(null);
        setopen(false);
        setselectedIndex(i)
    }

    const handleClose = (e) => {
        setanchorEl(null);
        setopen(false);
    }
    const menuOptions = [
        { name: "Services", link: "/services" },
        { name: "Custom Software Development", link: "/customsoftware" },
        { name: "Mobile App Development", link: "/mobileapps" },
        { name: "Website Development", link: "/websites" },
    ];

    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                if (value !== 0) {
                    setvalue(0)
                }
                break;
            case "/services":
                if (value !== 1) {
                    setvalue(1)
                    setselectedIndex(0)
                }
                break;
            case "/customsoftware":
                if (value !== 1) {
                    setvalue(1)
                    setselectedIndex(1);
                }
                break;
            case "/websites":
                if (value !== 1) {
                    setvalue(1)
                    setselectedIndex(2);
                }
                break;
            case "/mobileapps":
                if (value !== 1) {
                    setvalue(1)
                    setselectedIndex(3);
                }
                break;
            case "/revolution":
                if (value !== 2) {
                    setvalue(2)
                }
                break;
            case "/about":
                if (value !== 3) {
                    setvalue(3)
                }
                break;
            case "/contact":
                if (value !== 4) {
                    setvalue(4)
                }
                break;
            case "/estimate":
                if (value !== 5) {
                    setvalue(5)
                }
                break;
            default:
                break;
        }

    }, [value])
    return (

        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters>
                        <Button disableRipple component={Link} to="/" className={classes.logoContainer} onClick={() => setvalue(0)}>
                            <img alt="logo" className={classes.logo} src={logo} />
                        </Button>
                        <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabContainer}>
                            <Tab className={classes.tab} component={Link} to="/" label="Home" />
                            <Tab
                                aria-owns={anchorEl ? "simple-menu" : undefined}
                                aria-haspopup={anchorEl ? "true" : undefined}
                                onMouseOver={event => handleClick(event)}
                                className={classes.tab} component={Link} to="/services" label="Services" />
                            <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
                            <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
                            <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
                        </Tabs>
                        <Button variant="contained" color="secondary" className={classes.button} >Free Estimate</Button>
                        <Menu id="simple-menu" anchorEl={anchorEl} open={open}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            classes={{ paper: classes.menu }}
                            elevation={0}>


                            {menuOptions.map((option, i) => (
                                <MenuItem
                                    key={option}
                                    onClick={(event) => { handleMenuItemClick(event, i); setvalue(1); handleClose() }}
                                    component={Link} to={option.link}
                                    classes={{ root: classes.menuItem }}
                                    selected={i === selectedIndex && value === 1}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </React.Fragment >


    );

}

{/* <MenuItem
                                onClick={() => { handleClose(); setvalue(1) }}
                                component={Link} to="/services"
                                classes={{ root: classes.menuItem }}
                            >Services</MenuItem>
                            <MenuItem
                                onClick={() => { handleClose(); setvalue(1) }}
                                component={Link} to="/customsoftware"
                                classes={{ root: classes.menuItem }}
                            >Custom Software Development</MenuItem>
                            <MenuItem
                                onClick={() => { handleClose(); setvalue(1) }}
                                component={Link} to="/mobileapps"
                                classes={{ root: classes.menuItem }}
                            >Mobile App Development</MenuItem>
                            <MenuItem
                                onClick={() => { handleClose(); setvalue(1) }}
                                component={Link} to="/websites"
                                classes={{ root: classes.menuItem }}>Website Development</MenuItem> */}