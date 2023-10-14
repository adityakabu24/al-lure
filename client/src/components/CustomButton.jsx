import React from 'react'

import state from '../store';
import { useSnapshot } from 'valtio';
import { getContrastingColor } from '../config/helpers';

// CustomButton component for creating custom-styled buttons
const CustomButton = ({ type, customStyles, handleClick, title }) => {
    // Get the current snapshot of the application state
    const snap = useSnapshot(state);

    // Function to generate button styles based on the button type ('filled' or 'outline')
    const generateStyle = (type) => {
        if (type === 'filled') {
            return {
                // Set the background color to the application state's color and the text color to its contrasting color
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color),
            }
        } else if (type === "outline") {
            return {
                // Apply a 1px border with the application state's color and set the text color to the same color
                borderWidth: '1px',
                borderColor: snap.color,
                color: snap.color
            }
        }
    }

    return (
        <button
          // Apply common button styling classes, allowing for additional custom styles
          className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
          // Apply the generated button styles based on the button type
          style={generateStyle(type)}
          // Call the provided click handler when the button is clicked
          onClick={handleClick}
        >
          {/* Display the button title */}
          {title}
        </button>
      )
}

export default CustomButton
