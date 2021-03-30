import { 
    MAIN_LINEAR_PROGRESS_SHOW,
    MAIN_LINEAR_PROGRESS_HIDE,
    MAIN_SNACKBAR_SHOW,
    MAIN_SNACKBAR_HIDE
} from "../actions/MainActions";

export function mainReducer(currentState = {  }, action) {
    switch (action.type) {

        case MAIN_LINEAR_PROGRESS_SHOW:
            return {
                ...currentState,
                displayProgressBar: true,
            }

        case MAIN_LINEAR_PROGRESS_HIDE:
            return {
                ...currentState,
                displayProgressBar: false,
            };

        case MAIN_SNACKBAR_SHOW:
            return {
                ...currentState,
                snackbarType: action.payload.snackbarType,
                snackbarMessage: action.payload.snackbarMessage,
                snackbarOpen: true
            }
        case MAIN_SNACKBAR_HIDE:
            return {
                ...currentState,
                snackbarOpen: false
        }

       default:
           return currentState;
        }
    }