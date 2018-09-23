import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WeatherIcon from 'react-icons-weather';

const styles = {
    card: {
        maxWidth: '100%',
        marginBottom: 20
    },
    astronomyContainer: {
        display: 'flex'
    },
    sunset: {
        paddingLeft: 20
    },
    weather: {
        textAlign: 'center'
    },
    windContainer: {
        display: 'flex'
    },
    windText: {
        paddingLeft: 5
    },
    icon: {
        fontSize: '3em',
        margin: 10
    },
    atmosphereContainer: {
        display: 'flex'
    },
    humidityText: {
        paddingLeft: 12
    }
};

class Weather extends Component {
    render() {
        const { classes, location, atmosphere, wind, lastBuildDate, condition, astronomy, units } = this.props;
        const locationField = location.city.trim() === location.region.trim() ? `${location.city}, ${location.country}` : `${location.city}, ${location.region}, ${location.country}`;

        return (
            <Card className={classes.card}>
                <CardHeader
                    title={locationField}
                    subheader={lastBuildDate}>
                </CardHeader>
                <CardContent>
                    <div className={classes.astronomyContainer}>
                        <Typography color="textSecondary">
                            <i className="wi wi-sunrise"></i>  {astronomy.sunrise}
                        </Typography>
                        <Typography className={classes.sunset} color="textSecondary">
                            <i className="wi wi-sunset"></i>  {astronomy.sunset}
                        </Typography>
                    </div>
                    <div className={classes.windContainer}>
                        <Typography color="textSecondary">
                            <i className="wi wi-strong-wind"></i>
                        </Typography>
                        <Typography color="textSecondary" className={classes.windText}>
                            {wind.speed} {units.speed}
                        </Typography>
                    </div>
                    <div className={classes.atmosphereContainer}>
                        <Typography color="textSecondary">
                            <i className="wi wi-humidity"></i>
                        </Typography>
                        <Typography color="textSecondary" className={classes.humidityText}>
                            {atmosphere.humidity} %
                        </Typography>
                    </div>
                    <div className={classes.weather}>
                        <Typography variant="headline" color="textPrimary">
                            {condition.temp} º{units.temperature}
                        </Typography>
                        <WeatherIcon className={classes.icon} name="yahoo" iconId={condition.code} />
                        <Typography variant="subheading" color="textPrimary">
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
