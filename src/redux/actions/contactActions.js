import axios from "axios/index";

export const SENDING_MAIL = 'SENDING_MAIL';
export const SEND_SUCCESS = 'SEND_SUCCESS';
export const SEND_ERROR = 'SEND_ERROR';
export const RESET_STATE = 'RESET_STATE';

export const sendingMail = () => ({
    type: SENDING_MAIL,
});

export const handleSendingSuccess = () => ({
    type: SEND_SUCCESS,
});

export const handleSendingError = () => ({
    type: SEND_ERROR,
});

export const resetState = () => ({
    type: RESET_STATE,
});


export const sendMail = (body) => async dispatch => {
    dispatch(sendingMail());

    const instance = axios.create({
        baseURL: 'localhost:3001',
    });

    let response = await instance.post('/api/form', {
        name: body.name,
        email: body.email,
        phoneNumber: body.phoneNumber,
        message: body.message
    });
    if (response.status === 200) {
        dispatch(handleSendingSuccess());

    } else if (response.status >= 400) {
        dispatch(handleSendingError());
    }

    setTimeout(() => dispatch(resetState()), 2000);

};