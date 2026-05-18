import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://pocket-english.ru";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Pocket English — Артеева Татьяна | Преподаватель английского",
  description:
    "Онлайн-уроки английского языка для взрослых. Групповые и индивидуальные занятия, разговорный клуб. Cambridge TKT Band 4.",
  keywords: [
    "английский язык",
    "репетитор",
    "онлайн уроки",
    "групповые занятия",
    "английский для взрослых",
    "English",
    "Cambridge",
    "TKT",
    "разговорный английский",
  ],
  openGraph: {
    title: "Pocket English — Артеева Татьяна",
    description:
      "Онлайн-уроки английского для взрослых. Групповые и индивидуальные занятия.",
    type: "website",
    locale: "ru_RU",
    siteName: "Pocket English",
    url: baseUrl,
    images: [
      {
        url: "/images/teacher-photo.jpg",
        width: 800,
        height: 800,
        alt: "Татьяна Артеева — преподаватель английского",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Pocket English — Артеева Татьяна",
    description:
      "Онлайн-уроки английского для взрослых. Групповые и индивидуальные занятия.",
    images: ["/images/teacher-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
