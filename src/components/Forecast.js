import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Redirect } from 'react-router-dom';

const styles = {
    card: {
        maxWidth: '100%',
        marginBottom: '10px'
    },
    media: {
        height: 0,
    },
    actions: {
        display: 'flex',
    },
};

class Forecast extends Component {
    render() {
        const { classes, code, date, high, low, text, units } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography>{date}</Typography>
                    <Typography>{text}</Typography>
                    <Typography>{high} º{units}</Typography>
                    <Typography>{low} º{units}</Typography>
                </CardContent>
            </Card>
        );
    }
}

Forecast.propTypes = {
    classes: PropTypes.object.isRequired,
    code: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    day: PropTypes.string,
    high: PropTypes.string.isRequired,
    low: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired
};

export default withStyles(styles)(Forecast);
