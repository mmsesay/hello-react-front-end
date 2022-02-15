const initialState = {
  msg: { text: 'hello' },
};

const GET_RANDOM_MSG_REQUEST = 'GET_RANDOM_MSG_REQUEST';
const GET_RANDOM_MSG_SUCCESS = 'GET_RANDOM_MSG_SUCCESS';

export const getRandomMsgSuccess = (json) => ({
  type: GET_RANDOM_MSG_SUCCESS,
  json,
});

export const getRandomMsg = () => (dispatch) => {
  dispatch({ type: GET_RANDOM_MSG_REQUEST });
  return fetch(
    'https://immense-sands-14168.herokuapp.com/api/v1/messages_random',
  )
    .then((response) => response.json())
    .then((json) => dispatch(getRandomMsgSuccess(json)));
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RANDOM_MSG_SUCCESS':
      return { msg: action.json };
    default:
      return state;
  }
};
export default rootReducer;
