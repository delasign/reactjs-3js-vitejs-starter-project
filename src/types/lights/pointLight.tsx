import Attentuation from "./attenuation"
import BaseLight from "./baseLight"

interface PointLight {
    base: BaseLight,
    position: THREE.Vector3,
    attenuation: Attentuation,
}

// interface PointLight {
//     color: THREE.Color,
//     position: THREE.Vector3,
//     intensity: number,
// }
export default PointLight