import axios, { AxiosInstance, AxiosResponse } from "axios";
const baseURL = "https://open.api.nexon.com/maplestory/v1";

export const instance: AxiosInstance = axios.create({
  baseURL,
  timeout: 180000,
});

export const GET = async (url: string, param?: any) => {
  const { data }: AxiosResponse = await instance.get(`${url}`, {
    headers: { "x-nxopen-api-key": process.env.REACT_APP_API_KEY },
  });
  console.log(data);
  if (data) {
    return data;
  }
  throw data;
};
