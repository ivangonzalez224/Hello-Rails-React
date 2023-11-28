import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings  } from '../redux/greetings/GreetingsSlice';


const Greetings = () => {
  const dispatch = useDispatch();
  const { greetingItem } = useSelector((store) => store.greetings);

  useEffect(() => {
    if (greetingItem.length === 0) {
      dispatch(getGreetings());
    }
  });

  return (
    <div className="main-container">
      {error && <p className="errorMsg">{error}</p>}
      {greetingItem && <p className="greetingMsg">{greetingItem}</p>}
    </div>
  );
};

export default Greetings;