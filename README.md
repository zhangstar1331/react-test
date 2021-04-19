## hb-gocash

## 基本用法

1.引用hb-gocash组件

```js
//声明一个变量，将组件require到js里头，赋值给该变量
var goback = require('@hb/hb-gocash/index.js');
````css
@import url('@hb/hb-gocash/index.css');
```

2.使用

```js
//就是一个function直接使用就行
goCash({
      wxpay:
        location.origin +
        `/napi/cashier?orderId=${
          this.basicOrderId
        }&className=BasicOrderICash&userId=${encryUserId}`,
      touchpay:
        location.origin +
        `/napi/cashier?orderId=${this.basicOrderId}&className=BasicOrderICash`,
      miniprogrampay: `../payment/payment?orderId=${
        this.encryOrderId
      }&className=${encryClassName}&userId=${encryUserId}`,
      appCashParams: {
        nativeMethod: "goCash",
        orderNumber: this.basicOrderId+"",
        orderName: "专家开药门诊",
        drName: "",
        totalPayment: this.price+"",
        payTime: -1,
        serviceType: "MDCLINIC",
        lastPageClassName: "BasicOrderICash",
        succUrl:
          "hdf://medicineOrder/paySuccess?lightClinicOrderId=" +
          lightOrderId,
        failUrl:
          "hdf://medicineOrder/orderDetails?lightClinicOrderId=" +
          lightOrderId,
        backUrl:
          "hdf://medicineOrder/orderDetails?lightClinicOrderId=" +
          lightOrderId,
        timeOutUrl:
          "hdf://medicineOrder/orderDetails?lightClinicOrderId=" +
          lightOrderId
      });
wxpay:微信环境跳转微信收银台的链接;
touchpay:触屏环境跳转触屏收银台的链接;
miniprogrampay:小程序收银台跳转链接;
appCashParams 客户端跳转收银台需要的参数
 nativeMethod  客户端方法名
 orderNumber 统一订单ID
 orderName  统一订单名称
 totalPayment  订单价格
 serviceType  
 lastPageClassName  className
 succUrl  客户端支付成功
 failUrl  客户端支付失败
 backUrl  客户端收银台返回
 timeOutUrl 客户端支付超时
```

## 安装

```
npm install @hb/hb-gocash
```
## 版本改进

* v1.0.0
    + 根据平台跳转对应的收银台
* v1.0.1
    + 添加小程序收银台跳转
* v2.0.1
    + 修改环境判断及跳转位置
* v2.0.2
	+ 添加客户端收银台方法名字的配置   
 * v3.0.0
    + 修改客户端获取收银台信息的方式  
* v3.0.1
  + 将订单编号和价格默认为字符串  升级依赖isminiprogram 版本     
* v3.0.2
  + feature: 第三方小程序跳转至支付引导页 
* v3.0.3
  + feature: 第三方小程序增加0元订单跳转至收银台，非0元订单跳转至第三方引导页    
* v3.1.0
  + feature: 第三方小程序跳转至引导页，携带orderId参数    
* v3.1.1
  + chore: 删除无用的toast,loading依赖
* v3.1.2
  + feature: 添加日志，以及navigateTo跳转小程序失败提示信息 
* v3.1.3
  + feature: 修改h5跳转小程序原生的方式，不再使用微信sdk跳转（此方式偶有跳转失败）
* v3.1.4
  + feature: 替换写死的跳转域名
* v3.1.5
  + feature: css修改
* v3.1.6
  + feature: 第三方合作伙伴跳转到自己的收银台
    
## 作者

**zhongtai**

## License

Copyright 2017 haodf.fed, Inc.
