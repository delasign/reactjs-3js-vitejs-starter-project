import { GUI } from "dat.gui";
import AmbientLight from "types/lights/ambientLight";

const createAmbientLightGUIFolder = (gui: GUI, name: string, ambientLight: AmbientLight) => {
    const ambientLightFolder = gui.addFolder(name)
    const color = ambientLightFolder.addFolder("Color")
    color.add(ambientLight.base.color, "r", 0, 1, 0.01)
    color.add(ambientLight.base.color, "g", 0, 1, 0.01)
    color.add(ambientLight.base.color, "b", 0, 1, 0.01)

    const intensity = ambientLightFolder.addFolder("Intensity")
    intensity.add(ambientLight.base, "ambientIntensity", 0, 5, 0.01)
    intensity.add(ambientLight.base, "diffuseIntensity", 0, 5, 0.01)
  }

export default createAmbientLightGUIFolder