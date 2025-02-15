import http from "./http-common"
import {deleteData, getData, postData} from "../handlers";

export default class GreenApi {

    static getMessage = (idInstance, apiTokenInstance, data) => {
        return postData(http, `/waInstance${idInstance}/getMessage/${apiTokenInstance}`, data);
    }

    static sendMessage = (idInstance, apiTokenInstance, data) => {
        return postData(http, `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, data);
    }

    static checkWhatsapp = (idInstance, apiTokenInstance, data) => {
        return postData(http, `/waInstance${idInstance}/checkWhatsapp/${apiTokenInstance}`, data);
    }

    static GetContactInfo = (idInstance, apiTokenInstance, data) => {
        return postData(http, `/waInstance${idInstance}/GetContactInfo/${apiTokenInstance}`, data);
    }

    static getContacts = (idInstance, apiTokenInstance) => {
        return getData(http, `/waInstance${idInstance}/getContacts/${apiTokenInstance}`);
    }

    static getChatHistory = (idInstance, apiTokenInstance, data) => {
        return postData(http, `/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`, data);
    }

    static lastOutgoingMessages = (idInstance, apiTokenInstance) => {
        return getData(http, `/waInstance${idInstance}/lastOutgoingMessages/${apiTokenInstance}?minutes=20160`);
    }

    static receiveNotification = (idInstance, apiTokenInstance) => {
        return getData(http, `/waInstance${idInstance}/receiveNotification/${apiTokenInstance}?receiveTimeout=5`);
    }

    static deleteNotification = (idInstance, apiTokenInstance, receiptId) => {
        return deleteData(http, `/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`);
    }
}