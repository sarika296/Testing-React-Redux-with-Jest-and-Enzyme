import React from 'react'
import renderer from 'react-test-renderer'
import store from '../store'

describe('Store Snapshot Testing...', () => {

    it('renders store component correctly', () => {
        const tree = renderer.create(<store />).toJSON();
        expect(tree).toMatchSnapshot();
    });

}); 
