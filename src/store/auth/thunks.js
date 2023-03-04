import { singInWithGoogle } from "../../firebase/provider";
import { checkingCredential } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredential());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredential());
    const result = await singInWithGoogle();
    console.log({result});
  };
};
