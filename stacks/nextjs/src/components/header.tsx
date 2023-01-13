import { AiFillHome } from 'react-icons/ai';
import { AiOutlineContacts } from 'react-icons/ai';
import { AiFillShopping } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';

import Image from 'next/image'
import Navigation from '../components/navigation'

export function Header() {
    return (
        <header className="header">
            <div className="header-wrapper">
            <Navigation />
            <a href="#">
                <Image className="logo" src="/../public/LogoDark.png" width="25" height="25" alt="Logo Dark" />
            </a>
            <nav className="mobile-navigation">
                <ul role="list">
                    <a className="list-link" href="#home">
                        <AiFillHome className="icon"/><li className="list-item">Home</li>
                    </a>
                    <a className="list-link" href="#about">
                        <AiOutlineUser className="icon"/><li className="list-item">About Us</li>
                    </a>
                    <a className="list-link" href="#contact">
                        <AiOutlineContacts className="icon"/><li className="list-item">Contact</li>
                    </a>
                    <a className="list-link" href="#products">
                        <AiFillShopping className="icon"/><li className="list-item">Products</li>
                    </a>
                </ul>
            </nav>
            </div>
        </header>
    )

}