import { createContext } from 'react';
import { LOCALSTORATE_TOKEN } from '../constants/constants';

const userDefaultStatus = localStorage.getItem(LOCALSTORATE_TOKEN);

const Context = createContext(userDefaultStatus);
const { Provider } = Context;

export { Context, Provider, userDefaultStatus };
