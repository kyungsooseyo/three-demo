<template>
  <div id="app">
    <div id="webgl"></div>
  </div>
</template>
<script>
// import { onMounted, reactive, ref } from 'vue'
// 引入three.js
// import * as THREE from "three";
import land from "./widget/land";
import house from "./widget/house";
import scene from "./widget/scene";
// import camera from "./widget/camera";
import "./widget/event.js";
import light from "./widget/light";
import axesHelper from "./widget/axes";
import "./widget/stats.js";
import "./widget/gui"
import "./widget/room"
// import { MeshBasicMaterial, MeshStandardMaterial, Mesh, PerspectiveCamera, Raycaster, Scene, Texture, TextureLoader, WebGLRenderer, Vector2, RepeatWrapping, Color } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import renderer from "./widget/render";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default {
  data() {
    return {
      scene: null,
    };
  },
  mounted() {
    scene.add(house);
    scene.add(land);
    // const axesHelper = new THREE.AxesHelper(150);
    scene.add(axesHelper);
    // const camera = cameraFn(scene);

    // //添加光源
    scene.add(light);
    // scene.add(axes)

    // const controls = new OrbitControls(camera, render.domElement);
    // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
    // controls.addEventListener("change", function () {
    //   render.render(scene, camera); //执行渲染操作
    // }); //监听鼠标、键盘事件
    // render.render(scene, camera); //执行渲染操作
    // renderer.setClearColor(new THREE.Color(0x000000, 1.0));
    // renderer.shadowMap.enabled = true;
    document.getElementById("webgl")?.appendChild(renderer.domElement);
  },
};
</script>
