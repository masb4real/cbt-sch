import axios from 'axios';
import history  from '../history';
import {
  AUTH_USER,
  AUTH_ADMIN,
  AUTH_ERROR,
  ADD_STUDENT,
  GET_SCORES,
  SAVE_SCORES,
  USER_LOGOUT,
  ADD_SUBJECT,
  SAVE_OPTIONS,
  FETCH_MESSAGE,
  FETCH_SUBJECTS,
  FETCH_QUESTIONS,
  FETCH_ALL_EXAMS,
  FETCH_ALL_STUDENTS,
  ADD_SELECTED_SUBJECTS
} from "./types";

const ROOT_URL = 'http://localhost/cbt-sch';

export function signinUser({ exam_number }) {
  return function (dispatch) {
    // submit examm number to the server
    axios.post(`${ROOT_URL}/auth/signin`, {
        exam_number
      },
      {
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(response => {
        console.log(response);
        //if request is good 
        // - update state to indicate user is logged in
        dispatch({
          type: AUTH_USER,
          payload: response.data
        });
        // - save the jwt token
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);
        localStorage.setItem('startExam', false);
        // - redirect to /route 
        history.push('/student');

      })
      .catch((error) => {
        /* if request is bad
          - show an error to the user
        */
        console.log(error);
        dispatch(authError(error));

      });
  }
}

export function createStudent({ name, exam_number }) {

  return function (dispatch) {
    axios.post(`${ROOT_URL}/auth/signup`, {
      name,
      exam_number
    },
    {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => {
      console.log('Creating student response', response)
      dispatch({
        type: ADD_STUDENT,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
      dispatch(authError(error.message))
    })
  }
}

export const signUpAdmin = ({ name, username, password }) => {
  return dispatch => {
    axios.post(`${ROOT_URL}/auth/signup/admin`, {
      name,
      username,
      password
    },
    {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => {
      dispatch({
        type: AUTH_ADMIN,
        payload: response.data
      })
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      history.push("/dashboard");
    })
    .catch(error => {
      console.log(error);
      dispatch(authError(error.message));
    })
  };
}

export function signinAdmin({ username, password }) {
  return dispatch => {
    axios.post(`${ROOT_URL}/auth/signin/admin`, {
      username,
      password
    },
    {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => {
      console.log(response);
      dispatch({
        type: AUTH_ADMIN,
        payload: response.data
      })
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      history.push("/dashboard");
    })
    .catch(error => {
      dispatch(authError(error));
      console.log(error);
    })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export const addSubject = subject => {
  return dispatch => {
    axios.post(`${ROOT_URL}/subjects`, subject, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log(response);
      dispatch({ 
        type: ADD_SUBJECT,
        payload: response.data
       });
    })
    .catch(error => console.log(error))
  }
}

export function signoutUser() {
  localStorage.clear();

  return {
    type: USER_LOGOUT
  };

}


export const addQuestion = question => {
  return dispatch => {
    axios.post(`${ROOT_URL}/questions`, question, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
    .then(response => {
      console.log(response);
      // dispatch({ 
      //   type: ADD_SUBJECT,
      //   payload: response.data
      //  });
    })
    .catch(error => console.log(error))
  }
}

export function fetchMessage() {
  return function (dispatch) {
    axios.get(ROOT_URL, {
      headers:  { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data.message
      })
    })
  }
}

export const fetch_questions = (subjects) => {
  console.log('subjects', subjects);
  return dispatch => {
    axios.get(`${ROOT_URL}/questions/exam`, {
      headers: { 
        authorization: localStorage.getItem('token'),
        subjects
      }
    })
    .then(response => {
      console.log('questions response', response);
      dispatch({
        type: FETCH_QUESTIONS,
        payload: response.data.questions
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
}

export const fetch_subjects = () => {
  return dispatch => {
    axios.get(`${ROOT_URL}/subjects`, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    .then( response => {
      console.log(response);
      dispatch({
        type: FETCH_SUBJECTS,
        payload: response.data.subjects
      })
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export const fetchAllExams = () => {
  return dispatch => {
    axios.get(`${ROOT_URL}/exams`, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      console.log(response);
      dispatch({
        type: FETCH_ALL_EXAMS,
        payload: response.data.exams
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
}

export const fetchAllStudents = () => {
  return dispatch => {
    axios.get(`${ROOT_URL}/students`, {
      headers: { authorization: localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type: FETCH_ALL_STUDENTS,
        payload: response.data.students
      });
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export const saveSelectedSubjects = subjects => {
  return dispatch => {
    dispatch({ 
      type: ADD_SELECTED_SUBJECTS, 
      payload: subjects 
    });
  };
};

export const saveOptions = question => {
  return dispatch => {
    dispatch({
      type: SAVE_OPTIONS,
      payload: question
    })
  }
}

export const saveToDB= data => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/exam/save`, data, {
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token")
        }
      })
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }
}

export const getDBScores = score => {
  return dispatch => {
    axios.get(`${ROOT_URL}/students`, {
      headers: { authorization: localStorage.getItem('token')}
    })
    .then(response => {
      console.log(response)
      dispatch({
        type: GET_SCORES,
        payload: response.data.students
      });
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export const saveScores = score => {
  return dispatch => {
    dispatch({
      type: SAVE_SCORES,
      payload: score
    })
  }
}