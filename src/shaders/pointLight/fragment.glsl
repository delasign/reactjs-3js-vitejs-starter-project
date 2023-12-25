#include "../shared/functionality";

uniform vec3 geometryBaseColor;
uniform PointLight pointLight;
in vec3 vNormal;
in vec3 vPosition;

void main() {
    vec3 finalColor = getPointLightColor(geometryBaseColor, pointLight, vNormal, vPosition);
    gl_FragColor = vec4(finalColor, 1.0);
}