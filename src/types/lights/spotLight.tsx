import PointLight from "./pointLight";

interface SpotLight {
    pointLight: PointLight;
    direction: THREE.Vector3;
    cutOff: number;
}

export default SpotLight