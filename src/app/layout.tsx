/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import Loader from "@/components/loader";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Heera Portfolio 2.0",
  description: `I am Heera Singh Lodhi, a passionate and dedicated fresher with a strong foundation in computer science and engineering.
    I have a keen interest in programming and possess solid knowledge of object-oriented programming, data structures and algorithms, HTML, CSS, JavaScript, WordPress, C programming, Java, and Python.
    With a creative mindset and strong problem-solving skills, I strive to contribute my skills and enthusiasm to challenging projects.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/71516269?v=4" type="image/x-icon" />
      <meta title="author" content="Heera Singh Lodhi" />
      <meta title="kewwords" content="Heera Singh Lodhi, Heera Singh Lodhi new portfolio 2.0, Heera Singh, Developer Heera Singh"/>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?display=optional&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <body className={`antialiased`}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </body>
    </html>
  );
}
