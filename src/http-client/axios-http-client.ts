import axios, { AxiosInstance } from "axios";
import {
  ACCEPT,
  APPLICATION_JSON,
  CONTENT_TYPE,
} from "../constants/api-constant";

export type HttpClient = AxiosInstance;

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    [ACCEPT]: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON,
  },
});

export default client;
