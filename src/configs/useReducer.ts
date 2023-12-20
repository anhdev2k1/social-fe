// userReducer.js
const initialState = {
    user: null,
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };
  
  export { initialState, userReducer };
  