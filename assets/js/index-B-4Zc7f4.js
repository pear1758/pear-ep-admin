import{d as Y,bO as w,aI as _,aK as V,aP as s,o as k,b as y,w as d,I as e,bu as a,u,cf as R,cg as C,ch as x,H as i,aG as N,aD as E,bC as I}from"./index-CUD07q8U.js";const v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAmCAYAAAAycj4zAAAEIElEQVR42u2bf0gTYRjHJYiKiIhiJkFkmCJBEQUR/iFRkVGRhBQVUf2ZZQoVJGFmIpUYTgspk5B+YGmUhJH9tLJSYmSbPzYtm+WvETqbyuZ22572Tu7ldtttd+ftdjfugQeO97648f34vs/zvLAYUEJSEaNYoAAJa3yo2OKXUQFkU2u2X8oBBpd1WQAJZr6UwYQyXS5QYuiGswmpQWFrNpNOHVvNKkUFwtVkKUGZCRAuRosBJSaYuSl7CgWHos08j5Mab1eVMiYfo21mgOYCJ9xPdcCN5XYoi7ODWjWdkt4hoWAIDYUOhI3pbDRUKNYRgNtrHBgAPSVdQyIJhM1/Px0MGyhN55zY/Nc5BDSpd8mny4r0DuEabKBUJP7BQN5dS5fXHBJtQFCUL5PH8RT1RxYu0qooAfJo1iKcCAQxMQlnknbA86QNUDdHBY/nx0HT5t3Q96BWuKKeWApfthVBd2EZ6LIuQHv2RegtrYIxjY5TUaeDCHdB/67NwInC5bLB8HAN6A1ZoNXtB137QfjZmw/msY/8214qkK1pufBi9UafNWp+2nsYUj5nzajtdU3Z4UfJLZ81arakFXHaRZECQhAWMBiyfdaoaewrBrfbyX0w9DE8/RBULlgBw41vwO1yeRM9NySswxpN5ukZAemrqoHuousw2fMLPN/Y+xkj71t8NNb+IVZ/11pegZMKgLpOptBAjMar0KU/AePjbZ43bm+iZ7RGavoHKrlfnVCBPF0cD9YBfzNspr9wd2Es1lk6DbyB6PNKwGmb8tMM1b/Emv57T1iB4FJDhABDBdLecQQcjlE/DUH8874jdTZbP38gnYXFMJg8EfBysaPgCtZ9y8nlDWS0+Wtgw34PYo3hklryQEymOkadyVSLdQODd/gD6Ylv9ZqPoNBvecfadFj3an0qbyCOMUtgkef4IjWoyEv9yLJajczfy/OO1HX3nOUPZCB52iz6LvH6RRBYhzqvcMwhpEZ3Mo+zWWK0vb5dlptRh4o5qUOdF28gJIhAQKha1A6HEwifAVJ8IOy0qB3mDQR1PGTQoYi5Q+QBRIQdYta0MQIRqoZECxCrtTf8NQR1UkxAhOqyogUI6qTC3mWhOcQ2ZPIDgtbqVQmCzCHRAmR6DjH7adBaR+cxYeYQNKmjqXywodHbcaGagp4bVq4VbFKPFiDkpG6xaPCkjp679MeFm9TtI6Mh77JQcVeAZADhHBf+LosOxDv6T0xCe/5leDZ3PdTOXhLwtlcBQrntNT0EveGUp73dx+u2V3WzKzgQpqKuBLc5RAEiUyAhjywFiAJEAcL3LksBIgKQunlLcUYCyNHuJpxSD63uAM6wAQl0TIkFhA4hklC2V+/0S7Ei6A92IgUjklCYzBcLSsR/QRXKdDGhhDJdDCgKEI5mhxvKfwXRebmfQ5hoAAAAAElFTkSuQmCC",c=n=>(N("data-v-79b67311"),n=n(),E(),n),D={class:"login"},K={class:"login-form"},H=c(()=>d("h2",{class:"title"},"Ep-Admin",-1)),J=c(()=>d("img",{src:v,class:"code-img"},null,-1)),Z=c(()=>d("div",{class:"copyright-wrap"},[d("p",{class:"en"},"copyright@2023 ep-admin All Rights Reserved"),d("p",{class:"cn"},"ep-admin 版权所有")],-1)),j=Y({__name:"index",setup(n){const g=w(),o=_({username:"Admin",password:"123456",remember:!0,code:"phfp"}),m=V(!1),h=_({username:[{required:!0,message:"请输入用户名"}],password:[{required:!0,message:"请输入密码"}],remember:[{required:!1}],code:[{required:!0,message:"请输入验证码"}]});function B(){o.username=="Admin"&&o.password=="123456"&&o.code=="phfp"&&(m.value=!0,setTimeout(()=>{m.value=!1,localStorage.setItem("token","test-token"),g.push("/home")},1e3))}return(O,t)=>{const p=s("el-input"),r=s("el-form-item"),f=s("el-col"),Q=s("el-row"),b=s("el-checkbox"),A=s("el-button"),U=s("el-form");return k(),y("div",D,[d("div",K,[H,e(U,{model:o,rules:h},{default:a(()=>[e(r,{prop:"username"},{default:a(()=>[e(p,{modelValue:o.username,"onUpdate:modelValue":t[0]||(t[0]=l=>o.username=l),"prefix-icon":u(R),placeholder:"账号",size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),e(r,{prop:"password"},{default:a(()=>[e(p,{modelValue:o.password,"onUpdate:modelValue":t[1]||(t[1]=l=>o.password=l),"prefix-icon":u(C),placeholder:"密码",size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),e(r,{prop:"code",class:"code-item"},{default:a(()=>[e(Q,{gutter:12},{default:a(()=>[e(f,{span:17},{default:a(()=>[e(p,{modelValue:o.code,"onUpdate:modelValue":t[2]||(t[2]=l=>o.code=l),"prefix-icon":u(x),placeholder:"验证码",size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),e(f,{span:7},{default:a(()=>[J]),_:1})]),_:1})]),_:1}),e(r,{prop:"remember",class:"reme-item"},{default:a(()=>[e(b,{modelValue:o.remember,"onUpdate:modelValue":t[3]||(t[3]=l=>o.remember=l)},{default:a(()=>[i("记住我")]),_:1},8,["modelValue"]),e(A,{type:"primary",link:""},{default:a(()=>[i("忘记密码?")]),_:1})]),_:1}),e(r,null,{default:a(()=>[e(A,{type:"primary",loading:m.value,style:{width:"100%"},size:"large",onClick:B},{default:a(()=>[i("登录")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])]),Z])}}}),L=I(j,[["__scopeId","data-v-79b67311"]]);export{L as default};
