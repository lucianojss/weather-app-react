import { combineReducers } from 'redux';
import forecastList from './forecastList';
import unitsSelector from './unitsSelector';

export default combineReducers({
    forecastList,
    unitsSelector
});
