
const userReduser = (state = { user: '' }, action) => {
  switch (action.type) {
    case 'USER_LOGIN': {
      return {
        ...state,
        user: action.payload
      };
    }
    default:
      return state;
  }
};


export const getUser = state => state.userReducer.user;

export default userReduser;
