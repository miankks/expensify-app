import React, { useState, useEffect } from 'react';
import Tour from './Tour';

const ToursCreate = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tours.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default ToursCreate;
