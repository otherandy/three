import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  Html,
  Lightformer,
} from "@react-three/drei";
import Model from "./components/Model";
import Loader from "./components/Loader";
import "./styles/App.css";

export default function App() {
  return (
    <Canvas>
      <Html fullscreen style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            color: "white",
            bottom: "2rem",
            right: "2rem",
            fontFamily: "sans-serif",
          }}
        >
          Model by{" "}
          <a
            href="https://sketchfab.com/3d-models/cassette-tape-modeling-exercise-d6ec7ee9a6dc44ac9a8333d1f23b5e94"
            target="_blank"
            style={{ color: "white" }}
          >
            Johnson Martin
          </a>
        </div>
      </Html>
      <ambientLight intensity={Math.PI} />
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
      <Environment background blur={0.75}>
        <color attach="background" args={["black"]} />
        <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
      <CameraControls
        minAzimuthAngle={-Math.PI / 6}
        maxAzimuthAngle={Math.PI / 6}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.7}
        minDistance={2}
        maxDistance={15}
      />
    </Canvas>
  );
}
