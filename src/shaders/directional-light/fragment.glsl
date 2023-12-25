#include "../shared/functionality";

uniform DirectionalLight directionalLight;
uniform vec3 geometryBaseColor;
in vec3 vNormal;

void main() {
    gl_FragColor = getDirectionalLightColor(geometryBaseColor, directionalLight, vNormal);
}