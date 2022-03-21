import {
    GET_USER_TOKEN_GETTER,
    IS_USER_AUTHENTICATE_GETTER,
    GET_USER_DATA
} from '../../storeConstants';

export default {
    [GET_USER_TOKEN_GETTER]: (state) => {
        localStorage.getItem("userToken");
        return state.token;
    },

    [IS_USER_AUTHENTICATE_GETTER](state) {
        return !!state.token;
    },

    [GET_USER_DATA](state) {
        return [
            state.pubKey,
            state.prvKey,
            state.area,
            state.user_id,
            state.name,
            state.token,
        ]
    }
};