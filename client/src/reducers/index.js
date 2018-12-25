import { combineReducers } from 'redux';
import authReducer from "./auth_reducer";
import studentsReducer from './students_reducer';
import subjectsReducer from './subjects_reducer';
import questionsReducer from './questions_reducers';
import selectedSubjectReducer from './selected_subjects_reducer';

const reducers = combineReducers({
  auth: authReducer,
  students: studentsReducer,
  subjects: subjectsReducer,
  questions: questionsReducer,
  selectedSubjects: selectedSubjectReducer
});

export default reducers;