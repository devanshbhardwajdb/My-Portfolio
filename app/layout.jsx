import "@styles/globals.css";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "Devansh Bhardwaj - Portfolio",
  description: "Personal Portfolio",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
      <link rel="shortcut icon" href="/assets/icons/eagle-logo.png" />
    </head>
    <body>
      
        {/* <div className=' bg main'>
          <div className='' />
        </div> */}
        
        <main className='scroll relative'>
          {/* <div className="bg2"></div> */}
          <Navbar/>
          {children}
        </main>
      
    </body>
  </html>
);

export default RootLayout;