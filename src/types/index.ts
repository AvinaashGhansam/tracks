export type AuthAction =
  | { type: "SIGN_IN"; payload: string }
  | { type: "SIGN_OUT" }
  | { type: "SIGN_UP"; payload: string }
  | { type: "ADD_ERROR"; payload: string }
  | { type: "CLEAR_ERROR" };

export type AuthStackParamList = {
  ResolveAuth: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MainFlow: undefined;
  LoginFlow: undefined;
};
