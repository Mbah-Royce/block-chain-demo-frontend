import { SET_USER_TOKEN_MUTATION, UPDATE_AREA, SET_USER_DATA_MUTATION } from "../../storeConstants";

export default {
    [SET_USER_TOKEN_MUTATION](state, payload) {
        state.pubKey = payload.pubKey;
        state.prvKey = payload.prvKey;
        state.area = payload.area;
        state.user_id = payload.user_id;
        state.token = payload.token;
    },
    [UPDATE_AREA](state, payload) {
        state.area = payload.area;
    },
    [SET_USER_DATA_MUTATION](state, payload) {
        state.pubKey = payload.pubKey;
        state.prvKey = payload.prvKey;
        state.area = payload.area;
        state.user_id = payload.user_id;
        state.name = payload.name
    }
};