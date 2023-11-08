import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const presentNavigate = () => {
    navigate("/presentation");
  };
  document.body.style.overflow = "scroll";
  document.body.style.overflowX = "hidden";
  document.body.style.backgroundColor = '#dfd5e9'


  return (
    <div className="wholepage">
      <h1 className="heading">Three js</h1>

      <div>
        <h2>1. Why to choose three js?</h2>
        <p className="answer">
          {" "}
          - cross-browser support , versatile framework , componany
          product(showcases) , playful , can play with cpu and gpu both.
        </p>
      </div>
      <div>
        <h2 className="heasdtitle">2. What is three js?</h2>
        <p className="answer">
          {" "}
          - Three.js is a JavaScript library used for creating and displaying 3D
          graphics in web browsers which provides a high-level API that
          simplifies the process of working with WebGL.
        </p>
        <h4 className="pillar">:- Three.js pillars are </h4>
        <div className="listWrap">
          <ul className="listview">
            <li>Scene</li>
            <li>Rendering</li>
            <li>Camera</li>
            <li>Lights</li>
          </ul>
          <ul className="listview">
            <li>Geometry</li>
            <li>Materials</li>
            <li>Meshes</li>
            <li>Animation</li>
          </ul>
        </div>
      </div>

      <div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="heasdtitle"
        >
          <h2 className="">3. Geometry ={">"} </h2>
          <p style={{ marginBottom: 0, marginLeft: "5px", fontSize: "18px" }}>
            BoxGeometry, CapsuleGeometry, CircleGeometry, ConeGeometry,
            OctahedronGeometry, RingGeometry, TorusKnotGeometry, etc{" "}
          </p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="heasdtitle"
        >
          <h2 className="">4. Lights ={">"} </h2>
          <p style={{ marginBottom: 0, marginLeft: "5px", fontSize: "18px" }}>
            AmbientLight, DirectionalLight, PointLight, RectAreaLight,
            SpotLight, HemisphereLight ,etc{" "}
          </p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="heasdtitle"
        >
          <h2 className="">5. Camera ={">"} </h2>
          <p style={{ marginBottom: 0, marginLeft: "5px", fontSize: "18px" }}>
            PerspectiveCamera,Camera, CubeCamera, OrthographicCamera,
            StereoCamera,etc{" "}
          </p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="heasdtitle"
        >
          <h2 className="">6. Renderers ={">"} </h2>
          <p style={{ marginBottom: 0, marginLeft: "5px", fontSize: "18px" }}>
            WebGLMultipleRenderTargets ,WebGLRenderer, WebGLArrayRenderTarget,
            WebGL1Renderer,etc{" "}
          </p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="heasdtitle"
        >
          <h2 className="">7. Materials ={">"} </h2>
          <p style={{ marginBottom: 0, marginLeft: "5px", fontSize: "18px" }}>
            MeshBasicMaterial ,MeshLambertMaterial ,MeshStandardMaterial ,
            MeshToonMaterial ,LineBasicMaterial ,MeshMatcapMaterial,etc{" "}
          </p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="heasdtitle"
        >
          <h2 className="">8. Loaders ={">"} </h2>
          <p style={{ marginBottom: 0, marginLeft: "5px", fontSize: "18px" }}>
            AnimationLoader ,TextureLoader ,ObjectLoader , Font ,TTFLoader
            ,AudioLoader ,etc{" "}
          </p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="heasdtitle"
        >
          <h2 className="">9. 3D Modal ={">"} </h2>
          <p style={{ marginBottom: 0, marginLeft: "5px", fontSize: "18px" }}>
            OBJ ,GLTF (GL Transmission Format) ,GLB (GL Binary) , DRACO ,Collada
            ,3DS (3D Studio) ,etc{" "}
          </p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="heasdtitle"
        >
          <h2 className="">10.Real world ={">"} </h2>
          <p style={{ marginBottom: 0, marginLeft: "5px", fontSize: "18px" }}>
            Cannon ,Cannon-es ,Ammo , Bullet ,Yuka ,etc{" "}
          </p>
        </div>
      </div>

      <br />

      <div style={{ fontSize: "20px" }}>
        <h2 className="heasdtitle" style={{ color: "", marginBottom: "10px" }}>
          Summary
        </h2>
        Three is library which involves 3 dimensional view to user which gives
        detail information of product or ideas.I personally found easy to
        integrate three in project and some of it's methods are easy to use
        even.It is combination of various properties which were mention at top
        as pillars.Three.js is very accurate in form of working even a 0.5px gap
        can't be escaped because of it's functionality. WebGl totally depends on
        GPU so because of that it causes some user a wall to explore 3D World
        view.
      </div>

      <button onClick={() => presentNavigate()} className="start">
        Start
      </button>
    </div>
  );
}

export default Welcome;
