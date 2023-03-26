import { FC } from 'react';
import { Poppins } from '@next/font/google';

import Sidebar from '@/components/Sidebar';
import '@/globals.css';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
});

const Layout: FC = ({ children }) => (
    <html className={`scroll-smooth ${poppins.variable}`}>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>DJ Roomba</title>
        </head>
        <body className="bg-background text-blue-100 font-sans scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-lighten-0.05 hover:scrollbar-thumb-lighten-0.1">
            <Sidebar />
            {children}
        </body>
    </html>
);

export default Layout;
