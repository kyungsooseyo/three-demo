import * as THREE from "three";
import camera from "./camera";
import scene from "./scene";

function renderer() {
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 设置渲染器渲染阴影效果
  // renderer.setClearColor(new THREE.Color(0x000000));
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.setSize(1000, 500);
  renderer.shadowMap.enabled = true;
  //抗锯齿
  renderer.antialias = true;
  // 获取你屏幕对应的设备像素比.devicePixelRatio告诉threejs,以免渲染模糊问题
  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.setClearColor(0x444444, 1); //设置背景颜色

  renderer.render(scene, camera);
  return renderer;
}
export default renderer();
