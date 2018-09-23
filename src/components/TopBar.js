import React from 'react';
import PropTypes from 'prop-types';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    }
});

class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            queryString: ''
        };

        this.handleOnUnitsChange = this.handleOnUnitsChange.bind(this);
    }

    handleOnSearchInputChange = event => {
        this.setState({ queryString: event.target.value });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.queryString.trim());
    }

    handleOnRefreshClick = event => {
        this.props.onRefresh();
    }

    handleOnUnitsChange = () =>  {
        const newState = !this.props.unit;
        this.props.onUnitsChange(newState);
    }

    render() {
        const { classes, unit } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography className={classes.title} variant="title" color="inherit">
                            Weather Forecast
                        </Typography>
                        <form className={classes.search} onSubmit={this.handleOnSubmit}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <Input
                                placeholder="Show me the weather in..."
                                disableUnderline
                                onChange={this.handleOnSearchInputChange}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </form>
                        <Tooltip title="Refresh">
                            <IconButton onClick={this.handleOnRefreshClick} color="inherit">
                                <RefreshIcon />
                            </IconButton>
                        </Tooltip>
                        <Typography color="inherit">
                            ºF
                        </Typography>
                        <Tooltip title="Toggle Units">
                            <Switch checked={unit} onChange={this.handleOnUnitsChange}/>
                        </Tooltip>
                        <Typography color="inherit">
                            ºC
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onRefresh: PropTypes.func.isRequired,
    onUnitsChange: PropTypes.func.isRequired,
    unit: PropTypes.bool.isRequired
};

export default withStyles(styles)(TopBar);
