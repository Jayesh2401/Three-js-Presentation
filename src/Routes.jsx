import { lazy } from "react";

const FirstGlb = lazy(() => import("./FirstGlb"));
const Welcome = lazy(() => import("./Welcome"));
const Presentation = lazy(() => import("./Presentation"));
const GeomtryLights = lazy(() => import("./GeometryLights"));
const Solarsystem = lazy(() => import("./Solarsystem"));
const MultiLights = lazy(() => import("./MultiLights"));
const River = lazy(() => import("./River"));
const Soldier = lazy(() => import("./Soldier"));
const Ureka = lazy(() => import("./Ureka"));
const FollowPath = lazy(() => import("./Followpath"));
const PhysicGlb = lazy(() => import("./PhysicGlb"));
const ReactFiber = lazy(() => import("./ReactFiber"));
const BirthdayRoom = lazy(() => import("./BirthdayRoom"));
const Particle = lazy(() => import("./Particle"));
const ParticlePattern = lazy(() => import("./Particlepattern"));
const SpiralPattern = lazy(() => import("./SpiralPattern"));
const Spiral = lazy(() => import("./Spiral"));
const Portfolio = lazy(() => import("./Portfolio"));
const Astronut = lazy(() => import("./Astronut"));
const PhsSound = lazy(() => import("./PhsSound"));
const Threetext = lazy(() => import("./Bg"));
const Hologram = lazy(() => import("./Hologram"));
const Thanos = lazy(() => import("./Thanos"));
const FollowGame = lazy(() => import("./FollowGame"));
const MindSpacerocket = lazy(() => import("./MindSpacerocket"));

const routes = [
  {
    path: "/",
    exact: true,
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/presentation",
    exact: true,
    name: "Presentation",
    component: Presentation,
  },
  {
    path: "/first-Glb",
    exact: true,
    name: "First",
    component: FirstGlb,
  },
  {
    path: "/geometry-lights",
    exact: true,
    name: "Geometry and lights",
    component: GeomtryLights,
  },
  {
    path: "/Solarsystem",
    exact: true,
    name: "Solarsystem",
    component: Solarsystem,
  },
  {
    path: "/MultiLights",
    exact: true,
    name: "MultiLights",
    component: MultiLights,
  },
  {
    path: "/River",
    exact: true,
    name: "River",
    component: River,
  },
  {
    path: "/Soldier",
    exact: true,
    name: "Soldier",
    component: Soldier,
  },
  {
    path: "/Ureka",
    exact: true,
    name: "Ureka",
    component: Ureka,
  },
  {
    path: "/follow-path",
    exact: true,
    name: "FollowPath",
    component: FollowPath,
  },
  {
    path: "/physic-glb",
    exact: true,
    name: "physic-glb",
    component: PhysicGlb,
  },
  {
    path: "/ReactFiber",
    exact: true,
    name: "ReactFiber",
    component: ReactFiber,
  },
  {
    path: "/Birthday",
    exact: true,
    name: "BirthdayRoom",
    component: BirthdayRoom,
  },
  {
    path: "/Mi-theme",
    exact: true,
    name: "Mi-theme",
    component: MindSpacerocket,
  },
  {
    path: "/Particle",
    exact: true,
    name: "Particle",
    component: Particle,
  },

  {
    path: "/Pattern",
    exact: true,
    name: "ParticlePattern",
    component: ParticlePattern,
  },
  {
    path: "/spiral-pattern",
    exact: true,
    name: "SpiralPattern",
    component: SpiralPattern,
  },
  {
    path: "/Astronut",
    exact: true,
    name: "Astronut",
    component: Astronut,
  },
  {
    path: "/spiral",
    exact: true,
    name: "Spiral",
    component: Spiral,
  },
  {
    path: "/Portfolio",
    exact: true,
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/Sound",
    exact: true,
    name: "PhsSound",
    component: PhsSound,
  },
  {
    path: "/Text-3d",
    exact: true,
    name: "Threetext",
    component: Threetext,
  },
  {
    path: "/Hologram",
    exact: true,
    name: "Hologram",
    component: Hologram,
  },
  {
    path: "/Thanos",
    exact: true,
    name: "Thanos",
    component: Thanos,
  },
  {
    path: "/Game",
    exact: true,
    name: "Game",
    component: FollowGame,
  },
];
export default routes;
