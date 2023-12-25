#include "../shared/structs";

uniform DirectionalLight directionalLight;
uniform vec3 geometryBaseColor;
out vec3 vNormal;

void main() {
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}