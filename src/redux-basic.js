const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    number : 1
}

//Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type == "ADD_NUMBER"){
        return{
            ...state,
            number : state.number + 20
        }
    }
    if(action.type == "MINUS_NUMBER"){
        return{
            ...state,
            number : state.number -10
        }
    }
    return state;
}

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Dispatching action
store.dispatch({type:"MINUS_NUMBER", value:10});
store.dispatch({type:"ADD_NUMBER", value:20});
console.log(store.getState());
//Subscription