// 引入dat.gui.js的一个类GUI
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import house from './house'
// import room from './room'
import light from './light'

// 实例化一个gui对象
const gui = new GUI();
//改变交互界面style属性
gui.domElement.style.right = '0px';
gui.domElement.style.width = '300px';

console.log('ambient.intensity',light.intensity);
// 通过GUI改变mesh.position对象的xyz属性
gui.add(light, 'intensity', 0, 2.0).name('光强度');

gui.add(house.position, 'x', 0, 180);
gui.add(house.position, 'y', 0, 180);
gui.add(house.position, 'z', 0, 180);
// gui.add(room.position, 'x', 0, 180);
// gui.add(room.position, 'y', 0, 180);
// gui.add(room.position, 'z', 0, 180);