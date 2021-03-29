import {shallow} from "enzyme";
import Header from "./Header";

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