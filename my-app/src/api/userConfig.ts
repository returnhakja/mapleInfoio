// const URL = `character/basic`;

import { GET } from "../components/common/useMapleAPI";

export const getUserOcid = async (param: User.Ocid) => {
  console.log(param);
  const data = await GET(`/id?character_name=${param.nickName}`, param);
  if (data && data.ocid) {
    // const configData = await getUserConfig({ ocid: data.ocid });
    // return configData;
  }

  return data;
};

export const getUserConfig = async (param: User.Config) => {
  console.log(param);
  const data = await GET(
    // `/character/basic?ocid=${param.ocid}&data=${finalDate}`,
    `/character/basic?ocid=${param.ocid}`,
    param
  );
  return data;
};
export const getUserStat = async (param: User.Config) => {
  const data = await GET(`/character/stat?ocid=${param.ocid}`, param);
  return data.final_stat;
};
export const getUserUnion = async (param: User.Config) => {
  const data = await GET(`/user/union?ocid=${param.ocid}`, param);
  return data;
};
export const getUserPopularity = async (param: User.Config) => {
  const data = await GET(`/character/popularity?ocid=${param.ocid}`, param);
  return data;
};
export const getUserDojang = async (param: User.Config) => {
  const data = await GET(`/character/dojang?ocid=${param.ocid}`, param);
  return data;
};
