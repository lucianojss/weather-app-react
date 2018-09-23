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
        marginBottom: '20px'
    },
    media: {
        height: 0,
    },
    actions: {
        display: 'flex',
    },
    astronomy: {
        display: 'flex'
    },
    weather: {
        textAlign: 'center'
    },
    other: {

    },
    wind: {
        display: 'flex',
        icon: {
            margin: '5px'
        },
        text: {

        }
    }
};

class Weather extends Component {
    render() {
        const { classes, weather, location, atmosphere, wind, lastBuildDate, condition, astronomy, units } = this.props;
        const locationField = location.city.trim() === location.region.trim() ? `${location.city}, ${location.country}` : `${location.city}, ${location.region}, ${location.country}`;

        return (
            <Card className={classes.card}>
                <CardHeader
                    title={locationField}
                    subheader={lastBuildDate}>
                </CardHeader>
                <CardContent>
                    <div className={classes.wind}>
                        <Typography className={classes.wind.icon} color="textPrimary">
                            {'Wind icon'}
                        </Typography>
                        <Typography className={classes.wind.text} color="textPrimary">
                            {wind.speed} {units.speed}
                        </Typography>
                    </div>
                    <div className={classes.astronomy}>
                        <Typography className={classes.sunrise} color="textSecondary">
                            {astronomy.sunrise}
                        </Typography>
                        <Typography className={classes.sunset} color="textSecondary">
                            {astronomy.sunset}
                        </Typography>
                    </div>
                    <div className={classes.weather}>
                        <Typography className={classes.title} color="textPrimary">
                            {condition.temp} º{units.temperature}
                        </Typography>
                        <Typography className={classes.title} color="textPrimary">
                            {condition.text}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        );
    }
}

Weather.propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    atmosphere: PropTypes.object.isRequired,
    astronomy: PropTypes.object.isRequired,
    wind: PropTypes.object.isRequired,
    lastBuildDate: PropTypes.string.isRequired,
    condition: PropTypes.object.isRequired,
    units: PropTypes.object.isRequired
};

export default withStyles(styles)(Weather);
