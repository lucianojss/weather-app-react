import {
    setUnitSelector
} from './unitsSelectorAction';

describe('unitsSelectorAction', () => {
    describe('when isMetricUnit is true', ()=>{
        test('should return the correct action', () => {
            expect(setUnitSelector(true)).toEqual({
                type: 'SET_FORECAST_UNITS',
                isMetricUnit: true
            });
        });
    });

    describe('when isMetricUnit is false', ()=>{
        test('should return the correct action', () => {
            expect(setUnitSelector(false)).toEqual({
                type: 'SET_FORECAST_UNITS',
                isMetricUnit: false
            });
        });
    });
});
