
/*
[rewrite_local]
^http[s]?:\/\/wecard.qq.com\/kong\/fr\/health-report\/mnp\/v1\/syncapi\/get-health-info url script-response-body https://raw.githubusercontent.com/Jchim1102/Quantumult-X/main/blue_campus_24.js
[mitm] 
hostname = *.qq.*
*/

var obj = JSON.parse($response.body);
obj.status = 1;
obj.hsjg.type = 1;
obj.title = "已完成健康打卡";
obj.desc = "更新于：2022-11-22 11:09";
$done({body: JSON.stringify(obj)});
