import React from 'react';

const TrackerPage = () => {
  return (
    <div className="w-screen h-screen">
      <iframe
        src="https://tracker.gg"
        title="Tracker.gg"
        className="w-full h-full border-none"
        loading="lazy"
        sandbox=""
      />
    </div>
  );
};

export default TrackerPage;
