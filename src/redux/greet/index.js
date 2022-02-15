// types
const GET_MESSAGE_REQUEST = 'greet/GET_MESSAGE_REQUEST';
const GET_MESSAGE_SUCCESS = 'greet/GET_MESSAGE_SUCCESS';

// initial state
const initialState = {
  messages: [{
    message: 'Click the button to fetch messages',
  }],
};

// Actions
export const getMessagesAction = () => ({
  type: GET_MESSAGE_REQUEST,
});

export const getMessageSuccessAction = (json) => ({
  type: GET_MESSAGE_SUCCESS,
  json,
});

// reducer
export const greetReducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case GET_MESSAGE_SUCCESS:
      return { messages: action.json.greeting };
    default:
      return state;
  }
};
