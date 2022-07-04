export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_MOBILE = 'SET_MOBILE';
export const SET_PINCODE = 'SET_PINCODE';
export const settext = text => ({
        type: SET_USER_NAME,
        payload: text,
    });

export const setemail= email  => ({
        type: SET_EMAIL,
        payload: email,
    });

export const setmobile= mobile => ({
        type: SET_MOBILE,
        payload: mobile,
    });
export const setpincode= pincode => ({
        type: SET_PINCODE,
        payload: pincode,
    });

