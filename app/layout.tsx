import { ReactNode } from "react";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import { Viewport } from "next";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"]
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
});

const font = inter;

export const viewport: Viewport = {
	// Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
	themeColor: config.colors.main,
	width: "device-width",
	initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="fr"
			data-theme={config.colors.theme}
			className={`${font.className} ${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable}`}
		>
			<body className="bg-[#0A0A0A] text-white">
				{/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
