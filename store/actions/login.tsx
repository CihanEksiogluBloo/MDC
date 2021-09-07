import AsyncStorage from "@react-native-async-storage/async-storage";

export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
export const SET_DID_TRY_AL = "SET_DID_TRY_AL";

/*
const saveDataToStorage = (token, userId, expirationDate) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token,
      userId,
      expiryDate: expirationDate.toISOString(),
    })
  );
};

*/

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    const response = await fetch("http://ems.lande.com.tr/api/userlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const resData = await response.json();
    console.log(resData);

    /*
      if (!response.ok) {
        const errorResData = await response.json();
        const errorId = errorResData.errorId.message;
        let message = "Something went wrong";
  
        if (errorId === "EMAIL_NOT_FOUND") {
          message = "This email could not be found";
        } else if (errorId === "INVALID_PASSWORD") {
          message = "This password is not valid";
        } else if (errorId === "USER_DISABLED") {
          message = "This User Disabled!";
        }
        throw new Error(message);
      }
      */

    //const resData = await response.json();

    /*
      dispatch(
        authenticate(
          resData.localId,
          resData.idToken,
          parseInt(resData.expiresIn) * 1000
        )
      );
      const expirationDate = new Date(
        new Date().getTime() + parseInt(resData.expiresIn) * 1000
      );
      saveDataToStorage(resData.idToken, resData.localId, expirationDate);
    */
  };
};
export const setDidTryAL = () => {
  return { type: SET_DID_TRY_AL };
};
