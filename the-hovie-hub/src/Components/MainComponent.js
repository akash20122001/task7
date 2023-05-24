import React from 'react'
import RightComponent from './RightComponent'
import LeftComponent from './LeftComponent'

function MainComponent() {
  return (
    <div className='flex divide-x divide-solid divide-gray-700'>
        <LeftComponent/>
        <RightComponent/>
    </div>
  )
}

export default MainComponent