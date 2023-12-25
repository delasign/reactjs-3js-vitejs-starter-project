import { GUI } from "dat.gui";
import DirectionalLight from "types/lights/directionalLight";

const createDirectionalLightGUIFolder = (gui: GUI, name: string, directionalLight: DirectionalLight) => {
    const directionalLightFolder = gui.addFolder("Directional Light")
    const position = directionalLightFolder.addFolder("Direction")
    position.add(directionalLight.direction, "x", -10, 0, 0.1)
    position.add(directionalLight.direction, "y", -10, 0, 0.1)
    position.add(directionalLight.direction, "z", -10, 0, 0.1)

    const color = directionalLightFolder.addFolder("Color")
    color.add(directionalLight.base.color, "r", 0, 1, 0.01)
    color.add(directionalLight.base.color, "g", 0, 1, 0.01)
    color.add(directionalLight.base.color, "b", 0, 1, 0.01)

    const intensity = directionalLightFolder.addFolder("Intensity")
    intensity.add(directionalLight.base, "ambientIntensity", 0, 5, 0.01)
    intensity.add(directionalLight.base, "diffuseIntensity", 0, 5, 0.01)
  }

export default createDirectionalLightGUIFolder