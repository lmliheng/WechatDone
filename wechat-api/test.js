
import { getAccessToken,getApiQuota,getMenu } from "./utils/request.js";
const res = await getAccessToken();
if(res.data?.access_token){
    console.log('获取到access_token')
}
console.log("--------------------------------------------");
let accessToken = res.data.access_token
let cgi_path = '/cgi-bin/token'
const quotaRes = await getApiQuota(accessToken,cgi_path);
console.log(quotaRes.data);

console.log("--------------------------------------------");
const menuRes = await getMenu(accessToken);
console.log(menuRes.data);
