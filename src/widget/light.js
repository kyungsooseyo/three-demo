import * as THREE from "three";
import scene from "./scene";

//陆地组件
function spotLight() {
  var pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(-40, 60, -10);

  // 光源辅助观察
  const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
  scene.add(pointLightHelper);

  // 设置投影
  pointLight.castShadow = true;
  return pointLight;
}
export default spotLight();
