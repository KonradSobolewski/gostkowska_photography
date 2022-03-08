import {
  SENDING_MAIL,
  SEND_SUCCESS,
  SEND_ERROR,
  RESET_STATE,
} from "../actions/contactActions";

export const FormState = {
  SUCCESS: "success",
  ERROR: "error",
  NULL: null,
  LOADING: "loading",
};

const initialState = {
  sendingResult: FormState.NULL,
  isButtonLocked: false,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SENDING_MAIL:
      return {
        ...state,
        sendingResult: FormState.LOADING,
        isButtonLocked: true,
        isLoading: true,
      };
    case SEND_SUCCESS:
      return {
        ...state,
        sendingResult: FormState.SUCCESS,
        isButtonLocked: false,
        isLoading: false,
      };
    case SEND_ERROR:
      return {
        ...state,
        sendingResult: FormState.ERROR,
        isButtonLocked: false,
        isLoading: false,
      };
    case RESET_STATE:
      return {
        ...state,
        sendingResult: FormState.NULL,
        isButtonLocked: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
