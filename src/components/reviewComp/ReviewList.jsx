import React, { useState } from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ people }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPeople = people.length;

  return (
    <section>
      {people[currentIndex] && (
        <ReviewItem
          key={people[currentIndex].id}
          {...people[currentIndex]}
          totalPeople={totalPeople}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </section>
  );
};

export default ReviewList;
