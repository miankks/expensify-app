import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';

const AccordianMain = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main className="accordian-app">
      <div className="container">
        <h3>questions an answers about login</h3>
        <section>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default AccordianMain;
