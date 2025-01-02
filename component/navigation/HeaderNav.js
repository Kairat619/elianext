import Link from 'next/link'
import React from 'react'

const HeaderNav = ({position}) => {
  return (
    <nav className="fz-header-nav">
        <ul className={`align-items-center ${position}`}>
            <li className="fz-dropdown fz-nav-item">
                <a  href="/" className="fz-nav-link"><span>home</span> </a>

            </li>
            <li className="fz-dropdown fz-nav-item">
                <a href="/shop" className="fz-nav-link"><span>shop</span></a>

            </li>

            <li className="fz-dropdown fz-nav-item">
                <a href="/about" className="fz-nav-link"><span>About</span> </a>

            </li>
            <li className="fz-dropdown fz-nav-item">
                <a href="/blog" className="fz-nav-link">blog </a>

            </li>
            <li className="fz-nav-item"><Link href="/contact" className="fz-nav-link">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default HeaderNav