import unitsSelector from '../../src/reducers/unitsSelector';

describe('unitsSelector', () => {
    test('should return the initial state', () => {
        expect(unitsSelector(undefined, {})).toEqual(true);
    });

    test('should return the correct state', () => {
        expect(unitsSelector(undefined, {
            type: 'SET_FORECAST_UNITS',
            isMetricUnit: false
        })).toEqual(false);
    });
});
