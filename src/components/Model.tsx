import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

const FILENAME = "/model.glb";

type GLTFResult = GLTF & {
  nodes: {
    cassette_tape_0: THREE.Mesh;
    cassette_tape_0_1: THREE.Mesh;
    cassette_tape_1: THREE.Mesh;
    cassette_tape_2: THREE.Mesh;
    cassette_tape_3: THREE.Mesh;
  };
  materials: {
    plastic_body: THREE.MeshStandardMaterial;
    plastic_tape: THREE.MeshStandardMaterial;
    plastic_white: THREE.MeshStandardMaterial;
    plastic_clear: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(FILENAME) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cassette_tape_0.geometry}
          material={materials.plastic_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cassette_tape_0_1.geometry}
          material={materials.plastic_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cassette_tape_1.geometry}
          material={materials.plastic_tape}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cassette_tape_2.geometry}
          material={materials.plastic_white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cassette_tape_3.geometry}
          material={materials.plastic_clear}
        />
      </group>
    </group>
  );
}

useGLTF.preload(FILENAME);
