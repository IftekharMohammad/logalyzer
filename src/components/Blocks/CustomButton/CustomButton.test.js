import CustomButton from './CustomButton'
import {shallow} from 'enzyme';

describe("Custom Button Component", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CustomButton/>);
    });

    it('renders component correctly', () => {
        const renders = shallow(<CustomButton/>);
    });

    it('render button text correctly', () => {
        const renders = shallow(<CustomButton text={'ABC'}/>);
        expect(renders.find('button').text()).toBe('ABC');
    });

    it('render click event console without props correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');

        wrapper.find('button').simulate('click');
        expect(consoleSpy).toHaveBeenCalledWith('Implement Click');
    });
});
