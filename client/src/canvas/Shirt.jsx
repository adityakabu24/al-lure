import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

// Shirt component for rendering the 3D shirt model
const Shirt = () => {
  // Get the current snapshot of the application state
  const snap = useSnapshot(state);
  // Load 3D model data (geometry and materials) for the shirt
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  // Load textures for logo and full decal based on application state
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  // Use the useFrame hook to update the shirt material color with easing
  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

  // Convert the application state to a JSON string to create a unique key for the group
  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {/* Render the full texture decal if active */}
        {snap.isFullTexture && (
          <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {/* Render the logo texture decal if active */}
        {snap.isLogoTexture && (
          <Decal 
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  )
}

export default Shirt
