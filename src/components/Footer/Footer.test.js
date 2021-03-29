import {shallow} from "enzyme";
import Footer from "./Footer";

describe("Footer Component", ()=> {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Footer/>);
    });

    it('renders component correctly', () => {
        const renders = shallow(<Footer/>);
    });

    it('renders logo correctly', () => {
        expect(wrapper.find('img')).toHaveLength(1);
    });

    it('renders slug correctly', () => {
        expect(wrapper.find('#slug').text()).toEqual('Log Analysis Made Easy');
    });

    it('renders copyright correctly', () => {
        const year = new Date().getFullYear();
        expect(wrapper.find('#copy').text()).toEqual('All Right Reserved © ' + year);
    });
});