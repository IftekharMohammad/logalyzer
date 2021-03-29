import {shallow} from "enzyme";
import Header from "./Header";

describe("Header Component", ()=> {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header/>);
    });

    it('renders component correctly', () => {
        const renders = shallow(<Header/>);
    });

    it('renders logo correctly', () => {
        expect(wrapper.find('img')).toHaveLength(1);
    });

    it('renders slug correctly', () => {
        expect(wrapper.find('#slug').text()).toEqual('Log Analysis Made Easy');
    });
});