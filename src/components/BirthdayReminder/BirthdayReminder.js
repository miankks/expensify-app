import React, { useState } from 'react';
import data from './data';
import List from './List';

export default function BirthdayReminder() {
  const [people, setPeople] = useState(data);
  const handleClick = () => {
    console.log('Clicked');
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={handleClick} className="birthday-btn">
          Clear all
        </button>
      </section>
    </main>
  );
}
