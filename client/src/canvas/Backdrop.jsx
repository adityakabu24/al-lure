import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

// Backdrop component for rendering background and lighting effects
const Backdrop = () => {
  // Create a reference for the shadows
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      {/* RandomizedLight component for creating randomized lighting effects */}
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={1}   // Further increased intensity for the first light source
        ambient={0.80}  // Further increased ambient for the first light source
        position={[5, 5, -10]}
      />
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={2}   // Further increased intensity for the second light source
        ambient={0.9}   // Further increased ambient for the second light source
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop;
