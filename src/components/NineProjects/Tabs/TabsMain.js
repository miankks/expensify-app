import React, { useState, useEffect } from 'react';
import jobs from './data';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
const TabMain = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section-tabs loading">
        <h1>loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section-tabs">
      <div className="title-tabs">
        <h2>experience</h2>
        <div className="underline-tabs"></div>
      </div>
      <div>
        {/*btn container */}
        <div className="btn-container-tabs">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn-tabs ${index === value && 'active-btn-tabs'}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/*job info */}
        <article className="job-info-tabs">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date-tabs">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc-tabs">
                <FaAngleDoubleRight className="job-icon-tabs" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default TabMain;
