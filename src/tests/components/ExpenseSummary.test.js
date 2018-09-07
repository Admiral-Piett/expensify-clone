import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should count visible expenses properly', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses} />)
    expect(wrapper).toMatchSnapshot();
});

test('should count visible expenses properly when there are 0', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[]}/>)
    expect(wrapper).toMatchSnapshot();
});

test('should count visible expenses properly when there is only 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[1]]}/>)
    expect(wrapper).toMatchSnapshot();
});
