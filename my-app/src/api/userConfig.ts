// const URL = `character/basic`;

import { GET } from "../components/common/useMapleAPI";
import { finalDate } from "../util/date";

export const getUserOcid = async (param: User.Ocid) => {
  console.log(param);
  const data = await GET(`/id?character_name=${param.nickName}`, param);
  console.log(data);
  return data;
};

export const getUserConfig = async (param: User.Config) => {
  const data = await GET(
    `/character/basic?ocid=${param.ocid}&data=${finalDate}`,
    param
  );
  return data;
};
