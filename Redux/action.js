export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_MOBILE = 'SET_MOBILE';
export const SET_PINCODE = 'SET_PINCODE';
export const SET_ACCNAME = 'SET_ACCNAME';
export const SET_ACCNUM = 'SET_ACCNUM';
export const SET_NUMBER = 'SET_NUMBER';
export const SET_IFSC = 'SET_IFSC';
export const SET_IMAGE = 'IMAGE';
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
    export const setaccname= accname => ({
        type: SET_ACCNAME,
        payload: accname,
    });

    export const setaccnum= accnum => ({
        type: SET_ACCNUM,
        payload:accnum,
    });
    export const setnumber= number => ({
        type: SET_NUMBER,
        payload: number,
    });

    export const setifsc= ifsc => ({
        type: SET_IFSC,
        payload: ifsc,
    });
    export const setimg= img => ({
        type: SET_IMAGE,
        payload: img,
    });




