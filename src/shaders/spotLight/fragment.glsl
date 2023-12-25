#include "../shared/functionality";

uniform SpotLight spotLight;
uniform vec3 geometryBaseColor;
in vec3 vNormal;
in vec3 vPosition;

void main() {
    gl_FragColor = getSpotLightColor(geometryBaseColor, spotLight, vNormal, vPosition);
}