import { Canvas } from "@react-three/fiber";
import Mesh from "./components/Mesh";
import "./styles/App.css";

function App() {
  return (
    <Canvas>
      <Mesh />
    </Canvas>
  );
}

export default App;
