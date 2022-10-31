import React from 'react'

export interface NavButtonProps {
  pageNumber: number;
  onClickHandler: (e: React.MouseEvent<HTMLElement>) => void;
}

const PreviousButton = ({
  pageNumber,
  onClickHandler
}: NavButtonProps) => {
  return (
    <button
      disabled={pageNumber === 1 ? true : false}
      type='button'
      onClick={(e) => onClickHandler(e)}
    >
      <svg width="53" height="55" viewBox="0 0 53 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse 
          cx="26.5573" 
          cy="27.4433" 
          rx="25.8937" 
          ry="26.9622" 
          // fill="#7FB77E"
          fill={pageNumber !== 1 ? "#7FB77E" : "#D4D4D4"}
        />
        <path 
          d="M31.7358 17.7369L21.3784 27.4433L31.7358 37.1497" 
          //fill="#7FB77E"
          fill={pageNumber !== 1 ? "#7FB77E" : "#D4D4D4"}
        />
        <path d="M31.7358 17.7369L21.3784 27.4433L31.7358 37.1497" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>

  )
}

export default PreviousButton