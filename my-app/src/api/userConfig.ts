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
