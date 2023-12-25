import BaseLight from "./baseLight";

interface DirectionalLight {
    base: BaseLight,
    direction: THREE.Vector3
}
export default DirectionalLight