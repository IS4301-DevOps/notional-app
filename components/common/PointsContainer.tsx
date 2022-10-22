import React from 'react'
import classes from '../../styles/components/common/PointsContainer.module.css';
import treeicon from "../../public/common/tree-icon.svg";
import Image from 'next/image';

interface PointsContainerProps {
  points: number;
}

const PointsContainer = ({
  points
}: PointsContainerProps) => {
  return (
    <div className={classes['grey-container']}>
      <div className={classes['tree-icon']}>
        <Image
          
          src={treeicon}
          alt='tree'
          width={'52'} 
          height={'54'} 
        />
      </div>
      <span className={classes['points']}>+{points}</span>
    </div>
  )
}

export default PointsContainer
