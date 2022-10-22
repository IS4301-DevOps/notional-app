import { Carousel } from '@mantine/carousel';
import { head } from 'lodash';
import Image from 'next/image'
import { useState } from 'react'
import esg from "../../public/landing/esg-info.svg";
import classes from "../../styles/components/layout/LandingInfoModal.module.css";

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

const LandingInfoModal = ({

}: LandingProps) => {

  const [pageNumber, setPageNumber] = useState<number>(1);
  return (
    <Carousel
    withControls={false}
    withIndicators={true}
    slidesToScroll={1}
    slideSize={'100%'}
    align='center'
    height={'100%'}
    sx={{flex: 1, maxWidth: '100%'}}
    styles={{
      indicators: {
        bottom: '20%'
      },
      indicator: {
        backgroundColor: 'black',
        height: '10vh',
      }
    }}
    className={classes['landing-carousel']}
    >
      <Carousel.Slide>
        <ESGOverviewContent/>
      </Carousel.Slide>
      <Carousel.Slide>
        <ESGOverviewContent/>
      </Carousel.Slide>
      <Carousel.Slide>
        <ESGOverviewContent/>
      </Carousel.Slide>
      <Carousel.Slide>
        <ESGOverviewContent/>
      </Carousel.Slide>
    </Carousel>
  )
}

export default LandingInfoModal