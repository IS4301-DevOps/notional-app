import React from 'react'
import { NavButtonProps } from './PreviousButton'

export const NextButton = ({
  pageNumber,
  onClickHandler
}: NavButtonProps) => {
  return (
    <button
      disabled={pageNumber === 5 ? true : false}
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
          fill={pageNumber !== 5 ? "#7FB77E" : "#D4D4D4"}
        />
        <path d="M21.2803 37.1497L31.6377 27.4433L21.2803 17.7369" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
