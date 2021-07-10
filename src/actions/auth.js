import { VERIFY_USER, CREATE_USER, SIGNIN_USER } from './type';
import history from '../config/history';
import { signUp } from '../asynchronus/Home/SignUp';
import { signIn } from '../asynchronus/Home/SignIn';
import { verifyUser } from '../asynchronus/VerifyUser';

export const verifyAuth = () => async dispatch => {
  const user = await verifyUser();

  if(user) {
    dispatch({ type: VERIFY_USER, payload: user });
    history.push('/posts');
  }
}

export const register = formData => async dispatch => {
  const { user, acf } = await signUp(formData, formData.get('password'));
  user.acf = acf;

  localStorage.setItem('userId', user.id);

  dispatch({ type: CREATE_USER, payload: user });
  history.push('/posts');
}

export const logIn = formData => async dispatch => {
  const user = await signIn(formData);

  if(user.id) {
    dispatch({ type: SIGNIN_USER, payload: user });
    history.push('/posts');
  }
}