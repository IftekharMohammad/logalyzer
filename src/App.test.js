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

    console.log(wrapper.html())
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  it('renders Header on load', () => {
    wrapper.instance.setState = {
      isLoaded: true
    }
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  it('renders Header on successful load', () => {
    wrapper.instance.setState = {
      isLoaded: true,
      error: false,
    }
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  it('renders Footer error', () => {
    wrapper.instance.setState = {
      error: true
    }
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });

  it('renders Footer on load', () => {
    wrapper.instance.setState = {
      isLoaded: true
    }
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });

  it('renders Footer on successful load', () => {
    wrapper.instance.setState = {
      isLoaded: true,
      error: false,
    }
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });

  it('renders Main Body on successful load', () => {
    wrapper.instance.setState = {
      isLoaded: true,
      error: false,
    }
    expect(wrapper.containsMatchingElement(<Layout />)).toEqual(true);
  });

});
