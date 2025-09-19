"use client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us | Cuponized",
  description: "Who we are and how we help you save with verified coupons.",
  alternates: {
    canonical: "/about-us",
    languages: { en: "/about-us", es: "/sobre-nosotros" },
  },
  openGraph: {
    title: "About us | Cuponized",
    description: "Who we are and how we help you save with verified coupons.",
    url: "/about-us",
    images: ["/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About us | Cuponized",
    description: "Who we are and how we help you save with verified coupons.",
    images: ["/og-default.png"],
  },
};

export default function AboutUs() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">About us</h1>
      <p className="text-gray-700 dark:text-neutral-300 mb-4">
        Cuponized was created with a simple mission: help you find the best
        discounts and deals quickly and easily.
      </p>
      <p className="text-gray-700 dark:text-neutral-300 mb-4">
        We believe saving money shouldn’t be complicated. That’s why we gather
        offers from different brands and stores so you can discover them in one place.
      </p>
      <p className="text-gray-700 dark:text-neutral-300">
        We are an independent project born in Argentina 🇦🇷, built with passion
        to make your money go further.
      </p>
    </main>
  );
}
