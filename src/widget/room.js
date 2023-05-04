//room 组件
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import scene from "./scene";
import renderer from "./render";
import camera from "./camera";

function room() {
  //纹理结合
  // const maps = new Map();
  const texLoader = new THREE.TextureLoader();
  const texture = texLoader.load("/logo.png");
  // //机柜集合
  let cabinets = [];
  //已选择的机柜
  let curCabinet = null;
  // GLTF 模型加载器
  const loader = new GLTFLoader();
  //射线投射器，可基于鼠标点和相机，在世界坐标系内建立一条射线，用于选中模型
  // const raycaster = new THREE.Raycaster();
  // //鼠标在裁剪空间中的点位
  // const pointer = new Vector2();

  loader.load("/models/machineRoom.gltf", function (gltf) {
    console.log("控制台查看加载gltf文件返回的对象结构", gltf);
    console.log("gltf对象场景属性", gltf.scene);
    gltf.scene.position.set(10, 1, 10);

    cabinets = gltf.scene.children.filter((item) => {
      // const { map, color } = item.material;
      // changeMat(item, map, color);
      return item.name.includes("cabinet");
    });
    // 返回的场景对象gltf.scene插入到threejs场景中
    scene.add(gltf.scene);
  });

  // 修改材质,不知道需不需要必须这样
  // function changeMat(obj, map, color) {
  //   if (map) {
  //     obj.material = new THREE.MeshBasicMaterial({
  //       map: crtTexture(map.name),
  //     });
  //   } else {
  //     obj.material = new THREE.MeshBasicMaterial({ color });
  //   }
  // }
  renderer.domElement.addEventListener("mousemove", function (event) {
    // .offsetY、.offsetX以canvas画布左上角为坐标原点,单位px
    const px = event.offsetX;
    const py = event.offsetY;
    //屏幕坐标px、py转WebGL标准设备坐标x、y
    const { width, height } = renderer.domElement;
    //width、height表示canvas画布宽高度
    const x = (px / width) * 2 - 1;
    const y = -(py / height) * 2 + 1;
    //创建一个射线投射器`Raycaster`
    const raycaster = new THREE.Raycaster();
    //.setFromCamera()计算射线投射器`Raycaster`的射线属性.ray
    // 形象点说就是在点击位置创建一条射线，射线穿过的模型代表选中
    raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
    //.intersectObjects([mesh1, mesh2, mesh3])对参数中的网格模型对象进行射线交叉计算
    // 未选中对象返回空数组[],选中一个对象，数组1个元素，选中两个对象，数组两个元素
    const intersect = raycaster.intersectObjects(cabinets)[0];
    console.log("射线器返回的对象", intersect);
    let intersectObj = intersect ? intersect.object : null;
    // 若之前已有机柜被选择，且不等于当前所选择的机柜，取消之前选择的机柜的高亮
    if (curCabinet && curCabinet !== intersectObj) {
      const material = curCabinet.material;
      material.setValues({
        map: texture,
      });
    }

    /* 
    若当前所选对象不为空：
      触发鼠标在机柜上移动的事件。
      若当前所选对象不等于上一次所选对象：
        更新curCabinet。
        将模型高亮。
        触发鼠标划入机柜事件。
    否则若上一次所选对象存在：
      置空curCabinet。
      触发鼠标划出机柜事件。
    */
    if (intersectObj) {
      // this.onMouseMoveCabinet(x, y);
      if (intersectObj !== curCabinet) {
        this.curCabinet = intersectObj;
        const material = intersectObj.material;
        material.setValues({
          map: texture,
        });
        // this.onMouseOverCabinet(intersectObj);
      }
    } else if (curCabinet) {
      this.curCabinet = null;
      // this.onMouseOutCabinet();
    }
    // intersects.length大于0说明，说明选中了模型
    // if (intersects.length > 0) {
    //   // 选中模型的第一个模型，设置为红色
    //   intersects[0].object.material.color.set(0xff0000);
    // }
  });
}
export default room();
