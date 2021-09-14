export type userLogin = error | userDatas;
export type userDeviceData = error | userDeviceResData;
export type DeviceLogListResData = DeviceLogList;

export type error = {
  error: string;
};
export type userDatas = {
  app_token: string;
  userid: number;
};

export type userDeviceResData = {
  token: boolean;
  userid: string;
  cihaz_no: Device[];
};

export type Device = {
  cihaz_no: number;
  ad_soyad: string;
  konum: string;
  son_haberlesme: string;
};

export type DeviceLogList = {
  [key: number]: {
    cihaz_no: number;
    cihaz_tur: DeviceTypeInterface[];
  };
  cihaz_last_data: [];
};

export interface DeviceTypeInterface {
  t: number;
  min: number;
  max: number;
  input: string;
  title: string;
  symbol: string;
}

export type UserSelectableThemes = "light" | "dark"