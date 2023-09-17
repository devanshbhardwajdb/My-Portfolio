
import "@styles/globals.css";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "Devansh Bhardwaj - Portfolio",
  description: "Personal Portfolio",
};

const RootLayout = ({ children }) => (

  <html lang='en' >
    <head>
     

        <link rel="shortcut icon" href="/assets/icons/eagle-logo.png" />
    </head>
    <body>


      <main >
        <Navbar />
        {children}
      </main>

    </body>
  </html>
);

export default RootLayout;