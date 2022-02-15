import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesAction, getMessageSuccessAction } from '../redux/greet';


const Greeting = () => {
  const state = useSelector((state) => state.greetReducer.messages);
  const dispatch = useDispatch();

  const messages = state.map((response) => {
    return <li>{response.message}</li>;
  });

  const performAction = () => {
    dispatch(getMessagesAction());

    fetch('v1/greeting.json')
    .then((response) => response.json())
    .then((data) => dispatch(getMessageSuccessAction(data)))
    .catch((error) => console.log(error));
  }

  return (
    <div>
      Greeting: 
      <button onClick={() => performAction()}>Get Messages</button>
      <br />
      <ul>
       { messages }
      </ul>
    </div>
  );
}

export default Greeting;