// src/components/Card.jsx
import React from 'react';

const Card = ({ title, date, location, link }) => {
  // if you passed opponent instead of title, you can compute title:
  const displayTitle = title;

  return (
    <div className="Card">
      <h3 className="GameTitle">{displayTitle}</h3>
      {date && <p className="GameDate">{date}</p>}
      {location && <p className="GameLocation">{location}</p>}

      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="GameLink"
        >
          <button>Visit Opponet Site</button>
        </a>
      ) : null}
    </div>
  );
};

export default Card;
