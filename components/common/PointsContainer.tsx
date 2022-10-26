import React from 'react'
import classes from '../../styles/components/common/PointsContainer.module.css';
import treeicon from "../../public/badges/leaderboardtree.png";
import Image from 'next/image';

interface PointsContainerProps {
  points: number;
  width?: number,
  height?: number,
}

const PointsContainer = ({
  points,
  width,
  height,
}: PointsContainerProps) => {
  return (
    <div className={classes['grey-container']}>
      <div className={classes['tree-icon']}>
        <Image
          src={treeicon}
          alt='tree'
          width={width ? width : 52}
          height={height ? height : 54}
        />
      </div>
      <span className={classes['points']}>+{points}</span>
    </div>
  )
}

export default PointsContainer
