import App from './App';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import Loader from './components/Blocks/Loader/Loader';
import { shallow } from 'enzyme';

describe("App Component", ()=>{

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders component correctly', () => {
    const renders = shallow(<App />);
  });

  it('renders Loader', () => {
    expect(wrapper.containsMatchingElement(<Loader />)).toEqual(true);
  });


  it('renders Header error', () => {
    wrapper.instance.setState = {
      error: true
    }
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  it('renders Header on load', () => {
    wrapper.instance.setState = {
      isLoaded: true
    }
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  it('renders Main Body', () => {
    expect(wrapper.containsMatchingElement(<Layout />)).toEqual(true);
  });

  it('renders Footer', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
