---
layout: axios
title: '通过配置Axios为其添加拦截器'
date: '2019-12-23'
description: '在项目中遇到当请求接口时异常时，需要一个一个处理太麻烦，虽有在axios中添加一个拦截器达到统一处理的目的'
tags: [axios, javaScript]
---
## 1、首先使用 create（） 创建一个 axios 实例
#### 方法一
```
var instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```
#### 方法二
```
var newAxios = axios.create();
newAxios .defaults.baseURL = 'https://api.example.com';
newAxios .defaults.timeout= 1000;
newAxios .defaults.headers.common['Authorization'] = AUTH_TOKEN;
newAxios .defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```
这里涉及到一个配置优先级的问题，这个顺序是：
##### 在 lib/defaults.js 找到的库的默认值，然后是实例的 defaults 属性，最后是请求的 config 参数。后者将优先于前者。例子如下：
```
// 使用由库提供的配置的默认值来创建实例
// 此时超时配置的默认值是 `0`
var instance = axios.create();

// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
instance.defaults.timeout = 2500;

// 为已知需要花费很长时间的请求覆写超时设置
instance.get('/longRequest', {
  timeout: 5000
});
```
##2、创建拦截器
 ```
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```
## 3、在 vue 项目中使用
这里先采用 mock 来模拟一个接口，并返回一些数据
#### 3.1 先在项目中安装mock.js
```
npm install mockjs
```
或
```
yarn add mockjs
```
#### 3.2 创建一个存放 mock 的 js 文件，添加一个假接口数据（这里我创建在 src/mock/index.js 中）。
```JavaScript
import Mock from "mockjs"

Mock.mock('/api/fake', 'get', {
  success: true,
  message: "成功",
  data: { name: "小美" }
})
```
同时创建一个 js 文件，(src/request/config.js) 配置 axios，并添加拦截器
```
import axios from "axios"

const myAxios = axios.create();
// 由于这里采用 mock 模拟数据，不需要添加 baseURL 
myAxios.defaults.timeout = 2500

myAxios.interceptors.request.use(function (config) {
  console.log("请求之前做了什么", config) // 在这里可以对请求的数据进行修改
  return config;
}, function (err) {
  console.log("请求失败")
  return Promise.reject(err)
})

myAxios.interceptors.response.use(function (req) {
  console.log("返回响应之前做了什么", req) // 在这里可以对响应的数据进行修改或处理再返回，比如在这里添加一个弹框，反馈接口调用的状态。
  const result = req.data;
  if (result.success) {
    console.log("接口调用成功！")
    return Promise.resolve(result)
  } else {
    console.log("接口虽然调用成功了，但是返回的不是想要的数据", result.message)
    return Promise.reject(result)
  }
}, function (err) {
  return Promise.reject(err)
})

export default myAxios
```
#### 3.3 使用
在 api 文件夹下导入一个接口请求函数并引入 配置过的 axios
```
import myAxios from "../request/config"

export async function getFake() {
  const url = "/api/fake"
  return await myAxios.get(url)
}
```
引入 mock
引入 调用 api 函数
```
import '../mock/index' // highlight-line
import { getFake } from '../api/index'

<template>
    <button @click="getFake">mock</button>
</template>


methods: {
  getFake() {
    getFake()
      .then(res => {
        console.log('接口调用成功，且返回正确结果', res)
      })
      .catch(err => {
        console.log('接口调用成功，但是返回结果不对', err)
      })
  },
}
```
<p align=center><img src="https://gitee.com/rpmz/images/raw/master/axios_one.png" alt="输出结果" /></p>
<p align=center>输出结果</p>

## 4、图解

<p align=center><img src="https://gitee.com/rpmz/images/raw/master/axios_two.png" alt="图解" /></p>


参考链接： [https://www.kancloud.cn/yunye/axios/234845](https://www.kancloud.cn/yunye/axios/234845)
