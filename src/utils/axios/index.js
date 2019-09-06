import axios from 'axios'
//全局修改axios默认设置
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

//创建实例时修改配置
// let instance = axios.create({
//     baseURL:'www.baidun.com'
// })

//get和post请求方式   还有request ,delete,head,options,put,patch请求，没用过。。。
// axios.get(url,config)  axios.get('/user',{params:{id:123,name:'zhnagjinxi'},})
// axios.post(url,data,config)   axios.post('/usse',{firstName:'zhang',lastName:'jinxi'},{params:{name:'zhangjinxi',age:22}})
// axios(config)  所有的信息都在一个config对象里 
// axios({
//     method: 'post',
//     url: '/user/1334',
//     data: { firstName: 'zhang', lastName: 'jinxi' },
//     params: { name: 'zhangjinxi', id: 123 },
//     baseURL: 'https://jsonplaceholder.typicode.com',
//     headers: { 'X-Requested-With': 'XMLHttpRequest' },
//     timeout: 3000,
//     maxContentLength: 3000,//设置HTTP响应内容的最大长度。
//     responseType: 'json',//响应格式，可选arraybuffer,blob,document,json,text,stream，默认json
//     withCredentials: false,  //是否携带cookie信息，默认false
//     validateStatus: (status) => {   //定义可获得的HTTP响应状态码，return true，设置为null或者undefi，promise将resolved，否则将rejeced.
//         return status >= 200 && status < 300;//默认
//     },
//     //用于在请求之前对请求数据进行操作，只有请求方式为put,post,patch时可用，需要return相应数据，可以修改headers。
//     transformRequest: [(data, headers) => {
//         console.log(headers);
//         return data;
//     }],
//     //then或者catch之前，对响应数据进行处理操作，最后return处理后的数据
//     transformResponse: [(data) => {
//         return data;
//     }],
//     //可选的，用于序列化params的函数
//     paramsSerializer: (params) => {
//         return Qs.stringify(params, { arrayFormat: 'brackets' })
//     },
//     //统一处理request让测试更加容易，返回一个promise并提供一个可用的response
//     adapter: (config) => {
//         console.log(config);
//     },
//     //将会设置一个Authorization header，覆盖header中已经存在的Authorization
//     auth: {
//         username: 'zhangjinxi',
//         password: 123456
//     },
//     onUploadProgress: (progressEvent) => {
//         console.log(progressEvent);
//         //用原生进度事件处理操作
//     },
//     maxRedirects: 5,//默认，设置最大重定向次数跟随node.js
//     httpAgent: new http.Agent({ keepAlive: true }), //node.js中自定义agent代理，默认false，
//     httpsAgent: new https.Agent({ keepAlive: true }),
//     proxy: {  // 定义proxy服务器，这将设置一个Proxy-Authorization  header覆盖已经存在的。
//         host: '127.0.0.1',
//         port: 9000,
//         auth: {
//             username: 'zhangjinxi',
//             password: '12345633'
//         }
//     },
//     cancelToken: new CancelToken((cancel) => {  //指定一个cancel token，可以迎来取消request
//         console.log(cancel);
//     })
//     //     var CancelToken = axios.CancelToken;
//     // var source = CancelToken.source();

//     // axios.get('/user/12345', {
//     // cancelToken: source.token
//     // }).catch(function(thrown) {
//     // if (axios.isCancel(thrown)) {
//     //     console.log('Request canceled', thrown.message);
//     // } else {
//     //     // handle error
//     // }
//     // });

//     // // cancel the request (the message parameter is optional)
//     // source.cancel('Operation canceled by the user.');
// })

//并行请求  axios.all([request1,request2,request3,....])  axios.spread(fn())  fu()接收axios.all()每个请求返回的数据

//拦截器  可以在then和catch之前拦截请求和响应
// 1 请求拦截器
// axios.interceptors.request.use((config)=>{
//     //在请求前做一些事情在这里
//     console.log(config,'config');
//     return config;
// },(error)=>{
//     //请求失败时，这里做一些事
//     return Promise.reject(error)
// })
// 2 响应拦截器
// let responseInterceptors = axios.interceptors.response.use((response)=>{
//     //这里处理响应数据
//     console.log(response,'response')
//     return response;
// },(error)=>{
//     //这里处理响应失败
//     return Promise.reject(error);
// })

// 3 移除拦截器
// axios.interceptors.response.eject(responseInterceptors) //上面的响应拦截器的名字

let api = {
    get(url, params) {
        return axios.get(url, { params })
    },
    post(url, params) {
        return axios.post(url, null, { params })
    }
}
export default api;