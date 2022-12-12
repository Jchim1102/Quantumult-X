
/*
[rewrite_local]
^http[s]?:\/\/wecard.qq.com\/kong\/fr\/health-report\/mnp\/v1\/syncapi\/get-health-info url script-response-body https://raw.githubusercontent.com/Jchim1102/Quantumult-X/main/blue_campus_24.js
[mitm] 
hostname = *.qq.*
*/

function timestampToTime(timestamp) {
    var date = new Date(timestamp); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000,new Date()是13位
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    return Y + M + D + h + m;
}
var time = timestampToTime(new Date());

var obj = JSON.parse($response.body);
obj.status = 1;
obj.hsjg.type = 1;
obj.hsjg.data = time;
obj.title = "已完成健康打卡";
obj.desc = "更新于：" + time;
$done({body: JSON.stringify(obj)});
