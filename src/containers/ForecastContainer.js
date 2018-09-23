import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Weather from '../components/Weather';
import Forecast from '../components/Forecast';

import { getForecastByLocation } from '../actions/forecastListAction';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import ErrorOutlineTwoTone from '@material-ui/icons/ErrorOutlineTwoTone';
import Typography from '@material-ui/core/Typography';
import { Error } from '@material-ui/icons';

const styles = {
	container: {
		padding: 10,
		height: '100vh',
		backgroundColor: '#fafafa'
	},
	errorContainer: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	errorIcon: {
		margin: 10,
		fontSize: 60
	}
}

class ForecastContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notFound: false,
		}
	}

	render() {
		const { classes, weather, forecast, loading, units, error } = this.props

		if (error) {
			return (
				<div className={classes.errorContainer}>
					<Error className={classes.errorIcon} />
					<Typography varint="caption" color="inherit">
						Something went wrong, try again later.
					</Typography>
				</div>
			)
		}

		if (loading) {
			return (<LinearProgress color="secondary" />);
		}

		if (!weather && !forecast) {
			return (
				<div className={classes.errorContainer}>
					<ErrorOutlineTwoTone className={classes.errorIcon} />
					<Typography varint="caption" color="inherit">
						Weather not found for the selected city.
					</Typography>
				</div>
			)
		}

		return (
			<div className={classes.container}>
				{weather && <Weather {...weather} units={units} />}
				{forecast.map((forecast, index) => <Forecast key={index} {...forecast} units={units.temperature} />)}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	getForecastByLocation: location => dispatch(getForecastByLocation(location)),
});

const mapStateToProps = state => ({
	loading: state.forecastList.loading,
	error: state.forecastList.error,
	forecast: state.forecastList.forecast,
	weather: state.forecastList.weather,
	units: state.forecastList.units
});

ForecastContainer.propTypes = {
	loading: PropTypes.bool.isRequired,
	error: PropTypes.object,
	forecast: PropTypes.arrayOf(PropTypes.object),
	weather: PropTypes.object,
	units: PropTypes.object,
	onRefreshClick: PropTypes.func
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ForecastContainer));
