export default (state = {
  books: [],
  book: {}
}, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS': {
      return {
        ...state,
        books: action.payload
      };
    }
    case 'FETCH_BOOK': {
      return {
        ...state,
        book: action.payload
      };
    }
    case 'ADD_BOOK': {
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    }
    case 'UPDATE_BOOK': {
      const { id } = action.payload;
      const newBooks = [...state.books];
      const bookToUpdate = newBooks.findIndex(book => book.id === id);
      newBooks[bookToUpdate] = action.payload;

      return {
        ...state,
        books: newBooks,
        book: action.payload
      };
    }
    case 'DELETE_BOOK': {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
