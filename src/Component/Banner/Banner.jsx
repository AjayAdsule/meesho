import React from 'react'
import MainBanner from './MainBanner'
import Fashion from './Fashion'
import Essential from './Essential'

const Banner = () => {
  return (
    <React.Fragment>
      <MainBanner/>
      <Fashion/>
      <Essential/>
    </React.Fragment>
  )
}

export default Banner
