import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForecastByLocation } from '../actions/forecastListAction';
import TopBar from '../components/TopBar';
import { setUnitSelector } from '../actions/unitsSelectorAction';

class TopBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastSearchedCity: '',
            isMetricUnit: false
        };

        this.handleOnSubmitClick = this.handleOnSubmitClick.bind(this);
        this.handleOnRefreshClick = this.handleOnRefreshClick.bind(this);
        this.handleOnUnitChange = this.handleOnUnitChange.bind(this);
    }

    handleOnSubmitClick(query) {
        this.props.getForecastByLocation(query);
        this.setState({ lastSearchedCity: query });
    }

    handleOnRefreshClick() {
        this.props.getForecastByLocation(this.state.lastSearchedCity);
    }

    handleOnUnitChange(isMetricUnit) {
        this.setState({ isMetricUnit });
        this.props.setUnitSelector(isMetricUnit);
    }

    render() {
        return (<TopBar
            onSubmit={this.handleOnSubmitClick}
            onRefresh={this.handleOnRefreshClick}
            onUnitsChange={this.handleOnUnitChange}
        />);
    }
}

const mapDispatchToProps = dispatch => ({
    getForecastByLocation: location => dispatch(getForecastByLocation(location)),
    setUnitSelector: isMetricUnit => dispatch(setUnitSelector(isMetricUnit))
});

const mapStateToProps = state => ({
    loading: state.forecastList.loading,
    error: state.forecastList.error,
    isMetricUnit: state.unitsSelector
});

TopBarContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    forecast: PropTypes.arrayOf(PropTypes.object),
    weather: PropTypes.object,
    units: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer);
