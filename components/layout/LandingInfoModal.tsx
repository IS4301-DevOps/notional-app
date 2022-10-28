import { Carousel } from '@mantine/carousel';
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import esg from "../../public/landing/esg-info.svg";
import esg2 from "../../public/landing/esg-info-2-no-bg.svg";
import dashboard from "../../public/landing/dashboard-image.svg"
import transactions from "../../public/landing/track-transaction-image.svg"
import leaderboard from "../../public/landing/leaderboard-image.svg"
import recommendation from "../../public/landing/recommendation-image.svg"
import classes from "../../styles/components/layout/LandingInfoModal.module.css";
import TwoFeatureContent from './TwoFeatureContent';

interface LandingProps {

}

const ESGOverviewContent = () => {
  return (
    <div className={classes['landing-modal-container']}>
      {/* Image */}
      <Image src={esg} alt='ESG Explanation'/>
      {/* Description */}
      <p className={classes['textual-content']}>
        ESG (“Environmental”, “Social” and “Governance”) essentially looks at assessing a company and its assets based on both sustainable and financial criteria.
      </p>
    </div>
  )
}

const ESGRationaleContent = () => {
  return (
    <div className={classes['landing-modal-container']}>
      <Image src={esg2} alt='ESG Information'/>
      <h3>Why is it important?</h3>
      <h3>Simply put, the world needs us to do this.</h3>
      <p className={classes['textual-content']}>
      We are living among grave environmental and sustainability challenges such as climate change and inequality. It is therefore imperative we live in way that tackles these issues – including holding businesses accountable for their actions and supporting those that seek to create a better world.
      </p>
      <h3>Scroll to the next frame to see what we offer.</h3>
    </div>
  )
}



const LandingInfoModal = ({

}: LandingProps) => {

  const ref = useRef(null);
  const anotherRef = useRef(null);

  // const [width, setWidth] = useState<string>("41px");

  useEffect(() => {
    // console.log(ref.current.offsetWidth);
    // console.log(anotherRef.current.offsetWidth);
    // console.log(anotherRef.current.offsetWidth);
    // setWidth(anotherRef.current.offsetWidth + "px");
  }, [])
  

  return (
    <Carousel
    ref={ref}
    withControls={false}
    withIndicators={true}
    slideSize={'100%'}
    height={'100%'}
    slidesToScroll={1}
    sx={{
      flex: 1,
    }}
    styles={{
      indicators: {
        bottom: '12%'
      },
    }}
    className={classes['landing-carousel']}
    >
      <Carousel.Slide ref={anotherRef}>
        <ESGOverviewContent/>
      </Carousel.Slide>
      <Carousel.Slide>
        <ESGRationaleContent/>
      </Carousel.Slide>
      <Carousel.Slide>
        <TwoFeatureContent
          firstFeatureName={'Dashboard'}
          firstFeatureImage={dashboard}
          firstFeatureDescription={'Track your carbon emissions with us.'}
          secondFeatureName={'Track Transactions'}
          secondFeatureImage={transactions}
          secondFeatureDescription={'Track your cashbacks earned from transactions.'}
        />
      </Carousel.Slide>
      <Carousel.Slide >
        <TwoFeatureContent
          firstFeatureName={'Leaderboard'}
          firstFeatureImage={leaderboard}
          firstFeatureDescription={'See how your efforts stand up to with others!'}
          secondFeatureName={'Recommendation'}
          secondFeatureImage={recommendation}
          secondFeatureDescription={'Take our survey and get recommendations for purchases!'}
        />
      </Carousel.Slide>
    </Carousel>
  )
}

export default LandingInfoModal