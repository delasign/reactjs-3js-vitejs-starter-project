// MARK: NPM Modules
// @ts-ignore
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { GUI } from 'dat.gui'


// MARK: Redux
// MARK: Types
import GUIThreeHexColor from "types/GUI/GUIThreeHexColor";
import AmbientLight from "types/lights/ambientLight";
// MARK: Components
// MARK: Shaders
import vertexShader from "shaders/ambient-light/vertex.glsl";
import fragmentShader from "shaders/ambient-light/fragment.glsl";
// MARK: Functionality
// MARK: Utils
import createAmbientLightGUIFolder from "utils/GUI/ambientLight";
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


  // Ambient Light
  const ambientLight: AmbientLight = {
    base: {
      color: new THREE.Color("#9747FF"),
      ambientIntensity: 1,
      diffuseIntensity: 1
    }
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
      ambientLight: {value: ambientLight },
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

    createAmbientLightGUIFolder(gui, "Ambient Light", ambientLight)
  }

  // MARK: Render
  return <Container ref={containerRef}></Container>;
};

export default Scene;