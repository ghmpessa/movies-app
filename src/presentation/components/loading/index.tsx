import React from 'react'

const Loading: React.FC = () => {
  return (
    <svg width={100} height={100}>
      <circle
        cx='50'
        cy='50'
        r='40'
        strokeWidth='10'
        stroke='#ab2f2e'
        strokeDasharray='62.83185307179586 62.83185307179586'
        fill='none'
        strokeLinecap='round'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1s'
          keyTimes='0;1'
          values='0 50 50;360 50 50'
        />
      </circle>
    </svg>
  )
}

export default Loading
