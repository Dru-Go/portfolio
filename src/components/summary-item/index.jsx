import { Link } from 'gatsby';
import React from 'react';
import experienceImg from '../../images/experience.png';


const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-800 pb-1',
  description: 'text-md text-gray-800 font-light h-1/2',
  reference: 'text-sm text-gray-800 font-light',
  image: 'w-1/4 h-1/4 rounded transform transition-all duration-150 hover:scale-105',
};

const SummaryItem = ({
  name,
  description,
  reference,
  link = false,
  internal = false,
}) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = (
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    );
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description}</p>
      {reference ? (
        <>
        <a href={reference} target="_blank" rel="noreferrer">
          <img className={classes.image} src={experienceImg} alt="Experience" />
        </a>
        </>
        
      ) : null}
    </div>
  );
};

export default SummaryItem;
