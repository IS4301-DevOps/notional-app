import Image from 'next/image';
import React from 'react'
import classes from '../../styles/components/survey/RecommendationSurveyHeader.module.css';

interface HeaderProps {
  title: string;
}

/**
 * Reusable component for Header
 */
const RecommendationSurveyHeader = ({title}: HeaderProps) => {
  return (
    <section className={classes['header']}>
      {/* Title */}
      <h1>{title}</h1>
    </section>
  )
}

export default RecommendationSurveyHeader