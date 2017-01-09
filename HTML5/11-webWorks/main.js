/**
 * Created by Administrator on 2017/1/9.
 */
var worker = new Worker('task.js');
worker.onmessage = function (e) {
    alert(e.data);
}
worker.postMessage('haha');
console.log('ok');
