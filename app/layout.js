import { AuthProvider } from "./context/AuthProvider";
import "./globals.css";
import { Cinzel } from "next/font/google";
const cinzel = Cinzel({
  weight: "500",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pokemon Nxt",
  description: "Pokemon details",
  themeColor: "black",
  icons: {
    icon: "love.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cinzel.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
