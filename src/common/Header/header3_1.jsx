import React from 'react'
import './header3_1.scss'


const Header3_1 = () => {
  return (
    <div className='jc main'>
      <h1 className='name_brand'>eNno</h1>
      <div className="menu flex">
        <ul className="menu_ul flex">
            <li className="menu_ul_li menu_ul_li--main">Home</li>
            <li className="menu_ul_li">About</li>
            <li className="menu_ul_li">Services</li>
            <li className="menu_ul_li">Portfolio</li>
            <li className="menu_ul_li">Team</li>
            <li className="menu_ul_li menu_menu2">Dropdown
                <ul className="menu2">
                    <li className="menu2_li">Dropdown1</li>
                    <li className="menu2_li">Deep Dropdown</li>
                    <li className="menu2_li">Dropdown2</li>
                    <li className="menu2_li">Dropdown3</li>
                    <li className="menu2_li">Dropdown4</li>
                </ul>
            </li>
            <li className="menu_ul_li">Home</li>
        </ul>
        <div className="menu_cb">
          <div className="menu_cb_boolean"></div>
        </div>
      </div>
      
    </div>
  )
}

export default Header3_1
