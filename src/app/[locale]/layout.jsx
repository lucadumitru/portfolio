import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Header, Footer, Providers } from "./../../components";

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
		<html lang={locale} className="min-w-[320px] scroll-smooth" suppressHydrationWarning>
			<body
				className={`${poppins.className} flex min-h-screen flex-col bg-white dark:bg-bgDark`}
			>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Providers>
						<Header locale={locale}></Header>
						{children}
						<Footer></Footer>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
