import { combineReducers } from 'redux';
import authReducer from "./auth_reducer";
import studentsReducer from './students_reducer';
import subjectsReducer from './subjects_reducer';
import questionsReducer from './questions_reducers';

const reducers = combineReducers({
  auth: authReducer,
  students: studentsReducer,
  subjects: subjectsReducer,
  questions: questionsReducer
});

export default reducers;