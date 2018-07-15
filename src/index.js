import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
    characters: [0, 0, 0, 0, 0, 0]
}
const calcChars = (arr, index) => {
    const validPosition = pos => pos>=0 && pos<arr.length
    const result = [...arr];
    for (let i = -1; i <= 1; i++) {
        const pos = i + index;
        if (validPosition(pos)) {
            result[pos] ^= 1;
        }
    }
    return result;
}
const rootReducer = (state = initialState, action) => {
    console.log("ACTION", action)
    switch (action.type) {
        case "CLICK": {
            const newState = { ...state, characters: calcChars(state.characters, action.payload.index) }
            return newState;
        }
    }
    return state;
}
const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();

{/* <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')); */}