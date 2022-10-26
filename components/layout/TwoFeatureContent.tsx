import Image from 'next/image';
import React from 'react'
import classes from "../../styles/components/layout/LandingInfoModal.module.css";

interface TwoFeatureProps {
  firstFeatureName: string,
  firstFeatureImage: string,
  firstFeatureDescription: string,
  secondFeatureName: string,
  secondFeatureImage: string
  secondFeatureDescription: string,
}

const TwoFeatureContent = ({
  firstFeatureName,
  firstFeatureImage,
  firstFeatureDescription,
  secondFeatureName,
  secondFeatureImage,
  secondFeatureDescription,
}: TwoFeatureProps) => {
  return (
    <div className={classes['landing-modal-container']}>
      {/* name of feature 1  */}
      <h3>{firstFeatureName}</h3>
      {/* image */}
      <Image src={firstFeatureImage} alt={'Image of ' + firstFeatureName}/>
      <p>{firstFeatureDescription}</p>
      {/* name of feature 2  */}
      <h3>{secondFeatureName}</h3>
      {/* image */}
      <Image src={secondFeatureImage} alt={'Image of ' + secondFeatureImage}/>
      <p>{secondFeatureDescription}</p>
    </div>
  )
}

export default TwoFeatureContent
