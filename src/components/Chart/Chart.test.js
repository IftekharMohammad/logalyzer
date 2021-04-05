import Charts from './Chart'
import {shallow} from 'enzyme';
import {Line} from 'react-chartjs-2';
import Tooltip from "../Blocks/Tooltip/Tooltip";

describe("Chart Component", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Charts chartData={{
                "datetimeFrom": "Jul 23 23:24:09",
                "datetimeUntil": "Jul 27 23:24:09",
                "histogram": [],
                "phrase": "connection"
            }}/>);
    });

    it('renders component correctly', () => {
        const renders = shallow(<Charts chartData={{
                "datetimeFrom": "Jul 23 23:24:09",
                "datetimeUntil": "Jul 27 23:24:09",
                "histogram": [],
                "phrase": "connection"
            }}/>);
    });

    it('render tooltip text correctly', () => {
        const renders = shallow(<Charts />);
        expect(renders.constants(<Tooltip/>)).toBe(true);
    });

    it('renders chart component correctly', () => {
        expect(wrapper.contains(<Line/>)).toBe(true);
    });
});