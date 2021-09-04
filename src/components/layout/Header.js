import React from 'react';

export const Header = () => {
    const x = 1;

    return <header className="header" data-tested="header">
        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="react-app" />
            </div>
            <div className="settings">
                <ul>
                    <li>+</li>
                    <li>Pizza Slice!</li>
                </ul>
            </div>
        </nav>
    </header>;

};