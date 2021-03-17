import React, { useMemo, useState, useContext } from 'react';

import Loader from '../loader/loader';
import { Context } from '../../context/context';

const LoginForm = () => {
  const [formData, setData] = useState({
    email: '',
    nickname: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessfully, setIsSuccessfully] = useState(false);
  const { changeUsername } = useContext(Context);

  const inputFields = [
    {
      name: 'Nickname',
      id: 'nickname',
      placeholder: 'Enter your nickname',
      type: 'text',
      required: true,
    },
    {
      name: 'Email',
      id: 'email',
      placeholder: 'Enter your email',
      type: 'email',
      required: true,
    },
    {
      name: 'Password',
      id: 'password',
      placeholder: 'Enter your password',
      type: 'password',
      required: true,
    },
  ];

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setIsLoading(true);

    // Имитируем успешную отправку данных на сервер
    setTimeout(() => {
      setIsSuccessfully(true);

      setTimeout(() => {
        changeUsername(formData.nickname);
      }, 2000);
    }, 5000);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const renderInputs = useMemo(() => inputFields.map((input) => (
    <div className="login-form__input-group" key={input.id}>
      <label htmlFor={input.id} className="login-form__input-label">{input.name}</label>
      <input
        name={input.id}
        className="login-form__input"
        type={input.type}
        id={input.id}
        placeholder={input.placeholder}
        required={input.required}
        onChange={handleInputChange}
      />
    </div>
  )), []);

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-form__title">Log in</h2>

      <div className="login-form__inner-wrapper">
        { renderInputs }
      </div>

      <button type="submit" className="login-form__submit-button">Log in</button>

      { isLoading && <Loader success={isSuccessfully} />}
    </form>
  );
};

export default LoginForm;
