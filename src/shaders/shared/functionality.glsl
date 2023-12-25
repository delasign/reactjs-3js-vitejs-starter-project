#include "./structs"

vec4 getAmbientLightColor(vec3 materialColor, AmbientLight ambientLight) {
    vec4 baseColor = vec4(materialColor, 1.0);
    vec4 lightColor = vec4(ambientLight.base.color, 1.0);
    return baseColor * lightColor * ambientLight.base.ambientIntensity * ambientLight.base.diffuseIntensity;
}

vec4 getDirectionalLightColor(vec3 materialColor, DirectionalLight directionalLight, vec3 vNormal) {
    vec4 baseColor = vec4(materialColor, 1.0);
    vec4 ambientColor = vec4(directionalLight.base.color * directionalLight.base.ambientIntensity, 1.0);
    float diffuseFactor = dot(vNormal, -directionalLight.direction);

    vec4 diffuseColor;

    if (diffuseFactor > 0.0) {
        diffuseColor = vec4(directionalLight.base.color * directionalLight.base.diffuseIntensity * diffuseFactor, 1.0f);
    } else {
        diffuseColor = vec4(0, 0, 0, 0);
    }

    return baseColor * (ambientColor + diffuseColor);
}

vec3 getPointLightColor(vec3 materialColor, PointLight pointLight, vec3 vNormal, vec3 vPosition) {
    vec3 lightDirection = normalize(pointLight.position - vPosition);
    float distance = length(lightDirection);

    // Calculate the Lambertian reflection (diffuse reflection)
    float lambertian = max(dot(vNormal, lightDirection), 0.0);

    float attenuation =  pointLight.attenuation.constant + pointLight.attenuation.linear * distance + pointLight.attenuation.exponential * distance * distance;

    // Combine the fragment color with the light color and Lambertian reflection
    return lambertian * pointLight.base.color / attenuation * materialColor.xyz * pointLight.base.ambientIntensity * pointLight.base.diffuseIntensity;
}

vec4 getSpotLightColor(vec3 materialColor, SpotLight spotLight, vec3 vNormal, vec3 vPosition) {
    vec3 lightDirection = normalize(spotLight.pointLight.position - vPosition);
    // Calculate the Lambertian reflection (diffuse reflection)
    float lambertian = dot(spotLight.direction, lightDirection);

    // Combine the fragment color with the light color and Lambertian reflection
    vec3 pointLightFinalColor = getPointLightColor(materialColor, spotLight.pointLight, vNormal, vPosition);

    if (lambertian > spotLight.cutOff) {
        vec3 spotLightFinalColor = pointLightFinalColor * (1.0 - (1.0 - lambertian) * 1.0/(1.0 - spotLight.cutOff));
        return vec4(spotLightFinalColor, 1.0);
    } else {
        return vec4(0,0,0, 0);
    }
}