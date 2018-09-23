import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Weather from '../components/Weather';
import Forecast from '../components/Forecast';

import { getForecastByLocation } from '../actions/forecastListAction';
import LinearProgress from '@material-ui/core/LinearProgress';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	container: {
		padding: '10px'
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
		//TODO: not found error
		//No weather forecast found for the given location, try another one.

		if (error) {
			return (
				<div>
					<Snackbar
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'center',
						}}
						open={!!this.props.error}
						autoHideDuration={2000}
						message={
							<span>
								{this.props.error.message}
							</span>
						}
					/>
				</div>
			)
		}

		if (loading) {
			return (<LinearProgress color="secondary" />);
		}

		if(!weather || !forecast){
			return (<span>NOT FOUND</span>)
		}

		return (
			<div className={classes.container}>
				<Weather {...weather} units={units} />
				{forecast.map((forecast, index) => <Forecast key={index} {...forecast} units={units.temperature} />)}
			</div>
		);
	}

	componentWillMount = () => {
		if (this.props.match.params.location) {
			this.props.getForecastByLocation(this.props.match.params.location);
		}
	};
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
