export type AuthAction =
  | { type: "SIGN_IN"; payload: string }
  | { type: "SIGN_OUT" }
  | { type: "SIGN_UP"; payload: string }
  | { type: "ADD_ERROR"; payload: string };

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  MainFlow: { screen: string };
};
