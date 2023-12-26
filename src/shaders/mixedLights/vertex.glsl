#include "../shared/structs"

uniform vec3 geometryBaseColor;
uniform PointLight pointLight;
uniform SpotLight spotLight;
out vec3 vNormal;
out vec3 vPosition;

void main() {
    vNormal = normal;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}