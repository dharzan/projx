// components/NavigationMenu.tsx

import React from 'react';
import Link from 'next/link';

const NavigationMenu: React.FC = () => {
    return (
        <nav className="navigation-menu">
            <h2>Menu</h2>
            <ul>
                <li><Link href="/dashboard"><a>Dashboard</a></Link></li>
                <li><Link href="/tasks"><a>Tasks</a></Link></li>
                <li><Link href="/settings"><a>Settings</a></Link></li>
            </ul>
        </nav>
    );
}

export default NavigationMenu;
