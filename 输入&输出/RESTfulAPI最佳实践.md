## 读《RUSTful API 最佳实践》

地址：[《RESTful API 最佳实践》](https://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html)



### 一、取名

Method 取为对应的动词，URL 取为对应的名词

集控是按照这样的规则

```
GET：获取
POST：创建
PUT：更新
DELETE：删除
```

> PS：对于只支持GET、POST两种请求方式的API来说，需要用POST请求来代替PUT、DELETE等。
>
> 此时可以使用 X-HTTP-Method-Override 属性来告诉服务器应该覆盖哪一个动词（Method）

同时，url 属性不应该携带动词（如获取用户列表）

eg：

``` js
GET '/userlist' //推荐
GET '/getUserlist' //不推荐
```

不建议多级路由

eg:

```js
GET '/users?sex=man' // 推荐
GET '/users/man' // 不推荐
```



### 二、状态码

1**，用不到，略

2**，表示成功

```js
GET: 200 OK
POST: 201 Created //表示生成了新的资源
PUT: 200 OK
PATCH: 200 OK
DELETE: 204 No Content //表示资源已经不存在
```

3**，关于资源重定向，一般也用不到

4**，处理客户端错误

```JS
400 Bad Reques //服务器不理解客户端的请求，未做任何处理。
401 Unauthorized //用户未提供身份验证凭据，或者没有通过身份验证。
403 Forbidden //用户通过了身份验证，但是不具有访问资源所需的权限。
404 Not Found //所请求的资源不存在，或不可用。
429 Too Many Requests //客户端的请求次数超过限额。
```

5**，处理服务端错误

```JS
500 Internal Server Error //客户端请求有效，服务器处理时发生了意外。
503 Service Unavailable //服务器无法处理请求，一般用于网站维护状态。
```





