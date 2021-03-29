import {shallow} from "enzyme";
import Layout from "./Layout";
import Form from ".././Form/Form";

describe("Layout Component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Layout/>);
    });

    it('renders component correctly', () => {
        const renders = shallow(<Layout/>);
    });

    it('renders Form correctly', () => {
        expect(wrapper.contains(<Form/>)).toBe(true);
    });
});