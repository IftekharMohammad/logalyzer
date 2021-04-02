import Tooltip from './Tooltip'
import {shallow} from 'enzyme';

describe("Tooltip Component", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Tooltip/>);
    });

    it('renders component correctly', () => {
        const renders = shallow(<Tooltip/>);
    });

    it('render tooltip text correctly', () => {
        const renders = shallow(<Tooltip tooltipText={'ABC'}/>);
        expect(renders.find('span').text()).toBe('ABC');
    });
});
