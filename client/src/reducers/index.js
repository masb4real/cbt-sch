import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import examReducer from "./exam_reducer";
import studentsReducer from './students_reducer';
import subjectsReducer from './subjects_reducer';
import questionsReducer from './questions_reducers';
import selectedSubjectReducer from './selected_subjects_reducer';
import scoresReducer from './scores_reducer';
import resultsReducer from './results_reducer';

import { USER_LOGOUT } from '../actions/types';
import storage from 'redux-persist/lib/storage'

const appReducer = combineReducers({
  auth: authReducer,
  students: studentsReducer,
  subjects: subjectsReducer,
  questions: questionsReducer,
  selectedSubjects: selectedSubjectReducer,
  results: resultsReducer,
  exam: examReducer,
  scores: scoresReducer
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    Object.keys(state).forEach(key => {
      storage.removeItem(`persist:${key}`);
    });
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;