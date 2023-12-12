import "@fortawesome/fontawesome-free/css/all.min.css"
import HeaderProductDetail from "@/components/HeaderProductDetail";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Product",
  description: "My travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderProductDetail /> 
        {children}
        <Footer />
        </body>
    </html>
  );
}
