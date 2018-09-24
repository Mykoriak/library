import axios from 'axios';

export const fetchBooks = () => (dispatch) => {
  axios.get('http://adread.16mb.com/Uploads/index.php?list=true')
    .then((response) => {
      dispatch({ type: 'FETCH_BOOKS', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_BOOKS_REJECTED', payload: err });
    });
};

export const fetchBook = id => (dispatch) => {
  axios.get(`http://adread.16mb.com/Uploads/index.php?getBook=${id}`)
    .then((response) => {
      dispatch({ type: 'FETCH_BOOK', payload: response.data });
    });
};

export const addBook = name => (dispatch) => {
  axios.get(`http://adread.16mb.com/Uploads/index.php?addBook=${name}`)
    .then((response) => {
      dispatch({ type: 'ADD_BOOK', payload: response.data });
    });
};

export const updateBook = (id, taked, takedBy) => (dispatch) => {
  axios.get(`http://adread.16mb.com/Uploads/index.php?editBook=true&id=${id}&taked=${taked}&takedBy=${takedBy}`)
    .then((response) => {
      dispatch({ type: 'UPDATE_BOOK', payload: response.data });
    });
};

export const deleteBook = id => (dispatch) => {
  axios.get(`http://adread.16mb.com/Uploads/index.php?deleteBook=true&id=${id}`)
    .then((response) => {
      dispatch({ type: 'DELETE_BOOK', payload: response.data });
    });
};
