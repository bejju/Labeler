import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/scss/font-awesome.scss'
import './CoreLayout.scss'
import '../../styles/core.scss'

import '../../../scss/skin.scss'
import '../../../scss/adminLTE.scss'
import '../../../scss/style.scss'

export const CoreLayout = (props) => (
  <div className='app wrapper search-wrapper'>
    <Header logOut={props.Logout} userEmail={props.userEmail} role={props.role}/>
    <div className="hidden-xs top-hidden-nav-space">&nbsp;</div>
    <div className='app-body'>
      <div>
        {props.children}
      </div>
    </div>
    <Footer/>
  </div>
)

export default CoreLayout
