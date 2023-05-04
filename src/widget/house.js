import * as THREE from "three";
//陆地组件
function house() {
  var geometry = new THREE.BoxGeometry(5, 4, 4);
  //受光照音响，所以需要有光源才能看见
  const texLoader = new THREE.TextureLoader();
  // .load()方法加载图像，返回一个纹理对象Texture
  const texture = texLoader.load("/logo.png");

  var material = new THREE.MeshLambertMaterial({
    map: texture,
  });
  var cube = new THREE.Mesh(geometry, material);
  cube.position.x = 0;
  cube.position.y = 2;
  cube.position.z = 0;

  // 设置投影
  cube.castShadow = true;
  return cube;
}
export default house();
