import { AiFillHome } from 'react-icons/ai';
import { AiOutlineContacts } from 'react-icons/ai';
import { AiFillShopping } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';

import Image from 'next/image'

export function Header() {
    return (
        <header className="header">
            <Image src="/../public/LogoDark.png" width="20" height="20" alt="Logo Dark" />
            <nav className="navigation">
                <ul role="list">
                    <a className="list-item" href="#home">
                        <AiFillHome className="icon"/><li>Home</li>
                    </a>
                    <a className="list-item" href="#about">
                        <AiOutlineUser className="icon"/><li>About Us</li>
                    </a>
                    <a className="list-item" href="#contact">
                        <AiOutlineContacts className="icon"/><li>Contact</li>
                    </a>
                    <a className="list-item" href="#products">
                        <AiFillShopping className="icon"/><li>Products</li>
                    </a>
                </ul>
            </nav>
        </header>
    )

}