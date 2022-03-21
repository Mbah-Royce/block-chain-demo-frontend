/* eslint-disable prettier/prettier */
import axiosInstance from "../../../../services/axiosInterceptor";
import {
    SET_USER_TOKEN_MUTATION,
    SIGNUP_ACTION,
    AUTO_LOGIN_ACTION,
    LOGIN_ACTION,
    LOGOUT_ACTION,
    TRANSATION_SUBMIT,
    GET_USER_INFO,
    UPDATE_AREA,
    SET_USER_DATA_MUTATION
} from "../../storeConstants";
// import elliptic from 'elliptic';

export default {
    async [TRANSATION_SUBMIT](context, payload) {
        var EC = require("elliptic").ec;
        var ec = new EC("secp256k1");
        var keypair = ec.genKeyPair();
        payload.message;
        payload.senderPub;
        payload.receiverPub;
        var signature = keypair.sign(payload.message).toDER();
        // console.log(keypair.verify(payload.message, signature));
        let postData = {
            amount: payload.area,
            reciever: payload.receiverPub,
            sender: payload.senderPub,
            signature: signature.toString("hex")
        };
        await axiosInstance
            .post("user/transaction", postData)
            .then((response) => {
                if (response.status === 201) {
                    console.log(response.data.data);
                }
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            });
    },
    async [LOGOUT_ACTION](context) {
        let tokenData = {
            pubKey: null,
            user_id: null,
            prvKey: null,
            area: null
        };
        context.commit(SET_USER_TOKEN_MUTATION, { token: null });
        context.commit(SET_USER_DATA_MUTATION, tokenData);
        localStorage.removeItem("userData");
        localStorage.removeItem("userToken");
    },
    async [LOGIN_ACTION](context, payload) {
        let postData = {
            publicKey: payload.publicKey,
            privateKey: payload.privateKey
        };
        await axiosInstance
            .post("user/login", postData)
            .then((response) => {
                if (response.status === 200) {
                    let userData = {
                        pubKey: response.data.data.publicKey,
                        user_id: response.data.data.id,
                        prvKey: response.data.data.privateKey,
                        area: response.data.data.area,
                        name: response.data.data.name
                    };
                    let userToken = {
                        token: response.data.data.token
                    };
                    context.commit(SET_USER_TOKEN_MUTATION, { token: response.data.data.token });
                    context.commit(SET_USER_DATA_MUTATION, userData);
                    localStorage.setItem("userData", JSON.stringify(userData));
                    localStorage.setItem("userToken", JSON.stringify(userToken));
                }
                console.log(response.data.data);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    async [SIGNUP_ACTION](context, payload) {
        var EC = require("elliptic").ec;
        var ec = new EC("secp256k1");
        var keypair = ec.genKeyPair();
        var prv = keypair.getPrivate("hex");
        var pub = keypair.getPublic("hex");
        // var prvKey = BigInt(prv, 16).toString();
        var pubKey = pub;
        let postData = {
            email: payload.email,
            name: payload.name,
            publicKey: pubKey,
            privateKey: prv,
        };
        await axiosInstance
            .post("user/register", postData)
            .then((response) => {
                if (response.status === 201) {
                    let userData = {
                        pubKey: response.data.data.publicKey,
                        user_id: response.data.data.id,
                        prvKey: response.data.data.privateKey,
                        area: response.data.data.area,
                        name: response.data.data.name
                    };
                    let userToken = {
                        token: response.data.data.token
                    };
                    context.commit(SET_USER_TOKEN_MUTATION, { token: response.data.data.token });
                    context.commit(SET_USER_DATA_MUTATION, userData);
                    localStorage.setItem("userData", JSON.stringify(userData));
                    localStorage.setItem("userToken", JSON.stringify(userToken));
                }
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    },
    [AUTO_LOGIN_ACTION](context) {
        let userDataString = localStorage.getItem("userData");
        let userTokenString = localStorage.getItem("userToken");
        if (userDataString && userTokenString) {
            let userData = JSON.parse(userDataString);
            let userToken = JSON.parse(userTokenString);
            context.commit(SET_USER_TOKEN_MUTATION, userToken);
            context.commit(SET_USER_DATA_MUTATION, userData)
        }
        // if(userTokenString){

        // }
    },
    async [GET_USER_INFO](context) {
        await axiosInstance.get("user/info")
            .then((response) => {
                console.log(response.data.data)
                if (response.status === 200) {
                    let userData = {
                        pubKey: response.data.data.publicKey,
                        user_id: response.data.data.id,
                        prvKey: response.data.data.privateKey,
                        area: response.data.data.area,
                        name: response.data.data.name
                    };
                    context.commit(SET_USER_DATA_MUTATION, userData);
                    localStorage.removeItem("userData");
                    localStorage.setItem("userData", JSON.stringify(userData));
                    context.commit(UPDATE_AREA, { area: response.data.data.area })
                    localStorage.key
                }
            }).catch((error) => {
                console.log(error.response)
            })
    }


};