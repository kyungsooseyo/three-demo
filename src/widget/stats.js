//引入性能监视器stats.js
import Stats from "three/addons/libs/stats.module.js";
import renderer from "./render";
import camera from "./camera";
import scene from "./scene";

function stats() {
  //创建stats对象
  const stats = new Stats();
  //stats.domElement:web页面上输出计算结果,一个div元素，
  document.body.appendChild(stats.domElement);
  // 渲染函数
  function render() {
    //requestAnimationFrame循环调用的函数中调用方法update(),来刷新时间
    stats.update();
    renderer.render(scene, camera); //执行渲染操作
    requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
  }
  render();
}
stats();
