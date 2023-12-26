// MARK: NPM Modules
// @ts-ignore
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { GUI } from 'dat.gui'


// MARK: Redux
// MARK: Types
import GUIThreeHexColor from "types/GUI/GUIThreeHexColor";
import SpotLight from "types/lights/spotLight";
import PointLight from "types/lights/pointLight";
// MARK: Components
// MARK: Shaders
import vertexShader from "shaders/mixedLights/vertex.glsl";
import fragmentShader from "shaders/mixedLights/fragment.glsl";
// MARK: Functionality
// MARK: Utils
import createSpotLightGUIFolder from "utils/GUI/spotLight";
import createPointLightGUIFolder from "utils/GUI/pointLight";
// MARK: Styled Components

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: none;
`;

// MARK: React Component
// Props
interface Props {}

// Component
const Scene = ({}: Props) => {
  // MARK: Refs
  const containerRef: any = useRef(null);

  // MARK: State Variables
  // MARK: Use Effects

  useEffect(() => {
    // componentDidMount events
    // Render the scene
    renderScene();
    setupGUI();
    // Add the resize listener
    window.addEventListener("resize", onWindowResize, false);

    return () => {
      // componentWillUnmount events
      // Make sure to remove the renderer from the container, to avoid ThreeJS drawing an additional canvas everytime you make changes to the code.
      containerRef.current.removeChild(renderer.domElement);
      gui.destroy()
      // Remove the event listener
      window.removeEventListener("resize", onWindowResize, false);
    };
  }, []);

  // MARK: Variables
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer();
  const camera = new THREE.PerspectiveCamera();

  // Point Light
  const pointLight: PointLight = {
    base: {
      color: new THREE.Color("#9747FF"),
      ambientIntensity: 2.64,
      diffuseIntensity: 1
    },
    position: new THREE.Vector3(0, 1.0, 0.3),
        attenuation: {
          constant: 1,
          linear: 1,
          exponential: 1
        }
  }

  // Spot Light
  const spotLight: SpotLight = {
    pointLight: {
      base: {
        color: new THREE.Color(0.44, 0.56, 1),
        ambientIntensity: 2.64,
        diffuseIntensity: 1
      },
      position: new THREE.Vector3(0.1, -0.57, 0.33),
          attenuation: {
            constant: 1,
            linear: 1,
            exponential: 0.59
          }
    },
    direction: new THREE.Vector3(0, 1.0, 0.59),
    cutOff: 0.59
  }

  // Color
  const geometryBaseColor: GUIThreeHexColor = {
    hex: "#FFFFFF"
  }

  // Shader Material
  const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
      spotLight: {value: spotLight },
      pointLight: { value: pointLight },
      geometryBaseColor: { value: new THREE.Color(geometryBaseColor.hex) }
    }
  });

  const gui = new GUI();

  // MARK: Functionality
  const renderScene = () => {
    // Clear the Scene
    scene.clear();
    // Create a scene, camera, and renderer
    camera.fov = 75;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.near = 0.1;
    camera.far = 1000;
    // Set up the renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a plane that matches the camera view
    const planeGeometry = new THREE.PlaneGeometry(2, 2);
    const plane = new THREE.Mesh(planeGeometry, shaderMaterial);

    // Add the Plane
    scene.add(plane);

    // Position the camera
    camera.position.z = 5;
    renderer.render(scene, camera);

    // Animate
    animate()
  };
  // When the window resizes adapt the scene
  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  // Create an animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.clear();
    renderer.render(scene, camera);
  };

  // GUI
  const setupGUI = () => {
    const colorFolder = gui.addFolder("Base Color")
    // Hex Color Selector
    const color = colorFolder.addColor(geometryBaseColor, "hex")
    color.onChange((value) => {
      shaderMaterial.uniforms.geometryBaseColor.value = new THREE.Color(value)
    })

    createSpotLightGUIFolder(gui, "Spot Light", spotLight)
    createPointLightGUIFolder(gui, "Point Light", pointLight)
  }

  // MARK: Render
  return <Container ref={containerRef}></Container>;
};

export default Scene;