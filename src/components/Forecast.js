import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WeatherIcon from 'react-icons-weather';

const styles = {
    card: {
        maxWidth: '100%',
        marginBottom: '10px'
    },
    cardContent: {
        textAlign: 'center'
    },
    icon: {
		margin: 10,
		fontSize: '2em'
	}
};

class Forecast extends Component {
    render() {
        const { classes, code, date, high, low, text, units } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="subheading">{date}</Typography>
                    <Typography>Low {low} º{units} | Max {high} º{units}</Typography>
                    <WeatherIcon className={classes.icon} name="yahoo" iconId={code}/>
                    <Typography variant="subheading">{text}</Typography>
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
