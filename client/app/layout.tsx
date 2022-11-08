import { FC } from "react";
import { Inter } from "@next/font/google";

import "../styles/globals.css";
import { AuthProvider } from "../contexts/AuthContext";

const inter = Inter();

const Layout: FC = ({ children }) => (
  <html className={`scroll-smooth ${inter.className}`}>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>DJ Roomba</title>
    </head>
    <body className="bg-background text-blue-100 font-sans scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-lighten-0.05 hover:scrollbar-thumb-lighten-0.1">
      <AuthProvider>{children}</AuthProvider>
    </body>
  </html>
);

export default Layout;
