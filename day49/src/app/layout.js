import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css"

export const metadata = {
  title: "Travel",
  description: "My travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
