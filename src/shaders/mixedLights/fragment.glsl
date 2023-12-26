#include "../shared/functionality";

uniform vec3 geometryBaseColor;
uniform PointLight pointLight;
uniform SpotLight spotLight;
in vec3 vNormal;
in vec3 vPosition;

void main() {
    vec4 finalColor = vec4(getPointLightColor(geometryBaseColor, pointLight, vNormal, vPosition),1.0);

    finalColor = finalColor + getSpotLightColor(geometryBaseColor, spotLight, vNormal, vPosition);
    gl_FragColor = finalColor;
}