import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

// ColorPicker component for selecting and displaying colors
const ColorPicker = () => {
  // Get the current snapshot of the application state
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      {/* SketchPicker component for selecting colors */}
      <SketchPicker 
        color={snap.color}
        disableAlpha
        // Update the application state with the selected color's hex value
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker
