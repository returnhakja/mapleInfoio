import axios, { AxiosInstance, AxiosResponse } from "axios";
const baseURL = "https://open.api.nexon.com/maplestory/v1";
export const apiKey =
  "live_d7d02164e7756253a44ed95738dc01d1d4d3e5615523431441bfe2a943898303c8e2a5fc4855ba38eb15d28219f85579";

export const instance: AxiosInstance = axios.create({
  baseURL,
  timeout: 180000,
});

export const GET = async (url: string, param?: any) => {
  const { data }: AxiosResponse = await instance.get(`${url}`, {
    headers: { "x-nxopen-api-key": apiKey },
  });
  console.log(data);
  if (data) {
    return data;
  }
  throw data;
};
