import React from 'react'
import { H1 } from '../typography/'
import { Animated } from 'react-web-animation'
import { range } from 'ramda'

const squares = () => range(0, 8).map(i => (
  <div
    style={{
      transform: `rotate(${i * 360 / 8}deg)`,
      width: 30,
      hegith: 30,
      background: 'red'
    }}
  />
))

const getTiming = (duration) => {
  return {
			duration,
			easing: 'ease-in-out',
			delay: 0,
			iterations: 2,
			direction: 'alternate',
			fill: 'forwards'
	}
}

const keyframes = [
  { transform: 'scale(1)', opacity: 1, offset: 0 },
  { transform: 'scale(.5)',  opacity: 0.5,   offset: 0.3 },
  { transform: 'scale(.667)', opacity: 0.667, offset: 0.7875 },
  { transform: 'scale(.6)',   opacity: 0.6,   offset: 1 }
]

const Logo = ({ style }) => (
  <div>
    <Animated keyframes={keyframes} timing={getTiming(2000)}>
      <div>
        {squares()}
     </div>
    </Animated>
  </div>
)

export default Logo
