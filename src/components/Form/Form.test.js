import Form from './Form'
import {shallow} from 'enzyme';

import Tooltip from "../Blocks/Tooltip/Tooltip";

describe("Form Component", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Form/>);
    });

    it('renders component correctly', () => {
        const renders = shallow(<Form />);
    });

    it('render tooltip text correctly', () => {
        expect(wrapper.containsMatchingElement(<Tooltip/>)).toEqual(true);
    });

});