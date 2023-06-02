"use client";
import { FcContacts } from "react-icons/fc";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function Nav() {
	return (
		<nav className="navigation">
			<Link href="/" className="logo logo--header" >
				Web<span className="logo__studio logo__studio--header">Studio</span>
			</Link>
			<ul className="header__navigation">
				<li className="header__item">
					<Link href="/" className="header__link header__link--current">
						Студія
					</Link>
          </li>
          <li className="header__item" ><Link href="/portfolio" className="header__link">Портфоліо</Link></li>
          <li className="header__item" ><Link href="/" className="header__link">Контакти</Link></li>

			</ul>
          
		</nav>
	);
}

export default Nav;
