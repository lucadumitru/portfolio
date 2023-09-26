"use client";

import clsx from "clsx";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher({ className }) {
	const [isPending, startTransition] = useTransition();
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
		const nextLocale = event.target.value;
		startTransition(() => {
			router.replace(pathname, { locale: nextLocale });
		});
	}

	return (
		<div className={className}>
			{" "}
			<label
				className={clsx(
					"text-gray-400 relative ",
					isPending && "transition-opacity [&:disabled]:opacity-30",
				)}
			>
				<select
					className="inline-flex bg-transparent py-3 pl-2 pr-2 dark:text-white"
					defaultValue={locale}
					disabled={isPending}
					onChange={onSelectChange}
				>
					{["en", "es", "ru", "ro"].map((cur) => (
						<option key={cur} value={cur}>
							{cur}
						</option>
					))}
				</select>
			</label>
		</div>
	);
}
