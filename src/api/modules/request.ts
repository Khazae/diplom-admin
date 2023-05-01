import axios from "axios";
import { getApiConfig } from "../../config/api.config";

import { store } from "../../store";
import { HttpError } from "../../common/errors/HttpError";

const apiConfig = getApiConfig();

const instance = axios.create({
  baseURL: apiConfig.apiUrl,
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";

    const auth = store.getState().auth.auth;
    if (auth) {
      config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    const customError = new HttpError({
      status: response?.status || null,
      message: response?.data?.message,
    });

    return Promise.reject(customError);
  }
);

export default instance;
