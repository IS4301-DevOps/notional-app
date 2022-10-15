import Image from 'next/image';
import React from 'react'
import classes from '../../styles/components/quiz/RecommendationQuizHeader.module.css';

interface HeaderProps {
  title: string;
}

/**
 * Reusable component for Header
 */
const RecommendationQuizHeader = ({title}: HeaderProps) => {
  return (
    <section className={classes['header']}>
      {/* Title */}
      <h1>{title}</h1>
    </section>
  )
}

export default RecommendationQuizHeader