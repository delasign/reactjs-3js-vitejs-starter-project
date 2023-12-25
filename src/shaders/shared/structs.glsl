struct BaseLight {
    vec3 color;
    float ambientIntensity;
    float diffuseIntensity;
};

struct AmbientLight {
    BaseLight base;
};

struct DirectionalLight {
    BaseLight base;
    vec3 direction;
};

struct Attenuation {
    float constant;
    float linear;
    float exponential;
};

struct PointLight {
    BaseLight base;
    vec3 position;
    Attenuation attenuation;
};

struct SpotLight {
    PointLight pointLight;
    vec3 direction;
    float cutOff;
};