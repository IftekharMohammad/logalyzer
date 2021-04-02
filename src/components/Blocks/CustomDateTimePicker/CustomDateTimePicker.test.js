import { shallow } from 'enzyme';
import CustomDateTimePicker from "./CustomDateTimePicker";
import DatePicker from 'react-datepicker'

describe("Custom Date Picket Component", ()=>{

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CustomDateTimePicker />);
  });

  it('renders component correctly', () => {
    const renders = shallow(<CustomDateTimePicker />);
  });

  it('renders Date component correctly', () => {
    expect(wrapper.containsMatchingElement(<DatePicker/>)).toEqual(true);
  });
});