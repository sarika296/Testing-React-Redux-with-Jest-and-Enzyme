import React from 'react'
import renderer from 'react-test-renderer'
import Reducer from '../../App'

describe('Reducer Snapshot Testing...', () => {
    it('renders component correctly', () => {
        const tree = renderer.create(<Reducer />).toJSON();
        expect(tree).toMatchSnapshot();
    });
}); 
