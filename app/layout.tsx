import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car ShowRoom",
  description: "Discover the best car in VietNam.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
