import React from 'react';
import './project.css';

export default function Project({ proj, onClick, handleExit, isFadingIn }) {
  const {
    gitHub,
    title,
    description,
    contributions,
    deployed_site,
    card_image,
  } = proj;

  return (
    <div
      className={handleExit ? `active_project ${isFadingIn ? 'fade-in' : ''}` : 'project'}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(e);
        }
      }}
      tabIndex={0}
      role="button"
    >
      {handleExit && (
        <div
          className='exit_icon'
          onClick={(e) => {
            e.stopPropagation();
            handleExit();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.stopPropagation();
              handleExit();
            }
          }}
          tabIndex={0}
          role="button"
        >
          <i className="lni lni-close"></i>
        </div>
      )}
      <div
        className='background_img'
        style={{ backgroundImage: `url(${card_image})` }}>
        <h3 className='img_title'>{title}</h3>
      </div>
      {handleExit && (
        <div>
          {gitHub && (
            <span className='icon_wrap'>
              <a href={gitHub}>
                <i className="lni lni-github-original"></i>
              </a>
            </span>
          )}
          <h3 className='non_img_title'>
            {title}
          </h3>
          {deployed_site && (
            <span className='icon_wrap'>
              <a href={deployed_site}>
                <i className="lni lni-website"></i>
              </a>
            </span>
          )}
        </div>
      )}
      {handleExit && (
        <div className='proj_texts'>
          <p className='description'>{description}</p>
          <div className='contributions'>
            {contributions.map((contribution, index) => (
              <p className='contribution' key={index}>
                • {contribution}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}