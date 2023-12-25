#include "../shared/functionality";

uniform AmbientLight ambientLight;
uniform vec3 geometryBaseColor;

void main() {
    gl_FragColor = getAmbientLightColor(geometryBaseColor, ambientLight);
}