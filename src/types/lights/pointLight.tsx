import Attentuation from "./attenuation"
import BaseLight from "./baseLight"

interface PointLight {
    base: BaseLight,
    position: THREE.Vector3,
    attenuation: Attentuation,
}

export default PointLight