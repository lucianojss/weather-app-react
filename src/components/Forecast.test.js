import React from 'react';
import Forecast from './Forecast';
import renderer from 'react-test-renderer';

describe('#Forecast', () => {
    test('Should render Forecast Component correctly', () => {

        const forecast = {
            code: '19',
            date: 'random Date',
            high: '26',
            low: '-50',
            text: 'random text',
            units: 'C'
        };

        const component = renderer.create(
            <Forecast {...forecast}></Forecast>,
        );

        let tree = component.toJSON();

        expect(tree).toMatchSnapshot();

    });
});
