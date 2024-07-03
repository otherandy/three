export default function Mesh() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
}
