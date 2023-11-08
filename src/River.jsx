import { TweenMax } from "gsap";
import { useEffect, useRef } from "react";
import Stats from "stats.js";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Sky } from "three/examples/jsm/objects/Sky.js";
import { Water } from "three/examples/jsm/objects/Water.js";
import { BloomPass } from "three/examples/jsm/postprocessing/BloomPass.js";
import { EffectComposer } from "/node_modules/three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "/node_modules/three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";

function River() {
  const riverRef = useRef(null);
  let  water, sun;
  let  mixer, bird, fish;

  useEffect(() => {
    const canvas = riverRef.current;
    const screen = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    let clock = new THREE.Clock();
    const renderer = new THREE.WebGL1Renderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0.0);
    renderer.autoClear = false;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.setSize(screen.width, screen.height);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("purple");
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.set(30, 20, 100);
    scene.add(camera);

    sun = new THREE.Vector3(0, 0, 0);

    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.minPolarAngle = Math.PI / 2.5;
    controls.maxPolarAngle = Math.PI / 2.3;
    controls.minDistance = 100;
    controls.maxDistance = 150;

    water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load(
        "waternormals.jpg",
        function (texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }
      ),
      sunDirection: new THREE.Vector3(),
      sunColor: "red",
      waterColor: "Plum",
      distortionScale: 3.7,
      fog: scene.fog !== undefined,
    });

    water.rotation.x = -Math.PI / 2;

    scene.add(water);

    const sky = new Sky();
    sky.scale.setScalar(20000);

    scene.add(sky);

    const skyUniforms = sky.material.uniforms;

    skyUniforms["turbidity"].value = 15;
    skyUniforms["rayleigh"].value = 2;
    skyUniforms["mieCoefficient"].value = 0.001;
    skyUniforms["mieDirectionalG"].value = 0.5;

    const parameters = {
      elevation: 3,
      azimuth: 200,
    };

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    let renderTarget;

    function updateSun() {
      const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
      const theta = THREE.MathUtils.degToRad(parameters.azimuth);

      sun.setFromSphericalCoords(1, phi, theta);

      sky.material.uniforms["sunPosition"].value.copy(sun);
      water.material.uniforms["sunDirection"].value.copy(sun).normalize();

      if (renderTarget !== undefined) renderTarget.dispose();

      renderTarget = pmremGenerator.fromScene(sky);

      scene.environment = renderTarget.texture;
    }

    updateSun();
    const textureLoader = new THREE.TextureLoader();
    const loader = new GLTFLoader();
    loader.load("cloud_test.glb", (gltf) => {
      const root = gltf.scene;
      root.position.y = 350;
      root.position.x = 10;
      root.position.z = -1500;
      root.scale.set(30, 10, 5);
      scene.add(root);
    });
    loader.load("cloud_test.glb", (gltf) => {
      const root = gltf.scene;
      root.position.y = 350;
      root.position.x = -1500;
      root.position.z = -1500;
      root.scale.set(30, 10, 5);
      scene.add(root);
    });
    loader.load("cloud_test.glb", (gltf) => {
      const root = gltf.scene;
      root.position.y = 300;
      root.position.x = -900;
      root.position.z = -1500;
      root.scale.set(10, 5, 5);
      scene.add(root);
    });
    loader.load("cloud_test.glb", (gltf) => {
      const root = gltf.scene;
      root.position.y = 170;
      root.position.x = 700;
      root.position.z = -1500;
      root.scale.set(80, 50, 5);
      scene.add(root);
    });

    loader.load("cloud_test.glb", (gltf) => {
      const root = gltf.scene;
      root.position.y = 120;
      root.position.x = -700;
      root.position.z = -1500;
      root.scale.set(40, 25, 5);
      scene.add(root);
    });


    loader.load("boat.glb", (gltf) => {
      const root = gltf.scene;
      root.position.x = -500;
      root.position.y = -1;
      root.position.z = -400;
      root.rotation.y = Math.PI / 4;
      root.scale.set(0.1, 0.1, 0.1);
      const duration = 40; // seconds
      const endX = 200;
      const endY = -1;
      const endZ = -100;

      TweenMax.to(root.position, duration, {
        x: endX,
        y: endY,
        z: endZ,
        ease: "ease",
        repeat: -1,
        yoyo: true,
      });

      scene.add(root);
    });

    loader.load("ship.glb", (gltf) => {
      const root = gltf.scene;
      root.position.x = 100;
      root.position.y = -76;
      root.position.z = -500;
      root.rotation.y = Math.PI / 6;
      root.scale.set(5, 5, 5);
      const duration = 50; // seconds
      const endX = -400;
      const endY = -76;
      const endZ = -100;

      TweenMax.to(root.position, duration, {
        x: endX,
        y: endY,
        z: endZ,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      });

      scene.add(root);
    });

    loader.load("the_fish_particle.glb", (gltf) => {
        console.log(gltf);
      const root = gltf.scene;

      root.rotation.y = Math.PI / 6;

      fish = new THREE.AnimationMixer(root);
      const clipAction = fish.clipAction(gltf.animations[0]);
      clipAction.play();
      clipAction.timeScale = 0.4;

      root.scale.set(50, 0.1, 50);
      scene.add(root);
    });

    loader.load("birds.glb", (gltf) => {
      const root = gltf.scene;
      root.position.y = 120;
      root.position.z = 10;

        mixer = new THREE.AnimationMixer(root);
        const clipAction = mixer.clipAction(gltf.animations[0]);
        clipAction.play();
      root.scale.set(50, 0.1, 50);
      const duration = 35; // seconds
      const endX = 200;
      const endY = 76;
      const endZ = -1500;

      TweenMax.to(root.position, duration, {
        x: endX,
        y: endY,
        z: endZ,
        ease: "linear",
      });

      scene.add(root);
    });

    loader.load("white_eagle_animation_fast_fly.glb", (gltf) => {
      const root = gltf.scene;
      root.position.x = 700;
      root.position.y = 120;
      root.position.z = -800;
      root.rotation.x = Math.PI * 2;
      root.rotation.y = Math.PI;

      bird = new THREE.AnimationMixer(root);
      const clipAction = bird.clipAction(gltf.animations[0]);
      clipAction.timeScale = 0.4;
      clipAction.play();
      root.scale.set(1, 1, 1);
      const duration = 20; // seconds
      const endX = -1900;
      const endY = 250;
      const endZ = -900;

      TweenMax.to(root.position, duration, {
        x: endX,
        y: endY,
        z: endZ,
        ease: "linear",
      });

      scene.add(root);
    });

    const directionalLight = new THREE.DirectionalLight(0xffeedd);
    directionalLight.position.set(0, 0, 1);
    scene.add(directionalLight);

    const stats = new Stats();
    stats.showPanel(0);
    document.body.appendChild(stats.dom);


    const pointLight = new THREE.PointLight("yellow", 2, 50, 100);
    pointLight.position.set(-1000, 200, -1000);
    scene.add(pointLight);

    const pointLightHelper = new THREE.PointLightHelper(pointLight);
    scene.add(pointLightHelper);


    const composer = new EffectComposer(renderer);

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    composer.addPass(bloomPass);
    const finalPass = new BloomPass(
      1, // strength
      25, // kernel size
      4, // sigma ?
      2560 // blur render target resolution
    );
    finalPass.renderToScreen = true;
    composer.addPass(finalPass);
    const positionRange = {
      min: new THREE.Vector3(-1500, 120, -1200),
      max: new THREE.Vector3(500, 240, 800),
    };

    const starGeometry = new THREE.SphereGeometry(1, 24, 24);
    const starMaterial = new THREE.MeshBasicMaterial({
      color: "white",
      transparent: true,
      opacity: 1,
    });
    const starGlowMaterial = new THREE.MeshBasicMaterial({
      color: "white",
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    const starShinyMaterial = new THREE.MeshBasicMaterial({
      color: "black",
      transparent: true,
      opacity: 1,
    });
    const starGroup = new THREE.Group();
    for (let i = 0; i < 100; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      const starGlow = new THREE.Mesh(starGeometry, starGlowMaterial);
      star.scale.setScalar(0.1);
      starGlow.scale.setScalar(1);

      star.position.set(
        Math.max(
          Math.min(
            Math.random() * (positionRange.max.x - positionRange.min.x) +
              positionRange.min.x,
            positionRange.max.x
          ),
          positionRange.min.x
        ),
        Math.max(
          Math.min(
            Math.random() * (positionRange.max.y - positionRange.min.y) +
              positionRange.min.y,
            positionRange.max.y
          ),
          positionRange.min.y
        ),
        Math.max(
          Math.min(
            Math.random() * (positionRange.max.z - positionRange.min.z) +
              positionRange.min.z,
            positionRange.max.z
          ),
          positionRange.min.z
        )
      );
      starGlow.scale.setScalar(2);
      starGlow.position.copy(star.position);
      starGroup.add(star);
      starGroup.add(starGlow);
    }
    scene.add(starGroup);


    let shinyIndices = new Set();

    setInterval(() => {
      shinyIndices.forEach((index) => {
        starGroup.children[index].material = starGlowMaterial;
      });

      shinyIndices.clear();
      while (shinyIndices.size < 25) {
        const randomIndex = Math.floor(Math.random() * 50);
        shinyIndices.add(randomIndex);
      }

      shinyIndices.forEach((index) => {
        starGroup.children[index].material = starShinyMaterial;
      });
    }, 1500);

    function render() {
      stats.update();
      const delta = clock.getDelta();
      if (mixer) {
        mixer.update(delta);
      }
      if (bird) {
        bird.update(delta);
      }
      if (fish) {
        fish.update(delta);
      }
      water.material.uniforms["time"].value += 1.0 / 60.0;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    function handleResize() {
      const { innerWidth, innerHeight } = window;
      renderer.setSize(innerWidth, innerHeight);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.removeChild(stats.dom);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={riverRef} className="riverRef"></canvas>;
}

export default River;
