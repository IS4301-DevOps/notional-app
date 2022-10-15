import Image from 'next/image';
import React from 'react'
import classes from '../../styles/components/quiz/InformationRow.module.css';

export interface IInformationRow {
  index: number;
  imageUrl: string;
  imageAlt: string;
  mainText: string;
  secondaryText: string;
}

/**
 * Information Row for Brief page
 */
const InformationRow = ({
  index,
  imageUrl, 
  imageAlt,
  mainText,
  secondaryText
}: IInformationRow) => {
  return (
    <div key={index} className={classes['info-row']}>
      {/* Image */}
      <Image 
        key={index} 
        alt={imageAlt}
        width='40'
        height='42'
        src={imageUrl}
      />
      {/* Textual Content */}
      <div className={classes['textual-content']}>
        <h2>{mainText}</h2>
        <span>{secondaryText}</span>
      </div>
    </div>
  )
}

export default InformationRow