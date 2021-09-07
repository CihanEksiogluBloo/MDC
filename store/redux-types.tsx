export type userLogin = error | userDatas;

type error = {
  error: string;
};
export type userDatas = {
  app_token: string;
  userid: number;
};
