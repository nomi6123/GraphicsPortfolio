import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Noman | Web & Graphic Design Portfolio",
  description:
    "I’m Muhammad Noman — an enthusiastic Website Developer & Graphic Designer specializing in React.js, Next.js, JavaScript, and Node.js. I create responsive, creative, and visually appealing web applications along with professional graphic designs using Photoshop, CorelDRAW, and Illustrator.",
  keywords: [
    "Graphic Designer",
    "Web Developer",
    "Creative Portfolio",
    "Next.js Developer",
    "React.js Developer",
    "Freelance Designer",
    "Modern Web Design",
    "Logo Design",
    "Branding Expert",
    "UI UX Designer",
    "Photoshop Expert",
    "CorelDRAW Designer",
    "Front-end Developer",
    "Portfolio Website",
    "Creative Studio",
    "Digital Designer",
    "Responsive Web Design",
    "Web Design Services",
    "Graphic Design Portfolio",
    "Web Development Portfolio",
  ],
  author: "Muhammad Noman",
  openGraph: {
    title: "Muhammad Noman | Web & Graphic Designer",
    description:
      "Creative portfolio showcasing modern web development, UI/UX design, and graphic design projects. Combining technical expertise with visual creativity to craft impactful digital experiences.",
    url: "https://graphics-portfolio-lake.vercel.app",
    siteName: "Noman Creations",
    images: [
      {
        url: "/og.jpg",
        width: 1600,
        height: 1200,
        alt: "Muhammad Noman - Web & Graphic Design Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
