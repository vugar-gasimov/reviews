import React, { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
const ReviewItem = ({
  name,
  image,
  job,
  text,
  totalPeople,
  currentIndex,
  setCurrentIndex,
}) => {
  const nextPerson = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPeople);
  };
  const prevPerson = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPeople) % totalPeople);
  };
  const randomPerson = () => {
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * totalPeople);
    } while (randomNum === currentIndex);

    setCurrentIndex(randomNum);
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img
          src={image || undefined}
          alt={`Img of ${name || Undefined}`}
          className='person-img'
        />
        <span className='quote-icon'>
          {' '}
          <FaQuoteRight />
        </span>
      </div>
      <div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container items-center'>
          <button type='button' onClick={prevPerson} className='prev-btn'>
            <FaChevronLeft />
          </button>
          <button
            type='button'
            onClick={randomPerson}
            className='next-btn items-center'
          >
            <GiPerspectiveDiceSixFacesRandom />
          </button>
          <button type='button' onClick={nextPerson} className='next-btn'>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ReviewItem;
