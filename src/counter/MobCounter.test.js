import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react'
// import "jest-dom/extend-expect";
import { Provider } from 'mobx-react';
import MobCounter from './MobCounter';
import { action, observable, decorate } from 'mobx';


afterEach(cleanup);

class CounterStore {
    count = 0;
    increment = () => { this.count += 1 };
    increment = () => { this.count -= 1 };
}


const DecoratedCounterStore = decorate(CounterStore, {
    count: observable,
    increment: action,
    decrement: action
})

const renderWithStore = counterStore => render(<Provider CounterStore={counterStore}><MobCounter /></Provider>)

it("renders initial count", () => {
    const counterStore = new DecoratedCounterStore();

    const { getbyTestId } = renderWithStore(counterStore);

    expect(getbyTestId("count")).toHaveTextContent("0");
});



