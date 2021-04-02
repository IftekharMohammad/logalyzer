import Table from './Table'
import {shallow} from 'enzyme';

describe("Table Component", () => {

    let dt = {
                "data": [{
                    "datetime": "Jul 26 05:47:51",
                    "highlightText": [{
                        "fromPosition": 19,
                        "toPosition": 29
                    }],
                    "message": "combo ftpd[28707]: connection from 172.181.208.156 () at Tue  2005"
                }, {
                    "datetime": "Jul 26 05:47:51",
                    "highlightText": [{
                        "fromPosition": 19,
                        "toPosition": 29
                    }],
                    "message": "combo ftpd[28708]: connection from 172.181.208.156 () at Tue  2005"
                }, {
                    "datetime": "Jul 27 10:59:53",
                    "highlightText": [{
                        "fromPosition": 19,
                        "toPosition": 29
                    }],
                    "message": "combo ftpd[31985]: connection from 218.38.58.3 () at Wed  2005"
                }],
                "datetimeFrom": "Jul 23 23:24:09",
                "datetimeUntil": "Jul 27 23:24:09",
                "phrase": "connection"
            }
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Table logData={dt}/>);
    });

    it('renders component correctly', () => {
        const renders = shallow(<Table logData={dt}/>);
    });

});