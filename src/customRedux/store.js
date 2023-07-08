function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    console.log(state);
  }

  function getState() {
    return state;
  }

  return {
    getState,
    dispatch,
  };
}

const store = createStore(function (state = [], action) {
  if (action.type == 'add') {
    return [...state, action.payload.todo];
  }
  return state;
});

store.dispatch({
  type: 'add',
  payload: {
    todo: 'pay bill',
  },
});

store.dispatch({
  type: 'add',
  payload: {
    todo: 'Drink coffee',
  },
});
console.log(store.getState());
