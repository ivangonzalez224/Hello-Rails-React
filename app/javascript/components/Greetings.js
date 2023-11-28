import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetings/GreetingsSlice';


const Greetings = () => {
  const dispatch = useDispatch();
  const { greetingItem } = useSelector((store) => store.greetings);
  useEffect(() => {
    if (greetingItem === 'Loading...') {
      dispatch(getGreetings());
    }
  });
  
  return (
    <div className="main-container">
      {greetingItem && <p>{greetingItem}</p>}
    </div>
  );
};

export default Greetings;