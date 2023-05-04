import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import render from "./render";
import camera from "./camera";
import scene from "./scene";

// function controls() {
  const controls = new OrbitControls(camera, render.domElement);
  //  如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
  controls.addEventListener("change", function () {
    render.render(scene, camera); //执行渲染操作
  }); //监听鼠标、键盘事件
// }
// controls();
