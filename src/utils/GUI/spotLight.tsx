import { GUI } from "dat.gui";
import SpotLight from "types/lights/spotLight";

const createSpotLightGUIFolder = (gui: GUI, name: string, spotLight: SpotLight) => {
    const spotLightFolder = gui.addFolder(name)
    const position = spotLightFolder.addFolder("Position")
    position.add(spotLight.pointLight.position, "x", -10, 10, 0.01)
    position.add(spotLight.pointLight.position, "y", -10, 10, 0.01)
    position.add(spotLight.pointLight.position, "z", -10, 10, 0.01)

    const color = spotLightFolder.addFolder("Color")
    color.add(spotLight.pointLight.base.color, "r", 0, 1, 0.01)
    color.add(spotLight.pointLight.base.color, "g", 0, 1, 0.01)
    color.add(spotLight.pointLight.base.color, "b", 0, 1, 0.01)

    const intensity = spotLightFolder.addFolder("Intensity")
    intensity.add(spotLight.pointLight.base, "ambientIntensity", 0, 5, 0.01)
    intensity.add(spotLight.pointLight.base, "diffuseIntensity", 0, 5, 0.01)

    const attenuation = spotLightFolder.addFolder("Attenuation")
    attenuation.add(spotLight.pointLight.attenuation, "constant", 0, 1, 0.01)
    attenuation.add(spotLight.pointLight.attenuation, "linear", 0, 1, 0.01)
    attenuation.add(spotLight.pointLight.attenuation, "exponential", 0, 1, 0.01)

    const direction = spotLightFolder.addFolder("Direction")
    direction.add(spotLight.direction, "x", -90, 90, 0.01)
    direction.add(spotLight.direction, "y", -90, 90, 0.01)
    direction.add(spotLight.direction, "z", -90, 90, 0.01)

    const cutOff = spotLightFolder.addFolder("Cut Off")
    cutOff.add(spotLight, "cutOff", 0, 1, 0.01)
  }

export default createSpotLightGUIFolder