import PointLight from "types/lights/pointLight";
import { GUI } from "dat.gui";

const createPointLightGUIFolder = (gui: GUI, name: string, pointLight: PointLight) => {
    const pointLightFolder = gui.addFolder(name)
    const position = pointLightFolder.addFolder("Position")
    position.add(pointLight.position, "x", -5, 5, 0.1)
    position.add(pointLight.position, "y", -5, 5, 0.1)
    position.add(pointLight.position, "z", -5, 5, 0.1)

    const color = pointLightFolder.addFolder("Color")
    color.add(pointLight.base.color, "r", 0, 1, 0.01)
    color.add(pointLight.base.color, "g", 0, 1, 0.01)
    color.add(pointLight.base.color, "b", 0, 1, 0.01)

    const intensity = pointLightFolder.addFolder("Intensity")
    intensity.add(pointLight.base, "ambientIntensity", 0, 5, 0.01)
    intensity.add(pointLight.base, "diffuseIntensity", 0, 5, 0.01)

    const attenuation = pointLightFolder.addFolder("Attenuation")
    attenuation.add(pointLight.attenuation, "constant", 0, 1, 0.01)
    attenuation.add(pointLight.attenuation, "linear", 0, 1, 0.01)
    attenuation.add(pointLight.attenuation, "exponential", 0, 1, 0.01)
  }

  export default createPointLightGUIFolder