#include "../shared/structs";

uniform SpotLight spotLight;
uniform vec3 geometryBaseColor;
out vec3 vNormal;
out vec3 vPosition;

void main() {
    vNormal = normal;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}