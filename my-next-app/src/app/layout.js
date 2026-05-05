import "./globals.css";

export const metadata = {
  title: "Fineon Family Fish Shop",
  description: "Fresh fish delivery website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}