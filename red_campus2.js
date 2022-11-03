/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
campus_red2222
脚本名称:campus_red2222
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830

[rewrite_local]
^http[s]?:\/\/wecard.qq.com\/kong\/fr\/health-report\/mnp\/v1\/syncapi\/get-health-info.+$ url script-response-body https://raw.githubusercontent.com/Jchim1102/Quantumult-X/main/red_campus2.js
[mitm] 
hostname = *.qq.*

*******************************/
var obj = JSON.parse($response.body);
    obj.status= 2;
obj.hsjg.type= 4;
    $done({body: JSON.stringify(obj)});
