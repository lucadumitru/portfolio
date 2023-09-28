import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import { Header, Footer } from "./../../components";

import { DarkModeProvider } from "./../../context/DarkModeContext";

import "./globals.css";
import { poppins } from "./fonts";

export function generateStaticParams() {
	return [{ locale: "en" }, { locale: "es" }, { locale: "ru" }, { locale: "ro" }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
	let messages;
	try {
		messages = (await import(`./../../../messages/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}
	return (
		<DarkModeProvider>
			<html lang={locale} className="scroll-smooth">
				<body className={`${poppins.className} bg-white dark:bg-bgDark `}>
					<NextIntlClientProvider locale={locale} messages={messages}>
						<Header></Header>
						{children}
						<Footer></Footer>
					</NextIntlClientProvider>
				</body>
			</html>
		</DarkModeProvider>
	);
}
