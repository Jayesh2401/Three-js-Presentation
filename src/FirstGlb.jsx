import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function FirstGlb() {
  const canvasRef = useRef(null);
  let clock = new THREE.Clock();

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("grey");

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const loader = new GLTFLoader();
    let mixer = null;

    loader.load(
      "phoenix_bird.glb",
      (gltf) => {
        const animations = gltf.animations;
        if (animations && animations.length) {
          mixer = new THREE.AnimationMixer(gltf.scene);
          const animationAction = mixer.clipAction(animations[0]);
          animationAction.setLoop(THREE.LoopRepeat);
          animationAction.play();
          mixer.timeScale = 0.9;
        }

        gltf.scene.add(new THREE.AmbientLight("#fff", 0.8));

        scene.add(gltf.scene);

        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = new THREE.Vector3();
        box.getCenter(center);
        camera.position.set(center.x + 200, center.y, -box.max.z - 200);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(center.x, center.y, center.z);
        controls.update();
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    const ambientLight = new THREE.AmbientLight("#fff", 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight("white", 0.5);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) {
        mixer.update(delta);
      }
      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} />;
}

export default FirstGlb;
