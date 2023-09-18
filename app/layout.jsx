
import "@styles/globals.css";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "Devansh Bhardwaj - Portfolio",
  description: "Personal Portfolio",
  other:{
    "theme-color": '#d1117',
    "color-scheme": 'dark only',
    "twitter:image" : "https://yt3.googleusercontent.com/REqWWNhXO3vNdvUZG-eghKsvXAqJ7yknILqUZ3vGoMLqzsskpsc9Qd5YoQIQcDqJ8gwhmXfXKvQ=s176-c-k-c0x00ffffff-no-rj",
    "twitter:card" : "summary_large_image",
    "og:url":"devansh-db-portfolio.netlify.app",
    "og:image":"https://yt3.googleusercontent.com/REqWWNhXO3vNdvUZG-eghKsvXAqJ7yknILqUZ3vGoMLqzsskpsc9Qd5YoQIQcDqJ8gwhmXfXKvQ=s176-c-k-c0x00ffffff-no-rj",
    "og:type" : "website",
  }
};

const RootLayout = ({ children }) => (

  <html lang='en' >
    <head>
     

        
    </head>
    <body>


      <main className="overflow-x-hidden" >
        <Navbar />
        {children}
      </main>

    </body>
  </html>
);

export default RootLayout;