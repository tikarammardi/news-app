import React from 'react';

const VideoItem = ({ source }) => {

  const img = 'https://cdn.pixabay.com/photo/2013/07/12/19/16/newspaper-154444_960_720.png'
  return (
    <div className="card" >
      <a href={source.url} target='_blank' rel="noopener noreferrer" >
        <img className="card-image-top"
          style={{ width: '150px', height: '150px' }}
          src={source.urlsToLogos.small || img}
          alt={source.id}

        />

      </a>
      <div className="card-body">

        <div className="card-title">{source.name}</div>
        <div className="card-text">{source.description}</div>

      </div>
    </div>
  );
};

export default VideoItem;
