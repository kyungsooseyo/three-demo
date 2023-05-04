import * as THREE from "three";
//陆地组件
function land() {
  const planeGeometry = new THREE.PlaneGeometry(200, 200, 1, 1);
  //纹理贴图加载器TextureLoader
  const texLoader = new THREE.TextureLoader();
  // .load()方法加载图像，返回一个纹理对象Texture
  const texture = texLoader.load("/land.jpg");
  const planeMaterial = new THREE.MeshLambertMaterial({
    // color: 0xcccccc,
    map: texture,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;
  // 设置投影
  plane.receiveShadow = true;

  return plane;
}

export default land();
