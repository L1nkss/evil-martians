import React, { useState } from 'react';

import LoginForm from '../login-form/login-form';
import WelcomeView from '../welcome-view/welcome-view';
import Header from '../header/header';
import { Provider, userDefaultStatus } from '../../context/context';
import { LOCALSTORATE_TOKEN } from '../../constants/constants';

const App = () => {
  const [username, setUsername] = useState(userDefaultStatus);

  const changeUsername = (value) => {
    localStorage.setItem(LOCALSTORATE_TOKEN, value);
    setUsername(value);
  };

  const deleteUsername = () => {
    localStorage.removeItem(LOCALSTORATE_TOKEN);
    setUsername(null);
  };

  return (
    <Provider value={{ username, changeUsername, deleteUsername }}>
      <div className="app">
        <Header />
        <div className="container app__inner-wrapper">
          { username === null && <div className="widget"><LoginForm /></div> }
          { username !== null && <WelcomeView /> }
        </div>
      </div>
    </Provider>
  );
};
export default App;
