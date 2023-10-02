import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Header, Footer, Providers } from "./../../components";

// import { DarkModeProvider } from "./../../context/DarkModeContext";

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
		// <DarkModeProvider>
		<html lang={locale} className="scroll-smooth" suppressHydrationWarning>
			<body
				className={`${poppins.className} flex min-h-screen flex-col bg-white dark:bg-bgDark`}
			>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Providers>
						<Header></Header>
						{children}
						<Footer></Footer>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
		// </DarkModeProvider>
	);
}
