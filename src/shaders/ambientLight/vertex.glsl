#include "../shared/structs";

uniform AmbientLight ambientLight;
uniform vec3 geometryBaseColor;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}