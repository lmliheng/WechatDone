import {api} from './axios_config.js'


/**
 * 获取access_token
 */
export const getAccessToken=()=>{
  return api({
    method:'post',
    url: '/cgi-bin/token',
    params:{
        appid:"wx49bae2636891ffde",
        secret:"c22b1d7f43a58db170b968fab6ea6bd7",
        grant_type:"client_credential"
    }
})
}

/**
 * 查询每日access_token限制额度
 */
export const getApiQuota=(accessToken,cgi_path)=>{
  return api({
    method:'post',
    url: '/cgi-bin/openapi/quota/get',
    data:{
        cgi_path:cgi_path
    },
    params:{
        access_token:accessToken
    }
  })
}

/**
 * 公众号菜单获取
 */
export const getMenu=(accessToken)=>{
  return api({
    method:'get',
    url: '/cgi-bin/menu/get',
    params:{
        access_token:accessToken
    }
  })
}

/**
 * 公众号自动回复
 */
export const getCurrentAutoreplyInfo=(accessToken)=>{
  return api({
    method:'get',
    url: '/cgi-bin/get_current_autoreply_info',
    params:{
        access_token:accessToken
    }
  })
}