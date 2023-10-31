import React, { useState, useContext } from 'react';
import Logo from "../img/logo.svg";
import Ext from "../img/ext.svg";
import { slide as Menu } from 'react-burger-menu';

const Header = () => {

    var styles = {
        bmBurgerButton: {
          position: 'relative',
          width: '36px',
          height: '30px',
        },
        bmBurgerBars: {
          background: '#fff',
          borderRadius: '1px'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '50px',
          width: '50px'
        },
        bmCross: {
          background: '#fff'
        },
        bmMenuWrap: {
          top: '0',
          position: 'fixed',
          height: '100vh',
          width: '70%'
          
        },
        bmMenu: {
            background: '#101010',
          padding: '2.5em 1.5em 0',
          fontSize: '30pxpx',
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
            color: '#fff',
          padding: '0.8em',
          display: 'flex',
          flexDirection: 'column'
        },
        bmItem: {
          display: 'inline-block',
          color: '#fff',
          marginBottom: '70px',
          fontSize: '28px'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }

    const [isOpen, setOpen] = useState(false)
    const handleIsOpen = () => {
        setOpen(!isOpen)
    }
    const closeSideBar = () => {
        setOpen(false)
    }

    return (
        <>
            <div className="header-wrapper">
                <div className="header">
                  <div className="header__left">
                    <img src={Logo} className="header__logo" />
                    <div className="header__bar">
                        <a href="" className="header__tab">HOME</a>
                        <a href="" className="header__tab">TOKENOMICS</a>
                        <a href="" className="header__tab">TAXES & FEES</a>
                        <a href="" className="header__tab">
                            <div style={{marginRight: "5px"}} >TESTNET</div>
                            <img className="header__icon" src={Ext} alt="ext" />
                        </a>
                        <a href="" className="header__tab">
                            <div style={{marginRight: "5px"}} >WHITEPAPER</div>
                            <img className="header__icon" src={Ext} alt="ext" />
                        </a>
                    </div>
                  </div>
                  <div className="header__right">
                    <a style={{marginRight: "8px"}} href="" className="button__size button__transparent">TRY TESTNET</a>
                    <a href="" className="button__size button__style">BUY TOKENS</a>
                  </div>
                <div className='mob-menu'>
                    <Menu
                        isOpen={isOpen}
                        onOpen={handleIsOpen}
                        onClose={handleIsOpen}
                        styles={styles} right>
                        <a onClick={closeSideBar} className="menu-item" href="#main">HOME</a>
                        <a onClick={closeSideBar} className="menu-item" href="#about">TOKENOMICS</a>
                        <a onClick={closeSideBar} className="menu-item" href="#tokenomics">TAXES & FEES</a>
                        <a onClick={closeSideBar} className="menu-item" href="#tokenomics">TESTNET</a>
                        <a onClick={closeSideBar} className="menu-item" target='_blank' href="https://www.youtube.com/">WHITEPAPER</a>
                        <a onClick={closeSideBar} className="menu-item" target='_blank' href="https://www.youtube.com/">TRY TESTNET</a>
                        <a onClick={closeSideBar} className="menu-item" target='_blank' href="https://app.uniswap.org/#/swap">BUY TOKENS</a> 
                    </Menu>
                </div>
                </div>
            </div>
        </>
    )
}

export default Header;