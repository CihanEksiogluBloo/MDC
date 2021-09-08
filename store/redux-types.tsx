export type userLogin = error | userDatas;
export type userDeviceData = error | userDeviceResData;

type error = {
  error: string;
};
type userDatas = {
  app_token: string;
  userid: number;
};

type userDeviceResData = {
  token: boolean;
  userid: string;
  cihaz_no: Device;
};

export type Device = [
  {
    cihaz_no: number;
    ad_soyad: string;
    konum: string;
    son_haberlesme: string;
  }
]
