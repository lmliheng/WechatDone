import { getAccessToken } from "./utils/request.js";

const res = await getAccessToken();
console.log(res);