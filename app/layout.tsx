// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TS Mastery Website',
  description: 'TS Mastery Resources',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "twitter:card": "summary_large_image",
    "og:url": "jsmastery.pro",
    "og:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  )
}
