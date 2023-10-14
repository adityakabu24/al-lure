import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

// CanvasModel component for rendering the 3D canvas
const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0,0,0], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      {/* Ambient light for the scene */}
      <ambientLight intensity={0.5} />
      {/* Environment component for setting the scene's environment */}
      <Environment preset='city' />
      {/* CameraRig component for camera control */}
      <CameraRig>
        {/* Backdrop component for background and lighting */}
        <Backdrop />
        {/* Center component for centering the Shirt component */}
        <Center>
          {/* Shirt component for rendering the 3D shirt model */}
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel;
