(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{177:function(t,n,e){"use strict";e.r(n);var a=e(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("p",[e("strong",[t._v("简要描述：")])]),t._v(" "),e("ul",[e("li",[t._v("访问指定的静态页面")])]),t._v(" "),e("p",[e("strong",[t._v("请求URL：")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("/view/<view-name>")])])]),t._v(" "),e("p",[e("strong",[t._v("请求方式：")])]),t._v(" "),e("ul",[e("li",[t._v("GET")])]),t._v(" "),e("p",[e("strong",[t._v("参数：")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("view-name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",[t._v("页面名字，静态页面放在/app/view目录下,暂时有 authorise、callback-app、login 这几个页面")])])])]),t._v(" "),e("p",[e("strong",[t._v("返回示例")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' \x3c!--汕头大学校园网账号登录界面--\x3e\n<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>Login</title>\n    </head>\n    <body>\n\n登录\n\n        <div>账号：\n            <input type="text" id="account">\n        </div>\n        <div>密码：\n            <input type="password" id="password">\n        </div>\n        <button id="login">登录</button>\n    </body>\n</html>\n<script>\n    let button = document.getElementById(\'login\')\n    // console.log(window.location.search);\n\n\n    button.onclick = () => {\n        // 登录，验证密码正确性\n        let user_id = 123\n        let account = document.getElementById("account").value,\n            password = document.getElementById("password").value\n        console.log(account)\n        ajaxPost(\'/oauth/login\',\'account=\'+account+\'&password=\'+password,(responseText)=>{\n            console.log(responseText)\n            responseText=JSON.parse(responseText)\n            if(responseText.code === \'0\'){\n                window.location.href = \'/view/authorise\' + window.location.search\n            }\n        })\n        // ajax 对象\n        function ajaxObject() {\n            var xmlHttp;\n            try {\n                // Firefox, Opera 8.0+, Safari\n                xmlHttp = new XMLHttpRequest();\n            }\n            catch (e) {\n                // Internet Explorer\n                try {\n                    xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");\n                } catch (e) {\n                    try {\n                        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");\n                    } catch (e) {\n                        alert("您的浏览器不支持AJAX！");\n                        return false;\n                    }\n                }\n            }\n            return xmlHttp;\n        }\n\n        // ajax post请求：\n        function ajaxPost(url, data, fnSucceed, fnFail, fnLoading) {\n            var ajax = ajaxObject();\n            ajax.open("post", url, true);\n            ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");\n            ajax.onreadystatechange = function () {\n                if (ajax.readyState === 4) {\n                    if (ajax.status === 200) {\n                        fnSucceed(ajax.responseText);\n                    }\n                    else {\n                        fnFail("HTTP请求错误！错误码：" + ajax.status);\n                    }\n                }\n            }\n            ajax.send(data);\n\n        }\n    }\n<\/script>\n')])])]),e("p",[e("strong",[t._v("返回参数说明")]),t._v("\n静态页面")]),t._v(" "),e("p",[e("strong",[t._v("备注")])]),t._v(" "),e("ul",[e("li",[t._v("更多返回错误代码请看首页的错误代码描述")])])])}],!1,null,null,null);n.default=o.exports}}]);