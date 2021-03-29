import App from './App';
import Header from './components/Header/Header';
import { shallow } from 'enzyme';

describe("App Component", ()=>{

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders component correctly', () => {
    const renders = shallow(<App />);
  });

  it('renders Header', () => {
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('renders Footer', () => {
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  // it('render lookup button', () => {
  //   expect(wrapper.find('#lookup-button').text()).toBe("Lookup Log Analysis");
  // });
  //
  // it('render initial value of state', () => {
  //   expect(wrapper.find('#counter-value').text()).toBe('0');
  // });
  //
  // it('render click event to increament initial value of state', () => {
  //   wrapper.find('#lookup-button').simulate('click');
  //   expect(wrapper.find('#counter-value').text()).toBe('1');
  // });
});
