import React from 'react'
import 'font-awesome/scss/font-awesome.scss'
import './CoreLayout.scss'

export const CoreLayout = (props) => (
  <div className='app wrapper search-wrapper'>
    <div className='app-body'>
      <div>
        {props.children}
      </div>
    </div>
  </div>
)

export default CoreLayout
