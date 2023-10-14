import React from 'react'
import { useSnapshot } from 'valtio'

import state from '../store';

// Tab component for rendering clickable tabs with icons
const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  // Get the current snapshot of the application state
  const snap = useSnapshot(state);

  // Determine the styles for active and inactive tabs
  const activeStyles = isFilterTab && isActiveTab 
    ? { backgroundColor: snap.color, opacity: 0.5 }
    : { backgroundColor: "transparent", opacity: 1 }

  return (
    <div
      key={tab.name}
      // Apply common tab button styling classes, including 'rounded-full' for filter tabs
      className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
      // Call the provided click handler when the tab is clicked
      onClick={handleClick}
      // Apply the determined styles based on the tab's activity state
      style={activeStyles}
    >
      {/* Display the tab's icon */}
      <img 
        src={tab.icon}
        alt={tab.name}
        // Apply icon sizing based on whether it's a filter tab or not
        className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}
      />
    </div>
  )
}

export default Tab
