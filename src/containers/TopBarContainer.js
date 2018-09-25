import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getForecastByLocation } from '../actions/forecastListAction';
import TopBar from '../components/TopBar';
import { setUnitSelector } from '../actions/unitsSelectorAction';

class TopBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastSearchedCity: ''
        };

        this.handleOnSubmitClick = this.handleOnSubmitClick.bind(this);
        this.handleOnRefreshClick = this.handleOnRefreshClick.bind(this);
        this.handleOnUnitChange = this.handleOnUnitChange.bind(this);
    }

    handleOnSubmitClick(query) {
        const x = this.props.getForecastByLocation(query, this.props.isMetricUnit);
        this.setState({ lastSearchedCity: query });
        x.reject();
    }

    handleOnRefreshClick() {
        this.props.getForecastByLocation(this.state.lastSearchedCity, this.props.isMetricUnit);
    }

    handleOnUnitChange(isMetricUnit) {
        this.setState({ isMetricUnit });
        this.props.setUnitSelector(isMetricUnit);

        if (this.state.lastSearchedCity !== '') {
            this.props.getForecastByLocation(this.state.lastSearchedCity, isMetricUnit);
        }
    }

    render() {
        const { isMetricUnit } = this.props;

        return (<TopBar unit={isMetricUnit}
            onSubmit={this.handleOnSubmitClick}
            onRefresh={this.handleOnRefreshClick}
            onUnitsChange={this.handleOnUnitChange}
        />);
    }
}

const mapDispatchToProps = dispatch => ({
    getForecastByLocation: (location, unit) => dispatch(getForecastByLocation(location, unit)),
    setUnitSelector: isMetricUnit => dispatch(setUnitSelector(isMetricUnit))
});

const mapStateToProps = state => ({
    isMetricUnit: state.unitsSelector
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer);
