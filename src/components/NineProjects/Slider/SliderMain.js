import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
const SliderMain = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);

      return () => clearInterval(slider);
    }, 3000);
  }, [index]);
  return (
    <section className="section-slide">
      <div className="title-slide">
        <span>/</span>reviews
      </div>
      <div className="section-center-slide">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          // more stuff in this app
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }

          return (
            <article key={id} className={`article-slide ${position}`}>
              <img src={image} alt={name} className="person-img-slide" />
              <h4>{name}</h4>
              <p className="title-slide">{title}</p>
              <p className="text-slide">{quote}</p>
              <FaQuoteRight className="icon-slide" />
            </article>
          );
        })}
        <button className="prev-slide" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next-slide" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default SliderMain;
