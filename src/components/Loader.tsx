import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center style={{ color: "white", fontFamily: "sans-serif" }}>
      {progress}% loaded
    </Html>
  );
}
