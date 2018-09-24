import React, { Component } from 'react';
import { connect } from 'react-redux';

import Weather from '../components/Weather';
import Forecast from '../components/Forecast';

import { getForecastByLocation } from '../actions/forecastListAction';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import ErrorOutlineTwoTone from '@material-ui/icons/ErrorOutlineTwoTone';
import Typography from '@material-ui/core/Typography';
import Error from '@material-ui/icons/Error';
import Grid from '@material-ui/core/Grid';

const styles = {
	container: {
		padding: 10,
		height: '100%',
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
	},
	gridItem: {
		width: '100%'
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
				<Grid
				 	spacing={16}
					container
					direction="row"
					justify="left"
					alignItems="center">
					{forecast.map((forecast, index) => <Grid className={classes.gridItem} item xl={2} lg={6} md={6} sm={6}> <Forecast key={index} {...forecast} units={units.temperature}/> </Grid>)}
				</Grid>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ForecastContainer));
