import { combineReducers } from 'redux';

import articles from './articles';
import counter from './counter';

const allReducer = combineReducers({
  articles,
  counter
});

const rootReducer = (state, action) => {
  // Fix redux persist bug not clear local storage data
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return allReducer(state, action);
};

export default rootReducer;