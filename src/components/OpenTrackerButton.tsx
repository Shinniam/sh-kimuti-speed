import React from 'react';

const OpenTrackerButton = () => {
  const openTracker = () => {
    window.open("https://tracker.gg", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={openTracker}
      className="bg-blue-600 text-white p-3 rounded-xl shadow hover:bg-blue-700 transition"
    >
      Open Tracker.gg
    </button>
  );
};

export default OpenTrackerButton;
