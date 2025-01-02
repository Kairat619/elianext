import { FarzaaContext } from '@/context/FarzaaContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const MobileMenuSection = () => {
    const {isDropdownOpen,handleDropdownToggle} = useContext(FarzaaContext)
    return (
        <div className="mean-bar">
            <Link 
            href="#nav" 
            className="meanmenu-reveal"
            ><span><span><span></span></span></span>
            </Link>
            <nav className="mean-nav">
                <div className="align-items-center justify-content-center mobile-menu-list-items">
                    <div className="fz-dropdown fz-nav-item">
                            <a 
                            href="/" 
                            className="fz-nav-link"
                            >
                                <span>Home</span>
                             
                            </a>
                        
                    </div>
                    <div className="fz-dropdown fz-nav-item">
                           <a 
                            href="/shop"
                            className="fz-nav-link"
                            >
                                <span>Shop</span>
                                
                            </a>
                            
                    </div>
                    <div className="fz-dropdown fz-nav-item">
                            <a 
                            href="/about"
                            className="fz-nav-link"
                            >
                                <span>About</span>
                             
                            </a>
                        
                    </div>
                    <div className="fz-dropdown fz-nav-item">
                            <a 
                            href="/blog"
                            className="fz-nav-link"
                            >
                                <span>Blog</span>
                              
                            </a>                             
                           
                    </div>
                    <div className="fz-nav-item mean-last">
                        <Link href="/contact" className="fz-nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MobileMenuSection