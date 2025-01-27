// cspell:disable-file
// Note: This is a generated file.

export type IdRequest = string | string;

export interface PersonUserObjectResponse {
	avatar_url: string | null;
	id: IdRequest;
	name: string | null;
	object: 'user';
	person: { email?: string };
	type: 'person';
}

export type EmptyObject = Record<string, never>;

export interface PartialUserObjectResponse {
	id: IdRequest;
	object: 'user';
}

export interface BotUserObjectResponse {
	avatar_url: string | null;
	id: IdRequest;
	name: string | null;
	object: 'user';
	type: 'bot';
	bot:
		| EmptyObject
		| {
				owner:
					| {
							type: 'user';
							user:
								| PartialUserObjectResponse
								| {
										type: 'person';
										person: { email: string };
										name: string | null;
										avatar_url: string | null;
										id: IdRequest;
										object: 'user';
								  };
					  }
					| { type: 'workspace'; workspace: true };
				workspace_name: string | null;
		  };
}

export type UserObjectResponse = BotUserObjectResponse | PersonUserObjectResponse;

export type SelectColor =
	| 'blue'
	| 'brown'
	| 'default'
	| 'gray'
	| 'green'
	| 'orange'
	| 'pink'
	| 'purple'
	| 'red'
	| 'yellow';

export interface PartialSelectResponse {
	color: SelectColor;
	id: string;
	name: string;
}

export type TimeZoneRequest =
	| 'Africa/Abidjan'
	| 'Africa/Accra'
	| 'Africa/Addis_Ababa'
	| 'Africa/Algiers'
	| 'Africa/Asmara'
	| 'Africa/Asmera'
	| 'Africa/Bamako'
	| 'Africa/Bangui'
	| 'Africa/Banjul'
	| 'Africa/Bissau'
	| 'Africa/Blantyre'
	| 'Africa/Brazzaville'
	| 'Africa/Bujumbura'
	| 'Africa/Cairo'
	| 'Africa/Casablanca'
	| 'Africa/Ceuta'
	| 'Africa/Conakry'
	| 'Africa/Dakar'
	| 'Africa/Dar_es_Salaam'
	| 'Africa/Djibouti'
	| 'Africa/Douala'
	| 'Africa/El_Aaiun'
	| 'Africa/Freetown'
	| 'Africa/Gaborone'
	| 'Africa/Harare'
	| 'Africa/Johannesburg'
	| 'Africa/Juba'
	| 'Africa/Kampala'
	| 'Africa/Khartoum'
	| 'Africa/Kigali'
	| 'Africa/Kinshasa'
	| 'Africa/Lagos'
	| 'Africa/Libreville'
	| 'Africa/Lome'
	| 'Africa/Luanda'
	| 'Africa/Lubumbashi'
	| 'Africa/Lusaka'
	| 'Africa/Malabo'
	| 'Africa/Maputo'
	| 'Africa/Maseru'
	| 'Africa/Mbabane'
	| 'Africa/Mogadishu'
	| 'Africa/Monrovia'
	| 'Africa/Nairobi'
	| 'Africa/Ndjamena'
	| 'Africa/Niamey'
	| 'Africa/Nouakchott'
	| 'Africa/Ouagadougou'
	| 'Africa/Porto-Novo'
	| 'Africa/Sao_Tome'
	| 'Africa/Timbuktu'
	| 'Africa/Tripoli'
	| 'Africa/Tunis'
	| 'Africa/Windhoek'
	| 'America/Adak'
	| 'America/Anchorage'
	| 'America/Anguilla'
	| 'America/Antigua'
	| 'America/Araguaina'
	| 'America/Argentina/Buenos_Aires'
	| 'America/Argentina/Catamarca'
	| 'America/Argentina/ComodRivadavia'
	| 'America/Argentina/Cordoba'
	| 'America/Argentina/Jujuy'
	| 'America/Argentina/La_Rioja'
	| 'America/Argentina/Mendoza'
	| 'America/Argentina/Rio_Gallegos'
	| 'America/Argentina/Salta'
	| 'America/Argentina/San_Juan'
	| 'America/Argentina/San_Luis'
	| 'America/Argentina/Tucuman'
	| 'America/Argentina/Ushuaia'
	| 'America/Aruba'
	| 'America/Asuncion'
	| 'America/Atikokan'
	| 'America/Atka'
	| 'America/Bahia_Banderas'
	| 'America/Bahia'
	| 'America/Barbados'
	| 'America/Belem'
	| 'America/Belize'
	| 'America/Blanc-Sablon'
	| 'America/Boa_Vista'
	| 'America/Bogota'
	| 'America/Boise'
	| 'America/Buenos_Aires'
	| 'America/Cambridge_Bay'
	| 'America/Campo_Grande'
	| 'America/Cancun'
	| 'America/Caracas'
	| 'America/Catamarca'
	| 'America/Cayenne'
	| 'America/Cayman'
	| 'America/Chicago'
	| 'America/Chihuahua'
	| 'America/Ciudad_Juarez'
	| 'America/Coral_Harbour'
	| 'America/Cordoba'
	| 'America/Costa_Rica'
	| 'America/Creston'
	| 'America/Cuiaba'
	| 'America/Curacao'
	| 'America/Danmarkshavn'
	| 'America/Dawson_Creek'
	| 'America/Dawson'
	| 'America/Denver'
	| 'America/Detroit'
	| 'America/Dominica'
	| 'America/Edmonton'
	| 'America/Eirunepe'
	| 'America/El_Salvador'
	| 'America/Ensenada'
	| 'America/Fort_Nelson'
	| 'America/Fort_Wayne'
	| 'America/Fortaleza'
	| 'America/Glace_Bay'
	| 'America/Godthab'
	| 'America/Goose_Bay'
	| 'America/Grand_Turk'
	| 'America/Grenada'
	| 'America/Guadeloupe'
	| 'America/Guatemala'
	| 'America/Guayaquil'
	| 'America/Guyana'
	| 'America/Halifax'
	| 'America/Havana'
	| 'America/Hermosillo'
	| 'America/Indiana/Indianapolis'
	| 'America/Indiana/Knox'
	| 'America/Indiana/Marengo'
	| 'America/Indiana/Petersburg'
	| 'America/Indiana/Tell_City'
	| 'America/Indiana/Vevay'
	| 'America/Indiana/Vincennes'
	| 'America/Indiana/Winamac'
	| 'America/Indianapolis'
	| 'America/Inuvik'
	| 'America/Iqaluit'
	| 'America/Jamaica'
	| 'America/Jujuy'
	| 'America/Juneau'
	| 'America/Kentucky/Louisville'
	| 'America/Kentucky/Monticello'
	| 'America/Knox_IN'
	| 'America/Kralendijk'
	| 'America/La_Paz'
	| 'America/Lima'
	| 'America/Los_Angeles'
	| 'America/Louisville'
	| 'America/Lower_Princes'
	| 'America/Maceio'
	| 'America/Managua'
	| 'America/Manaus'
	| 'America/Marigot'
	| 'America/Martinique'
	| 'America/Matamoros'
	| 'America/Mazatlan'
	| 'America/Mendoza'
	| 'America/Menominee'
	| 'America/Merida'
	| 'America/Metlakatla'
	| 'America/Mexico_City'
	| 'America/Miquelon'
	| 'America/Moncton'
	| 'America/Monterrey'
	| 'America/Montevideo'
	| 'America/Montreal'
	| 'America/Montserrat'
	| 'America/Nassau'
	| 'America/New_York'
	| 'America/Nipigon'
	| 'America/Nome'
	| 'America/Noronha'
	| 'America/North_Dakota/Beulah'
	| 'America/North_Dakota/Center'
	| 'America/North_Dakota/New_Salem'
	| 'America/Nuuk'
	| 'America/Ojinaga'
	| 'America/Panama'
	| 'America/Pangnirtung'
	| 'America/Paramaribo'
	| 'America/Phoenix'
	| 'America/Port_of_Spain'
	| 'America/Port-au-Prince'
	| 'America/Porto_Acre'
	| 'America/Porto_Velho'
	| 'America/Puerto_Rico'
	| 'America/Punta_Arenas'
	| 'America/Rainy_River'
	| 'America/Rankin_Inlet'
	| 'America/Recife'
	| 'America/Regina'
	| 'America/Resolute'
	| 'America/Rio_Branco'
	| 'America/Rosario'
	| 'America/Santa_Isabel'
	| 'America/Santarem'
	| 'America/Santiago'
	| 'America/Santo_Domingo'
	| 'America/Sao_Paulo'
	| 'America/Scoresbysund'
	| 'America/Shiprock'
	| 'America/Sitka'
	| 'America/St_Barthelemy'
	| 'America/St_Johns'
	| 'America/St_Kitts'
	| 'America/St_Lucia'
	| 'America/St_Thomas'
	| 'America/St_Vincent'
	| 'America/Swift_Current'
	| 'America/Tegucigalpa'
	| 'America/Thule'
	| 'America/Thunder_Bay'
	| 'America/Tijuana'
	| 'America/Toronto'
	| 'America/Tortola'
	| 'America/Vancouver'
	| 'America/Virgin'
	| 'America/Whitehorse'
	| 'America/Winnipeg'
	| 'America/Yakutat'
	| 'America/Yellowknife'
	| 'Antarctica/Casey'
	| 'Antarctica/Davis'
	| 'Antarctica/DumontDUrville'
	| 'Antarctica/Macquarie'
	| 'Antarctica/Mawson'
	| 'Antarctica/McMurdo'
	| 'Antarctica/Palmer'
	| 'Antarctica/Rothera'
	| 'Antarctica/South_Pole'
	| 'Antarctica/Syowa'
	| 'Antarctica/Troll'
	| 'Antarctica/Vostok'
	| 'Arctic/Longyearbyen'
	| 'Asia/Aden'
	| 'Asia/Almaty'
	| 'Asia/Amman'
	| 'Asia/Anadyr'
	| 'Asia/Aqtau'
	| 'Asia/Aqtobe'
	| 'Asia/Ashgabat'
	| 'Asia/Ashkhabad'
	| 'Asia/Atyrau'
	| 'Asia/Baghdad'
	| 'Asia/Bahrain'
	| 'Asia/Baku'
	| 'Asia/Bangkok'
	| 'Asia/Barnaul'
	| 'Asia/Beirut'
	| 'Asia/Bishkek'
	| 'Asia/Brunei'
	| 'Asia/Calcutta'
	| 'Asia/Chita'
	| 'Asia/Choibalsan'
	| 'Asia/Chongqing'
	| 'Asia/Chungking'
	| 'Asia/Colombo'
	| 'Asia/Dacca'
	| 'Asia/Damascus'
	| 'Asia/Dhaka'
	| 'Asia/Dili'
	| 'Asia/Dubai'
	| 'Asia/Dushanbe'
	| 'Asia/Famagusta'
	| 'Asia/Gaza'
	| 'Asia/Harbin'
	| 'Asia/Hebron'
	| 'Asia/Ho_Chi_Minh'
	| 'Asia/Hong_Kong'
	| 'Asia/Hovd'
	| 'Asia/Irkutsk'
	| 'Asia/Istanbul'
	| 'Asia/Jakarta'
	| 'Asia/Jayapura'
	| 'Asia/Jerusalem'
	| 'Asia/Kabul'
	| 'Asia/Kamchatka'
	| 'Asia/Karachi'
	| 'Asia/Kashgar'
	| 'Asia/Kathmandu'
	| 'Asia/Katmandu'
	| 'Asia/Khandyga'
	| 'Asia/Kolkata'
	| 'Asia/Krasnoyarsk'
	| 'Asia/Kuala_Lumpur'
	| 'Asia/Kuching'
	| 'Asia/Kuwait'
	| 'Asia/Macao'
	| 'Asia/Macau'
	| 'Asia/Magadan'
	| 'Asia/Makassar'
	| 'Asia/Manila'
	| 'Asia/Muscat'
	| 'Asia/Nicosia'
	| 'Asia/Novokuznetsk'
	| 'Asia/Novosibirsk'
	| 'Asia/Omsk'
	| 'Asia/Oral'
	| 'Asia/Phnom_Penh'
	| 'Asia/Pontianak'
	| 'Asia/Pyongyang'
	| 'Asia/Qatar'
	| 'Asia/Qostanay'
	| 'Asia/Qyzylorda'
	| 'Asia/Rangoon'
	| 'Asia/Riyadh'
	| 'Asia/Saigon'
	| 'Asia/Sakhalin'
	| 'Asia/Samarkand'
	| 'Asia/Seoul'
	| 'Asia/Shanghai'
	| 'Asia/Singapore'
	| 'Asia/Srednekolymsk'
	| 'Asia/Taipei'
	| 'Asia/Tashkent'
	| 'Asia/Tbilisi'
	| 'Asia/Tehran'
	| 'Asia/Tel_Aviv'
	| 'Asia/Thimbu'
	| 'Asia/Thimphu'
	| 'Asia/Tokyo'
	| 'Asia/Tomsk'
	| 'Asia/Ujung_Pandang'
	| 'Asia/Ulaanbaatar'
	| 'Asia/Ulan_Bator'
	| 'Asia/Urumqi'
	| 'Asia/Ust-Nera'
	| 'Asia/Vientiane'
	| 'Asia/Vladivostok'
	| 'Asia/Yakutsk'
	| 'Asia/Yangon'
	| 'Asia/Yekaterinburg'
	| 'Asia/Yerevan'
	| 'Atlantic/Azores'
	| 'Atlantic/Bermuda'
	| 'Atlantic/Canary'
	| 'Atlantic/Cape_Verde'
	| 'Atlantic/Faeroe'
	| 'Atlantic/Faroe'
	| 'Atlantic/Jan_Mayen'
	| 'Atlantic/Madeira'
	| 'Atlantic/Reykjavik'
	| 'Atlantic/South_Georgia'
	| 'Atlantic/St_Helena'
	| 'Atlantic/Stanley'
	| 'Australia/ACT'
	| 'Australia/Adelaide'
	| 'Australia/Brisbane'
	| 'Australia/Broken_Hill'
	| 'Australia/Canberra'
	| 'Australia/Currie'
	| 'Australia/Darwin'
	| 'Australia/Eucla'
	| 'Australia/Hobart'
	| 'Australia/LHI'
	| 'Australia/Lindeman'
	| 'Australia/Lord_Howe'
	| 'Australia/Melbourne'
	| 'Australia/North'
	| 'Australia/NSW'
	| 'Australia/Perth'
	| 'Australia/Queensland'
	| 'Australia/South'
	| 'Australia/Sydney'
	| 'Australia/Tasmania'
	| 'Australia/Victoria'
	| 'Australia/West'
	| 'Australia/Yancowinna'
	| 'Brazil/Acre'
	| 'Brazil/DeNoronha'
	| 'Brazil/East'
	| 'Brazil/West'
	| 'Canada/Atlantic'
	| 'Canada/Central'
	| 'Canada/Eastern'
	| 'Canada/Mountain'
	| 'Canada/Newfoundland'
	| 'Canada/Pacific'
	| 'Canada/Saskatchewan'
	| 'Canada/Yukon'
	| 'CET'
	| 'Chile/Continental'
	| 'Chile/EasterIsland'
	| 'CST6CDT'
	| 'Cuba'
	| 'EET'
	| 'Egypt'
	| 'Eire'
	| 'EST'
	| 'EST5EDT'
	| 'Etc/GMT-0'
	| 'Etc/GMT-1'
	| 'Etc/GMT-10'
	| 'Etc/GMT-11'
	| 'Etc/GMT-12'
	| 'Etc/GMT-13'
	| 'Etc/GMT-14'
	| 'Etc/GMT-2'
	| 'Etc/GMT-3'
	| 'Etc/GMT-4'
	| 'Etc/GMT-5'
	| 'Etc/GMT-6'
	| 'Etc/GMT-7'
	| 'Etc/GMT-8'
	| 'Etc/GMT-9'
	| 'Etc/GMT'
	| 'Etc/GMT+0'
	| 'Etc/GMT+1'
	| 'Etc/GMT+10'
	| 'Etc/GMT+11'
	| 'Etc/GMT+12'
	| 'Etc/GMT+2'
	| 'Etc/GMT+3'
	| 'Etc/GMT+4'
	| 'Etc/GMT+5'
	| 'Etc/GMT+6'
	| 'Etc/GMT+7'
	| 'Etc/GMT+8'
	| 'Etc/GMT+9'
	| 'Etc/GMT0'
	| 'Etc/Greenwich'
	| 'Etc/UCT'
	| 'Etc/Universal'
	| 'Etc/UTC'
	| 'Etc/Zulu'
	| 'Europe/Amsterdam'
	| 'Europe/Andorra'
	| 'Europe/Astrakhan'
	| 'Europe/Athens'
	| 'Europe/Belfast'
	| 'Europe/Belgrade'
	| 'Europe/Berlin'
	| 'Europe/Bratislava'
	| 'Europe/Brussels'
	| 'Europe/Bucharest'
	| 'Europe/Budapest'
	| 'Europe/Busingen'
	| 'Europe/Chisinau'
	| 'Europe/Copenhagen'
	| 'Europe/Dublin'
	| 'Europe/Gibraltar'
	| 'Europe/Guernsey'
	| 'Europe/Helsinki'
	| 'Europe/Isle_of_Man'
	| 'Europe/Istanbul'
	| 'Europe/Jersey'
	| 'Europe/Kaliningrad'
	| 'Europe/Kiev'
	| 'Europe/Kirov'
	| 'Europe/Kyiv'
	| 'Europe/Lisbon'
	| 'Europe/Ljubljana'
	| 'Europe/London'
	| 'Europe/Luxembourg'
	| 'Europe/Madrid'
	| 'Europe/Malta'
	| 'Europe/Mariehamn'
	| 'Europe/Minsk'
	| 'Europe/Monaco'
	| 'Europe/Moscow'
	| 'Europe/Nicosia'
	| 'Europe/Oslo'
	| 'Europe/Paris'
	| 'Europe/Podgorica'
	| 'Europe/Prague'
	| 'Europe/Riga'
	| 'Europe/Rome'
	| 'Europe/Samara'
	| 'Europe/San_Marino'
	| 'Europe/Sarajevo'
	| 'Europe/Saratov'
	| 'Europe/Simferopol'
	| 'Europe/Skopje'
	| 'Europe/Sofia'
	| 'Europe/Stockholm'
	| 'Europe/Tallinn'
	| 'Europe/Tirane'
	| 'Europe/Tiraspol'
	| 'Europe/Ulyanovsk'
	| 'Europe/Uzhgorod'
	| 'Europe/Vaduz'
	| 'Europe/Vatican'
	| 'Europe/Vienna'
	| 'Europe/Vilnius'
	| 'Europe/Volgograd'
	| 'Europe/Warsaw'
	| 'Europe/Zagreb'
	| 'Europe/Zaporozhye'
	| 'Europe/Zurich'
	| 'GB-Eire'
	| 'GB'
	| 'GMT-0'
	| 'GMT'
	| 'GMT+0'
	| 'GMT0'
	| 'Greenwich'
	| 'Hongkong'
	| 'HST'
	| 'Iceland'
	| 'Indian/Antananarivo'
	| 'Indian/Chagos'
	| 'Indian/Christmas'
	| 'Indian/Cocos'
	| 'Indian/Comoro'
	| 'Indian/Kerguelen'
	| 'Indian/Mahe'
	| 'Indian/Maldives'
	| 'Indian/Mauritius'
	| 'Indian/Mayotte'
	| 'Indian/Reunion'
	| 'Iran'
	| 'Israel'
	| 'Jamaica'
	| 'Japan'
	| 'Kwajalein'
	| 'Libya'
	| 'MET'
	| 'Mexico/BajaNorte'
	| 'Mexico/BajaSur'
	| 'Mexico/General'
	| 'MST'
	| 'MST7MDT'
	| 'Navajo'
	| 'NZ-CHAT'
	| 'NZ'
	| 'Pacific/Apia'
	| 'Pacific/Auckland'
	| 'Pacific/Bougainville'
	| 'Pacific/Chatham'
	| 'Pacific/Chuuk'
	| 'Pacific/Easter'
	| 'Pacific/Efate'
	| 'Pacific/Enderbury'
	| 'Pacific/Fakaofo'
	| 'Pacific/Fiji'
	| 'Pacific/Funafuti'
	| 'Pacific/Galapagos'
	| 'Pacific/Gambier'
	| 'Pacific/Guadalcanal'
	| 'Pacific/Guam'
	| 'Pacific/Honolulu'
	| 'Pacific/Johnston'
	| 'Pacific/Kanton'
	| 'Pacific/Kiritimati'
	| 'Pacific/Kosrae'
	| 'Pacific/Kwajalein'
	| 'Pacific/Majuro'
	| 'Pacific/Marquesas'
	| 'Pacific/Midway'
	| 'Pacific/Nauru'
	| 'Pacific/Niue'
	| 'Pacific/Norfolk'
	| 'Pacific/Noumea'
	| 'Pacific/Pago_Pago'
	| 'Pacific/Palau'
	| 'Pacific/Pitcairn'
	| 'Pacific/Pohnpei'
	| 'Pacific/Ponape'
	| 'Pacific/Port_Moresby'
	| 'Pacific/Rarotonga'
	| 'Pacific/Saipan'
	| 'Pacific/Samoa'
	| 'Pacific/Tahiti'
	| 'Pacific/Tarawa'
	| 'Pacific/Tongatapu'
	| 'Pacific/Truk'
	| 'Pacific/Wake'
	| 'Pacific/Wallis'
	| 'Pacific/Yap'
	| 'Poland'
	| 'Portugal'
	| 'PRC'
	| 'PST8PDT'
	| 'ROC'
	| 'ROK'
	| 'Singapore'
	| 'Turkey'
	| 'UCT'
	| 'Universal'
	| 'US/Alaska'
	| 'US/Aleutian'
	| 'US/Arizona'
	| 'US/Central'
	| 'US/East-Indiana'
	| 'US/Eastern'
	| 'US/Hawaii'
	| 'US/Indiana-Starke'
	| 'US/Michigan'
	| 'US/Mountain'
	| 'US/Pacific-New'
	| 'US/Pacific'
	| 'US/Samoa'
	| 'UTC'
	| 'W-SU'
	| 'WET'
	| 'Zulu';

export interface DateResponse {
	end: string | null;
	start: string;
	time_zone: TimeZoneRequest | null;
}

export type StringRequest = string;

export type TextRequest = string;

export interface StringFormulaPropertyResponse {
	string: string | null;
	type: 'string';
}

export interface DateFormulaPropertyResponse {
	date: DateResponse | null;
	type: 'date';
}

export interface NumberFormulaPropertyResponse {
	number: number | null;
	type: 'number';
}

export interface BooleanFormulaPropertyResponse {
	boolean: boolean | null;
	type: 'boolean';
}

export type FormulaPropertyResponse =
	| BooleanFormulaPropertyResponse
	| DateFormulaPropertyResponse
	| NumberFormulaPropertyResponse
	| StringFormulaPropertyResponse;

export interface VerificationPropertyUnverifiedResponse {
	date: null;
	state: 'unverified';
	verified_by: null;
}

export interface VerificationPropertyResponse {
	date: DateResponse | null;
	state: 'expired' | 'verified';
	verified_by:
		| {
				bot:
					| EmptyObject
					| {
							owner:
								| {
										type: 'user';
										user:
											| PartialUserObjectResponse
											| {
													type: 'person';
													person: { email: string };
													name: string | null;
													avatar_url: string | null;
													id: IdRequest;
													object: 'user';
											  };
								  }
								| { type: 'workspace'; workspace: true };
							workspace_name: string | null;
					  };
				id: IdRequest;
				type?: 'bot';
				name?: string | null;
				avatar_url?: string | null;
				object?: 'user';
		  }
		| { id: IdRequest }
		| {
				person: { email?: string };
				id: IdRequest;
				type?: 'person';
				name?: string | null;
				avatar_url?: string | null;
				object?: 'user';
		  }
		| null
		| null
		| null;
}

export interface AnnotationResponse {
	bold: boolean;
	code: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	color:
		| 'blue_background'
		| 'blue'
		| 'brown_background'
		| 'brown'
		| 'default'
		| 'gray_background'
		| 'gray'
		| 'green_background'
		| 'green'
		| 'orange_background'
		| 'orange'
		| 'pink_background'
		| 'pink'
		| 'purple_background'
		| 'purple'
		| 'red_background'
		| 'red'
		| 'yellow_background'
		| 'yellow';
}

export interface TextRichTextItemResponse {
	annotations: AnnotationResponse;
	href: string | null;
	plain_text: string;
	text: { content: string; link: { url: TextRequest } | null };
	type: 'text';
}

export interface LinkPreviewMentionResponse {
	url: TextRequest;
}

export interface TemplateMentionDateTemplateMentionResponse {
	template_mention_date: 'now' | 'today';
	type: 'template_mention_date';
}

export interface TemplateMentionUserTemplateMentionResponse {
	template_mention_user: 'me';
	type: 'template_mention_user';
}

export type TemplateMentionResponse =
	| TemplateMentionDateTemplateMentionResponse
	| TemplateMentionUserTemplateMentionResponse;

export interface MentionRichTextItemResponse {
	annotations: AnnotationResponse;
	href: string | null;
	plain_text: string;
	type: 'mention';
	mention:
		| { type: 'database'; database: { id: IdRequest } }
		| { type: 'date'; date: DateResponse }
		| { type: 'link_preview'; link_preview: LinkPreviewMentionResponse }
		| { type: 'page'; page: { id: IdRequest } }
		| { type: 'template_mention'; template_mention: TemplateMentionResponse }
		| { type: 'user'; user: PartialUserObjectResponse | UserObjectResponse };
}

export interface EquationRichTextItemResponse {
	annotations: AnnotationResponse;
	equation: { expression: TextRequest };
	href: string | null;
	plain_text: string;
	type: 'equation';
}

export type RichTextItemResponse =
	| EquationRichTextItemResponse
	| MentionRichTextItemResponse
	| TextRichTextItemResponse;

export type RollupFunction =
	| 'average'
	| 'checked'
	| 'count_per_group'
	| 'count_values'
	| 'count'
	| 'date_range'
	| 'earliest_date'
	| 'empty'
	| 'latest_date'
	| 'max'
	| 'median'
	| 'min'
	| 'not_empty'
	| 'percent_checked'
	| 'percent_empty'
	| 'percent_not_empty'
	| 'percent_per_group'
	| 'percent_unchecked'
	| 'range'
	| 'show_original'
	| 'show_unique'
	| 'sum'
	| 'unchecked'
	| 'unique';

export type EmojiRequest =
	| '〰️'
	| '〰'
	| '‼️'
	| '‼'
	| '⁉️'
	| '⁉'
	| '*️⃣'
	| '*⃣'
	| '#️⃣'
	| '#⃣'
	| '〽️'
	| '〽'
	| '©️'
	| '©'
	| '®️'
	| '®'
	| '↔️'
	| '↕️'
	| '↕'
	| '↖️'
	| '↖'
	| '↗️'
	| '↗'
	| '↘️'
	| '↘'
	| '↙️'
	| '↙'
	| '↩️'
	| '↩'
	| '↪️'
	| '↪'
	| '⌚'
	| '⌛'
	| '⌨️'
	| '⌨'
	| '⏏️'
	| '⏏'
	| '⏩'
	| '⏪'
	| '⏫'
	| '⏬'
	| '⏭️'
	| '⏭'
	| '⏮️'
	| '⏮'
	| '⏯️'
	| '⏯'
	| '⏰'
	| '⏱️'
	| '⏱'
	| '⏲️'
	| '⏲'
	| '⏳'
	| '⏸️'
	| '⏸'
	| '⏹️'
	| '⏹'
	| '⏺️'
	| '⏺'
	| '▪️'
	| '▪'
	| '▫️'
	| '▫'
	| '▶️'
	| '◀️'
	| '◻️'
	| '◻'
	| '◼️'
	| '◼'
	| '◽'
	| '◾'
	| '☀️'
	| '☀'
	| '☁️'
	| '☁'
	| '☂️'
	| '☂'
	| '☃️'
	| '☃'
	| '☄️'
	| '☄'
	| '☎️'
	| '☎'
	| '☑️'
	| '☑'
	| '☔'
	| '☕'
	| '☘️'
	| '☘'
	| '☝️'
	| '☝'
	| '☝🏻'
	| '☝🏼'
	| '☝🏽'
	| '☝🏾'
	| '☝🏿'
	| '☠️'
	| '☠'
	| '☢️'
	| '☢'
	| '☣️'
	| '☣'
	| '☦️'
	| '☦'
	| '☪️'
	| '☪'
	| '☮️'
	| '☮'
	| '☯️'
	| '☯'
	| '☸️'
	| '☸'
	| '☹️'
	| '☹'
	| '☺️'
	| '☺'
	| '♀️'
	| '♀'
	| '♂️'
	| '♂'
	| '♈'
	| '♉'
	| '♊'
	| '♋'
	| '♌'
	| '♍'
	| '♎'
	| '♏'
	| '♐'
	| '♑'
	| '♒'
	| '♓'
	| '♟️'
	| '♟'
	| '♠️'
	| '♠'
	| '♣️'
	| '♣'
	| '♥️'
	| '♥'
	| '♦️'
	| '♦'
	| '♨️'
	| '♨'
	| '♻️'
	| '♻'
	| '♾️'
	| '♾'
	| '♿'
	| '⚒️'
	| '⚒'
	| '⚓'
	| '⚔️'
	| '⚔'
	| '⚕️'
	| '⚕'
	| '⚖️'
	| '⚖'
	| '⚗️'
	| '⚗'
	| '⚙️'
	| '⚙'
	| '⚛️'
	| '⚛'
	| '⚜️'
	| '⚜'
	| '⚠️'
	| '⚠'
	| '⚡'
	| '⚧️'
	| '⚧'
	| '⚪'
	| '⚫'
	| '⚰️'
	| '⚰'
	| '⚱️'
	| '⚱'
	| '⚽'
	| '⚾'
	| '⛄'
	| '⛅'
	| '⛈️'
	| '⛈'
	| '⛎'
	| '⛏️'
	| '⛏'
	| '⛑️'
	| '⛑'
	| '⛓️'
	| '⛓'
	| '⛔'
	| '⛩️'
	| '⛩'
	| '⛪'
	| '⛰️'
	| '⛰'
	| '⛱️'
	| '⛱'
	| '⛲'
	| '⛳'
	| '⛴️'
	| '⛴'
	| '⛵'
	| '⛷️'
	| '⛷'
	| '⛸️'
	| '⛸'
	| '⛹️'
	| '⛹'
	| '⛹️‍♀️'
	| '⛹️‍♂️'
	| '⛹🏻'
	| '⛹🏻‍♀️'
	| '⛹🏻‍♂️'
	| '⛹🏼'
	| '⛹🏼‍♀️'
	| '⛹🏼‍♂️'
	| '⛹🏽'
	| '⛹🏽‍♀️'
	| '⛹🏽‍♂️'
	| '⛹🏾'
	| '⛹🏾‍♀️'
	| '⛹🏾‍♂️'
	| '⛹🏿'
	| '⛹🏿‍♀️'
	| '⛹🏿‍♂️'
	| '⛺'
	| '⛽'
	| '🇦🇨'
	| '🇦🇩'
	| '🇦🇪'
	| '🇦🇫'
	| '🇦🇬'
	| '🇦🇮'
	| '🇦🇱'
	| '🇦🇲'
	| '🇦🇴'
	| '🇦🇶'
	| '🇦🇷'
	| '🇦🇸'
	| '🇦🇹'
	| '🇦🇺'
	| '🇦🇼'
	| '🇦🇽'
	| '🇦🇿'
	| '🇧🇦'
	| '🇧🇧'
	| '🇧🇩'
	| '🇧🇪'
	| '🇧🇫'
	| '🇧🇬'
	| '🇧🇭'
	| '🇧🇮'
	| '🇧🇯'
	| '🇧🇱'
	| '🇧🇲'
	| '🇧🇳'
	| '🇧🇴'
	| '🇧🇶'
	| '🇧🇷'
	| '🇧🇸'
	| '🇧🇹'
	| '🇧🇻'
	| '🇧🇼'
	| '🇧🇾'
	| '🇧🇿'
	| '🇨🇦'
	| '🇨🇨'
	| '🇨🇩'
	| '🇨🇫'
	| '🇨🇬'
	| '🇨🇭'
	| '🇨🇮'
	| '🇨🇰'
	| '🇨🇱'
	| '🇨🇲'
	| '🇨🇳'
	| '🇨🇴'
	| '🇨🇵'
	| '🇨🇷'
	| '🇨🇺'
	| '🇨🇻'
	| '🇨🇼'
	| '🇨🇽'
	| '🇨🇾'
	| '🇨🇿'
	| '🇩🇪'
	| '🇩🇬'
	| '🇩🇯'
	| '🇩🇰'
	| '🇩🇲'
	| '🇩🇴'
	| '🇩🇿'
	| '🇪🇦'
	| '🇪🇨'
	| '🇪🇪'
	| '🇪🇬'
	| '🇪🇭'
	| '🇪🇷'
	| '🇪🇸'
	| '🇪🇹'
	| '🇪🇺'
	| '🇫🇮'
	| '🇫🇯'
	| '🇫🇰'
	| '🇫🇲'
	| '🇫🇴'
	| '🇫🇷'
	| '🇬🇦'
	| '🇬🇧'
	| '🇬🇩'
	| '🇬🇪'
	| '🇬🇫'
	| '🇬🇬'
	| '🇬🇭'
	| '🇬🇮'
	| '🇬🇱'
	| '🇬🇲'
	| '🇬🇳'
	| '🇬🇵'
	| '🇬🇶'
	| '🇬🇷'
	| '🇬🇸'
	| '🇬🇹'
	| '🇬🇺'
	| '🇬🇼'
	| '🇬🇾'
	| '🇭🇰'
	| '🇭🇲'
	| '🇭🇳'
	| '🇭🇷'
	| '🇭🇹'
	| '🇭🇺'
	| '🇮🇨'
	| '🇮🇩'
	| '🇮🇪'
	| '🇮🇱'
	| '🇮🇲'
	| '🇮🇳'
	| '🇮🇴'
	| '🇮🇶'
	| '🇮🇷'
	| '🇮🇸'
	| '🇮🇹'
	| '🇯🇪'
	| '🇯🇲'
	| '🇯🇴'
	| '🇯🇵'
	| '🇰🇪'
	| '🇰🇬'
	| '🇰🇭'
	| '🇰🇮'
	| '🇰🇲'
	| '🇰🇳'
	| '🇰🇵'
	| '🇰🇷'
	| '🇰🇼'
	| '🇰🇾'
	| '🇰🇿'
	| '🇱🇦'
	| '🇱🇧'
	| '🇱🇨'
	| '🇱🇮'
	| '🇱🇰'
	| '🇱🇷'
	| '🇱🇸'
	| '🇱🇹'
	| '🇱🇺'
	| '🇱🇻'
	| '🇱🇾'
	| '🇲🇦'
	| '🇲🇨'
	| '🇲🇩'
	| '🇲🇪'
	| '🇲🇫'
	| '🇲🇬'
	| '🇲🇭'
	| '🇲🇰'
	| '🇲🇱'
	| '🇲🇲'
	| '🇲🇳'
	| '🇲🇴'
	| '🇲🇵'
	| '🇲🇶'
	| '🇲🇷'
	| '🇲🇸'
	| '🇲🇹'
	| '🇲🇺'
	| '🇲🇻'
	| '🇲🇼'
	| '🇲🇽'
	| '🇲🇾'
	| '🇲🇿'
	| '🇳🇦'
	| '🇳🇨'
	| '🇳🇪'
	| '🇳🇫'
	| '🇳🇬'
	| '🇳🇮'
	| '🇳🇱'
	| '🇳🇴'
	| '🇳🇵'
	| '🇳🇷'
	| '🇳🇺'
	| '🇳🇿'
	| '🇴🇲'
	| '🇵🇦'
	| '🇵🇪'
	| '🇵🇫'
	| '🇵🇬'
	| '🇵🇭'
	| '🇵🇰'
	| '🇵🇱'
	| '🇵🇲'
	| '🇵🇳'
	| '🇵🇷'
	| '🇵🇸'
	| '🇵🇹'
	| '🇵🇼'
	| '🇵🇾'
	| '🇶🇦'
	| '🇷🇪'
	| '🇷🇴'
	| '🇷🇸'
	| '🇷🇺'
	| '🇷🇼'
	| '🇸🇦'
	| '🇸🇧'
	| '🇸🇨'
	| '🇸🇩'
	| '🇸🇪'
	| '🇸🇬'
	| '🇸🇭'
	| '🇸🇮'
	| '🇸🇯'
	| '🇸🇰'
	| '🇸🇱'
	| '🇸🇲'
	| '🇸🇳'
	| '🇸🇴'
	| '🇸🇷'
	| '🇸🇸'
	| '🇸🇹'
	| '🇸🇻'
	| '🇸🇽'
	| '🇸🇾'
	| '🇸🇿'
	| '🇹🇦'
	| '🇹🇨'
	| '🇹🇩'
	| '🇹🇫'
	| '🇹🇬'
	| '🇹🇭'
	| '🇹🇯'
	| '🇹🇰'
	| '🇹🇱'
	| '🇹🇲'
	| '🇹🇳'
	| '🇹🇴'
	| '🇹🇷'
	| '🇹🇹'
	| '🇹🇻'
	| '🇹🇼'
	| '🇹🇿'
	| '🇺🇦'
	| '🇺🇬'
	| '🇺🇲'
	| '🇺🇳'
	| '🇺🇸'
	| '🇺🇾'
	| '🇺🇿'
	| '🇻🇦'
	| '🇻🇨'
	| '🇻🇪'
	| '🇻🇬'
	| '🇻🇮'
	| '🇻🇳'
	| '🇻🇺'
	| '🇼🇫'
	| '🇼🇸'
	| '🇽🇰'
	| '🇾🇪'
	| '🇾🇹'
	| '🇿🇦'
	| '🇿🇲'
	| '🇿🇼'
	| '✂️'
	| '✂'
	| '✅'
	| '✈️'
	| '✈'
	| '✉️'
	| '✉'
	| '✊'
	| '✊🏻'
	| '✊🏼'
	| '✊🏽'
	| '✊🏾'
	| '✊🏿'
	| '✋'
	| '✋🏻'
	| '✋🏼'
	| '✋🏽'
	| '✋🏾'
	| '✋🏿'
	| '✌️'
	| '✌'
	| '✌🏻'
	| '✌🏼'
	| '✌🏽'
	| '✌🏾'
	| '✌🏿'
	| '✍️'
	| '✍'
	| '✍🏻'
	| '✍🏼'
	| '✍🏽'
	| '✍🏾'
	| '✍🏿'
	| '✏️'
	| '✏'
	| '✒️'
	| '✒'
	| '✔️'
	| '✔'
	| '✖️'
	| '✖'
	| '✝️'
	| '✝'
	| '✡️'
	| '✡'
	| '✨'
	| '✳️'
	| '✳'
	| '✴️'
	| '✴'
	| '❄️'
	| '❄'
	| '❇️'
	| '❇'
	| '❌'
	| '❎'
	| '❓'
	| '❔'
	| '❕'
	| '❗'
	| '❣️'
	| '❣'
	| '❤️'
	| '❤'
	| '❤️‍🔥'
	| '❤‍🔥'
	| '❤️‍🩹'
	| '❤‍🩹'
	| '➕'
	| '➖'
	| '➗'
	| '➡️'
	| '➡'
	| '➰'
	| '➿'
	| '⤴️'
	| '⤴'
	| '⤵️'
	| '⤵'
	| '⬅️'
	| '⬅'
	| '⬆️'
	| '⬆'
	| '⬇️'
	| '⬇'
	| '⬛'
	| '⬜'
	| '⭐'
	| '⭕'
	| '🀄'
	| '🃏'
	| '🌀'
	| '🌁'
	| '🌂'
	| '🌃'
	| '🌄'
	| '🌅'
	| '🌆'
	| '🌇'
	| '🌈'
	| '🌉'
	| '🌊'
	| '🌋'
	| '🌌'
	| '🌍'
	| '🌎'
	| '🌏'
	| '🌐'
	| '🌑'
	| '🌒'
	| '🌓'
	| '🌔'
	| '🌕'
	| '🌖'
	| '🌗'
	| '🌘'
	| '🌙'
	| '🌚'
	| '🌛'
	| '🌜'
	| '🌝'
	| '🌞'
	| '🌟'
	| '🌠'
	| '🌡️'
	| '🌡'
	| '🌤️'
	| '🌤'
	| '🌥️'
	| '🌥'
	| '🌦️'
	| '🌦'
	| '🌧️'
	| '🌧'
	| '🌨️'
	| '🌨'
	| '🌩️'
	| '🌩'
	| '🌪️'
	| '🌪'
	| '🌫️'
	| '🌫'
	| '🌬️'
	| '🌬'
	| '🌭'
	| '🌮'
	| '🌯'
	| '🌰'
	| '🌱'
	| '🌲'
	| '🌳'
	| '🌴'
	| '🌵'
	| '🌶️'
	| '🌶'
	| '🌷'
	| '🌸'
	| '🌹'
	| '🌺'
	| '🌻'
	| '🌼'
	| '🌽'
	| '🌾'
	| '🌿'
	| '🍀'
	| '🍁'
	| '🍂'
	| '🍃'
	| '🍄'
	| '🍅'
	| '🍆'
	| '🍇'
	| '🍈'
	| '🍉'
	| '🍊'
	| '🍋'
	| '🍌'
	| '🍍'
	| '🍎'
	| '🍏'
	| '🍐'
	| '🍑'
	| '🍒'
	| '🍓'
	| '🍔'
	| '🍕'
	| '🍖'
	| '🍗'
	| '🍘'
	| '🍙'
	| '🍚'
	| '🍛'
	| '🍜'
	| '🍝'
	| '🍞'
	| '🍟'
	| '🍠'
	| '🍡'
	| '🍢'
	| '🍣'
	| '🍤'
	| '🍥'
	| '🍦'
	| '🍧'
	| '🍨'
	| '🍩'
	| '🍪'
	| '🍫'
	| '🍬'
	| '🍭'
	| '🍮'
	| '🍯'
	| '🍰'
	| '🍱'
	| '🍲'
	| '🍳'
	| '🍴'
	| '🍵'
	| '🍶'
	| '🍷'
	| '🍸'
	| '🍹'
	| '🍺'
	| '🍻'
	| '🍼'
	| '🍽️'
	| '🍽'
	| '🍾'
	| '🍿'
	| '🎀'
	| '🎁'
	| '🎂'
	| '🎃'
	| '🎄'
	| '🎅'
	| '🎅🏻'
	| '🎅🏼'
	| '🎅🏽'
	| '🎅🏾'
	| '🎅🏿'
	| '🎆'
	| '🎇'
	| '🎈'
	| '🎉'
	| '🎊'
	| '🎋'
	| '🎌'
	| '🎍'
	| '🎎'
	| '🎏'
	| '🎐'
	| '🎑'
	| '🎒'
	| '🎓'
	| '🎖️'
	| '🎖'
	| '🎗️'
	| '🎗'
	| '🎙️'
	| '🎙'
	| '🎚️'
	| '🎚'
	| '🎛️'
	| '🎛'
	| '🎞️'
	| '🎞'
	| '🎟️'
	| '🎟'
	| '🎠'
	| '🎡'
	| '🎢'
	| '🎣'
	| '🎤'
	| '🎥'
	| '🎦'
	| '🎧'
	| '🎨'
	| '🎩'
	| '🎪'
	| '🎫'
	| '🎬'
	| '🎭'
	| '🎮'
	| '🎯'
	| '🎰'
	| '🎱'
	| '🎲'
	| '🎳'
	| '🎴'
	| '🎵'
	| '🎶'
	| '🎷'
	| '🎸'
	| '🎹'
	| '🎺'
	| '🎻'
	| '🎼'
	| '🎽'
	| '🎾'
	| '🎿'
	| '🏀'
	| '🏁'
	| '🏂'
	| '🏂🏻'
	| '🏂🏼'
	| '🏂🏽'
	| '🏂🏾'
	| '🏂🏿'
	| '🏃'
	| '🏃‍♀️'
	| '🏃‍♀'
	| '🏃‍♂️'
	| '🏃‍♂'
	| '🏃🏻'
	| '🏃🏻‍♀️'
	| '🏃🏻‍♂️'
	| '🏃🏼'
	| '🏃🏼‍♀️'
	| '🏃🏼‍♂️'
	| '🏃🏽'
	| '🏃🏽‍♀️'
	| '🏃🏽‍♂️'
	| '🏃🏾'
	| '🏃🏾‍♀️'
	| '🏃🏾‍♂️'
	| '🏃🏿'
	| '🏃🏿‍♀️'
	| '🏃🏿‍♂️'
	| '🏄'
	| '🏄‍♀️'
	| '🏄‍♀'
	| '🏄‍♂️'
	| '🏄‍♂'
	| '🏄🏻'
	| '🏄🏻‍♀️'
	| '🏄🏻‍♂️'
	| '🏄🏼'
	| '🏄🏼‍♀️'
	| '🏄🏼‍♂️'
	| '🏄🏽'
	| '🏄🏽‍♀️'
	| '🏄🏽‍♂️'
	| '🏄🏾'
	| '🏄🏾‍♀️'
	| '🏄🏾‍♂️'
	| '🏄🏿'
	| '🏄🏿‍♀️'
	| '🏄🏿‍♂️'
	| '🏅'
	| '🏆'
	| '🏇'
	| '🏇🏻'
	| '🏇🏼'
	| '🏇🏽'
	| '🏇🏾'
	| '🏇🏿'
	| '🏈'
	| '🏉'
	| '🏊'
	| '🏊‍♀️'
	| '🏊‍♀'
	| '🏊‍♂️'
	| '🏊‍♂'
	| '🏊🏻'
	| '🏊🏻‍♀️'
	| '🏊🏻‍♂️'
	| '🏊🏼'
	| '🏊🏼‍♀️'
	| '🏊🏼‍♂️'
	| '🏊🏽'
	| '🏊🏽‍♀️'
	| '🏊🏽‍♂️'
	| '🏊🏾'
	| '🏊🏾‍♀️'
	| '🏊🏾‍♂️'
	| '🏊🏿'
	| '🏊🏿‍♀️'
	| '🏊🏿‍♂️'
	| '🏋️'
	| '🏋'
	| '🏋️‍♀️'
	| '🏋️‍♂️'
	| '🏋🏻'
	| '🏋🏻‍♀️'
	| '🏋🏻‍♂️'
	| '🏋🏼'
	| '🏋🏼‍♀️'
	| '🏋🏼‍♂️'
	| '🏋🏽'
	| '🏋🏽‍♀️'
	| '🏋🏽‍♂️'
	| '🏋🏾'
	| '🏋🏾‍♀️'
	| '🏋🏾‍♂️'
	| '🏋🏿'
	| '🏋🏿‍♀️'
	| '🏋🏿‍♂️'
	| '🏌️'
	| '🏌'
	| '🏌️‍♀️'
	| '🏌️‍♂️'
	| '🏌🏻'
	| '🏌🏻‍♀️'
	| '🏌🏻‍♂️'
	| '🏌🏼'
	| '🏌🏼‍♀️'
	| '🏌🏼‍♂️'
	| '🏌🏽'
	| '🏌🏽‍♀️'
	| '🏌🏽‍♂️'
	| '🏌🏾'
	| '🏌🏾‍♀️'
	| '🏌🏾‍♂️'
	| '🏌🏿'
	| '🏌🏿‍♀️'
	| '🏌🏿‍♂️'
	| '🏍️'
	| '🏍'
	| '🏎️'
	| '🏎'
	| '🏏'
	| '🏐'
	| '🏑'
	| '🏒'
	| '🏓'
	| '🏔️'
	| '🏔'
	| '🏕️'
	| '🏕'
	| '🏖️'
	| '🏖'
	| '🏗️'
	| '🏗'
	| '🏘️'
	| '🏘'
	| '🏙️'
	| '🏙'
	| '🏚️'
	| '🏚'
	| '🏛️'
	| '🏛'
	| '🏜️'
	| '🏜'
	| '🏝️'
	| '🏝'
	| '🏞️'
	| '🏞'
	| '🏟️'
	| '🏟'
	| '🏠'
	| '🏡'
	| '🏢'
	| '🏣'
	| '🏤'
	| '🏥'
	| '🏦'
	| '🏧'
	| '🏨'
	| '🏩'
	| '🏪'
	| '🏫'
	| '🏬'
	| '🏭'
	| '🏮'
	| '🏯'
	| '🏰'
	| '🏳️'
	| '🏳'
	| '🏳️‍⚧️'
	| '🏳️‍🌈'
	| '🏳‍🌈'
	| '🏴'
	| '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
	| '🏴󠁧󠁢󠁳󠁣󠁴󠁿'
	| '🏴󠁧󠁢󠁷󠁬󠁳󠁿'
	| '🏴‍☠️'
	| '🏴‍☠'
	| '🏵️'
	| '🏵'
	| '🏷️'
	| '🏷'
	| '🏸'
	| '🏹'
	| '🏺'
	| '🐀'
	| '🐁'
	| '🐂'
	| '🐃'
	| '🐄'
	| '🐅'
	| '🐆'
	| '🐇'
	| '🐈'
	| '🐈‍⬛'
	| '🐉'
	| '🐊'
	| '🐋'
	| '🐌'
	| '🐍'
	| '🐎'
	| '🐏'
	| '🐐'
	| '🐑'
	| '🐒'
	| '🐓'
	| '🐔'
	| '🐕'
	| '🐕‍🦺'
	| '🐖'
	| '🐗'
	| '🐘'
	| '🐙'
	| '🐚'
	| '🐛'
	| '🐜'
	| '🐝'
	| '🐞'
	| '🐟'
	| '🐠'
	| '🐡'
	| '🐢'
	| '🐣'
	| '🐤'
	| '🐥'
	| '🐦'
	| '🐧'
	| '🐨'
	| '🐩'
	| '🐪'
	| '🐫'
	| '🐬'
	| '🐭'
	| '🐮'
	| '🐯'
	| '🐰'
	| '🐱'
	| '🐲'
	| '🐳'
	| '🐴'
	| '🐵'
	| '🐶'
	| '🐷'
	| '🐸'
	| '🐹'
	| '🐺'
	| '🐻'
	| '🐻‍❄️'
	| '🐻‍❄'
	| '🐼'
	| '🐽'
	| '🐾'
	| '🐿️'
	| '🐿'
	| '👀'
	| '👁️'
	| '👁'
	| '👁️‍🗨️'
	| '👂'
	| '👂🏻'
	| '👂🏼'
	| '👂🏽'
	| '👂🏾'
	| '👂🏿'
	| '👃'
	| '👃🏻'
	| '👃🏼'
	| '👃🏽'
	| '👃🏾'
	| '👃🏿'
	| '👄'
	| '👅'
	| '👆'
	| '👆🏻'
	| '👆🏼'
	| '👆🏽'
	| '👆🏾'
	| '👆🏿'
	| '👇'
	| '👇🏻'
	| '👇🏼'
	| '👇🏽'
	| '👇🏾'
	| '👇🏿'
	| '👈'
	| '👈🏻'
	| '👈🏼'
	| '👈🏽'
	| '👈🏾'
	| '👈🏿'
	| '👉'
	| '👉🏻'
	| '👉🏼'
	| '👉🏽'
	| '👉🏾'
	| '👉🏿'
	| '👊'
	| '👊🏻'
	| '👊🏼'
	| '👊🏽'
	| '👊🏾'
	| '👊🏿'
	| '👋'
	| '👋🏻'
	| '👋🏼'
	| '👋🏽'
	| '👋🏾'
	| '👋🏿'
	| '👌'
	| '👌🏻'
	| '👌🏼'
	| '👌🏽'
	| '👌🏾'
	| '👌🏿'
	| '👍'
	| '👍🏻'
	| '👍🏼'
	| '👍🏽'
	| '👍🏾'
	| '👍🏿'
	| '👎'
	| '👎🏻'
	| '👎🏼'
	| '👎🏽'
	| '👎🏾'
	| '👎🏿'
	| '👏'
	| '👏🏻'
	| '👏🏼'
	| '👏🏽'
	| '👏🏾'
	| '👏🏿'
	| '👐'
	| '👐🏻'
	| '👐🏼'
	| '👐🏽'
	| '👐🏾'
	| '👐🏿'
	| '👑'
	| '👒'
	| '👓'
	| '👔'
	| '👕'
	| '👖'
	| '👗'
	| '👘'
	| '👙'
	| '👚'
	| '👛'
	| '👜'
	| '👝'
	| '👞'
	| '👟'
	| '👠'
	| '👡'
	| '👢'
	| '👣'
	| '👤'
	| '👥'
	| '👦'
	| '👦🏻'
	| '👦🏼'
	| '👦🏽'
	| '👦🏾'
	| '👦🏿'
	| '👧'
	| '👧🏻'
	| '👧🏼'
	| '👧🏽'
	| '👧🏾'
	| '👧🏿'
	| '👨'
	| '👨‍⚕️'
	| '👨‍⚕'
	| '👨‍⚖️'
	| '👨‍⚖'
	| '👨‍✈️'
	| '👨‍✈'
	| '👨‍🌾'
	| '👨‍🍳'
	| '👨‍🍼'
	| '👨‍🎓'
	| '👨‍🎤'
	| '👨‍🎨'
	| '👨‍🏫'
	| '👨‍🏭'
	| '👨🏻'
	| '👨🏻‍⚕️'
	| '👨🏻‍⚖️'
	| '👨🏻‍✈️'
	| '👨🏻‍🌾'
	| '👨🏻‍🍳'
	| '👨🏻‍🍼'
	| '👨🏻‍🎓'
	| '👨🏻‍🎤'
	| '👨🏻‍🎨'
	| '👨🏻‍🏫'
	| '👨🏻‍🏭'
	| '👨🏻‍💻'
	| '👨🏻‍💼'
	| '👨🏻‍🔧'
	| '👨🏻‍🔬'
	| '👨🏻‍🦯'
	| '👨🏻‍🦰'
	| '👨🏻‍🦱'
	| '👨🏻‍🦲'
	| '👨🏻‍🦳'
	| '👨🏻‍🦼'
	| '👨🏻‍🦽'
	| '👨🏻‍🚀'
	| '👨🏻‍🚒'
	| '👨🏼'
	| '👨🏼‍⚕️'
	| '👨🏼‍⚖️'
	| '👨🏼‍✈️'
	| '👨🏼‍🌾'
	| '👨🏼‍🍳'
	| '👨🏼‍🍼'
	| '👨🏼‍🎓'
	| '👨🏼‍🎤'
	| '👨🏼‍🎨'
	| '👨🏼‍🏫'
	| '👨🏼‍🏭'
	| '👨🏼‍💻'
	| '👨🏼‍💼'
	| '👨🏼‍🔧'
	| '👨🏼‍🔬'
	| '👨🏼‍🦯'
	| '👨🏼‍🦰'
	| '👨🏼‍🦱'
	| '👨🏼‍🦲'
	| '👨🏼‍🦳'
	| '👨🏼‍🦼'
	| '👨🏼‍🦽'
	| '👨🏼‍🚀'
	| '👨🏼‍🚒'
	| '👨🏽'
	| '👨🏽‍⚕️'
	| '👨🏽‍⚖️'
	| '👨🏽‍✈️'
	| '👨🏽‍🌾'
	| '👨🏽‍🍳'
	| '👨🏽‍🍼'
	| '👨🏽‍🎓'
	| '👨🏽‍🎤'
	| '👨🏽‍🎨'
	| '👨🏽‍🏫'
	| '👨🏽‍🏭'
	| '👨🏽‍💻'
	| '👨🏽‍💼'
	| '👨🏽‍🔧'
	| '👨🏽‍🔬'
	| '👨🏽‍🦯'
	| '👨🏽‍🦰'
	| '👨🏽‍🦱'
	| '👨🏽‍🦲'
	| '👨🏽‍🦳'
	| '👨🏽‍🦼'
	| '👨🏽‍🦽'
	| '👨🏽‍🚀'
	| '👨🏽‍🚒'
	| '👨🏾'
	| '👨🏾‍⚕️'
	| '👨🏾‍⚖️'
	| '👨🏾‍✈️'
	| '👨🏾‍🌾'
	| '👨🏾‍🍳'
	| '👨🏾‍🍼'
	| '👨🏾‍🎓'
	| '👨🏾‍🎤'
	| '👨🏾‍🎨'
	| '👨🏾‍🏫'
	| '👨🏾‍🏭'
	| '👨🏾‍💻'
	| '👨🏾‍💼'
	| '👨🏾‍🔧'
	| '👨🏾‍🔬'
	| '👨🏾‍🦯'
	| '👨🏾‍🦰'
	| '👨🏾‍🦱'
	| '👨🏾‍🦲'
	| '👨🏾‍🦳'
	| '👨🏾‍🦼'
	| '👨🏾‍🦽'
	| '👨🏾‍🚀'
	| '👨🏾‍🚒'
	| '👨🏿'
	| '👨🏿‍⚕️'
	| '👨🏿‍⚖️'
	| '👨🏿‍✈️'
	| '👨🏿‍🌾'
	| '👨🏿‍🍳'
	| '👨🏿‍🍼'
	| '👨🏿‍🎓'
	| '👨🏿‍🎤'
	| '👨🏿‍🎨'
	| '👨🏿‍🏫'
	| '👨🏿‍🏭'
	| '👨🏿‍💻'
	| '👨🏿‍💼'
	| '👨🏿‍🔧'
	| '👨🏿‍🔬'
	| '👨🏿‍🦯'
	| '👨🏿‍🦰'
	| '👨🏿‍🦱'
	| '👨🏿‍🦲'
	| '👨🏿‍🦳'
	| '👨🏿‍🦼'
	| '👨🏿‍🦽'
	| '👨🏿‍🚀'
	| '👨🏿‍🚒'
	| '👨‍👦'
	| '👨‍👦‍👦'
	| '👨‍👧'
	| '👨‍👧‍👦'
	| '👨‍👧‍👧'
	| '👨‍👨‍👦'
	| '👨‍👨‍👦‍👦'
	| '👨‍👨‍👧'
	| '👨‍👨‍👧‍👦'
	| '👨‍👨‍👧‍👧'
	| '👨‍👩‍👦'
	| '👨‍👩‍👦‍👦'
	| '👨‍👩‍👧'
	| '👨‍👩‍👧‍👦'
	| '👨‍👩‍👧‍👧'
	| '👨‍💻'
	| '👨‍💼'
	| '👨‍🔧'
	| '👨‍🔬'
	| '👨‍🦯'
	| '👨‍🦰'
	| '👨‍🦱'
	| '👨‍🦲'
	| '👨‍🦳'
	| '👨‍🦼'
	| '👨‍🦽'
	| '👨‍🚀'
	| '👨‍🚒'
	| '👩'
	| '👩‍⚕️'
	| '👩‍⚕'
	| '👩‍⚖️'
	| '👩‍⚖'
	| '👩‍✈️'
	| '👩‍✈'
	| '👩‍🌾'
	| '👩‍🍳'
	| '👩‍🍼'
	| '👩‍🎓'
	| '👩‍🎤'
	| '👩‍🎨'
	| '👩‍🏫'
	| '👩‍🏭'
	| '👩🏻'
	| '👩🏻‍⚕️'
	| '👩🏻‍⚖️'
	| '👩🏻‍✈️'
	| '👩🏻‍🌾'
	| '👩🏻‍🍳'
	| '👩🏻‍🍼'
	| '👩🏻‍🎓'
	| '👩🏻‍🎤'
	| '👩🏻‍🎨'
	| '👩🏻‍🏫'
	| '👩🏻‍🏭'
	| '👩🏻‍💻'
	| '👩🏻‍💼'
	| '👩🏻‍🔧'
	| '👩🏻‍🔬'
	| '👩🏻‍🦯'
	| '👩🏻‍🦰'
	| '👩🏻‍🦱'
	| '👩🏻‍🦲'
	| '👩🏻‍🦳'
	| '👩🏻‍🦼'
	| '👩🏻‍🦽'
	| '👩🏻‍🚀'
	| '👩🏻‍🚒'
	| '👩🏼'
	| '👩🏼‍⚕️'
	| '👩🏼‍⚖️'
	| '👩🏼‍✈️'
	| '👩🏼‍🌾'
	| '👩🏼‍🍳'
	| '👩🏼‍🍼'
	| '👩🏼‍🎓'
	| '👩🏼‍🎤'
	| '👩🏼‍🎨'
	| '👩🏼‍🏫'
	| '👩🏼‍🏭'
	| '👩🏼‍💻'
	| '👩🏼‍💼'
	| '👩🏼‍🔧'
	| '👩🏼‍🔬'
	| '👩🏼‍🦯'
	| '👩🏼‍🦰'
	| '👩🏼‍🦱'
	| '👩🏼‍🦲'
	| '👩🏼‍🦳'
	| '👩🏼‍🦼'
	| '👩🏼‍🦽'
	| '👩🏼‍🚀'
	| '👩🏼‍🚒'
	| '👩🏽'
	| '👩🏽‍⚕️'
	| '👩🏽‍⚖️'
	| '👩🏽‍✈️'
	| '👩🏽‍🌾'
	| '👩🏽‍🍳'
	| '👩🏽‍🍼'
	| '👩🏽‍🎓'
	| '👩🏽‍🎤'
	| '👩🏽‍🎨'
	| '👩🏽‍🏫'
	| '👩🏽‍🏭'
	| '👩🏽‍💻'
	| '👩🏽‍💼'
	| '👩🏽‍🔧'
	| '👩🏽‍🔬'
	| '👩🏽‍🦯'
	| '👩🏽‍🦰'
	| '👩🏽‍🦱'
	| '👩🏽‍🦲'
	| '👩🏽‍🦳'
	| '👩🏽‍🦼'
	| '👩🏽‍🦽'
	| '👩🏽‍🚀'
	| '👩🏽‍🚒'
	| '👩🏾'
	| '👩🏾‍⚕️'
	| '👩🏾‍⚖️'
	| '👩🏾‍✈️'
	| '👩🏾‍🌾'
	| '👩🏾‍🍳'
	| '👩🏾‍🍼'
	| '👩🏾‍🎓'
	| '👩🏾‍🎤'
	| '👩🏾‍🎨'
	| '👩🏾‍🏫'
	| '👩🏾‍🏭'
	| '👩🏾‍💻'
	| '👩🏾‍💼'
	| '👩🏾‍🔧'
	| '👩🏾‍🔬'
	| '👩🏾‍🦯'
	| '👩🏾‍🦰'
	| '👩🏾‍🦱'
	| '👩🏾‍🦲'
	| '👩🏾‍🦳'
	| '👩🏾‍🦼'
	| '👩🏾‍🦽'
	| '👩🏾‍🚀'
	| '👩🏾‍🚒'
	| '👩🏿'
	| '👩🏿‍⚕️'
	| '👩🏿‍⚖️'
	| '👩🏿‍✈️'
	| '👩🏿‍🌾'
	| '👩🏿‍🍳'
	| '👩🏿‍🍼'
	| '👩🏿‍🎓'
	| '👩🏿‍🎤'
	| '👩🏿‍🎨'
	| '👩🏿‍🏫'
	| '👩🏿‍🏭'
	| '👩🏿‍💻'
	| '👩🏿‍💼'
	| '👩🏿‍🔧'
	| '👩🏿‍🔬'
	| '👩🏿‍🦯'
	| '👩🏿‍🦰'
	| '👩🏿‍🦱'
	| '👩🏿‍🦲'
	| '👩🏿‍🦳'
	| '👩🏿‍🦼'
	| '👩🏿‍🦽'
	| '👩🏿‍🚀'
	| '👩🏿‍🚒'
	| '👩‍👦'
	| '👩‍👦‍👦'
	| '👩‍👧'
	| '👩‍👧‍👦'
	| '👩‍👧‍👧'
	| '👩‍👩‍👦'
	| '👩‍👩‍👦‍👦'
	| '👩‍👩‍👧'
	| '👩‍👩‍👧‍👦'
	| '👩‍👩‍👧‍👧'
	| '👩‍💻'
	| '👩‍💼'
	| '👩‍🔧'
	| '👩‍🔬'
	| '👩‍🦯'
	| '👩‍🦰'
	| '👩‍🦱'
	| '👩‍🦲'
	| '👩‍🦳'
	| '👩‍🦼'
	| '👩‍🦽'
	| '👩‍🚀'
	| '👩‍🚒'
	| '👪'
	| '👫'
	| '👬'
	| '👭'
	| '👮'
	| '👮‍♀️'
	| '👮‍♀'
	| '👮‍♂️'
	| '👮‍♂'
	| '👮🏻'
	| '👮🏻‍♀️'
	| '👮🏻‍♂️'
	| '👮🏼'
	| '👮🏼‍♀️'
	| '👮🏼‍♂️'
	| '👮🏽'
	| '👮🏽‍♀️'
	| '👮🏽‍♂️'
	| '👮🏾'
	| '👮🏾‍♀️'
	| '👮🏾‍♂️'
	| '👮🏿'
	| '👮🏿‍♀️'
	| '👮🏿‍♂️'
	| '👯'
	| '👯‍♀️'
	| '👯‍♀'
	| '👯‍♂️'
	| '👯‍♂'
	| '👰'
	| '👰‍♀️'
	| '👰‍♀'
	| '👰‍♂️'
	| '👰‍♂'
	| '👰🏻'
	| '👰🏻‍♀️'
	| '👰🏻‍♂️'
	| '👰🏼'
	| '👰🏼‍♀️'
	| '👰🏼‍♂️'
	| '👰🏽'
	| '👰🏽‍♀️'
	| '👰🏽‍♂️'
	| '👰🏾'
	| '👰🏾‍♀️'
	| '👰🏾‍♂️'
	| '👰🏿'
	| '👰🏿‍♀️'
	| '👰🏿‍♂️'
	| '👱'
	| '👱‍♀️'
	| '👱‍♀'
	| '👱‍♂️'
	| '👱‍♂'
	| '👱🏻'
	| '👱🏻‍♀️'
	| '👱🏻‍♂️'
	| '👱🏼'
	| '👱🏼‍♀️'
	| '👱🏼‍♂️'
	| '👱🏽'
	| '👱🏽‍♀️'
	| '👱🏽‍♂️'
	| '👱🏾'
	| '👱🏾‍♀️'
	| '👱🏾‍♂️'
	| '👱🏿'
	| '👱🏿‍♀️'
	| '👱🏿‍♂️'
	| '👲'
	| '👲🏻'
	| '👲🏼'
	| '👲🏽'
	| '👲🏾'
	| '👲🏿'
	| '👳'
	| '👳‍♀️'
	| '👳‍♀'
	| '👳‍♂️'
	| '👳‍♂'
	| '👳🏻'
	| '👳🏻‍♀️'
	| '👳🏻‍♂️'
	| '👳🏼'
	| '👳🏼‍♀️'
	| '👳🏼‍♂️'
	| '👳🏽'
	| '👳🏽‍♀️'
	| '👳🏽‍♂️'
	| '👳🏾'
	| '👳🏾‍♀️'
	| '👳🏾‍♂️'
	| '👳🏿'
	| '👳🏿‍♀️'
	| '👳🏿‍♂️'
	| '👴'
	| '👴🏻'
	| '👴🏼'
	| '👴🏽'
	| '👴🏾'
	| '👴🏿'
	| '👵'
	| '👵🏻'
	| '👵🏼'
	| '👵🏽'
	| '👵🏾'
	| '👵🏿'
	| '👶'
	| '👶🏻'
	| '👶🏼'
	| '👶🏽'
	| '👶🏾'
	| '👶🏿'
	| '👷'
	| '👷‍♀️'
	| '👷‍♀'
	| '👷‍♂️'
	| '👷‍♂'
	| '👷🏻'
	| '👷🏻‍♀️'
	| '👷🏻‍♂️'
	| '👷🏼'
	| '👷🏼‍♀️'
	| '👷🏼‍♂️'
	| '👷🏽'
	| '👷🏽‍♀️'
	| '👷🏽‍♂️'
	| '👷🏾'
	| '👷🏾‍♀️'
	| '👷🏾‍♂️'
	| '👷🏿'
	| '👷🏿‍♀️'
	| '👷🏿‍♂️'
	| '👸'
	| '👸🏻'
	| '👸🏼'
	| '👸🏽'
	| '👸🏾'
	| '👸🏿'
	| '👹'
	| '👺'
	| '👻'
	| '👼'
	| '👼🏻'
	| '👼🏼'
	| '👼🏽'
	| '👼🏾'
	| '👼🏿'
	| '👽'
	| '👾'
	| '👿'
	| '💀'
	| '💁'
	| '💁‍♀️'
	| '💁‍♀'
	| '💁‍♂️'
	| '💁‍♂'
	| '💁🏻'
	| '💁🏻‍♀️'
	| '💁🏻‍♂️'
	| '💁🏼'
	| '💁🏼‍♀️'
	| '💁🏼‍♂️'
	| '💁🏽'
	| '💁🏽‍♀️'
	| '💁🏽‍♂️'
	| '💁🏾'
	| '💁🏾‍♀️'
	| '💁🏾‍♂️'
	| '💁🏿'
	| '💁🏿‍♀️'
	| '💁🏿‍♂️'
	| '💂'
	| '💂‍♀️'
	| '💂‍♀'
	| '💂‍♂️'
	| '💂‍♂'
	| '💂🏻'
	| '💂🏻‍♀️'
	| '💂🏻‍♂️'
	| '💂🏼'
	| '💂🏼‍♀️'
	| '💂🏼‍♂️'
	| '💂🏽'
	| '💂🏽‍♀️'
	| '💂🏽‍♂️'
	| '💂🏾'
	| '💂🏾‍♀️'
	| '💂🏾‍♂️'
	| '💂🏿'
	| '💂🏿‍♀️'
	| '💂🏿‍♂️'
	| '💃'
	| '💃🏻'
	| '💃🏼'
	| '💃🏽'
	| '💃🏾'
	| '💃🏿'
	| '💄'
	| '💅'
	| '💅🏻'
	| '💅🏼'
	| '💅🏽'
	| '💅🏾'
	| '💅🏿'
	| '💆'
	| '💆‍♀️'
	| '💆‍♀'
	| '💆‍♂️'
	| '💆‍♂'
	| '💆🏻'
	| '💆🏻‍♀️'
	| '💆🏻‍♂️'
	| '💆🏼'
	| '💆🏼‍♀️'
	| '💆🏼‍♂️'
	| '💆🏽'
	| '💆🏽‍♀️'
	| '💆🏽‍♂️'
	| '💆🏾'
	| '💆🏾‍♀️'
	| '💆🏾‍♂️'
	| '💆🏿'
	| '💆🏿‍♀️'
	| '💆🏿‍♂️'
	| '💇'
	| '💇‍♀️'
	| '💇‍♀'
	| '💇‍♂️'
	| '💇‍♂'
	| '💇🏻'
	| '💇🏻‍♀️'
	| '💇🏻‍♂️'
	| '💇🏼'
	| '💇🏼‍♀️'
	| '💇🏼‍♂️'
	| '💇🏽'
	| '💇🏽‍♀️'
	| '💇🏽‍♂️'
	| '💇🏾'
	| '💇🏾‍♀️'
	| '💇🏾‍♂️'
	| '💇🏿'
	| '💇🏿‍♀️'
	| '💇🏿‍♂️'
	| '💈'
	| '💉'
	| '💊'
	| '💋'
	| '💌'
	| '💍'
	| '💎'
	| '💏'
	| '💐'
	| '💑'
	| '💒'
	| '💓'
	| '💔'
	| '💕'
	| '💖'
	| '💗'
	| '💘'
	| '💙'
	| '💚'
	| '💛'
	| '💜'
	| '💝'
	| '💞'
	| '💟'
	| '💠'
	| '💡'
	| '💢'
	| '💣'
	| '💤'
	| '💥'
	| '💦'
	| '💧'
	| '💨'
	| '💩'
	| '💪'
	| '💪🏻'
	| '💪🏼'
	| '💪🏽'
	| '💪🏾'
	| '💪🏿'
	| '💫'
	| '💬'
	| '💭'
	| '💮'
	| '💯'
	| '💰'
	| '💱'
	| '💲'
	| '💳'
	| '💴'
	| '💵'
	| '💶'
	| '💷'
	| '💸'
	| '💹'
	| '💺'
	| '💻'
	| '💼'
	| '💽'
	| '💾'
	| '💿'
	| '📀'
	| '📁'
	| '📂'
	| '📃'
	| '📄'
	| '📅'
	| '📆'
	| '📇'
	| '📈'
	| '📉'
	| '📊'
	| '📋'
	| '📌'
	| '📍'
	| '📎'
	| '📏'
	| '📐'
	| '📑'
	| '📒'
	| '📓'
	| '📔'
	| '📕'
	| '📖'
	| '📗'
	| '📘'
	| '📙'
	| '📚'
	| '📛'
	| '📜'
	| '📝'
	| '📞'
	| '📟'
	| '📠'
	| '📡'
	| '📢'
	| '📣'
	| '📤'
	| '📥'
	| '📦'
	| '📧'
	| '📨'
	| '📩'
	| '📪'
	| '📫'
	| '📬'
	| '📭'
	| '📮'
	| '📯'
	| '📰'
	| '📱'
	| '📲'
	| '📳'
	| '📴'
	| '📵'
	| '📶'
	| '📷'
	| '📸'
	| '📹'
	| '📺'
	| '📻'
	| '📼'
	| '📽️'
	| '📽'
	| '📿'
	| '🔀'
	| '🔁'
	| '🔂'
	| '🔃'
	| '🔄'
	| '🔅'
	| '🔆'
	| '🔇'
	| '🔈'
	| '🔉'
	| '🔊'
	| '🔋'
	| '🔌'
	| '🔍'
	| '🔎'
	| '🔏'
	| '🔐'
	| '🔑'
	| '🔒'
	| '🔓'
	| '🔔'
	| '🔕'
	| '🔖'
	| '🔗'
	| '🔘'
	| '🔙'
	| '🔚'
	| '🔛'
	| '🔜'
	| '🔝'
	| '🔞'
	| '🔟'
	| '🔠'
	| '🔡'
	| '🔢'
	| '🔣'
	| '🔤'
	| '🔥'
	| '🔦'
	| '🔧'
	| '🔨'
	| '🔩'
	| '🔪'
	| '🔫'
	| '🔬'
	| '🔭'
	| '🔮'
	| '🔯'
	| '🔰'
	| '🔱'
	| '🔲'
	| '🔳'
	| '🔴'
	| '🔵'
	| '🔶'
	| '🔷'
	| '🔸'
	| '🔹'
	| '🔺'
	| '🔻'
	| '🔼'
	| '🔽'
	| '🕉️'
	| '🕉'
	| '🕊️'
	| '🕊'
	| '🕋'
	| '🕌'
	| '🕍'
	| '🕎'
	| '🕐'
	| '🕑'
	| '🕒'
	| '🕓'
	| '🕔'
	| '🕕'
	| '🕖'
	| '🕗'
	| '🕘'
	| '🕙'
	| '🕚'
	| '🕛'
	| '🕜'
	| '🕝'
	| '🕞'
	| '🕟'
	| '🕠'
	| '🕡'
	| '🕢'
	| '🕣'
	| '🕤'
	| '🕥'
	| '🕦'
	| '🕧'
	| '🕯️'
	| '🕯'
	| '🕰️'
	| '🕰'
	| '🕳️'
	| '🕳'
	| '🕴️'
	| '🕴'
	| '🕴🏻'
	| '🕴🏼'
	| '🕴🏽'
	| '🕴🏾'
	| '🕴🏿'
	| '🕵️'
	| '🕵'
	| '🕵️‍♀️'
	| '🕵️‍♂️'
	| '🕵🏻'
	| '🕵🏻‍♀️'
	| '🕵🏻‍♂️'
	| '🕵🏼'
	| '🕵🏼‍♀️'
	| '🕵🏼‍♂️'
	| '🕵🏽'
	| '🕵🏽‍♀️'
	| '🕵🏽‍♂️'
	| '🕵🏾'
	| '🕵🏾‍♀️'
	| '🕵🏾‍♂️'
	| '🕵🏿'
	| '🕵🏿‍♀️'
	| '🕵🏿‍♂️'
	| '🕶️'
	| '🕶'
	| '🕷️'
	| '🕷'
	| '🕸️'
	| '🕸'
	| '🕹️'
	| '🕹'
	| '🕺'
	| '🕺🏻'
	| '🕺🏼'
	| '🕺🏽'
	| '🕺🏾'
	| '🕺🏿'
	| '🖇️'
	| '🖇'
	| '🖊️'
	| '🖊'
	| '🖋️'
	| '🖋'
	| '🖌️'
	| '🖌'
	| '🖍️'
	| '🖍'
	| '🖐️'
	| '🖐'
	| '🖐🏻'
	| '🖐🏼'
	| '🖐🏽'
	| '🖐🏾'
	| '🖐🏿'
	| '🖕'
	| '🖕🏻'
	| '🖕🏼'
	| '🖕🏽'
	| '🖕🏾'
	| '🖕🏿'
	| '🖖'
	| '🖖🏻'
	| '🖖🏼'
	| '🖖🏽'
	| '🖖🏾'
	| '🖖🏿'
	| '🖤'
	| '🖥️'
	| '🖥'
	| '🖨️'
	| '🖨'
	| '🖱️'
	| '🖱'
	| '🖲️'
	| '🖲'
	| '🖼️'
	| '🖼'
	| '🗂️'
	| '🗂'
	| '🗃️'
	| '🗃'
	| '🗄️'
	| '🗄'
	| '🗑️'
	| '🗑'
	| '🗒️'
	| '🗒'
	| '🗓️'
	| '🗓'
	| '🗜️'
	| '🗜'
	| '🗝️'
	| '🗝'
	| '🗞️'
	| '🗞'
	| '🗡️'
	| '🗡'
	| '🗣️'
	| '🗣'
	| '🗨️'
	| '🗨'
	| '🗯️'
	| '🗯'
	| '🗳️'
	| '🗳'
	| '🗺️'
	| '🗺'
	| '🗻'
	| '🗼'
	| '🗽'
	| '🗾'
	| '🗿'
	| '🤌'
	| '🤌🏻'
	| '🤌🏼'
	| '🤌🏽'
	| '🤌🏾'
	| '🤌🏿'
	| '🤍'
	| '🤎'
	| '🤏'
	| '🤏🏻'
	| '🤏🏼'
	| '🤏🏽'
	| '🤏🏾'
	| '🤏🏿'
	| '🤐'
	| '🤑'
	| '🤒'
	| '🤓'
	| '🤔'
	| '🤕'
	| '🤖'
	| '🤗'
	| '🤘'
	| '🤘🏻'
	| '🤘🏼'
	| '🤘🏽'
	| '🤘🏾'
	| '🤘🏿'
	| '🤙'
	| '🤙🏻'
	| '🤙🏼'
	| '🤙🏽'
	| '🤙🏾'
	| '🤙🏿'
	| '🤚'
	| '🤚🏻'
	| '🤚🏼'
	| '🤚🏽'
	| '🤚🏾'
	| '🤚🏿'
	| '🤛'
	| '🤛🏻'
	| '🤛🏼'
	| '🤛🏽'
	| '🤛🏾'
	| '🤛🏿'
	| '🤜'
	| '🤜🏻'
	| '🤜🏼'
	| '🤜🏽'
	| '🤜🏾'
	| '🤜🏿'
	| '🤝'
	| '🤝🏻'
	| '🤝🏼'
	| '🤝🏽'
	| '🤝🏾'
	| '🤝🏿'
	| '🤞'
	| '🤞🏻'
	| '🤞🏼'
	| '🤞🏽'
	| '🤞🏾'
	| '🤞🏿'
	| '🤟'
	| '🤟🏻'
	| '🤟🏼'
	| '🤟🏽'
	| '🤟🏾'
	| '🤟🏿'
	| '🤠'
	| '🤡'
	| '🤢'
	| '🤣'
	| '🤤'
	| '🤥'
	| '🤦'
	| '🤦‍♀️'
	| '🤦‍♀'
	| '🤦‍♂️'
	| '🤦‍♂'
	| '🤦🏻'
	| '🤦🏻‍♀️'
	| '🤦🏻‍♂️'
	| '🤦🏼'
	| '🤦🏼‍♀️'
	| '🤦🏼‍♂️'
	| '🤦🏽'
	| '🤦🏽‍♀️'
	| '🤦🏽‍♂️'
	| '🤦🏾'
	| '🤦🏾‍♀️'
	| '🤦🏾‍♂️'
	| '🤦🏿'
	| '🤦🏿‍♀️'
	| '🤦🏿‍♂️'
	| '🤧'
	| '🤨'
	| '🤩'
	| '🤪'
	| '🤫'
	| '🤬'
	| '🤭'
	| '🤮'
	| '🤯'
	| '🤰'
	| '🤰🏻'
	| '🤰🏼'
	| '🤰🏽'
	| '🤰🏾'
	| '🤰🏿'
	| '🤱'
	| '🤱🏻'
	| '🤱🏼'
	| '🤱🏽'
	| '🤱🏾'
	| '🤱🏿'
	| '🤲'
	| '🤲🏻'
	| '🤲🏼'
	| '🤲🏽'
	| '🤲🏾'
	| '🤲🏿'
	| '🤳'
	| '🤳🏻'
	| '🤳🏼'
	| '🤳🏽'
	| '🤳🏾'
	| '🤳🏿'
	| '🤴'
	| '🤴🏻'
	| '🤴🏼'
	| '🤴🏽'
	| '🤴🏾'
	| '🤴🏿'
	| '🤵'
	| '🤵‍♀️'
	| '🤵‍♀'
	| '🤵‍♂️'
	| '🤵‍♂'
	| '🤵🏻'
	| '🤵🏻‍♀️'
	| '🤵🏻‍♂️'
	| '🤵🏼'
	| '🤵🏼‍♀️'
	| '🤵🏼‍♂️'
	| '🤵🏽'
	| '🤵🏽‍♀️'
	| '🤵🏽‍♂️'
	| '🤵🏾'
	| '🤵🏾‍♀️'
	| '🤵🏾‍♂️'
	| '🤵🏿'
	| '🤵🏿‍♀️'
	| '🤵🏿‍♂️'
	| '🤶'
	| '🤶🏻'
	| '🤶🏼'
	| '🤶🏽'
	| '🤶🏾'
	| '🤶🏿'
	| '🤷'
	| '🤷‍♀️'
	| '🤷‍♀'
	| '🤷‍♂️'
	| '🤷‍♂'
	| '🤷🏻'
	| '🤷🏻‍♀️'
	| '🤷🏻‍♂️'
	| '🤷🏼'
	| '🤷🏼‍♀️'
	| '🤷🏼‍♂️'
	| '🤷🏽'
	| '🤷🏽‍♀️'
	| '🤷🏽‍♂️'
	| '🤷🏾'
	| '🤷🏾‍♀️'
	| '🤷🏾‍♂️'
	| '🤷🏿'
	| '🤷🏿‍♀️'
	| '🤷🏿‍♂️'
	| '🤸'
	| '🤸‍♀️'
	| '🤸‍♀'
	| '🤸‍♂️'
	| '🤸‍♂'
	| '🤸🏻'
	| '🤸🏻‍♀️'
	| '🤸🏻‍♂️'
	| '🤸🏼'
	| '🤸🏼‍♀️'
	| '🤸🏼‍♂️'
	| '🤸🏽'
	| '🤸🏽‍♀️'
	| '🤸🏽‍♂️'
	| '🤸🏾'
	| '🤸🏾‍♀️'
	| '🤸🏾‍♂️'
	| '🤸🏿'
	| '🤸🏿‍♀️'
	| '🤸🏿‍♂️'
	| '🤹'
	| '🤹‍♀️'
	| '🤹‍♀'
	| '🤹‍♂️'
	| '🤹‍♂'
	| '🤹🏻'
	| '🤹🏻‍♀️'
	| '🤹🏻‍♂️'
	| '🤹🏼'
	| '🤹🏼‍♀️'
	| '🤹🏼‍♂️'
	| '🤹🏽'
	| '🤹🏽‍♀️'
	| '🤹🏽‍♂️'
	| '🤹🏾'
	| '🤹🏾‍♀️'
	| '🤹🏾‍♂️'
	| '🤹🏿'
	| '🤹🏿‍♀️'
	| '🤹🏿‍♂️'
	| '🤺'
	| '🤼'
	| '🤼‍♀️'
	| '🤼‍♀'
	| '🤼‍♂️'
	| '🤼‍♂'
	| '🤽'
	| '🤽‍♀️'
	| '🤽‍♀'
	| '🤽‍♂️'
	| '🤽‍♂'
	| '🤽🏻'
	| '🤽🏻‍♀️'
	| '🤽🏻‍♂️'
	| '🤽🏼'
	| '🤽🏼‍♀️'
	| '🤽🏼‍♂️'
	| '🤽🏽'
	| '🤽🏽‍♀️'
	| '🤽🏽‍♂️'
	| '🤽🏾'
	| '🤽🏾‍♀️'
	| '🤽🏾‍♂️'
	| '🤽🏿'
	| '🤽🏿‍♀️'
	| '🤽🏿‍♂️'
	| '🤾'
	| '🤾‍♀️'
	| '🤾‍♀'
	| '🤾‍♂️'
	| '🤾‍♂'
	| '🤾🏻'
	| '🤾🏻‍♀️'
	| '🤾🏻‍♂️'
	| '🤾🏼'
	| '🤾🏼‍♀️'
	| '🤾🏼‍♂️'
	| '🤾🏽'
	| '🤾🏽‍♀️'
	| '🤾🏽‍♂️'
	| '🤾🏾'
	| '🤾🏾‍♀️'
	| '🤾🏾‍♂️'
	| '🤾🏿'
	| '🤾🏿‍♀️'
	| '🤾🏿‍♂️'
	| '🤿'
	| '🥀'
	| '🥁'
	| '🥂'
	| '🥃'
	| '🥄'
	| '🥅'
	| '🥇'
	| '🥈'
	| '🥉'
	| '🥊'
	| '🥋'
	| '🥌'
	| '🥍'
	| '🥎'
	| '🥏'
	| '🥐'
	| '🥑'
	| '🥒'
	| '🥓'
	| '🥔'
	| '🥕'
	| '🥖'
	| '🥗'
	| '🥘'
	| '🥙'
	| '🥚'
	| '🥛'
	| '🥜'
	| '🥝'
	| '🥞'
	| '🥟'
	| '🥠'
	| '🥡'
	| '🥢'
	| '🥣'
	| '🥤'
	| '🥥'
	| '🥦'
	| '🥧'
	| '🥨'
	| '🥩'
	| '🥪'
	| '🥫'
	| '🥬'
	| '🥭'
	| '🥮'
	| '🥯'
	| '🥰'
	| '🥱'
	| '🥲'
	| '🥳'
	| '🥴'
	| '🥵'
	| '🥶'
	| '🥷'
	| '🥷🏻'
	| '🥷🏼'
	| '🥷🏽'
	| '🥷🏾'
	| '🥷🏿'
	| '🥸'
	| '🥹'
	| '🥺'
	| '🥻'
	| '🥼'
	| '🥽'
	| '🥾'
	| '🥿'
	| '🦀'
	| '🦁'
	| '🦂'
	| '🦃'
	| '🦄'
	| '🦅'
	| '🦆'
	| '🦇'
	| '🦈'
	| '🦉'
	| '🦊'
	| '🦋'
	| '🦌'
	| '🦍'
	| '🦎'
	| '🦏'
	| '🦐'
	| '🦑'
	| '🦒'
	| '🦓'
	| '🦔'
	| '🦕'
	| '🦖'
	| '🦗'
	| '🦘'
	| '🦙'
	| '🦚'
	| '🦛'
	| '🦜'
	| '🦝'
	| '🦞'
	| '🦟'
	| '🦠'
	| '🦡'
	| '🦢'
	| '🦣'
	| '🦤'
	| '🦥'
	| '🦦'
	| '🦧'
	| '🦨'
	| '🦩'
	| '🦪'
	| '🦫'
	| '🦬'
	| '🦭'
	| '🦮'
	| '🦯'
	| '🦴'
	| '🦵'
	| '🦵🏻'
	| '🦵🏼'
	| '🦵🏽'
	| '🦵🏾'
	| '🦵🏿'
	| '🦶'
	| '🦶🏻'
	| '🦶🏼'
	| '🦶🏽'
	| '🦶🏾'
	| '🦶🏿'
	| '🦷'
	| '🦸'
	| '🦸‍♀️'
	| '🦸‍♀'
	| '🦸‍♂️'
	| '🦸‍♂'
	| '🦸🏻'
	| '🦸🏻‍♀️'
	| '🦸🏻‍♂️'
	| '🦸🏼'
	| '🦸🏼‍♀️'
	| '🦸🏼‍♂️'
	| '🦸🏽'
	| '🦸🏽‍♀️'
	| '🦸🏽‍♂️'
	| '🦸🏾'
	| '🦸🏾‍♀️'
	| '🦸🏾‍♂️'
	| '🦸🏿'
	| '🦸🏿‍♀️'
	| '🦸🏿‍♂️'
	| '🦹'
	| '🦹‍♀️'
	| '🦹‍♀'
	| '🦹‍♂️'
	| '🦹‍♂'
	| '🦹🏻'
	| '🦹🏻‍♀️'
	| '🦹🏻‍♂️'
	| '🦹🏼'
	| '🦹🏼‍♀️'
	| '🦹🏼‍♂️'
	| '🦹🏽'
	| '🦹🏽‍♀️'
	| '🦹🏽‍♂️'
	| '🦹🏾'
	| '🦹🏾‍♀️'
	| '🦹🏾‍♂️'
	| '🦹🏿'
	| '🦹🏿‍♀️'
	| '🦹🏿‍♂️'
	| '🦺'
	| '🦻'
	| '🦻🏻'
	| '🦻🏼'
	| '🦻🏽'
	| '🦻🏾'
	| '🦻🏿'
	| '🦼'
	| '🦽'
	| '🦾'
	| '🦿'
	| '🧀'
	| '🧁'
	| '🧂'
	| '🧃'
	| '🧄'
	| '🧅'
	| '🧆'
	| '🧇'
	| '🧈'
	| '🧉'
	| '🧊'
	| '🧋'
	| '🧌'
	| '🧍'
	| '🧍‍♀️'
	| '🧍‍♀'
	| '🧍‍♂️'
	| '🧍‍♂'
	| '🧍🏻'
	| '🧍🏻‍♀️'
	| '🧍🏻‍♂️'
	| '🧍🏼'
	| '🧍🏼‍♀️'
	| '🧍🏼‍♂️'
	| '🧍🏽'
	| '🧍🏽‍♀️'
	| '🧍🏽‍♂️'
	| '🧍🏾'
	| '🧍🏾‍♀️'
	| '🧍🏾‍♂️'
	| '🧍🏿'
	| '🧍🏿‍♀️'
	| '🧍🏿‍♂️'
	| '🧎'
	| '🧎‍♀️'
	| '🧎‍♀'
	| '🧎‍♂️'
	| '🧎‍♂'
	| '🧎🏻'
	| '🧎🏻‍♀️'
	| '🧎🏻‍♂️'
	| '🧎🏼'
	| '🧎🏼‍♀️'
	| '🧎🏼‍♂️'
	| '🧎🏽'
	| '🧎🏽‍♀️'
	| '🧎🏽‍♂️'
	| '🧎🏾'
	| '🧎🏾‍♀️'
	| '🧎🏾‍♂️'
	| '🧎🏿'
	| '🧎🏿‍♀️'
	| '🧎🏿‍♂️'
	| '🧏'
	| '🧏‍♀️'
	| '🧏‍♀'
	| '🧏‍♂️'
	| '🧏‍♂'
	| '🧏🏻'
	| '🧏🏻‍♀️'
	| '🧏🏻‍♂️'
	| '🧏🏼'
	| '🧏🏼‍♀️'
	| '🧏🏼‍♂️'
	| '🧏🏽'
	| '🧏🏽‍♀️'
	| '🧏🏽‍♂️'
	| '🧏🏾'
	| '🧏🏾‍♀️'
	| '🧏🏾‍♂️'
	| '🧏🏿'
	| '🧏🏿‍♀️'
	| '🧏🏿‍♂️'
	| '🧐'
	| '🧑'
	| '🧑‍⚕️'
	| '🧑‍⚕'
	| '🧑‍⚖️'
	| '🧑‍⚖'
	| '🧑‍✈️'
	| '🧑‍✈'
	| '🧑‍🌾'
	| '🧑‍🍳'
	| '🧑‍🍼'
	| '🧑‍🎄'
	| '🧑‍🎓'
	| '🧑‍🎤'
	| '🧑‍🎨'
	| '🧑‍🏫'
	| '🧑‍🏭'
	| '🧑🏻'
	| '🧑🏻‍⚕️'
	| '🧑🏻‍⚖️'
	| '🧑🏻‍✈️'
	| '🧑🏻‍🌾'
	| '🧑🏻‍🍳'
	| '🧑🏻‍🍼'
	| '🧑🏻‍🎄'
	| '🧑🏻‍🎓'
	| '🧑🏻‍🎤'
	| '🧑🏻‍🎨'
	| '🧑🏻‍🏫'
	| '🧑🏻‍🏭'
	| '🧑🏻‍💻'
	| '🧑🏻‍💼'
	| '🧑🏻‍🔧'
	| '🧑🏻‍🔬'
	| '🧑🏻‍🤝‍🧑🏻'
	| '🧑🏻‍🤝‍🧑🏼'
	| '🧑🏻‍🤝‍🧑🏽'
	| '🧑🏻‍🤝‍🧑🏾'
	| '🧑🏻‍🤝‍🧑🏿'
	| '🧑🏻‍🦯'
	| '🧑🏻‍🦰'
	| '🧑🏻‍🦱'
	| '🧑🏻‍🦲'
	| '🧑🏻‍🦳'
	| '🧑🏻‍🦼'
	| '🧑🏻‍🦽'
	| '🧑🏻‍🚀'
	| '🧑🏻‍🚒'
	| '🧑🏼'
	| '🧑🏼‍⚕️'
	| '🧑🏼‍⚖️'
	| '🧑🏼‍✈️'
	| '🧑🏼‍🌾'
	| '🧑🏼‍🍳'
	| '🧑🏼‍🍼'
	| '🧑🏼‍🎄'
	| '🧑🏼‍🎓'
	| '🧑🏼‍🎤'
	| '🧑🏼‍🎨'
	| '🧑🏼‍🏫'
	| '🧑🏼‍🏭'
	| '🧑🏼‍💻'
	| '🧑🏼‍💼'
	| '🧑🏼‍🔧'
	| '🧑🏼‍🔬'
	| '🧑🏼‍🤝‍🧑🏻'
	| '🧑🏼‍🤝‍🧑🏼'
	| '🧑🏼‍🤝‍🧑🏽'
	| '🧑🏼‍🤝‍🧑🏾'
	| '🧑🏼‍🤝‍🧑🏿'
	| '🧑🏼‍🦯'
	| '🧑🏼‍🦰'
	| '🧑🏼‍🦱'
	| '🧑🏼‍🦲'
	| '🧑🏼‍🦳'
	| '🧑🏼‍🦼'
	| '🧑🏼‍🦽'
	| '🧑🏼‍🚀'
	| '🧑🏼‍🚒'
	| '🧑🏽'
	| '🧑🏽‍⚕️'
	| '🧑🏽‍⚖️'
	| '🧑🏽‍✈️'
	| '🧑🏽‍🌾'
	| '🧑🏽‍🍳'
	| '🧑🏽‍🍼'
	| '🧑🏽‍🎄'
	| '🧑🏽‍🎓'
	| '🧑🏽‍🎤'
	| '🧑🏽‍🎨'
	| '🧑🏽‍🏫'
	| '🧑🏽‍🏭'
	| '🧑🏽‍💻'
	| '🧑🏽‍💼'
	| '🧑🏽‍🔧'
	| '🧑🏽‍🔬'
	| '🧑🏽‍🤝‍🧑🏻'
	| '🧑🏽‍🤝‍🧑🏼'
	| '🧑🏽‍🤝‍🧑🏽'
	| '🧑🏽‍🤝‍🧑🏾'
	| '🧑🏽‍🤝‍🧑🏿'
	| '🧑🏽‍🦯'
	| '🧑🏽‍🦰'
	| '🧑🏽‍🦱'
	| '🧑🏽‍🦲'
	| '🧑🏽‍🦳'
	| '🧑🏽‍🦼'
	| '🧑🏽‍🦽'
	| '🧑🏽‍🚀'
	| '🧑🏽‍🚒'
	| '🧑🏾'
	| '🧑🏾‍⚕️'
	| '🧑🏾‍⚖️'
	| '🧑🏾‍✈️'
	| '🧑🏾‍🌾'
	| '🧑🏾‍🍳'
	| '🧑🏾‍🍼'
	| '🧑🏾‍🎄'
	| '🧑🏾‍🎓'
	| '🧑🏾‍🎤'
	| '🧑🏾‍🎨'
	| '🧑🏾‍🏫'
	| '🧑🏾‍🏭'
	| '🧑🏾‍💻'
	| '🧑🏾‍💼'
	| '🧑🏾‍🔧'
	| '🧑🏾‍🔬'
	| '🧑🏾‍🤝‍🧑🏻'
	| '🧑🏾‍🤝‍🧑🏼'
	| '🧑🏾‍🤝‍🧑🏽'
	| '🧑🏾‍🤝‍🧑🏾'
	| '🧑🏾‍🤝‍🧑🏿'
	| '🧑🏾‍🦯'
	| '🧑🏾‍🦰'
	| '🧑🏾‍🦱'
	| '🧑🏾‍🦲'
	| '🧑🏾‍🦳'
	| '🧑🏾‍🦼'
	| '🧑🏾‍🦽'
	| '🧑🏾‍🚀'
	| '🧑🏾‍🚒'
	| '🧑🏿'
	| '🧑🏿‍⚕️'
	| '🧑🏿‍⚖️'
	| '🧑🏿‍✈️'
	| '🧑🏿‍🌾'
	| '🧑🏿‍🍳'
	| '🧑🏿‍🍼'
	| '🧑🏿‍🎄'
	| '🧑🏿‍🎓'
	| '🧑🏿‍🎤'
	| '🧑🏿‍🎨'
	| '🧑🏿‍🏫'
	| '🧑🏿‍🏭'
	| '🧑🏿‍💻'
	| '🧑🏿‍💼'
	| '🧑🏿‍🔧'
	| '🧑🏿‍🔬'
	| '🧑🏿‍🤝‍🧑🏻'
	| '🧑🏿‍🤝‍🧑🏼'
	| '🧑🏿‍🤝‍🧑🏽'
	| '🧑🏿‍🤝‍🧑🏾'
	| '🧑🏿‍🤝‍🧑🏿'
	| '🧑🏿‍🦯'
	| '🧑🏿‍🦰'
	| '🧑🏿‍🦱'
	| '🧑🏿‍🦲'
	| '🧑🏿‍🦳'
	| '🧑🏿‍🦼'
	| '🧑🏿‍🦽'
	| '🧑🏿‍🚀'
	| '🧑🏿‍🚒'
	| '🧑‍💻'
	| '🧑‍💼'
	| '🧑‍🔧'
	| '🧑‍🔬'
	| '🧑‍🤝‍🧑'
	| '🧑‍🦯'
	| '🧑‍🦰'
	| '🧑‍🦱'
	| '🧑‍🦲'
	| '🧑‍🦳'
	| '🧑‍🦼'
	| '🧑‍🦽'
	| '🧑‍🚀'
	| '🧑‍🚒'
	| '🧒'
	| '🧒🏻'
	| '🧒🏼'
	| '🧒🏽'
	| '🧒🏾'
	| '🧒🏿'
	| '🧓'
	| '🧓🏻'
	| '🧓🏼'
	| '🧓🏽'
	| '🧓🏾'
	| '🧓🏿'
	| '🧔'
	| '🧔‍♀️'
	| '🧔‍♀'
	| '🧔‍♂️'
	| '🧔‍♂'
	| '🧔🏻'
	| '🧔🏻‍♀️'
	| '🧔🏻‍♂️'
	| '🧔🏼'
	| '🧔🏼‍♀️'
	| '🧔🏼‍♂️'
	| '🧔🏽'
	| '🧔🏽‍♀️'
	| '🧔🏽‍♂️'
	| '🧔🏾'
	| '🧔🏾‍♀️'
	| '🧔🏾‍♂️'
	| '🧔🏿'
	| '🧔🏿‍♀️'
	| '🧔🏿‍♂️'
	| '🧕'
	| '🧕🏻'
	| '🧕🏼'
	| '🧕🏽'
	| '🧕🏾'
	| '🧕🏿'
	| '🧖'
	| '🧖‍♀️'
	| '🧖‍♀'
	| '🧖‍♂️'
	| '🧖‍♂'
	| '🧖🏻'
	| '🧖🏻‍♀️'
	| '🧖🏻‍♂️'
	| '🧖🏼'
	| '🧖🏼‍♀️'
	| '🧖🏼‍♂️'
	| '🧖🏽'
	| '🧖🏽‍♀️'
	| '🧖🏽‍♂️'
	| '🧖🏾'
	| '🧖🏾‍♀️'
	| '🧖🏾‍♂️'
	| '🧖🏿'
	| '🧖🏿‍♀️'
	| '🧖🏿‍♂️'
	| '🧗'
	| '🧗‍♀️'
	| '🧗‍♀'
	| '🧗‍♂️'
	| '🧗‍♂'
	| '🧗🏻'
	| '🧗🏻‍♀️'
	| '🧗🏻‍♂️'
	| '🧗🏼'
	| '🧗🏼‍♀️'
	| '🧗🏼‍♂️'
	| '🧗🏽'
	| '🧗🏽‍♀️'
	| '🧗🏽‍♂️'
	| '🧗🏾'
	| '🧗🏾‍♀️'
	| '🧗🏾‍♂️'
	| '🧗🏿'
	| '🧗🏿‍♀️'
	| '🧗🏿‍♂️'
	| '🧘'
	| '🧘‍♀️'
	| '🧘‍♀'
	| '🧘‍♂️'
	| '🧘‍♂'
	| '🧘🏻'
	| '🧘🏻‍♀️'
	| '🧘🏻‍♂️'
	| '🧘🏼'
	| '🧘🏼‍♀️'
	| '🧘🏼‍♂️'
	| '🧘🏽'
	| '🧘🏽‍♀️'
	| '🧘🏽‍♂️'
	| '🧘🏾'
	| '🧘🏾‍♀️'
	| '🧘🏾‍♂️'
	| '🧘🏿'
	| '🧘🏿‍♀️'
	| '🧘🏿‍♂️'
	| '🧙'
	| '🧙‍♀️'
	| '🧙‍♀'
	| '🧙‍♂️'
	| '🧙‍♂'
	| '🧙🏻'
	| '🧙🏻‍♀️'
	| '🧙🏻‍♂️'
	| '🧙🏼'
	| '🧙🏼‍♀️'
	| '🧙🏼‍♂️'
	| '🧙🏽'
	| '🧙🏽‍♀️'
	| '🧙🏽‍♂️'
	| '🧙🏾'
	| '🧙🏾‍♀️'
	| '🧙🏾‍♂️'
	| '🧙🏿'
	| '🧙🏿‍♀️'
	| '🧙🏿‍♂️'
	| '🧚'
	| '🧚‍♀️'
	| '🧚‍♀'
	| '🧚‍♂️'
	| '🧚‍♂'
	| '🧚🏻'
	| '🧚🏻‍♀️'
	| '🧚🏻‍♂️'
	| '🧚🏼'
	| '🧚🏼‍♀️'
	| '🧚🏼‍♂️'
	| '🧚🏽'
	| '🧚🏽‍♀️'
	| '🧚🏽‍♂️'
	| '🧚🏾'
	| '🧚🏾‍♀️'
	| '🧚🏾‍♂️'
	| '🧚🏿'
	| '🧚🏿‍♀️'
	| '🧚🏿‍♂️'
	| '🧛'
	| '🧛‍♀️'
	| '🧛‍♀'
	| '🧛‍♂️'
	| '🧛‍♂'
	| '🧛🏻'
	| '🧛🏻‍♀️'
	| '🧛🏻‍♂️'
	| '🧛🏼'
	| '🧛🏼‍♀️'
	| '🧛🏼‍♂️'
	| '🧛🏽'
	| '🧛🏽‍♀️'
	| '🧛🏽‍♂️'
	| '🧛🏾'
	| '🧛🏾‍♀️'
	| '🧛🏾‍♂️'
	| '🧛🏿'
	| '🧛🏿‍♀️'
	| '🧛🏿‍♂️'
	| '🧜'
	| '🧜‍♀️'
	| '🧜‍♀'
	| '🧜‍♂️'
	| '🧜‍♂'
	| '🧜🏻'
	| '🧜🏻‍♀️'
	| '🧜🏻‍♂️'
	| '🧜🏼'
	| '🧜🏼‍♀️'
	| '🧜🏼‍♂️'
	| '🧜🏽'
	| '🧜🏽‍♀️'
	| '🧜🏽‍♂️'
	| '🧜🏾'
	| '🧜🏾‍♀️'
	| '🧜🏾‍♂️'
	| '🧜🏿'
	| '🧜🏿‍♀️'
	| '🧜🏿‍♂️'
	| '🧝'
	| '🧝‍♀️'
	| '🧝‍♀'
	| '🧝‍♂️'
	| '🧝‍♂'
	| '🧝🏻'
	| '🧝🏻‍♀️'
	| '🧝🏻‍♂️'
	| '🧝🏼'
	| '🧝🏼‍♀️'
	| '🧝🏼‍♂️'
	| '🧝🏽'
	| '🧝🏽‍♀️'
	| '🧝🏽‍♂️'
	| '🧝🏾'
	| '🧝🏾‍♀️'
	| '🧝🏾‍♂️'
	| '🧝🏿'
	| '🧝🏿‍♀️'
	| '🧝🏿‍♂️'
	| '🧞'
	| '🧞‍♀️'
	| '🧞‍♀'
	| '🧞‍♂️'
	| '🧞‍♂'
	| '🧟'
	| '🧟‍♀️'
	| '🧟‍♀'
	| '🧟‍♂️'
	| '🧟‍♂'
	| '🧠'
	| '🧡'
	| '🧢'
	| '🧣'
	| '🧤'
	| '🧥'
	| '🧦'
	| '🧧'
	| '🧨'
	| '🧩'
	| '🧪'
	| '🧫'
	| '🧬'
	| '🧭'
	| '🧮'
	| '🧯'
	| '🧰'
	| '🧱'
	| '🧲'
	| '🧳'
	| '🧴'
	| '🧵'
	| '🧶'
	| '🧷'
	| '🧸'
	| '🧹'
	| '🧺'
	| '🧻'
	| '🧼'
	| '🧽'
	| '🧾'
	| '🧿'
	| '🩰'
	| '🩱'
	| '🩲'
	| '🩳'
	| '🩴'
	| '🩸'
	| '🩹'
	| '🩺'
	| '🩻'
	| '🩼'
	| '🪀'
	| '🪁'
	| '🪂'
	| '🪃'
	| '🪄'
	| '🪅'
	| '🪆'
	| '🪐'
	| '🪑'
	| '🪒'
	| '🪓'
	| '🪔'
	| '🪕'
	| '🪖'
	| '🪗'
	| '🪘'
	| '🪙'
	| '🪚'
	| '🪛'
	| '🪜'
	| '🪝'
	| '🪞'
	| '🪟'
	| '🪠'
	| '🪡'
	| '🪢'
	| '🪣'
	| '🪤'
	| '🪥'
	| '🪦'
	| '🪧'
	| '🪨'
	| '🪩'
	| '🪪'
	| '🪫'
	| '🪬'
	| '🪰'
	| '🪱'
	| '🪲'
	| '🪳'
	| '🪴'
	| '🪵'
	| '🪶'
	| '🪷'
	| '🪸'
	| '🪹'
	| '🪺'
	| '🫀'
	| '🫁'
	| '🫂'
	| '🫃'
	| '🫃🏻'
	| '🫃🏼'
	| '🫃🏽'
	| '🫃🏾'
	| '🫃🏿'
	| '🫄'
	| '🫄🏻'
	| '🫄🏼'
	| '🫄🏽'
	| '🫄🏾'
	| '🫄🏿'
	| '🫅'
	| '🫅🏻'
	| '🫅🏼'
	| '🫅🏽'
	| '🫅🏾'
	| '🫅🏿'
	| '🫐'
	| '🫑'
	| '🫒'
	| '🫓'
	| '🫔'
	| '🫕'
	| '🫖'
	| '🫗'
	| '🫘'
	| '🫙'
	| '🫠'
	| '🫡'
	| '🫢'
	| '🫣'
	| '🫤'
	| '🫥'
	| '🫦'
	| '🫧'
	| '🫰'
	| '🫰🏻'
	| '🫰🏼'
	| '🫰🏽'
	| '🫰🏾'
	| '🫰🏿'
	| '🫱'
	| '🫱🏻'
	| '🫱🏻‍🫲🏼'
	| '🫱🏻‍🫲🏽'
	| '🫱🏻‍🫲🏾'
	| '🫱🏻‍🫲🏿'
	| '🫱🏼'
	| '🫱🏼‍🫲🏻'
	| '🫱🏼‍🫲🏽'
	| '🫱🏼‍🫲🏾'
	| '🫱🏼‍🫲🏿'
	| '🫱🏽'
	| '🫱🏽‍🫲🏻'
	| '🫱🏽‍🫲🏼'
	| '🫱🏽‍🫲🏾'
	| '🫱🏽‍🫲🏿'
	| '🫱🏾'
	| '🫱🏾‍🫲🏻'
	| '🫱🏾‍🫲🏼'
	| '🫱🏾‍🫲🏽'
	| '🫱🏾‍🫲🏿'
	| '🫱🏿'
	| '🫱🏿‍🫲🏻'
	| '🫱🏿‍🫲🏼'
	| '🫱🏿‍🫲🏽'
	| '🫱🏿‍🫲🏾'
	| '🫲'
	| '🫲🏻'
	| '🫲🏼'
	| '🫲🏽'
	| '🫲🏾'
	| '🫲🏿'
	| '🫳'
	| '🫳🏻'
	| '🫳🏼'
	| '🫳🏽'
	| '🫳🏾'
	| '🫳🏿'
	| '🫴'
	| '🫴🏻'
	| '🫴🏼'
	| '🫴🏽'
	| '🫴🏾'
	| '🫴🏿'
	| '🫵'
	| '🫵🏻'
	| '🫵🏼'
	| '🫵🏽'
	| '🫵🏾'
	| '🫵🏿'
	| '🫶'
	| '🫶🏻'
	| '🫶🏼'
	| '🫶🏽'
	| '🫶🏾'
	| '🫶🏿'
	| '😀'
	| '😁'
	| '😂'
	| '😃'
	| '😄'
	| '😅'
	| '😆'
	| '😇'
	| '😈'
	| '😉'
	| '😊'
	| '😋'
	| '😌'
	| '😍'
	| '😎'
	| '😏'
	| '😐'
	| '😑'
	| '😒'
	| '😓'
	| '😔'
	| '😕'
	| '😖'
	| '😗'
	| '😘'
	| '😙'
	| '😚'
	| '😛'
	| '😜'
	| '😝'
	| '😞'
	| '😟'
	| '😠'
	| '😡'
	| '😢'
	| '😣'
	| '😤'
	| '😥'
	| '😦'
	| '😧'
	| '😨'
	| '😩'
	| '😪'
	| '😫'
	| '😬'
	| '😭'
	| '😮'
	| '😮‍💨'
	| '😯'
	| '😰'
	| '😱'
	| '😲'
	| '😳'
	| '😴'
	| '😵'
	| '😵‍💫'
	| '😶'
	| '😶‍🌫️'
	| '😶‍🌫'
	| '😷'
	| '😸'
	| '😹'
	| '😺'
	| '😻'
	| '😼'
	| '😽'
	| '😾'
	| '😿'
	| '🙀'
	| '🙁'
	| '🙂'
	| '🙃'
	| '🙄'
	| '🙅'
	| '🙅‍♀️'
	| '🙅‍♀'
	| '🙅‍♂️'
	| '🙅‍♂'
	| '🙅🏻'
	| '🙅🏻‍♀️'
	| '🙅🏻‍♂️'
	| '🙅🏼'
	| '🙅🏼‍♀️'
	| '🙅🏼‍♂️'
	| '🙅🏽'
	| '🙅🏽‍♀️'
	| '🙅🏽‍♂️'
	| '🙅🏾'
	| '🙅🏾‍♀️'
	| '🙅🏾‍♂️'
	| '🙅🏿'
	| '🙅🏿‍♀️'
	| '🙅🏿‍♂️'
	| '🙆'
	| '🙆‍♀️'
	| '🙆‍♀'
	| '🙆‍♂️'
	| '🙆‍♂'
	| '🙆🏻'
	| '🙆🏻‍♀️'
	| '🙆🏻‍♂️'
	| '🙆🏼'
	| '🙆🏼‍♀️'
	| '🙆🏼‍♂️'
	| '🙆🏽'
	| '🙆🏽‍♀️'
	| '🙆🏽‍♂️'
	| '🙆🏾'
	| '🙆🏾‍♀️'
	| '🙆🏾‍♂️'
	| '🙆🏿'
	| '🙆🏿‍♀️'
	| '🙆🏿‍♂️'
	| '🙇'
	| '🙇‍♀️'
	| '🙇‍♀'
	| '🙇‍♂️'
	| '🙇‍♂'
	| '🙇🏻'
	| '🙇🏻‍♀️'
	| '🙇🏻‍♂️'
	| '🙇🏼'
	| '🙇🏼‍♀️'
	| '🙇🏼‍♂️'
	| '🙇🏽'
	| '🙇🏽‍♀️'
	| '🙇🏽‍♂️'
	| '🙇🏾'
	| '🙇🏾‍♀️'
	| '🙇🏾‍♂️'
	| '🙇🏿'
	| '🙇🏿‍♀️'
	| '🙇🏿‍♂️'
	| '🙈'
	| '🙉'
	| '🙊'
	| '🙋'
	| '🙋‍♀️'
	| '🙋‍♀'
	| '🙋‍♂️'
	| '🙋‍♂'
	| '🙋🏻'
	| '🙋🏻‍♀️'
	| '🙋🏻‍♂️'
	| '🙋🏼'
	| '🙋🏼‍♀️'
	| '🙋🏼‍♂️'
	| '🙋🏽'
	| '🙋🏽‍♀️'
	| '🙋🏽‍♂️'
	| '🙋🏾'
	| '🙋🏾‍♀️'
	| '🙋🏾‍♂️'
	| '🙋🏿'
	| '🙋🏿‍♀️'
	| '🙋🏿‍♂️'
	| '🙌'
	| '🙌🏻'
	| '🙌🏼'
	| '🙌🏽'
	| '🙌🏾'
	| '🙌🏿'
	| '🙍'
	| '🙍‍♀️'
	| '🙍‍♀'
	| '🙍‍♂️'
	| '🙍‍♂'
	| '🙍🏻'
	| '🙍🏻‍♀️'
	| '🙍🏻‍♂️'
	| '🙍🏼'
	| '🙍🏼‍♀️'
	| '🙍🏼‍♂️'
	| '🙍🏽'
	| '🙍🏽‍♀️'
	| '🙍🏽‍♂️'
	| '🙍🏾'
	| '🙍🏾‍♀️'
	| '🙍🏾‍♂️'
	| '🙍🏿'
	| '🙍🏿‍♀️'
	| '🙍🏿‍♂️'
	| '🙎'
	| '🙎‍♀️'
	| '🙎‍♀'
	| '🙎‍♂️'
	| '🙎‍♂'
	| '🙎🏻'
	| '🙎🏻‍♀️'
	| '🙎🏻‍♂️'
	| '🙎🏼'
	| '🙎🏼‍♀️'
	| '🙎🏼‍♂️'
	| '🙎🏽'
	| '🙎🏽‍♀️'
	| '🙎🏽‍♂️'
	| '🙎🏾'
	| '🙎🏾‍♀️'
	| '🙎🏾‍♂️'
	| '🙎🏿'
	| '🙎🏿‍♀️'
	| '🙎🏿‍♂️'
	| '🙏'
	| '🙏🏻'
	| '🙏🏼'
	| '🙏🏽'
	| '🙏🏾'
	| '🙏🏿'
	| '🚀'
	| '🚁'
	| '🚂'
	| '🚃'
	| '🚄'
	| '🚅'
	| '🚆'
	| '🚇'
	| '🚈'
	| '🚉'
	| '🚊'
	| '🚋'
	| '🚌'
	| '🚍'
	| '🚎'
	| '🚏'
	| '🚐'
	| '🚑'
	| '🚒'
	| '🚓'
	| '🚔'
	| '🚕'
	| '🚖'
	| '🚗'
	| '🚘'
	| '🚙'
	| '🚚'
	| '🚛'
	| '🚜'
	| '🚝'
	| '🚞'
	| '🚟'
	| '🚠'
	| '🚡'
	| '🚢'
	| '🚣'
	| '🚣‍♀️'
	| '🚣‍♀'
	| '🚣‍♂️'
	| '🚣‍♂'
	| '🚣🏻'
	| '🚣🏻‍♀️'
	| '🚣🏻‍♂️'
	| '🚣🏼'
	| '🚣🏼‍♀️'
	| '🚣🏼‍♂️'
	| '🚣🏽'
	| '🚣🏽‍♀️'
	| '🚣🏽‍♂️'
	| '🚣🏾'
	| '🚣🏾‍♀️'
	| '🚣🏾‍♂️'
	| '🚣🏿'
	| '🚣🏿‍♀️'
	| '🚣🏿‍♂️'
	| '🚤'
	| '🚥'
	| '🚦'
	| '🚧'
	| '🚨'
	| '🚩'
	| '🚪'
	| '🚫'
	| '🚬'
	| '🚭'
	| '🚮'
	| '🚯'
	| '🚰'
	| '🚱'
	| '🚲'
	| '🚳'
	| '🚴'
	| '🚴‍♀️'
	| '🚴‍♀'
	| '🚴‍♂️'
	| '🚴‍♂'
	| '🚴🏻'
	| '🚴🏻‍♀️'
	| '🚴🏻‍♂️'
	| '🚴🏼'
	| '🚴🏼‍♀️'
	| '🚴🏼‍♂️'
	| '🚴🏽'
	| '🚴🏽‍♀️'
	| '🚴🏽‍♂️'
	| '🚴🏾'
	| '🚴🏾‍♀️'
	| '🚴🏾‍♂️'
	| '🚴🏿'
	| '🚴🏿‍♀️'
	| '🚴🏿‍♂️'
	| '🚵'
	| '🚵‍♀️'
	| '🚵‍♀'
	| '🚵‍♂️'
	| '🚵‍♂'
	| '🚵🏻'
	| '🚵🏻‍♀️'
	| '🚵🏻‍♂️'
	| '🚵🏼'
	| '🚵🏼‍♀️'
	| '🚵🏼‍♂️'
	| '🚵🏽'
	| '🚵🏽‍♀️'
	| '🚵🏽‍♂️'
	| '🚵🏾'
	| '🚵🏾‍♀️'
	| '🚵🏾‍♂️'
	| '🚵🏿'
	| '🚵🏿‍♀️'
	| '🚵🏿‍♂️'
	| '🚶'
	| '🚶‍♀️'
	| '🚶‍♀'
	| '🚶‍♂️'
	| '🚶‍♂'
	| '🚶🏻'
	| '🚶🏻‍♀️'
	| '🚶🏻‍♂️'
	| '🚶🏼'
	| '🚶🏼‍♀️'
	| '🚶🏼‍♂️'
	| '🚶🏽'
	| '🚶🏽‍♀️'
	| '🚶🏽‍♂️'
	| '🚶🏾'
	| '🚶🏾‍♀️'
	| '🚶🏾‍♂️'
	| '🚶🏿'
	| '🚶🏿‍♀️'
	| '🚶🏿‍♂️'
	| '🚷'
	| '🚸'
	| '🚹'
	| '🚺'
	| '🚻'
	| '🚼'
	| '🚽'
	| '🚾'
	| '🚿'
	| '🛀'
	| '🛀🏻'
	| '🛀🏼'
	| '🛀🏽'
	| '🛀🏾'
	| '🛀🏿'
	| '🛁'
	| '🛂'
	| '🛃'
	| '🛄'
	| '🛅'
	| '🛋️'
	| '🛋'
	| '🛌'
	| '🛌🏻'
	| '🛌🏼'
	| '🛌🏽'
	| '🛌🏾'
	| '🛌🏿'
	| '🛍️'
	| '🛍'
	| '🛎️'
	| '🛎'
	| '🛏️'
	| '🛏'
	| '🛐'
	| '🛑'
	| '🛒'
	| '🛕'
	| '🛖'
	| '🛗'
	| '🛝'
	| '🛞'
	| '🛟'
	| '🛠️'
	| '🛠'
	| '🛡️'
	| '🛡'
	| '🛢️'
	| '🛢'
	| '🛣️'
	| '🛣'
	| '🛤️'
	| '🛤'
	| '🛥️'
	| '🛥'
	| '🛩️'
	| '🛩'
	| '🛫'
	| '🛬'
	| '🛰️'
	| '🛰'
	| '🛳️'
	| '🛳'
	| '🛴'
	| '🛵'
	| '🛶'
	| '🛷'
	| '🛸'
	| '🛹'
	| '🛺'
	| '🛻'
	| '🛼'
	| '🟠'
	| '🟡'
	| '🟢'
	| '🟣'
	| '🟤'
	| '🟥'
	| '🟦'
	| '🟧'
	| '🟨'
	| '🟩'
	| '🟪'
	| '🟫'
	| '🟰'
	| '0️⃣'
	| '0⃣'
	| '1️⃣'
	| '1⃣'
	| '2️⃣'
	| '2⃣'
	| '3️⃣'
	| '3⃣'
	| '4️⃣'
	| '4⃣'
	| '5️⃣'
	| '5⃣'
	| '6️⃣'
	| '6⃣'
	| '7️⃣'
	| '7⃣'
	| '8️⃣'
	| '8⃣'
	| '9️⃣'
	| '9⃣'
	| '🅰️'
	| '🅰'
	| '🆎'
	| '🅱️'
	| '🅱'
	| '🆑'
	| '🆒'
	| '🆓'
	| 'ℹ️'
	| 'ℹ'
	| '🆔'
	| 'Ⓜ️'
	| 'Ⓜ'
	| '🆕'
	| '🆖'
	| '🅾️'
	| '🅾'
	| '🆗'
	| '🅿️'
	| '🅿'
	| '🆘'
	| '™️'
	| '🆙'
	| '🆚'
	| '🈁'
	| '🈂️'
	| '🈂'
	| '🈹'
	| '🉑'
	| '🈴'
	| '🈺'
	| '🉐'
	| '🈯'
	| '🈷️'
	| '🈷'
	| '🈶'
	| '🈵'
	| '🈚'
	| '🈸'
	| '㊗️'
	| '㊗'
	| '🈲'
	| '㊙️'
	| '㊙'
	| '🈳';

export interface PageObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'page';
	public_url: string | null;
	url: string;
	cover:
		| { type: 'external'; external: { url: TextRequest } }
		| { type: 'file'; file: { url: string; expiry_time: string } }
		| null
		| null;
	icon:
		| { type: 'emoji'; emoji: EmojiRequest }
		| { type: 'external'; external: { url: TextRequest } }
		| { type: 'file'; file: { url: string; expiry_time: string } }
		| null
		| null
		| null;
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
	properties: Record<
		string,
		| { type: 'button'; button: Record<string, never>; id: string }
		| { type: 'checkbox'; checkbox: boolean; id: string }
		| {
				type: 'created_by';
				created_by: PartialUserObjectResponse | UserObjectResponse;
				id: string;
		  }
		| { type: 'created_time'; created_time: string; id: string }
		| { type: 'date'; date: DateResponse | null; id: string }
		| { type: 'email'; email: string | null; id: string }
		| {
				type: 'files';
				files: Array<
					| {
							external: { url: TextRequest };
							name: StringRequest;
							type?: 'external';
					  }
					| {
							file: { url: string; expiry_time: string };
							name: StringRequest;
							type?: 'file';
					  }
				>;
				id: string;
		  }
		| { type: 'formula'; formula: FormulaPropertyResponse; id: string }
		| {
				type: 'last_edited_by';
				last_edited_by: PartialUserObjectResponse | UserObjectResponse;
				id: string;
		  }
		| { type: 'last_edited_time'; last_edited_time: string; id: string }
		| {
				type: 'multi_select';
				multi_select: Array<PartialSelectResponse>;
				id: string;
		  }
		| { type: 'number'; number: number | null; id: string }
		| {
				type: 'people';
				people: Array<PartialUserObjectResponse | UserObjectResponse>;
				id: string;
		  }
		| { type: 'phone_number'; phone_number: string | null; id: string }
		| { type: 'relation'; relation: Array<{ id: string }>; id: string }
		| { type: 'rich_text'; rich_text: Array<RichTextItemResponse>; id: string }
		| {
				type: 'rollup';
				rollup:
					| {
							type: 'array';
							array: Array<
								| { type: 'button'; button: Record<string, never> }
								| { type: 'checkbox'; checkbox: boolean }
								| {
										type: 'created_by';
										created_by: PartialUserObjectResponse | UserObjectResponse;
								  }
								| { type: 'created_time'; created_time: string }
								| { type: 'date'; date: DateResponse | null }
								| { type: 'email'; email: string | null }
								| {
										type: 'files';
										files: Array<
											| {
													external: { url: TextRequest };
													name: StringRequest;
													type?: 'external';
											  }
											| {
													file: { url: string; expiry_time: string };
													name: StringRequest;
													type?: 'file';
											  }
										>;
								  }
								| { type: 'formula'; formula: FormulaPropertyResponse }
								| {
										type: 'last_edited_by';
										last_edited_by: PartialUserObjectResponse | UserObjectResponse;
								  }
								| { type: 'last_edited_time'; last_edited_time: string }
								| {
										type: 'multi_select';
										multi_select: Array<PartialSelectResponse>;
								  }
								| { type: 'number'; number: number | null }
								| {
										type: 'people';
										people: Array<PartialUserObjectResponse | UserObjectResponse>;
								  }
								| { type: 'phone_number'; phone_number: string | null }
								| { type: 'relation'; relation: Array<{ id: string }> }
								| { type: 'rich_text'; rich_text: Array<RichTextItemResponse> }
								| { type: 'select'; select: PartialSelectResponse | null }
								| { type: 'status'; status: PartialSelectResponse | null }
								| { type: 'title'; title: Array<RichTextItemResponse> }
								| {
										type: 'unique_id';
										unique_id: { prefix: string | null; number: number | null };
								  }
								| { type: 'url'; url: string | null }
								| {
										type: 'verification';
										verification:
											| VerificationPropertyResponse
											| VerificationPropertyUnverifiedResponse
											| null
											| null;
								  }
							>;
							function: RollupFunction;
					  }
					| {
							type: 'date';
							date: DateResponse | null;
							function: RollupFunction;
					  }
					| { type: 'number'; number: number | null; function: RollupFunction };
				id: string;
		  }
		| { type: 'select'; select: PartialSelectResponse | null; id: string }
		| { type: 'status'; status: PartialSelectResponse | null; id: string }
		| { type: 'title'; title: Array<RichTextItemResponse>; id: string }
		| {
				type: 'unique_id';
				unique_id: { prefix: string | null; number: number | null };
				id: string;
		  }
		| { type: 'url'; url: string | null; id: string }
		| {
				type: 'verification';
				verification:
					| VerificationPropertyResponse
					| VerificationPropertyUnverifiedResponse
					| null
					| null;
				id: string;
		  }
	>;
}

export interface PartialPageObjectResponse {
	id: string;
	object: 'page';
}

export type NumberFormat =
	| 'argentine_peso'
	| 'australian_dollar'
	| 'baht'
	| 'canadian_dollar'
	| 'chilean_peso'
	| 'colombian_peso'
	| 'danish_krone'
	| 'dirham'
	| 'dollar'
	| 'euro'
	| 'forint'
	| 'franc'
	| 'hong_kong_dollar'
	| 'koruna'
	| 'krona'
	| 'leu'
	| 'lira'
	| 'mexican_peso'
	| 'new_taiwan_dollar'
	| 'new_zealand_dollar'
	| 'norwegian_krone'
	| 'number_with_commas'
	| 'number'
	| 'percent'
	| 'peruvian_sol'
	| 'philippine_peso'
	| 'pound'
	| 'rand'
	| 'real'
	| 'ringgit'
	| 'riyal'
	| 'ruble'
	| 'rupee'
	| 'rupiah'
	| 'shekel'
	| 'singapore_dollar'
	| 'uruguayan_peso'
	| 'won'
	| 'yen'
	| 'yuan'
	| 'zloty';

export type PropertyDescriptionRequest = string;

export interface NumberDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	number: { format: NumberFormat };
	type: 'number';
}

export interface FormulaDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	formula: { expression: string };
	id: string;
	name: string;
	type: 'formula';
}

export interface SelectPropertyResponse {
	color: SelectColor;
	description: StringRequest | null;
	id: StringRequest;
	name: StringRequest;
}

export interface SelectDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	select: { options: Array<SelectPropertyResponse> };
	type: 'select';
}

export interface MultiSelectDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	id: string;
	multi_select: { options: Array<SelectPropertyResponse> };
	name: string;
	type: 'multi_select';
}

export interface StatusPropertyResponse {
	color: SelectColor;
	description: StringRequest | null;
	id: StringRequest;
	name: StringRequest;
}

export interface StatusDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	type: 'status';
	status: {
		options: Array<StatusPropertyResponse>;
		groups: Array<{
			id: StringRequest;
			name: StringRequest;
			color: SelectColor;
			option_ids: Array<string>;
		}>;
	};
}

export interface SinglePropertyDatabasePropertyRelationConfigResponse {
	database_id: IdRequest;
	single_property: EmptyObject;
	type: 'single_property';
}

export interface DualPropertyDatabasePropertyRelationConfigResponse {
	database_id: IdRequest;
	type: 'dual_property';
	dual_property: {
		synced_property_id: StringRequest;
		synced_property_name: StringRequest;
	};
}

export type DatabasePropertyRelationConfigResponse =
	| DualPropertyDatabasePropertyRelationConfigResponse
	| SinglePropertyDatabasePropertyRelationConfigResponse;

export interface RelationDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	relation: DatabasePropertyRelationConfigResponse;
	type: 'relation';
}

export interface RollupDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	type: 'rollup';
	rollup: {
		rollup_property_name: string;
		relation_property_name: string;
		rollup_property_id: string;
		relation_property_id: string;
		function: RollupFunction;
	};
}

export interface UniqueIdDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	type: 'unique_id';
	unique_id: { prefix: string | null };
}

export interface TitleDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	title: EmptyObject;
	type: 'title';
}

export interface RichTextDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	rich_text: EmptyObject;
	type: 'rich_text';
}

export interface UrlDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	type: 'url';
	url: EmptyObject;
}

export interface PeopleDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	people: EmptyObject;
	type: 'people';
}

export interface FilesDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	files: EmptyObject;
	id: string;
	name: string;
	type: 'files';
}

export interface EmailDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	email: EmptyObject;
	id: string;
	name: string;
	type: 'email';
}

export interface PhoneNumberDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	phone_number: EmptyObject;
	type: 'phone_number';
}

export interface DateDatabasePropertyConfigResponse {
	date: EmptyObject;
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	type: 'date';
}

export interface CheckboxDatabasePropertyConfigResponse {
	checkbox: EmptyObject;
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	type: 'checkbox';
}

export interface CreatedByDatabasePropertyConfigResponse {
	created_by: EmptyObject;
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	type: 'created_by';
}

export interface CreatedTimeDatabasePropertyConfigResponse {
	created_time: EmptyObject;
	description: PropertyDescriptionRequest | null;
	id: string;
	name: string;
	type: 'created_time';
}

export interface LastEditedByDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	id: string;
	last_edited_by: EmptyObject;
	name: string;
	type: 'last_edited_by';
}

export interface LastEditedTimeDatabasePropertyConfigResponse {
	description: PropertyDescriptionRequest | null;
	id: string;
	last_edited_time: EmptyObject;
	name: string;
	type: 'last_edited_time';
}

export type DatabasePropertyConfigResponse =
	| CheckboxDatabasePropertyConfigResponse
	| CreatedByDatabasePropertyConfigResponse
	| CreatedTimeDatabasePropertyConfigResponse
	| DateDatabasePropertyConfigResponse
	| EmailDatabasePropertyConfigResponse
	| FilesDatabasePropertyConfigResponse
	| FormulaDatabasePropertyConfigResponse
	| LastEditedByDatabasePropertyConfigResponse
	| LastEditedTimeDatabasePropertyConfigResponse
	| MultiSelectDatabasePropertyConfigResponse
	| NumberDatabasePropertyConfigResponse
	| PeopleDatabasePropertyConfigResponse
	| PhoneNumberDatabasePropertyConfigResponse
	| RelationDatabasePropertyConfigResponse
	| RichTextDatabasePropertyConfigResponse
	| RollupDatabasePropertyConfigResponse
	| SelectDatabasePropertyConfigResponse
	| StatusDatabasePropertyConfigResponse
	| TitleDatabasePropertyConfigResponse
	| UniqueIdDatabasePropertyConfigResponse
	| UrlDatabasePropertyConfigResponse;

export interface PartialDatabaseObjectResponse {
	id: string;
	object: 'database';
	properties: Record<string, DatabasePropertyConfigResponse>;
}

export interface DatabaseObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	description: Array<RichTextItemResponse>;
	id: string;
	in_trash: boolean;
	is_inline: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'database';
	properties: Record<string, DatabasePropertyConfigResponse>;
	public_url: string | null;
	title: Array<RichTextItemResponse>;
	url: string;
	cover:
		| { type: 'external'; external: { url: TextRequest } }
		| { type: 'file'; file: { url: string; expiry_time: string } }
		| null
		| null;
	icon:
		| { type: 'emoji'; emoji: EmojiRequest }
		| { type: 'external'; external: { url: TextRequest } }
		| { type: 'file'; file: { url: string; expiry_time: string } }
		| null
		| null
		| null;
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface PartialBlockObjectResponse {
	id: string;
	object: 'block';
}

export type ApiColor =
	| 'blue_background'
	| 'blue'
	| 'brown_background'
	| 'brown'
	| 'default'
	| 'gray_background'
	| 'gray'
	| 'green_background'
	| 'green'
	| 'orange_background'
	| 'orange'
	| 'pink_background'
	| 'pink'
	| 'purple_background'
	| 'purple'
	| 'red_background'
	| 'red'
	| 'yellow_background'
	| 'yellow';

export interface ParagraphBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	paragraph: { rich_text: Array<RichTextItemResponse>; color: ApiColor };
	type: 'paragraph';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface Heading1BlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'heading_1';
	heading_1: {
		rich_text: Array<RichTextItemResponse>;
		color: ApiColor;
		is_toggleable: boolean;
	};
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface Heading2BlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'heading_2';
	heading_2: {
		rich_text: Array<RichTextItemResponse>;
		color: ApiColor;
		is_toggleable: boolean;
	};
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface Heading3BlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'heading_3';
	heading_3: {
		rich_text: Array<RichTextItemResponse>;
		color: ApiColor;
		is_toggleable: boolean;
	};
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface BulletedListItemBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'bulleted_list_item';
	bulleted_list_item: {
		rich_text: Array<RichTextItemResponse>;
		color: ApiColor;
	};
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface NumberedListItemBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'numbered_list_item';
	numbered_list_item: {
		rich_text: Array<RichTextItemResponse>;
		color: ApiColor;
	};
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface QuoteBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	quote: { rich_text: Array<RichTextItemResponse>; color: ApiColor };
	type: 'quote';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface ToDoBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'to_do';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
	to_do: {
		rich_text: Array<RichTextItemResponse>;
		color: ApiColor;
		checked: boolean;
	};
}

export interface ToggleBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	toggle: { rich_text: Array<RichTextItemResponse>; color: ApiColor };
	type: 'toggle';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface TemplateBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	template: { rich_text: Array<RichTextItemResponse> };
	type: 'template';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface SyncedBlockBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'synced_block';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
	synced_block: {
		synced_from: { type: 'block_id'; block_id: IdRequest } | null;
	};
}

export interface ChildPageBlockObjectResponse {
	archived: boolean;
	child_page: { title: string };
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'child_page';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface ChildDatabaseBlockObjectResponse {
	archived: boolean;
	child_database: { title: string };
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'child_database';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface EquationBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	equation: { expression: string };
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'equation';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export type LanguageRequest =
	| 'abap'
	| 'agda'
	| 'arduino'
	| 'assembly'
	| 'bash'
	| 'basic'
	| 'bnf'
	| 'c'
	| 'c#'
	| 'c++'
	| 'clojure'
	| 'coffeescript'
	| 'coq'
	| 'css'
	| 'dart'
	| 'dhall'
	| 'diff'
	| 'docker'
	| 'ebnf'
	| 'elixir'
	| 'elm'
	| 'erlang'
	| 'f#'
	| 'flow'
	| 'fortran'
	| 'gherkin'
	| 'glsl'
	| 'go'
	| 'graphql'
	| 'groovy'
	| 'haskell'
	| 'html'
	| 'idris'
	| 'java'
	| 'java/c/c++/c#'
	| 'javascript'
	| 'json'
	| 'julia'
	| 'kotlin'
	| 'latex'
	| 'less'
	| 'lisp'
	| 'livescript'
	| 'llvm ir'
	| 'lua'
	| 'makefile'
	| 'markdown'
	| 'markup'
	| 'mathematica'
	| 'matlab'
	| 'mermaid'
	| 'nix'
	| 'notion formula'
	| 'objective-c'
	| 'ocaml'
	| 'pascal'
	| 'perl'
	| 'php'
	| 'plain text'
	| 'powershell'
	| 'prolog'
	| 'protobuf'
	| 'purescript'
	| 'python'
	| 'r'
	| 'racket'
	| 'reason'
	| 'ruby'
	| 'rust'
	| 'sass'
	| 'scala'
	| 'scheme'
	| 'scss'
	| 'shell'
	| 'solidity'
	| 'sql'
	| 'swift'
	| 'toml'
	| 'typescript'
	| 'vb.net'
	| 'verilog'
	| 'vhdl'
	| 'visual basic'
	| 'webassembly'
	| 'xml'
	| 'yaml';

export interface CodeBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'code';
	code: {
		rich_text: Array<RichTextItemResponse>;
		caption: Array<RichTextItemResponse>;
		language: LanguageRequest;
	};
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface CalloutBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'callout';
	callout: {
		rich_text: Array<RichTextItemResponse>;
		color: ApiColor;
		icon:
			| { type: 'emoji'; emoji: EmojiRequest }
			| { type: 'external'; external: { url: TextRequest } }
			| { type: 'file'; file: { url: string; expiry_time: string } }
			| null
			| null
			| null;
	};
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface DividerBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	divider: EmptyObject;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'divider';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface BreadcrumbBlockObjectResponse {
	archived: boolean;
	breadcrumb: EmptyObject;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'breadcrumb';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface TableOfContentsBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	table_of_contents: { color: ApiColor };
	type: 'table_of_contents';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface ColumnListBlockObjectResponse {
	archived: boolean;
	column_list: EmptyObject;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'column_list';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface ColumnBlockObjectResponse {
	archived: boolean;
	column: EmptyObject;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'column';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface LinkToPageBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'link_to_page';
	link_to_page:
		| { type: 'comment_id'; comment_id: IdRequest }
		| { type: 'database_id'; database_id: IdRequest }
		| { type: 'page_id'; page_id: IdRequest };
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface TableBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'table';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
	table: {
		has_column_header: boolean;
		has_row_header: boolean;
		table_width: number;
	};
}

export interface TableRowBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	table_row: { cells: Array<Array<RichTextItemResponse>> };
	type: 'table_row';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface EmbedBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	embed: { url: string; caption: Array<RichTextItemResponse> };
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'embed';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface BookmarkBlockObjectResponse {
	archived: boolean;
	bookmark: { url: string; caption: Array<RichTextItemResponse> };
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'bookmark';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface ImageBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'image';
	image:
		| {
				type: 'external';
				external: { url: TextRequest };
				caption: Array<RichTextItemResponse>;
		  }
		| {
				type: 'file';
				file: { url: string; expiry_time: string };
				caption: Array<RichTextItemResponse>;
		  };
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface VideoBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'video';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
	video:
		| {
				type: 'external';
				external: { url: TextRequest };
				caption: Array<RichTextItemResponse>;
		  }
		| {
				type: 'file';
				file: { url: string; expiry_time: string };
				caption: Array<RichTextItemResponse>;
		  };
}

export interface PdfBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'pdf';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
	pdf:
		| {
				type: 'external';
				external: { url: TextRequest };
				caption: Array<RichTextItemResponse>;
		  }
		| {
				type: 'file';
				file: { url: string; expiry_time: string };
				caption: Array<RichTextItemResponse>;
		  };
}

export interface FileBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'file';
	file:
		| {
				type: 'external';
				external: { url: TextRequest };
				caption: Array<RichTextItemResponse>;
				name: string;
		  }
		| {
				type: 'file';
				file: { url: string; expiry_time: string };
				caption: Array<RichTextItemResponse>;
				name: string;
		  };
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface AudioBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'audio';
	audio:
		| {
				type: 'external';
				external: { url: TextRequest };
				caption: Array<RichTextItemResponse>;
		  }
		| {
				type: 'file';
				file: { url: string; expiry_time: string };
				caption: Array<RichTextItemResponse>;
		  };
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface LinkPreviewBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	link_preview: { url: TextRequest };
	object: 'block';
	type: 'link_preview';
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export interface UnsupportedBlockObjectResponse {
	archived: boolean;
	created_by: PartialUserObjectResponse;
	created_time: string;
	has_children: boolean;
	id: string;
	in_trash: boolean;
	last_edited_by: PartialUserObjectResponse;
	last_edited_time: string;
	object: 'block';
	type: 'unsupported';
	unsupported: EmptyObject;
	parent:
		| { type: 'block_id'; block_id: string }
		| { type: 'database_id'; database_id: string }
		| { type: 'page_id'; page_id: string }
		| { type: 'workspace'; workspace: true };
}

export type BlockObjectResponse =
	| AudioBlockObjectResponse
	| BookmarkBlockObjectResponse
	| BreadcrumbBlockObjectResponse
	| BulletedListItemBlockObjectResponse
	| CalloutBlockObjectResponse
	| ChildDatabaseBlockObjectResponse
	| ChildPageBlockObjectResponse
	| CodeBlockObjectResponse
	| ColumnBlockObjectResponse
	| ColumnListBlockObjectResponse
	| DividerBlockObjectResponse
	| EmbedBlockObjectResponse
	| EquationBlockObjectResponse
	| FileBlockObjectResponse
	| Heading1BlockObjectResponse
	| Heading2BlockObjectResponse
	| Heading3BlockObjectResponse
	| ImageBlockObjectResponse
	| LinkPreviewBlockObjectResponse
	| LinkToPageBlockObjectResponse
	| NumberedListItemBlockObjectResponse
	| ParagraphBlockObjectResponse
	| PdfBlockObjectResponse
	| QuoteBlockObjectResponse
	| SyncedBlockBlockObjectResponse
	| TableBlockObjectResponse
	| TableOfContentsBlockObjectResponse
	| TableRowBlockObjectResponse
	| TemplateBlockObjectResponse
	| ToDoBlockObjectResponse
	| ToggleBlockObjectResponse
	| UnsupportedBlockObjectResponse
	| VideoBlockObjectResponse;

export interface NumberPropertyItemObjectResponse {
	id: string;
	number: number | null;
	object: 'property_item';
	type: 'number';
}

export interface UrlPropertyItemObjectResponse {
	id: string;
	object: 'property_item';
	type: 'url';
	url: string | null;
}

export interface SelectPropertyItemObjectResponse {
	id: string;
	object: 'property_item';
	select: PartialSelectResponse | null;
	type: 'select';
}

export interface MultiSelectPropertyItemObjectResponse {
	id: string;
	multi_select: Array<PartialSelectResponse>;
	object: 'property_item';
	type: 'multi_select';
}

export interface StatusPropertyItemObjectResponse {
	id: string;
	object: 'property_item';
	status: PartialSelectResponse | null;
	type: 'status';
}

export interface DatePropertyItemObjectResponse {
	date: DateResponse | null;
	id: string;
	object: 'property_item';
	type: 'date';
}

export interface EmailPropertyItemObjectResponse {
	email: string | null;
	id: string;
	object: 'property_item';
	type: 'email';
}

export interface PhoneNumberPropertyItemObjectResponse {
	id: string;
	object: 'property_item';
	phone_number: string | null;
	type: 'phone_number';
}

export interface CheckboxPropertyItemObjectResponse {
	checkbox: boolean;
	id: string;
	object: 'property_item';
	type: 'checkbox';
}

export interface FilesPropertyItemObjectResponse {
	id: string;
	object: 'property_item';
	type: 'files';
	files: Array<
		| { external: { url: TextRequest }; name: StringRequest; type?: 'external' }
		| {
				file: { url: string; expiry_time: string };
				name: StringRequest;
				type?: 'file';
		  }
	>;
}

export interface CreatedByPropertyItemObjectResponse {
	created_by: PartialUserObjectResponse | UserObjectResponse;
	id: string;
	object: 'property_item';
	type: 'created_by';
}

export interface CreatedTimePropertyItemObjectResponse {
	created_time: string;
	id: string;
	object: 'property_item';
	type: 'created_time';
}

export interface LastEditedByPropertyItemObjectResponse {
	id: string;
	last_edited_by: PartialUserObjectResponse | UserObjectResponse;
	object: 'property_item';
	type: 'last_edited_by';
}

export interface LastEditedTimePropertyItemObjectResponse {
	id: string;
	last_edited_time: string;
	object: 'property_item';
	type: 'last_edited_time';
}

export interface FormulaPropertyItemObjectResponse {
	formula: FormulaPropertyResponse;
	id: string;
	object: 'property_item';
	type: 'formula';
}

export interface ButtonPropertyItemObjectResponse {
	button: Record<string, never>;
	id: string;
	object: 'property_item';
	type: 'button';
}

export interface UniqueIdPropertyItemObjectResponse {
	id: string;
	object: 'property_item';
	type: 'unique_id';
	unique_id: { prefix: string | null; number: number | null };
}

export interface VerificationPropertyItemObjectResponse {
	id: string;
	object: 'property_item';
	type: 'verification';
	verification:
		| VerificationPropertyResponse
		| VerificationPropertyUnverifiedResponse
		| null
		| null;
}

export interface TitlePropertyItemObjectResponse {
	id: string;
	object: 'property_item';
	title: Array<RichTextItemResponse>;
	type: 'title';
}

export interface RichTextPropertyItemObjectResponse {
	id: string;
	object: 'property_item';
	rich_text: Array<RichTextItemResponse>;
	type: 'rich_text';
}

export interface PeoplePropertyItemObjectResponse {
	id: string;
	object: 'property_item';
	people: PartialUserObjectResponse | UserObjectResponse;
	type: 'people';
}

export interface RelationPropertyItemObjectResponse {
	id: string;
	object: 'property_item';
	relation: { id: string };
	type: 'relation';
}

export interface RollupPropertyItemObjectResponse {
	id: string;
	object: 'property_item';
	type: 'rollup';
	rollup:
		| { type: 'array'; array: Array<EmptyObject>; function: RollupFunction }
		| { type: 'date'; date: DateResponse | null; function: RollupFunction }
		| { type: 'incomplete'; incomplete: EmptyObject; function: RollupFunction }
		| { type: 'number'; number: number | null; function: RollupFunction }
		| {
				type: 'unsupported';
				unsupported: EmptyObject;
				function: RollupFunction;
		  };
}

export type PropertyItemObjectResponse =
	| ButtonPropertyItemObjectResponse
	| CheckboxPropertyItemObjectResponse
	| CreatedByPropertyItemObjectResponse
	| CreatedTimePropertyItemObjectResponse
	| DatePropertyItemObjectResponse
	| EmailPropertyItemObjectResponse
	| FilesPropertyItemObjectResponse
	| FormulaPropertyItemObjectResponse
	| LastEditedByPropertyItemObjectResponse
	| LastEditedTimePropertyItemObjectResponse
	| MultiSelectPropertyItemObjectResponse
	| NumberPropertyItemObjectResponse
	| PeoplePropertyItemObjectResponse
	| PhoneNumberPropertyItemObjectResponse
	| RelationPropertyItemObjectResponse
	| RichTextPropertyItemObjectResponse
	| RollupPropertyItemObjectResponse
	| SelectPropertyItemObjectResponse
	| StatusPropertyItemObjectResponse
	| TitlePropertyItemObjectResponse
	| UniqueIdPropertyItemObjectResponse
	| UrlPropertyItemObjectResponse
	| VerificationPropertyItemObjectResponse;

export interface CommentObjectResponse {
	created_by: PartialUserObjectResponse;
	created_time: string;
	discussion_id: string;
	id: string;
	last_edited_time: string;
	object: 'comment';
	parent: { type: 'block_id'; block_id: IdRequest } | { type: 'page_id'; page_id: IdRequest };
	rich_text: Array<RichTextItemResponse>;
}

export interface PartialCommentObjectResponse {
	id: string;
	object: 'comment';
}

export interface PropertyItemPropertyItemListResponse {
	has_more: boolean;
	next_cursor: string | null;
	object: 'list';
	results: Array<PropertyItemObjectResponse>;
	type: 'property_item';
	property_item:
		| {
				type: 'people';
				people: EmptyObject;
				next_url: string | null;
				id: string;
		  }
		| {
				type: 'relation';
				relation: EmptyObject;
				next_url: string | null;
				id: string;
		  }
		| {
				type: 'rich_text';
				rich_text: EmptyObject;
				next_url: string | null;
				id: string;
		  }
		| {
				type: 'rollup';
				rollup:
					| {
							type: 'array';
							array: Array<EmptyObject>;
							function: RollupFunction;
					  }
					| {
							type: 'date';
							date: DateResponse | null;
							function: RollupFunction;
					  }
					| {
							type: 'incomplete';
							incomplete: EmptyObject;
							function: RollupFunction;
					  }
					| { type: 'number'; number: number | null; function: RollupFunction }
					| {
							type: 'unsupported';
							unsupported: EmptyObject;
							function: RollupFunction;
					  };
				next_url: string | null;
				id: string;
		  }
		| { type: 'title'; title: EmptyObject; next_url: string | null; id: string };
}

export type PropertyItemListResponse = PropertyItemPropertyItemListResponse;

export interface DateRequest {
	end?: string | null;
	start: string;
	time_zone?: TimeZoneRequest | null;
}

export type TemplateMentionRequest =
	| { template_mention_date: 'now' | 'today'; type?: 'template_mention_date' }
	| { template_mention_user: 'me'; type?: 'template_mention_user' };

export type RichTextItemRequest =
	| {
			equation: { expression: TextRequest };
			type?: 'equation';
			annotations?: {
				bold?: boolean;
				italic?: boolean;
				strikethrough?: boolean;
				underline?: boolean;
				code?: boolean;
				color?:
					| 'blue_background'
					| 'blue'
					| 'brown_background'
					| 'brown'
					| 'default'
					| 'gray_background'
					| 'gray'
					| 'green_background'
					| 'green'
					| 'orange_background'
					| 'orange'
					| 'pink_background'
					| 'pink'
					| 'purple_background'
					| 'purple'
					| 'red_background'
					| 'red'
					| 'yellow_background'
					| 'yellow';
			};
	  }
	| {
			mention:
				| { database: { id: IdRequest } }
				| { date: DateRequest }
				| { page: { id: IdRequest } }
				| { template_mention: TemplateMentionRequest }
				| {
						user:
							| {
									bot:
										| EmptyObject
										| {
												owner:
													| {
															type: 'user';
															user:
																| PartialUserObjectResponse
																| {
																		type: 'person';
																		person: { email: string };
																		name: string | null;
																		avatar_url: string | null;
																		id: IdRequest;
																		object: 'user';
																  };
													  }
													| { type: 'workspace'; workspace: true };
												workspace_name: string | null;
										  };
									id: IdRequest;
									type?: 'bot';
									name?: string | null;
									avatar_url?: string | null;
									object?: 'user';
							  }
							| { id: IdRequest }
							| {
									person: { email?: string };
									id: IdRequest;
									type?: 'person';
									name?: string | null;
									avatar_url?: string | null;
									object?: 'user';
							  };
				  };
			type?: 'mention';
			annotations?: {
				bold?: boolean;
				italic?: boolean;
				strikethrough?: boolean;
				underline?: boolean;
				code?: boolean;
				color?:
					| 'blue_background'
					| 'blue'
					| 'brown_background'
					| 'brown'
					| 'default'
					| 'gray_background'
					| 'gray'
					| 'green_background'
					| 'green'
					| 'orange_background'
					| 'orange'
					| 'pink_background'
					| 'pink'
					| 'purple_background'
					| 'purple'
					| 'red_background'
					| 'red'
					| 'yellow_background'
					| 'yellow';
			};
	  }
	| {
			text: { content: string; link?: { url: TextRequest } | null };
			type?: 'text';
			annotations?: {
				bold?: boolean;
				italic?: boolean;
				strikethrough?: boolean;
				underline?: boolean;
				code?: boolean;
				color?:
					| 'blue_background'
					| 'blue'
					| 'brown_background'
					| 'brown'
					| 'default'
					| 'gray_background'
					| 'gray'
					| 'green_background'
					| 'green'
					| 'orange_background'
					| 'orange'
					| 'pink_background'
					| 'pink'
					| 'purple_background'
					| 'purple'
					| 'red_background'
					| 'red'
					| 'yellow_background'
					| 'yellow';
			};
	  };

export type BlockObjectRequestWithoutChildren =
	| {
			audio: {
				external: { url: TextRequest };
				type?: 'external';
				caption?: Array<RichTextItemRequest>;
			};
			type?: 'audio';
			object?: 'block';
	  }
	| {
			bookmark: { url: string; caption?: Array<RichTextItemRequest> };
			type?: 'bookmark';
			object?: 'block';
	  }
	| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
	| {
			bulleted_list_item: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
			};
			type?: 'bulleted_list_item';
			object?: 'block';
	  }
	| {
			callout: {
				rich_text: Array<RichTextItemRequest>;
				icon?:
					| { emoji: EmojiRequest; type?: 'emoji' }
					| { external: { url: TextRequest }; type?: 'external' };
				color?: ApiColor;
			};
			type?: 'callout';
			object?: 'block';
	  }
	| {
			code: {
				rich_text: Array<RichTextItemRequest>;
				language: LanguageRequest;
				caption?: Array<RichTextItemRequest>;
			};
			type?: 'code';
			object?: 'block';
	  }
	| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
	| {
			embed: { url: string; caption?: Array<RichTextItemRequest> };
			type?: 'embed';
			object?: 'block';
	  }
	| { equation: { expression: string }; type?: 'equation'; object?: 'block' }
	| {
			file: {
				external: { url: TextRequest };
				type?: 'external';
				caption?: Array<RichTextItemRequest>;
				name?: StringRequest;
			};
			type?: 'file';
			object?: 'block';
	  }
	| {
			heading_1: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				is_toggleable?: boolean;
			};
			type?: 'heading_1';
			object?: 'block';
	  }
	| {
			heading_2: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				is_toggleable?: boolean;
			};
			type?: 'heading_2';
			object?: 'block';
	  }
	| {
			heading_3: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				is_toggleable?: boolean;
			};
			type?: 'heading_3';
			object?: 'block';
	  }
	| {
			image: {
				external: { url: TextRequest };
				type?: 'external';
				caption?: Array<RichTextItemRequest>;
			};
			type?: 'image';
			object?: 'block';
	  }
	| {
			link_to_page:
				| { comment_id: IdRequest; type?: 'comment_id' }
				| { database_id: IdRequest; type?: 'database_id' }
				| { page_id: IdRequest; type?: 'page_id' };
			type?: 'link_to_page';
			object?: 'block';
	  }
	| {
			numbered_list_item: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
			};
			type?: 'numbered_list_item';
			object?: 'block';
	  }
	| {
			paragraph: { rich_text: Array<RichTextItemRequest>; color?: ApiColor };
			type?: 'paragraph';
			object?: 'block';
	  }
	| {
			pdf: {
				external: { url: TextRequest };
				type?: 'external';
				caption?: Array<RichTextItemRequest>;
			};
			type?: 'pdf';
			object?: 'block';
	  }
	| {
			quote: { rich_text: Array<RichTextItemRequest>; color?: ApiColor };
			type?: 'quote';
			object?: 'block';
	  }
	| {
			synced_block: {
				synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
			};
			type?: 'synced_block';
			object?: 'block';
	  }
	| {
			table_of_contents: { color?: ApiColor };
			type?: 'table_of_contents';
			object?: 'block';
	  }
	| {
			table_row: { cells: Array<Array<RichTextItemRequest>> };
			type?: 'table_row';
			object?: 'block';
	  }
	| {
			template: { rich_text: Array<RichTextItemRequest> };
			type?: 'template';
			object?: 'block';
	  }
	| {
			to_do: {
				rich_text: Array<RichTextItemRequest>;
				checked?: boolean;
				color?: ApiColor;
			};
			type?: 'to_do';
			object?: 'block';
	  }
	| {
			toggle: { rich_text: Array<RichTextItemRequest>; color?: ApiColor };
			type?: 'toggle';
			object?: 'block';
	  }
	| {
			video: {
				external: { url: TextRequest };
				type?: 'external';
				caption?: Array<RichTextItemRequest>;
			};
			type?: 'video';
			object?: 'block';
	  };

export type BlockObjectRequest =
	| {
			audio: {
				external: { url: TextRequest };
				type?: 'external';
				caption?: Array<RichTextItemRequest>;
			};
			type?: 'audio';
			object?: 'block';
	  }
	| {
			bookmark: { url: string; caption?: Array<RichTextItemRequest> };
			type?: 'bookmark';
			object?: 'block';
	  }
	| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
	| {
			bulleted_list_item: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				children?: Array<
					| {
							audio: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'audio';
							object?: 'block';
					  }
					| {
							bookmark: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'bookmark';
							object?: 'block';
					  }
					| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
					| {
							bulleted_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'bulleted_list_item';
							object?: 'block';
					  }
					| {
							callout: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								icon?:
									| { emoji: EmojiRequest; type?: 'emoji' }
									| { external: { url: TextRequest }; type?: 'external' };
							};
							type?: 'callout';
							object?: 'block';
					  }
					| {
							code: {
								rich_text: Array<RichTextItemRequest>;
								language: LanguageRequest;
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'code';
							object?: 'block';
					  }
					| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
					| {
							embed: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'embed';
							object?: 'block';
					  }
					| {
							equation: { expression: string };
							type?: 'equation';
							object?: 'block';
					  }
					| {
							file: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
								name?: StringRequest;
							};
							type?: 'file';
							object?: 'block';
					  }
					| {
							heading_1: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_1';
							object?: 'block';
					  }
					| {
							heading_2: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_2';
							object?: 'block';
					  }
					| {
							heading_3: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_3';
							object?: 'block';
					  }
					| {
							image: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'image';
							object?: 'block';
					  }
					| {
							link_to_page:
								| { comment_id: IdRequest; type?: 'comment_id' }
								| { database_id: IdRequest; type?: 'database_id' }
								| { page_id: IdRequest; type?: 'page_id' };
							type?: 'link_to_page';
							object?: 'block';
					  }
					| {
							numbered_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'numbered_list_item';
							object?: 'block';
					  }
					| {
							paragraph: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'paragraph';
							object?: 'block';
					  }
					| {
							pdf: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'pdf';
							object?: 'block';
					  }
					| {
							quote: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'quote';
							object?: 'block';
					  }
					| {
							synced_block: {
								synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'synced_block';
							object?: 'block';
					  }
					| {
							table_of_contents: { color?: ApiColor };
							type?: 'table_of_contents';
							object?: 'block';
					  }
					| {
							table_row: { cells: Array<Array<RichTextItemRequest>> };
							type?: 'table_row';
							object?: 'block';
					  }
					| {
							table: {
								table_width: number;
								children: Array<{
									table_row: { cells: Array<Array<RichTextItemRequest>> };
									type?: 'table_row';
									object?: 'block';
								}>;
								has_column_header?: boolean;
								has_row_header?: boolean;
							};
							type?: 'table';
							object?: 'block';
					  }
					| {
							template: {
								rich_text: Array<RichTextItemRequest>;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'template';
							object?: 'block';
					  }
					| {
							to_do: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								checked?: boolean;
							};
							type?: 'to_do';
							object?: 'block';
					  }
					| {
							toggle: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'toggle';
							object?: 'block';
					  }
					| {
							video: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'video';
							object?: 'block';
					  }
				>;
			};
			type?: 'bulleted_list_item';
			object?: 'block';
	  }
	| {
			callout: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				children?: Array<
					| {
							audio: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'audio';
							object?: 'block';
					  }
					| {
							bookmark: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'bookmark';
							object?: 'block';
					  }
					| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
					| {
							bulleted_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'bulleted_list_item';
							object?: 'block';
					  }
					| {
							callout: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								icon?:
									| { emoji: EmojiRequest; type?: 'emoji' }
									| { external: { url: TextRequest }; type?: 'external' };
							};
							type?: 'callout';
							object?: 'block';
					  }
					| {
							code: {
								rich_text: Array<RichTextItemRequest>;
								language: LanguageRequest;
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'code';
							object?: 'block';
					  }
					| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
					| {
							embed: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'embed';
							object?: 'block';
					  }
					| {
							equation: { expression: string };
							type?: 'equation';
							object?: 'block';
					  }
					| {
							file: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
								name?: StringRequest;
							};
							type?: 'file';
							object?: 'block';
					  }
					| {
							heading_1: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_1';
							object?: 'block';
					  }
					| {
							heading_2: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_2';
							object?: 'block';
					  }
					| {
							heading_3: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_3';
							object?: 'block';
					  }
					| {
							image: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'image';
							object?: 'block';
					  }
					| {
							link_to_page:
								| { comment_id: IdRequest; type?: 'comment_id' }
								| { database_id: IdRequest; type?: 'database_id' }
								| { page_id: IdRequest; type?: 'page_id' };
							type?: 'link_to_page';
							object?: 'block';
					  }
					| {
							numbered_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'numbered_list_item';
							object?: 'block';
					  }
					| {
							paragraph: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'paragraph';
							object?: 'block';
					  }
					| {
							pdf: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'pdf';
							object?: 'block';
					  }
					| {
							quote: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'quote';
							object?: 'block';
					  }
					| {
							synced_block: {
								synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'synced_block';
							object?: 'block';
					  }
					| {
							table_of_contents: { color?: ApiColor };
							type?: 'table_of_contents';
							object?: 'block';
					  }
					| {
							table_row: { cells: Array<Array<RichTextItemRequest>> };
							type?: 'table_row';
							object?: 'block';
					  }
					| {
							table: {
								table_width: number;
								children: Array<{
									table_row: { cells: Array<Array<RichTextItemRequest>> };
									type?: 'table_row';
									object?: 'block';
								}>;
								has_column_header?: boolean;
								has_row_header?: boolean;
							};
							type?: 'table';
							object?: 'block';
					  }
					| {
							template: {
								rich_text: Array<RichTextItemRequest>;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'template';
							object?: 'block';
					  }
					| {
							to_do: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								checked?: boolean;
							};
							type?: 'to_do';
							object?: 'block';
					  }
					| {
							toggle: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'toggle';
							object?: 'block';
					  }
					| {
							video: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'video';
							object?: 'block';
					  }
				>;
				icon?:
					| { emoji: EmojiRequest; type?: 'emoji' }
					| { external: { url: TextRequest }; type?: 'external' };
			};
			type?: 'callout';
			object?: 'block';
	  }
	| {
			code: {
				rich_text: Array<RichTextItemRequest>;
				language: LanguageRequest;
				caption?: Array<RichTextItemRequest>;
			};
			type?: 'code';
			object?: 'block';
	  }
	| {
			column_list: {
				children: Array<{
					column: {
						children: Array<
							| {
									audio: {
										external: { url: TextRequest };
										type?: 'external';
										caption?: Array<RichTextItemRequest>;
									};
									type?: 'audio';
									object?: 'block';
							  }
							| {
									bookmark: {
										url: string;
										caption?: Array<RichTextItemRequest>;
									};
									type?: 'bookmark';
									object?: 'block';
							  }
							| {
									breadcrumb: EmptyObject;
									type?: 'breadcrumb';
									object?: 'block';
							  }
							| {
									bulleted_list_item: {
										rich_text: Array<RichTextItemRequest>;
										color?: ApiColor;
										children?: Array<BlockObjectRequestWithoutChildren>;
									};
									type?: 'bulleted_list_item';
									object?: 'block';
							  }
							| {
									callout: {
										rich_text: Array<RichTextItemRequest>;
										color?: ApiColor;
										children?: Array<BlockObjectRequestWithoutChildren>;
										icon?:
											| { emoji: EmojiRequest; type?: 'emoji' }
											| { external: { url: TextRequest }; type?: 'external' };
									};
									type?: 'callout';
									object?: 'block';
							  }
							| {
									code: {
										rich_text: Array<RichTextItemRequest>;
										language: LanguageRequest;
										caption?: Array<RichTextItemRequest>;
									};
									type?: 'code';
									object?: 'block';
							  }
							| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
							| {
									embed: { url: string; caption?: Array<RichTextItemRequest> };
									type?: 'embed';
									object?: 'block';
							  }
							| {
									equation: { expression: string };
									type?: 'equation';
									object?: 'block';
							  }
							| {
									file: {
										external: { url: TextRequest };
										type?: 'external';
										caption?: Array<RichTextItemRequest>;
										name?: StringRequest;
									};
									type?: 'file';
									object?: 'block';
							  }
							| {
									heading_1: {
										rich_text: Array<RichTextItemRequest>;
										color?: ApiColor;
										is_toggleable?: boolean;
										children?: Array<BlockObjectRequestWithoutChildren>;
									};
									type?: 'heading_1';
									object?: 'block';
							  }
							| {
									heading_2: {
										rich_text: Array<RichTextItemRequest>;
										color?: ApiColor;
										is_toggleable?: boolean;
										children?: Array<BlockObjectRequestWithoutChildren>;
									};
									type?: 'heading_2';
									object?: 'block';
							  }
							| {
									heading_3: {
										rich_text: Array<RichTextItemRequest>;
										color?: ApiColor;
										is_toggleable?: boolean;
										children?: Array<BlockObjectRequestWithoutChildren>;
									};
									type?: 'heading_3';
									object?: 'block';
							  }
							| {
									image: {
										external: { url: TextRequest };
										type?: 'external';
										caption?: Array<RichTextItemRequest>;
									};
									type?: 'image';
									object?: 'block';
							  }
							| {
									link_to_page:
										| { comment_id: IdRequest; type?: 'comment_id' }
										| { database_id: IdRequest; type?: 'database_id' }
										| { page_id: IdRequest; type?: 'page_id' };
									type?: 'link_to_page';
									object?: 'block';
							  }
							| {
									numbered_list_item: {
										rich_text: Array<RichTextItemRequest>;
										color?: ApiColor;
										children?: Array<BlockObjectRequestWithoutChildren>;
									};
									type?: 'numbered_list_item';
									object?: 'block';
							  }
							| {
									paragraph: {
										rich_text: Array<RichTextItemRequest>;
										color?: ApiColor;
										children?: Array<BlockObjectRequestWithoutChildren>;
									};
									type?: 'paragraph';
									object?: 'block';
							  }
							| {
									pdf: {
										external: { url: TextRequest };
										type?: 'external';
										caption?: Array<RichTextItemRequest>;
									};
									type?: 'pdf';
									object?: 'block';
							  }
							| {
									quote: {
										rich_text: Array<RichTextItemRequest>;
										color?: ApiColor;
										children?: Array<BlockObjectRequestWithoutChildren>;
									};
									type?: 'quote';
									object?: 'block';
							  }
							| {
									synced_block: {
										synced_from: {
											block_id: IdRequest;
											type?: 'block_id';
										} | null;
										children?: Array<BlockObjectRequestWithoutChildren>;
									};
									type?: 'synced_block';
									object?: 'block';
							  }
							| {
									table_of_contents: { color?: ApiColor };
									type?: 'table_of_contents';
									object?: 'block';
							  }
							| {
									table_row: { cells: Array<Array<RichTextItemRequest>> };
									type?: 'table_row';
									object?: 'block';
							  }
							| {
									table: {
										table_width: number;
										children: Array<{
											table_row: { cells: Array<Array<RichTextItemRequest>> };
											type?: 'table_row';
											object?: 'block';
										}>;
										has_column_header?: boolean;
										has_row_header?: boolean;
									};
									type?: 'table';
									object?: 'block';
							  }
							| {
									template: {
										rich_text: Array<RichTextItemRequest>;
										children?: Array<BlockObjectRequestWithoutChildren>;
									};
									type?: 'template';
									object?: 'block';
							  }
							| {
									to_do: {
										rich_text: Array<RichTextItemRequest>;
										color?: ApiColor;
										children?: Array<BlockObjectRequestWithoutChildren>;
										checked?: boolean;
									};
									type?: 'to_do';
									object?: 'block';
							  }
							| {
									toggle: {
										rich_text: Array<RichTextItemRequest>;
										color?: ApiColor;
										children?: Array<BlockObjectRequestWithoutChildren>;
									};
									type?: 'toggle';
									object?: 'block';
							  }
							| {
									video: {
										external: { url: TextRequest };
										type?: 'external';
										caption?: Array<RichTextItemRequest>;
									};
									type?: 'video';
									object?: 'block';
							  }
						>;
					};
					type?: 'column';
					object?: 'block';
				}>;
			};
			type?: 'column_list';
			object?: 'block';
	  }
	| {
			column: {
				children: Array<
					| {
							audio: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'audio';
							object?: 'block';
					  }
					| {
							bookmark: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'bookmark';
							object?: 'block';
					  }
					| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
					| {
							bulleted_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'bulleted_list_item';
							object?: 'block';
					  }
					| {
							callout: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								icon?:
									| { emoji: EmojiRequest; type?: 'emoji' }
									| { external: { url: TextRequest }; type?: 'external' };
							};
							type?: 'callout';
							object?: 'block';
					  }
					| {
							code: {
								rich_text: Array<RichTextItemRequest>;
								language: LanguageRequest;
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'code';
							object?: 'block';
					  }
					| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
					| {
							embed: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'embed';
							object?: 'block';
					  }
					| {
							equation: { expression: string };
							type?: 'equation';
							object?: 'block';
					  }
					| {
							file: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
								name?: StringRequest;
							};
							type?: 'file';
							object?: 'block';
					  }
					| {
							heading_1: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_1';
							object?: 'block';
					  }
					| {
							heading_2: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_2';
							object?: 'block';
					  }
					| {
							heading_3: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_3';
							object?: 'block';
					  }
					| {
							image: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'image';
							object?: 'block';
					  }
					| {
							link_to_page:
								| { comment_id: IdRequest; type?: 'comment_id' }
								| { database_id: IdRequest; type?: 'database_id' }
								| { page_id: IdRequest; type?: 'page_id' };
							type?: 'link_to_page';
							object?: 'block';
					  }
					| {
							numbered_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'numbered_list_item';
							object?: 'block';
					  }
					| {
							paragraph: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'paragraph';
							object?: 'block';
					  }
					| {
							pdf: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'pdf';
							object?: 'block';
					  }
					| {
							quote: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'quote';
							object?: 'block';
					  }
					| {
							synced_block: {
								synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'synced_block';
							object?: 'block';
					  }
					| {
							table_of_contents: { color?: ApiColor };
							type?: 'table_of_contents';
							object?: 'block';
					  }
					| {
							table_row: { cells: Array<Array<RichTextItemRequest>> };
							type?: 'table_row';
							object?: 'block';
					  }
					| {
							table: {
								table_width: number;
								children: Array<{
									table_row: { cells: Array<Array<RichTextItemRequest>> };
									type?: 'table_row';
									object?: 'block';
								}>;
								has_column_header?: boolean;
								has_row_header?: boolean;
							};
							type?: 'table';
							object?: 'block';
					  }
					| {
							template: {
								rich_text: Array<RichTextItemRequest>;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'template';
							object?: 'block';
					  }
					| {
							to_do: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								checked?: boolean;
							};
							type?: 'to_do';
							object?: 'block';
					  }
					| {
							toggle: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'toggle';
							object?: 'block';
					  }
					| {
							video: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'video';
							object?: 'block';
					  }
				>;
			};
			type?: 'column';
			object?: 'block';
	  }
	| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
	| {
			embed: { url: string; caption?: Array<RichTextItemRequest> };
			type?: 'embed';
			object?: 'block';
	  }
	| { equation: { expression: string }; type?: 'equation'; object?: 'block' }
	| {
			file: {
				external: { url: TextRequest };
				type?: 'external';
				caption?: Array<RichTextItemRequest>;
				name?: StringRequest;
			};
			type?: 'file';
			object?: 'block';
	  }
	| {
			heading_1: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				is_toggleable?: boolean;
				children?: Array<
					| {
							audio: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'audio';
							object?: 'block';
					  }
					| {
							bookmark: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'bookmark';
							object?: 'block';
					  }
					| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
					| {
							bulleted_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'bulleted_list_item';
							object?: 'block';
					  }
					| {
							callout: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								icon?:
									| { emoji: EmojiRequest; type?: 'emoji' }
									| { external: { url: TextRequest }; type?: 'external' };
							};
							type?: 'callout';
							object?: 'block';
					  }
					| {
							code: {
								rich_text: Array<RichTextItemRequest>;
								language: LanguageRequest;
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'code';
							object?: 'block';
					  }
					| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
					| {
							embed: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'embed';
							object?: 'block';
					  }
					| {
							equation: { expression: string };
							type?: 'equation';
							object?: 'block';
					  }
					| {
							file: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
								name?: StringRequest;
							};
							type?: 'file';
							object?: 'block';
					  }
					| {
							heading_1: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_1';
							object?: 'block';
					  }
					| {
							heading_2: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_2';
							object?: 'block';
					  }
					| {
							heading_3: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_3';
							object?: 'block';
					  }
					| {
							image: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'image';
							object?: 'block';
					  }
					| {
							link_to_page:
								| { comment_id: IdRequest; type?: 'comment_id' }
								| { database_id: IdRequest; type?: 'database_id' }
								| { page_id: IdRequest; type?: 'page_id' };
							type?: 'link_to_page';
							object?: 'block';
					  }
					| {
							numbered_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'numbered_list_item';
							object?: 'block';
					  }
					| {
							paragraph: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'paragraph';
							object?: 'block';
					  }
					| {
							pdf: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'pdf';
							object?: 'block';
					  }
					| {
							quote: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'quote';
							object?: 'block';
					  }
					| {
							synced_block: {
								synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'synced_block';
							object?: 'block';
					  }
					| {
							table_of_contents: { color?: ApiColor };
							type?: 'table_of_contents';
							object?: 'block';
					  }
					| {
							table_row: { cells: Array<Array<RichTextItemRequest>> };
							type?: 'table_row';
							object?: 'block';
					  }
					| {
							table: {
								table_width: number;
								children: Array<{
									table_row: { cells: Array<Array<RichTextItemRequest>> };
									type?: 'table_row';
									object?: 'block';
								}>;
								has_column_header?: boolean;
								has_row_header?: boolean;
							};
							type?: 'table';
							object?: 'block';
					  }
					| {
							template: {
								rich_text: Array<RichTextItemRequest>;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'template';
							object?: 'block';
					  }
					| {
							to_do: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								checked?: boolean;
							};
							type?: 'to_do';
							object?: 'block';
					  }
					| {
							toggle: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'toggle';
							object?: 'block';
					  }
					| {
							video: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'video';
							object?: 'block';
					  }
				>;
			};
			type?: 'heading_1';
			object?: 'block';
	  }
	| {
			heading_2: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				is_toggleable?: boolean;
				children?: Array<
					| {
							audio: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'audio';
							object?: 'block';
					  }
					| {
							bookmark: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'bookmark';
							object?: 'block';
					  }
					| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
					| {
							bulleted_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'bulleted_list_item';
							object?: 'block';
					  }
					| {
							callout: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								icon?:
									| { emoji: EmojiRequest; type?: 'emoji' }
									| { external: { url: TextRequest }; type?: 'external' };
							};
							type?: 'callout';
							object?: 'block';
					  }
					| {
							code: {
								rich_text: Array<RichTextItemRequest>;
								language: LanguageRequest;
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'code';
							object?: 'block';
					  }
					| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
					| {
							embed: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'embed';
							object?: 'block';
					  }
					| {
							equation: { expression: string };
							type?: 'equation';
							object?: 'block';
					  }
					| {
							file: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
								name?: StringRequest;
							};
							type?: 'file';
							object?: 'block';
					  }
					| {
							heading_1: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_1';
							object?: 'block';
					  }
					| {
							heading_2: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_2';
							object?: 'block';
					  }
					| {
							heading_3: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_3';
							object?: 'block';
					  }
					| {
							image: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'image';
							object?: 'block';
					  }
					| {
							link_to_page:
								| { comment_id: IdRequest; type?: 'comment_id' }
								| { database_id: IdRequest; type?: 'database_id' }
								| { page_id: IdRequest; type?: 'page_id' };
							type?: 'link_to_page';
							object?: 'block';
					  }
					| {
							numbered_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'numbered_list_item';
							object?: 'block';
					  }
					| {
							paragraph: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'paragraph';
							object?: 'block';
					  }
					| {
							pdf: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'pdf';
							object?: 'block';
					  }
					| {
							quote: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'quote';
							object?: 'block';
					  }
					| {
							synced_block: {
								synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'synced_block';
							object?: 'block';
					  }
					| {
							table_of_contents: { color?: ApiColor };
							type?: 'table_of_contents';
							object?: 'block';
					  }
					| {
							table_row: { cells: Array<Array<RichTextItemRequest>> };
							type?: 'table_row';
							object?: 'block';
					  }
					| {
							table: {
								table_width: number;
								children: Array<{
									table_row: { cells: Array<Array<RichTextItemRequest>> };
									type?: 'table_row';
									object?: 'block';
								}>;
								has_column_header?: boolean;
								has_row_header?: boolean;
							};
							type?: 'table';
							object?: 'block';
					  }
					| {
							template: {
								rich_text: Array<RichTextItemRequest>;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'template';
							object?: 'block';
					  }
					| {
							to_do: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								checked?: boolean;
							};
							type?: 'to_do';
							object?: 'block';
					  }
					| {
							toggle: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'toggle';
							object?: 'block';
					  }
					| {
							video: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'video';
							object?: 'block';
					  }
				>;
			};
			type?: 'heading_2';
			object?: 'block';
	  }
	| {
			heading_3: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				is_toggleable?: boolean;
				children?: Array<
					| {
							audio: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'audio';
							object?: 'block';
					  }
					| {
							bookmark: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'bookmark';
							object?: 'block';
					  }
					| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
					| {
							bulleted_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'bulleted_list_item';
							object?: 'block';
					  }
					| {
							callout: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								icon?:
									| { emoji: EmojiRequest; type?: 'emoji' }
									| { external: { url: TextRequest }; type?: 'external' };
							};
							type?: 'callout';
							object?: 'block';
					  }
					| {
							code: {
								rich_text: Array<RichTextItemRequest>;
								language: LanguageRequest;
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'code';
							object?: 'block';
					  }
					| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
					| {
							embed: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'embed';
							object?: 'block';
					  }
					| {
							equation: { expression: string };
							type?: 'equation';
							object?: 'block';
					  }
					| {
							file: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
								name?: StringRequest;
							};
							type?: 'file';
							object?: 'block';
					  }
					| {
							heading_1: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_1';
							object?: 'block';
					  }
					| {
							heading_2: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_2';
							object?: 'block';
					  }
					| {
							heading_3: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_3';
							object?: 'block';
					  }
					| {
							image: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'image';
							object?: 'block';
					  }
					| {
							link_to_page:
								| { comment_id: IdRequest; type?: 'comment_id' }
								| { database_id: IdRequest; type?: 'database_id' }
								| { page_id: IdRequest; type?: 'page_id' };
							type?: 'link_to_page';
							object?: 'block';
					  }
					| {
							numbered_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'numbered_list_item';
							object?: 'block';
					  }
					| {
							paragraph: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'paragraph';
							object?: 'block';
					  }
					| {
							pdf: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'pdf';
							object?: 'block';
					  }
					| {
							quote: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'quote';
							object?: 'block';
					  }
					| {
							synced_block: {
								synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'synced_block';
							object?: 'block';
					  }
					| {
							table_of_contents: { color?: ApiColor };
							type?: 'table_of_contents';
							object?: 'block';
					  }
					| {
							table_row: { cells: Array<Array<RichTextItemRequest>> };
							type?: 'table_row';
							object?: 'block';
					  }
					| {
							table: {
								table_width: number;
								children: Array<{
									table_row: { cells: Array<Array<RichTextItemRequest>> };
									type?: 'table_row';
									object?: 'block';
								}>;
								has_column_header?: boolean;
								has_row_header?: boolean;
							};
							type?: 'table';
							object?: 'block';
					  }
					| {
							template: {
								rich_text: Array<RichTextItemRequest>;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'template';
							object?: 'block';
					  }
					| {
							to_do: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								checked?: boolean;
							};
							type?: 'to_do';
							object?: 'block';
					  }
					| {
							toggle: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'toggle';
							object?: 'block';
					  }
					| {
							video: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'video';
							object?: 'block';
					  }
				>;
			};
			type?: 'heading_3';
			object?: 'block';
	  }
	| {
			image: {
				external: { url: TextRequest };
				type?: 'external';
				caption?: Array<RichTextItemRequest>;
			};
			type?: 'image';
			object?: 'block';
	  }
	| {
			link_to_page:
				| { comment_id: IdRequest; type?: 'comment_id' }
				| { database_id: IdRequest; type?: 'database_id' }
				| { page_id: IdRequest; type?: 'page_id' };
			type?: 'link_to_page';
			object?: 'block';
	  }
	| {
			numbered_list_item: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				children?: Array<
					| {
							audio: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'audio';
							object?: 'block';
					  }
					| {
							bookmark: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'bookmark';
							object?: 'block';
					  }
					| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
					| {
							bulleted_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'bulleted_list_item';
							object?: 'block';
					  }
					| {
							callout: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								icon?:
									| { emoji: EmojiRequest; type?: 'emoji' }
									| { external: { url: TextRequest }; type?: 'external' };
							};
							type?: 'callout';
							object?: 'block';
					  }
					| {
							code: {
								rich_text: Array<RichTextItemRequest>;
								language: LanguageRequest;
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'code';
							object?: 'block';
					  }
					| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
					| {
							embed: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'embed';
							object?: 'block';
					  }
					| {
							equation: { expression: string };
							type?: 'equation';
							object?: 'block';
					  }
					| {
							file: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
								name?: StringRequest;
							};
							type?: 'file';
							object?: 'block';
					  }
					| {
							heading_1: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_1';
							object?: 'block';
					  }
					| {
							heading_2: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_2';
							object?: 'block';
					  }
					| {
							heading_3: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_3';
							object?: 'block';
					  }
					| {
							image: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'image';
							object?: 'block';
					  }
					| {
							link_to_page:
								| { comment_id: IdRequest; type?: 'comment_id' }
								| { database_id: IdRequest; type?: 'database_id' }
								| { page_id: IdRequest; type?: 'page_id' };
							type?: 'link_to_page';
							object?: 'block';
					  }
					| {
							numbered_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'numbered_list_item';
							object?: 'block';
					  }
					| {
							paragraph: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'paragraph';
							object?: 'block';
					  }
					| {
							pdf: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'pdf';
							object?: 'block';
					  }
					| {
							quote: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'quote';
							object?: 'block';
					  }
					| {
							synced_block: {
								synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'synced_block';
							object?: 'block';
					  }
					| {
							table_of_contents: { color?: ApiColor };
							type?: 'table_of_contents';
							object?: 'block';
					  }
					| {
							table_row: { cells: Array<Array<RichTextItemRequest>> };
							type?: 'table_row';
							object?: 'block';
					  }
					| {
							table: {
								table_width: number;
								children: Array<{
									table_row: { cells: Array<Array<RichTextItemRequest>> };
									type?: 'table_row';
									object?: 'block';
								}>;
								has_column_header?: boolean;
								has_row_header?: boolean;
							};
							type?: 'table';
							object?: 'block';
					  }
					| {
							template: {
								rich_text: Array<RichTextItemRequest>;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'template';
							object?: 'block';
					  }
					| {
							to_do: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								checked?: boolean;
							};
							type?: 'to_do';
							object?: 'block';
					  }
					| {
							toggle: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'toggle';
							object?: 'block';
					  }
					| {
							video: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'video';
							object?: 'block';
					  }
				>;
			};
			type?: 'numbered_list_item';
			object?: 'block';
	  }
	| {
			paragraph: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				children?: Array<
					| {
							audio: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'audio';
							object?: 'block';
					  }
					| {
							bookmark: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'bookmark';
							object?: 'block';
					  }
					| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
					| {
							bulleted_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'bulleted_list_item';
							object?: 'block';
					  }
					| {
							callout: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								icon?:
									| { emoji: EmojiRequest; type?: 'emoji' }
									| { external: { url: TextRequest }; type?: 'external' };
							};
							type?: 'callout';
							object?: 'block';
					  }
					| {
							code: {
								rich_text: Array<RichTextItemRequest>;
								language: LanguageRequest;
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'code';
							object?: 'block';
					  }
					| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
					| {
							embed: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'embed';
							object?: 'block';
					  }
					| {
							equation: { expression: string };
							type?: 'equation';
							object?: 'block';
					  }
					| {
							file: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
								name?: StringRequest;
							};
							type?: 'file';
							object?: 'block';
					  }
					| {
							heading_1: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_1';
							object?: 'block';
					  }
					| {
							heading_2: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_2';
							object?: 'block';
					  }
					| {
							heading_3: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_3';
							object?: 'block';
					  }
					| {
							image: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'image';
							object?: 'block';
					  }
					| {
							link_to_page:
								| { comment_id: IdRequest; type?: 'comment_id' }
								| { database_id: IdRequest; type?: 'database_id' }
								| { page_id: IdRequest; type?: 'page_id' };
							type?: 'link_to_page';
							object?: 'block';
					  }
					| {
							numbered_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'numbered_list_item';
							object?: 'block';
					  }
					| {
							paragraph: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'paragraph';
							object?: 'block';
					  }
					| {
							pdf: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'pdf';
							object?: 'block';
					  }
					| {
							quote: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'quote';
							object?: 'block';
					  }
					| {
							synced_block: {
								synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'synced_block';
							object?: 'block';
					  }
					| {
							table_of_contents: { color?: ApiColor };
							type?: 'table_of_contents';
							object?: 'block';
					  }
					| {
							table_row: { cells: Array<Array<RichTextItemRequest>> };
							type?: 'table_row';
							object?: 'block';
					  }
					| {
							table: {
								table_width: number;
								children: Array<{
									table_row: { cells: Array<Array<RichTextItemRequest>> };
									type?: 'table_row';
									object?: 'block';
								}>;
								has_column_header?: boolean;
								has_row_header?: boolean;
							};
							type?: 'table';
							object?: 'block';
					  }
					| {
							template: {
								rich_text: Array<RichTextItemRequest>;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'template';
							object?: 'block';
					  }
					| {
							to_do: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								checked?: boolean;
							};
							type?: 'to_do';
							object?: 'block';
					  }
					| {
							toggle: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'toggle';
							object?: 'block';
					  }
					| {
							video: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'video';
							object?: 'block';
					  }
				>;
			};
			type?: 'paragraph';
			object?: 'block';
	  }
	| {
			pdf: {
				external: { url: TextRequest };
				type?: 'external';
				caption?: Array<RichTextItemRequest>;
			};
			type?: 'pdf';
			object?: 'block';
	  }
	| {
			quote: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				children?: Array<
					| {
							audio: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'audio';
							object?: 'block';
					  }
					| {
							bookmark: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'bookmark';
							object?: 'block';
					  }
					| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
					| {
							bulleted_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'bulleted_list_item';
							object?: 'block';
					  }
					| {
							callout: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								icon?:
									| { emoji: EmojiRequest; type?: 'emoji' }
									| { external: { url: TextRequest }; type?: 'external' };
							};
							type?: 'callout';
							object?: 'block';
					  }
					| {
							code: {
								rich_text: Array<RichTextItemRequest>;
								language: LanguageRequest;
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'code';
							object?: 'block';
					  }
					| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
					| {
							embed: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'embed';
							object?: 'block';
					  }
					| {
							equation: { expression: string };
							type?: 'equation';
							object?: 'block';
					  }
					| {
							file: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
								name?: StringRequest;
							};
							type?: 'file';
							object?: 'block';
					  }
					| {
							heading_1: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_1';
							object?: 'block';
					  }
					| {
							heading_2: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_2';
							object?: 'block';
					  }
					| {
							heading_3: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_3';
							object?: 'block';
					  }
					| {
							image: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'image';
							object?: 'block';
					  }
					| {
							link_to_page:
								| { comment_id: IdRequest; type?: 'comment_id' }
								| { database_id: IdRequest; type?: 'database_id' }
								| { page_id: IdRequest; type?: 'page_id' };
							type?: 'link_to_page';
							object?: 'block';
					  }
					| {
							numbered_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'numbered_list_item';
							object?: 'block';
					  }
					| {
							paragraph: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'paragraph';
							object?: 'block';
					  }
					| {
							pdf: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'pdf';
							object?: 'block';
					  }
					| {
							quote: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'quote';
							object?: 'block';
					  }
					| {
							synced_block: {
								synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'synced_block';
							object?: 'block';
					  }
					| {
							table_of_contents: { color?: ApiColor };
							type?: 'table_of_contents';
							object?: 'block';
					  }
					| {
							table_row: { cells: Array<Array<RichTextItemRequest>> };
							type?: 'table_row';
							object?: 'block';
					  }
					| {
							table: {
								table_width: number;
								children: Array<{
									table_row: { cells: Array<Array<RichTextItemRequest>> };
									type?: 'table_row';
									object?: 'block';
								}>;
								has_column_header?: boolean;
								has_row_header?: boolean;
							};
							type?: 'table';
							object?: 'block';
					  }
					| {
							template: {
								rich_text: Array<RichTextItemRequest>;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'template';
							object?: 'block';
					  }
					| {
							to_do: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								checked?: boolean;
							};
							type?: 'to_do';
							object?: 'block';
					  }
					| {
							toggle: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'toggle';
							object?: 'block';
					  }
					| {
							video: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'video';
							object?: 'block';
					  }
				>;
			};
			type?: 'quote';
			object?: 'block';
	  }
	| {
			synced_block: {
				synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
				children?: Array<
					| {
							audio: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'audio';
							object?: 'block';
					  }
					| {
							bookmark: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'bookmark';
							object?: 'block';
					  }
					| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
					| {
							bulleted_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'bulleted_list_item';
							object?: 'block';
					  }
					| {
							callout: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								icon?:
									| { emoji: EmojiRequest; type?: 'emoji' }
									| { external: { url: TextRequest }; type?: 'external' };
							};
							type?: 'callout';
							object?: 'block';
					  }
					| {
							code: {
								rich_text: Array<RichTextItemRequest>;
								language: LanguageRequest;
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'code';
							object?: 'block';
					  }
					| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
					| {
							embed: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'embed';
							object?: 'block';
					  }
					| {
							equation: { expression: string };
							type?: 'equation';
							object?: 'block';
					  }
					| {
							file: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
								name?: StringRequest;
							};
							type?: 'file';
							object?: 'block';
					  }
					| {
							heading_1: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_1';
							object?: 'block';
					  }
					| {
							heading_2: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_2';
							object?: 'block';
					  }
					| {
							heading_3: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_3';
							object?: 'block';
					  }
					| {
							image: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'image';
							object?: 'block';
					  }
					| {
							link_to_page:
								| { comment_id: IdRequest; type?: 'comment_id' }
								| { database_id: IdRequest; type?: 'database_id' }
								| { page_id: IdRequest; type?: 'page_id' };
							type?: 'link_to_page';
							object?: 'block';
					  }
					| {
							numbered_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'numbered_list_item';
							object?: 'block';
					  }
					| {
							paragraph: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'paragraph';
							object?: 'block';
					  }
					| {
							pdf: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'pdf';
							object?: 'block';
					  }
					| {
							quote: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'quote';
							object?: 'block';
					  }
					| {
							synced_block: {
								synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'synced_block';
							object?: 'block';
					  }
					| {
							table_of_contents: { color?: ApiColor };
							type?: 'table_of_contents';
							object?: 'block';
					  }
					| {
							table_row: { cells: Array<Array<RichTextItemRequest>> };
							type?: 'table_row';
							object?: 'block';
					  }
					| {
							table: {
								table_width: number;
								children: Array<{
									table_row: { cells: Array<Array<RichTextItemRequest>> };
									type?: 'table_row';
									object?: 'block';
								}>;
								has_column_header?: boolean;
								has_row_header?: boolean;
							};
							type?: 'table';
							object?: 'block';
					  }
					| {
							template: {
								rich_text: Array<RichTextItemRequest>;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'template';
							object?: 'block';
					  }
					| {
							to_do: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								checked?: boolean;
							};
							type?: 'to_do';
							object?: 'block';
					  }
					| {
							toggle: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'toggle';
							object?: 'block';
					  }
					| {
							video: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'video';
							object?: 'block';
					  }
				>;
			};
			type?: 'synced_block';
			object?: 'block';
	  }
	| {
			table_of_contents: { color?: ApiColor };
			type?: 'table_of_contents';
			object?: 'block';
	  }
	| {
			table_row: { cells: Array<Array<RichTextItemRequest>> };
			type?: 'table_row';
			object?: 'block';
	  }
	| {
			table: {
				table_width: number;
				children: Array<{
					table_row: { cells: Array<Array<RichTextItemRequest>> };
					type?: 'table_row';
					object?: 'block';
				}>;
				has_column_header?: boolean;
				has_row_header?: boolean;
			};
			type?: 'table';
			object?: 'block';
	  }
	| {
			template: {
				rich_text: Array<RichTextItemRequest>;
				children?: Array<
					| {
							audio: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'audio';
							object?: 'block';
					  }
					| {
							bookmark: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'bookmark';
							object?: 'block';
					  }
					| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
					| {
							bulleted_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'bulleted_list_item';
							object?: 'block';
					  }
					| {
							callout: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								icon?:
									| { emoji: EmojiRequest; type?: 'emoji' }
									| { external: { url: TextRequest }; type?: 'external' };
							};
							type?: 'callout';
							object?: 'block';
					  }
					| {
							code: {
								rich_text: Array<RichTextItemRequest>;
								language: LanguageRequest;
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'code';
							object?: 'block';
					  }
					| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
					| {
							embed: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'embed';
							object?: 'block';
					  }
					| {
							equation: { expression: string };
							type?: 'equation';
							object?: 'block';
					  }
					| {
							file: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
								name?: StringRequest;
							};
							type?: 'file';
							object?: 'block';
					  }
					| {
							heading_1: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_1';
							object?: 'block';
					  }
					| {
							heading_2: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_2';
							object?: 'block';
					  }
					| {
							heading_3: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_3';
							object?: 'block';
					  }
					| {
							image: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'image';
							object?: 'block';
					  }
					| {
							link_to_page:
								| { comment_id: IdRequest; type?: 'comment_id' }
								| { database_id: IdRequest; type?: 'database_id' }
								| { page_id: IdRequest; type?: 'page_id' };
							type?: 'link_to_page';
							object?: 'block';
					  }
					| {
							numbered_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'numbered_list_item';
							object?: 'block';
					  }
					| {
							paragraph: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'paragraph';
							object?: 'block';
					  }
					| {
							pdf: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'pdf';
							object?: 'block';
					  }
					| {
							quote: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'quote';
							object?: 'block';
					  }
					| {
							synced_block: {
								synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'synced_block';
							object?: 'block';
					  }
					| {
							table_of_contents: { color?: ApiColor };
							type?: 'table_of_contents';
							object?: 'block';
					  }
					| {
							table_row: { cells: Array<Array<RichTextItemRequest>> };
							type?: 'table_row';
							object?: 'block';
					  }
					| {
							table: {
								table_width: number;
								children: Array<{
									table_row: { cells: Array<Array<RichTextItemRequest>> };
									type?: 'table_row';
									object?: 'block';
								}>;
								has_column_header?: boolean;
								has_row_header?: boolean;
							};
							type?: 'table';
							object?: 'block';
					  }
					| {
							template: {
								rich_text: Array<RichTextItemRequest>;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'template';
							object?: 'block';
					  }
					| {
							to_do: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								checked?: boolean;
							};
							type?: 'to_do';
							object?: 'block';
					  }
					| {
							toggle: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'toggle';
							object?: 'block';
					  }
					| {
							video: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'video';
							object?: 'block';
					  }
				>;
			};
			type?: 'template';
			object?: 'block';
	  }
	| {
			to_do: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				children?: Array<
					| {
							audio: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'audio';
							object?: 'block';
					  }
					| {
							bookmark: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'bookmark';
							object?: 'block';
					  }
					| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
					| {
							bulleted_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'bulleted_list_item';
							object?: 'block';
					  }
					| {
							callout: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								icon?:
									| { emoji: EmojiRequest; type?: 'emoji' }
									| { external: { url: TextRequest }; type?: 'external' };
							};
							type?: 'callout';
							object?: 'block';
					  }
					| {
							code: {
								rich_text: Array<RichTextItemRequest>;
								language: LanguageRequest;
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'code';
							object?: 'block';
					  }
					| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
					| {
							embed: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'embed';
							object?: 'block';
					  }
					| {
							equation: { expression: string };
							type?: 'equation';
							object?: 'block';
					  }
					| {
							file: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
								name?: StringRequest;
							};
							type?: 'file';
							object?: 'block';
					  }
					| {
							heading_1: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_1';
							object?: 'block';
					  }
					| {
							heading_2: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_2';
							object?: 'block';
					  }
					| {
							heading_3: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_3';
							object?: 'block';
					  }
					| {
							image: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'image';
							object?: 'block';
					  }
					| {
							link_to_page:
								| { comment_id: IdRequest; type?: 'comment_id' }
								| { database_id: IdRequest; type?: 'database_id' }
								| { page_id: IdRequest; type?: 'page_id' };
							type?: 'link_to_page';
							object?: 'block';
					  }
					| {
							numbered_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'numbered_list_item';
							object?: 'block';
					  }
					| {
							paragraph: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'paragraph';
							object?: 'block';
					  }
					| {
							pdf: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'pdf';
							object?: 'block';
					  }
					| {
							quote: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'quote';
							object?: 'block';
					  }
					| {
							synced_block: {
								synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'synced_block';
							object?: 'block';
					  }
					| {
							table_of_contents: { color?: ApiColor };
							type?: 'table_of_contents';
							object?: 'block';
					  }
					| {
							table_row: { cells: Array<Array<RichTextItemRequest>> };
							type?: 'table_row';
							object?: 'block';
					  }
					| {
							table: {
								table_width: number;
								children: Array<{
									table_row: { cells: Array<Array<RichTextItemRequest>> };
									type?: 'table_row';
									object?: 'block';
								}>;
								has_column_header?: boolean;
								has_row_header?: boolean;
							};
							type?: 'table';
							object?: 'block';
					  }
					| {
							template: {
								rich_text: Array<RichTextItemRequest>;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'template';
							object?: 'block';
					  }
					| {
							to_do: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								checked?: boolean;
							};
							type?: 'to_do';
							object?: 'block';
					  }
					| {
							toggle: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'toggle';
							object?: 'block';
					  }
					| {
							video: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'video';
							object?: 'block';
					  }
				>;
				checked?: boolean;
			};
			type?: 'to_do';
			object?: 'block';
	  }
	| {
			toggle: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				children?: Array<
					| {
							audio: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'audio';
							object?: 'block';
					  }
					| {
							bookmark: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'bookmark';
							object?: 'block';
					  }
					| { breadcrumb: EmptyObject; type?: 'breadcrumb'; object?: 'block' }
					| {
							bulleted_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'bulleted_list_item';
							object?: 'block';
					  }
					| {
							callout: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								icon?:
									| { emoji: EmojiRequest; type?: 'emoji' }
									| { external: { url: TextRequest }; type?: 'external' };
							};
							type?: 'callout';
							object?: 'block';
					  }
					| {
							code: {
								rich_text: Array<RichTextItemRequest>;
								language: LanguageRequest;
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'code';
							object?: 'block';
					  }
					| { divider: EmptyObject; type?: 'divider'; object?: 'block' }
					| {
							embed: { url: string; caption?: Array<RichTextItemRequest> };
							type?: 'embed';
							object?: 'block';
					  }
					| {
							equation: { expression: string };
							type?: 'equation';
							object?: 'block';
					  }
					| {
							file: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
								name?: StringRequest;
							};
							type?: 'file';
							object?: 'block';
					  }
					| {
							heading_1: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_1';
							object?: 'block';
					  }
					| {
							heading_2: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_2';
							object?: 'block';
					  }
					| {
							heading_3: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								is_toggleable?: boolean;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'heading_3';
							object?: 'block';
					  }
					| {
							image: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'image';
							object?: 'block';
					  }
					| {
							link_to_page:
								| { comment_id: IdRequest; type?: 'comment_id' }
								| { database_id: IdRequest; type?: 'database_id' }
								| { page_id: IdRequest; type?: 'page_id' };
							type?: 'link_to_page';
							object?: 'block';
					  }
					| {
							numbered_list_item: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'numbered_list_item';
							object?: 'block';
					  }
					| {
							paragraph: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'paragraph';
							object?: 'block';
					  }
					| {
							pdf: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'pdf';
							object?: 'block';
					  }
					| {
							quote: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'quote';
							object?: 'block';
					  }
					| {
							synced_block: {
								synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'synced_block';
							object?: 'block';
					  }
					| {
							table_of_contents: { color?: ApiColor };
							type?: 'table_of_contents';
							object?: 'block';
					  }
					| {
							table_row: { cells: Array<Array<RichTextItemRequest>> };
							type?: 'table_row';
							object?: 'block';
					  }
					| {
							table: {
								table_width: number;
								children: Array<{
									table_row: { cells: Array<Array<RichTextItemRequest>> };
									type?: 'table_row';
									object?: 'block';
								}>;
								has_column_header?: boolean;
								has_row_header?: boolean;
							};
							type?: 'table';
							object?: 'block';
					  }
					| {
							template: {
								rich_text: Array<RichTextItemRequest>;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'template';
							object?: 'block';
					  }
					| {
							to_do: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
								checked?: boolean;
							};
							type?: 'to_do';
							object?: 'block';
					  }
					| {
							toggle: {
								rich_text: Array<RichTextItemRequest>;
								color?: ApiColor;
								children?: Array<BlockObjectRequestWithoutChildren>;
							};
							type?: 'toggle';
							object?: 'block';
					  }
					| {
							video: {
								external: { url: TextRequest };
								type?: 'external';
								caption?: Array<RichTextItemRequest>;
							};
							type?: 'video';
							object?: 'block';
					  }
				>;
			};
			type?: 'toggle';
			object?: 'block';
	  }
	| {
			video: {
				external: { url: TextRequest };
				type?: 'external';
				caption?: Array<RichTextItemRequest>;
			};
			type?: 'video';
			object?: 'block';
	  };

export type ExistencePropertyFilter = { is_empty: true } | { is_not_empty: true };

export type TextPropertyFilter =
	| ExistencePropertyFilter
	| { contains: string }
	| { does_not_contain: string }
	| { does_not_equal: string }
	| { ends_with: string }
	| { equals: string }
	| { starts_with: string };

export type NumberPropertyFilter =
	| ExistencePropertyFilter
	| { does_not_equal: number }
	| { equals: number }
	| { greater_than_or_equal_to: number }
	| { greater_than: number }
	| { less_than_or_equal_to: number }
	| { less_than: number };

export type CheckboxPropertyFilter = { does_not_equal: boolean } | { equals: boolean };

export type SelectPropertyFilter =
	| ExistencePropertyFilter
	| { does_not_equal: string }
	| { equals: string };

export type MultiSelectPropertyFilter =
	| ExistencePropertyFilter
	| { contains: string }
	| { does_not_contain: string };

export type StatusPropertyFilter =
	| ExistencePropertyFilter
	| { does_not_equal: string }
	| { equals: string };

export type DatePropertyFilter =
	| ExistencePropertyFilter
	| { after: string }
	| { before: string }
	| { equals: string }
	| { next_month: EmptyObject }
	| { next_week: EmptyObject }
	| { next_year: EmptyObject }
	| { on_or_after: string }
	| { on_or_before: string }
	| { past_month: EmptyObject }
	| { past_week: EmptyObject }
	| { past_year: EmptyObject }
	| { this_week: EmptyObject };

export type PeoplePropertyFilter =
	| ExistencePropertyFilter
	| { contains: IdRequest }
	| { does_not_contain: IdRequest };

export type RelationPropertyFilter =
	| ExistencePropertyFilter
	| { contains: IdRequest }
	| { does_not_contain: IdRequest };

export type FormulaPropertyFilter =
	| { checkbox: CheckboxPropertyFilter }
	| { date: DatePropertyFilter }
	| { number: NumberPropertyFilter }
	| { string: TextPropertyFilter };

export type RollupSubfilterPropertyFilter =
	| { checkbox: CheckboxPropertyFilter }
	| { date: DatePropertyFilter }
	| { files: ExistencePropertyFilter }
	| { multi_select: MultiSelectPropertyFilter }
	| { number: NumberPropertyFilter }
	| { people: PeoplePropertyFilter }
	| { relation: RelationPropertyFilter }
	| { rich_text: TextPropertyFilter }
	| { select: SelectPropertyFilter }
	| { status: StatusPropertyFilter };

export type RollupPropertyFilter =
	| { any: RollupSubfilterPropertyFilter }
	| { date: DatePropertyFilter }
	| { every: RollupSubfilterPropertyFilter }
	| { none: RollupSubfilterPropertyFilter }
	| { number: NumberPropertyFilter };

export type PropertyFilter =
	| { checkbox: CheckboxPropertyFilter; property: string; type?: 'checkbox' }
	| { created_by: PeoplePropertyFilter; property: string; type?: 'created_by' }
	| {
			created_time: DatePropertyFilter;
			property: string;
			type?: 'created_time';
	  }
	| { date: DatePropertyFilter; property: string; type?: 'date' }
	| { email: TextPropertyFilter; property: string; type?: 'email' }
	| { files: ExistencePropertyFilter; property: string; type?: 'files' }
	| { formula: FormulaPropertyFilter; property: string; type?: 'formula' }
	| {
			last_edited_by: PeoplePropertyFilter;
			property: string;
			type?: 'last_edited_by';
	  }
	| {
			last_edited_time: DatePropertyFilter;
			property: string;
			type?: 'last_edited_time';
	  }
	| {
			multi_select: MultiSelectPropertyFilter;
			property: string;
			type?: 'multi_select';
	  }
	| { number: NumberPropertyFilter; property: string; type?: 'number' }
	| { people: PeoplePropertyFilter; property: string; type?: 'people' }
	| {
			phone_number: TextPropertyFilter;
			property: string;
			type?: 'phone_number';
	  }
	| { relation: RelationPropertyFilter; property: string; type?: 'relation' }
	| { rich_text: TextPropertyFilter; property: string; type?: 'rich_text' }
	| { rollup: RollupPropertyFilter; property: string; type?: 'rollup' }
	| { select: SelectPropertyFilter; property: string; type?: 'select' }
	| { status: StatusPropertyFilter; property: string; type?: 'status' }
	| { title: TextPropertyFilter; property: string; type?: 'title' }
	| { unique_id: NumberPropertyFilter; property: string; type?: 'unique_id' }
	| { url: TextPropertyFilter; property: string; type?: 'url' };

export interface TimestampCreatedTimeFilter {
	created_time: DatePropertyFilter;
	timestamp: 'created_time';
	type?: 'created_time';
}

export interface TimestampLastEditedTimeFilter {
	last_edited_time: DatePropertyFilter;
	timestamp: 'last_edited_time';
	type?: 'last_edited_time';
}
export type GetSelfParameters = Record<string, never>;

export type GetSelfResponse = UserObjectResponse;

export const getSelf = {
	method: 'get',
	pathParams: [],
	queryParams: [],
	bodyParams: [],
	path: (): string => `users/me`,
} as const;

export interface GetUserPathParameters {
	user_id: IdRequest;
}

export type GetUserParameters = GetUserPathParameters;

export type GetUserResponse = UserObjectResponse;

export const getUser = {
	method: 'get',
	pathParams: ['user_id'],
	queryParams: [],
	bodyParams: [],
	path: (p: GetUserPathParameters): string => `users/${p.user_id}`,
} as const;

export interface ListUsersQueryParameters {
	page_size?: number;
	start_cursor?: string;
}

export type ListUsersParameters = ListUsersQueryParameters;

export interface ListUsersResponse {
	has_more: boolean;
	next_cursor: string | null;
	object: 'list';
	results: Array<UserObjectResponse>;
	type: 'user';
	user: EmptyObject;
}

export const listUsers = {
	method: 'get',
	pathParams: [],
	queryParams: ['start_cursor', 'page_size'],
	bodyParams: [],
	path: (): string => `users`,
} as const;

export interface CreatePageBodyParameters {
	children?: Array<BlockObjectRequest>;
	content?: Array<BlockObjectRequest>;
	cover?: { external: { url: TextRequest }; type?: 'external' } | null;
	icon?:
		| { emoji: EmojiRequest; type?: 'emoji' }
		| { external: { url: TextRequest }; type?: 'external' }
		| null
		| null;
	parent:
		| { database_id: IdRequest; type?: 'database_id' }
		| { page_id: IdRequest; type?: 'page_id' };
	properties:
		| Record<
				string,
				| { checkbox: boolean; type?: 'checkbox' }
				| { date: DateRequest | null; type?: 'date' }
				| { email: StringRequest | null; type?: 'email' }
				| {
						files: Array<
							| {
									external: { url: TextRequest };
									name: StringRequest;
									type?: 'external';
							  }
							| {
									file: { url: string; expiry_time?: string };
									name: StringRequest;
									type?: 'file';
							  }
						>;
						type?: 'files';
				  }
				| {
						multi_select: Array<
							| {
									id: StringRequest;
									name?: StringRequest;
									color?: SelectColor;
									description?: StringRequest | null;
							  }
							| {
									name: StringRequest;
									id?: StringRequest;
									color?: SelectColor;
									description?: StringRequest | null;
							  }
						>;
						type?: 'multi_select';
				  }
				| { number: number | null; type?: 'number' }
				| {
						people: Array<
							| {
									bot:
										| EmptyObject
										| {
												owner:
													| {
															type: 'user';
															user:
																| PartialUserObjectResponse
																| {
																		type: 'person';
																		person: { email: string };
																		name: string | null;
																		avatar_url: string | null;
																		id: IdRequest;
																		object: 'user';
																  };
													  }
													| { type: 'workspace'; workspace: true };
												workspace_name: string | null;
										  };
									id: IdRequest;
									type?: 'bot';
									name?: string | null;
									avatar_url?: string | null;
									object?: 'user';
							  }
							| { id: IdRequest }
							| {
									person: { email?: string };
									id: IdRequest;
									type?: 'person';
									name?: string | null;
									avatar_url?: string | null;
									object?: 'user';
							  }
						>;
						type?: 'people';
				  }
				| { phone_number: StringRequest | null; type?: 'phone_number' }
				| { relation: Array<{ id: IdRequest }>; type?: 'relation' }
				| { rich_text: Array<RichTextItemRequest>; type?: 'rich_text' }
				| {
						select:
							| {
									id: StringRequest;
									name?: StringRequest;
									color?: SelectColor;
									description?: StringRequest | null;
							  }
							| {
									name: StringRequest;
									id?: StringRequest;
									color?: SelectColor;
									description?: StringRequest | null;
							  }
							| null
							| null;
						type?: 'select';
				  }
				| {
						status:
							| {
									id: StringRequest;
									name?: StringRequest;
									color?: SelectColor;
									description?: StringRequest | null;
							  }
							| {
									name: StringRequest;
									id?: StringRequest;
									color?: SelectColor;
									description?: StringRequest | null;
							  }
							| null
							| null;
						type?: 'status';
				  }
				| { title: Array<RichTextItemRequest>; type?: 'title' }
				| { url: TextRequest | null; type?: 'url' }
		  >
		| Record<
				string,
				| boolean
				| number
				| Array<{ id: IdRequest }>
				| Array<
						| {
								bot:
									| EmptyObject
									| {
											owner:
												| {
														type: 'user';
														user:
															| PartialUserObjectResponse
															| {
																	type: 'person';
																	person: { email: string };
																	name: string | null;
																	avatar_url: string | null;
																	id: IdRequest;
																	object: 'user';
															  };
												  }
												| { type: 'workspace'; workspace: true };
											workspace_name: string | null;
									  };
								id: IdRequest;
								type?: 'bot';
								name?: string | null;
								avatar_url?: string | null;
								object?: 'user';
						  }
						| { id: IdRequest }
						| {
								person: { email?: string };
								id: IdRequest;
								type?: 'person';
								name?: string | null;
								avatar_url?: string | null;
								object?: 'user';
						  }
				  >
				| Array<
						| {
								external: { url: TextRequest };
								name: StringRequest;
								type?: 'external';
						  }
						| {
								file: { url: string; expiry_time?: string };
								name: StringRequest;
								type?: 'file';
						  }
				  >
				| Array<
						| {
								id: StringRequest;
								name?: StringRequest;
								color?: SelectColor;
								description?: StringRequest | null;
						  }
						| {
								name: StringRequest;
								id?: StringRequest;
								color?: SelectColor;
								description?: StringRequest | null;
						  }
				  >
				| Array<RichTextItemRequest>
				| Array<RichTextItemRequest>
				| DateRequest
				| StringRequest
				| StringRequest
				| TextRequest
				| {
						id: StringRequest;
						name?: StringRequest;
						color?: SelectColor;
						description?: StringRequest | null;
				  }
				| {
						id: StringRequest;
						name?: StringRequest;
						color?: SelectColor;
						description?: StringRequest | null;
				  }
				| {
						name: StringRequest;
						id?: StringRequest;
						color?: SelectColor;
						description?: StringRequest | null;
				  }
				| {
						name: StringRequest;
						id?: StringRequest;
						color?: SelectColor;
						description?: StringRequest | null;
				  }
				| null
				| null
				| null
				| null
				| null
				| null
				| null
				| null
				| null
		  >;
}

export type CreatePageParameters = CreatePageBodyParameters;

export type CreatePageResponse = PageObjectResponse | PartialPageObjectResponse;

export const createPage = {
	method: 'post',
	pathParams: [],
	queryParams: [],
	bodyParams: ['parent', 'properties', 'icon', 'cover', 'content', 'children'],
	path: (): string => `pages`,
} as const;

export interface GetPagePathParameters {
	page_id: IdRequest;
}

export interface GetPageQueryParameters {
	filter_properties?: Array<string>;
}

export type GetPageParameters = GetPagePathParameters & GetPageQueryParameters;

export type GetPageResponse = PageObjectResponse | PartialPageObjectResponse;

export const getPage = {
	method: 'get',
	pathParams: ['page_id'],
	queryParams: ['filter_properties'],
	bodyParams: [],
	path: (p: GetPagePathParameters): string => `pages/${p.page_id}`,
} as const;

export interface UpdatePagePathParameters {
	page_id: IdRequest;
}

export interface UpdatePageBodyParameters {
	archived?: boolean;
	cover?: { external: { url: TextRequest }; type?: 'external' } | null;
	in_trash?: boolean;
	icon?:
		| { emoji: EmojiRequest; type?: 'emoji' }
		| { external: { url: TextRequest }; type?: 'external' }
		| null
		| null;
	properties?:
		| Record<
				string,
				| { checkbox: boolean; type?: 'checkbox' }
				| { date: DateRequest | null; type?: 'date' }
				| { email: StringRequest | null; type?: 'email' }
				| {
						files: Array<
							| {
									external: { url: TextRequest };
									name: StringRequest;
									type?: 'external';
							  }
							| {
									file: { url: string; expiry_time?: string };
									name: StringRequest;
									type?: 'file';
							  }
						>;
						type?: 'files';
				  }
				| {
						multi_select: Array<
							| {
									id: StringRequest;
									name?: StringRequest;
									color?: SelectColor;
									description?: StringRequest | null;
							  }
							| {
									name: StringRequest;
									id?: StringRequest;
									color?: SelectColor;
									description?: StringRequest | null;
							  }
						>;
						type?: 'multi_select';
				  }
				| { number: number | null; type?: 'number' }
				| {
						people: Array<
							| {
									bot:
										| EmptyObject
										| {
												owner:
													| {
															type: 'user';
															user:
																| PartialUserObjectResponse
																| {
																		type: 'person';
																		person: { email: string };
																		name: string | null;
																		avatar_url: string | null;
																		id: IdRequest;
																		object: 'user';
																  };
													  }
													| { type: 'workspace'; workspace: true };
												workspace_name: string | null;
										  };
									id: IdRequest;
									type?: 'bot';
									name?: string | null;
									avatar_url?: string | null;
									object?: 'user';
							  }
							| { id: IdRequest }
							| {
									person: { email?: string };
									id: IdRequest;
									type?: 'person';
									name?: string | null;
									avatar_url?: string | null;
									object?: 'user';
							  }
						>;
						type?: 'people';
				  }
				| { phone_number: StringRequest | null; type?: 'phone_number' }
				| { relation: Array<{ id: IdRequest }>; type?: 'relation' }
				| { rich_text: Array<RichTextItemRequest>; type?: 'rich_text' }
				| {
						select:
							| {
									id: StringRequest;
									name?: StringRequest;
									color?: SelectColor;
									description?: StringRequest | null;
							  }
							| {
									name: StringRequest;
									id?: StringRequest;
									color?: SelectColor;
									description?: StringRequest | null;
							  }
							| null
							| null;
						type?: 'select';
				  }
				| {
						status:
							| {
									id: StringRequest;
									name?: StringRequest;
									color?: SelectColor;
									description?: StringRequest | null;
							  }
							| {
									name: StringRequest;
									id?: StringRequest;
									color?: SelectColor;
									description?: StringRequest | null;
							  }
							| null
							| null;
						type?: 'status';
				  }
				| { title: Array<RichTextItemRequest>; type?: 'title' }
				| { url: TextRequest | null; type?: 'url' }
		  >
		| Record<
				string,
				| boolean
				| number
				| Array<{ id: IdRequest }>
				| Array<
						| {
								bot:
									| EmptyObject
									| {
											owner:
												| {
														type: 'user';
														user:
															| PartialUserObjectResponse
															| {
																	type: 'person';
																	person: { email: string };
																	name: string | null;
																	avatar_url: string | null;
																	id: IdRequest;
																	object: 'user';
															  };
												  }
												| { type: 'workspace'; workspace: true };
											workspace_name: string | null;
									  };
								id: IdRequest;
								type?: 'bot';
								name?: string | null;
								avatar_url?: string | null;
								object?: 'user';
						  }
						| { id: IdRequest }
						| {
								person: { email?: string };
								id: IdRequest;
								type?: 'person';
								name?: string | null;
								avatar_url?: string | null;
								object?: 'user';
						  }
				  >
				| Array<
						| {
								external: { url: TextRequest };
								name: StringRequest;
								type?: 'external';
						  }
						| {
								file: { url: string; expiry_time?: string };
								name: StringRequest;
								type?: 'file';
						  }
				  >
				| Array<
						| {
								id: StringRequest;
								name?: StringRequest;
								color?: SelectColor;
								description?: StringRequest | null;
						  }
						| {
								name: StringRequest;
								id?: StringRequest;
								color?: SelectColor;
								description?: StringRequest | null;
						  }
				  >
				| Array<RichTextItemRequest>
				| Array<RichTextItemRequest>
				| DateRequest
				| StringRequest
				| StringRequest
				| TextRequest
				| {
						id: StringRequest;
						name?: StringRequest;
						color?: SelectColor;
						description?: StringRequest | null;
				  }
				| {
						id: StringRequest;
						name?: StringRequest;
						color?: SelectColor;
						description?: StringRequest | null;
				  }
				| {
						name: StringRequest;
						id?: StringRequest;
						color?: SelectColor;
						description?: StringRequest | null;
				  }
				| {
						name: StringRequest;
						id?: StringRequest;
						color?: SelectColor;
						description?: StringRequest | null;
				  }
				| null
				| null
				| null
				| null
				| null
				| null
				| null
				| null
				| null
		  >;
}

export type UpdatePageParameters = UpdatePagePathParameters & UpdatePageBodyParameters;

export type UpdatePageResponse = PageObjectResponse | PartialPageObjectResponse;

export const updatePage = {
	method: 'patch',
	pathParams: ['page_id'],
	queryParams: [],
	bodyParams: ['properties', 'icon', 'cover', 'archived', 'in_trash'],
	path: (p: UpdatePagePathParameters): string => `pages/${p.page_id}`,
} as const;

export interface GetPagePropertyPathParameters {
	page_id: IdRequest;
	property_id: string;
}

export interface GetPagePropertyQueryParameters {
	page_size?: number;
	start_cursor?: string;
}

export type GetPagePropertyParameters = GetPagePropertyPathParameters &
	GetPagePropertyQueryParameters;

export type GetPagePropertyResponse = PropertyItemListResponse | PropertyItemObjectResponse;

export const getPageProperty = {
	method: 'get',
	pathParams: ['page_id', 'property_id'],
	queryParams: ['start_cursor', 'page_size'],
	bodyParams: [],
	path: (p: GetPagePropertyPathParameters): string =>
		`pages/${p.page_id}/properties/${p.property_id}`,
} as const;

export interface GetBlockPathParameters {
	block_id: IdRequest;
}

export type GetBlockParameters = GetBlockPathParameters;

export type GetBlockResponse = BlockObjectResponse | PartialBlockObjectResponse;

export const getBlock = {
	method: 'get',
	pathParams: ['block_id'],
	queryParams: [],
	bodyParams: [],
	path: (p: GetBlockPathParameters): string => `blocks/${p.block_id}`,
} as const;

export interface UpdateBlockPathParameters {
	block_id: IdRequest;
}

export type UpdateBlockBodyParameters =
	| { archived?: boolean; in_trash?: boolean }
	| {
			audio: {
				caption?: Array<RichTextItemRequest>;
				external?: { url: TextRequest };
			};
			type?: 'audio';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			bookmark: { url?: string; caption?: Array<RichTextItemRequest> };
			type?: 'bookmark';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			breadcrumb: EmptyObject;
			type?: 'breadcrumb';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			bulleted_list_item: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
			};
			type?: 'bulleted_list_item';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			callout: {
				rich_text?: Array<RichTextItemRequest>;
				icon?:
					| { emoji: EmojiRequest; type?: 'emoji' }
					| { external: { url: TextRequest }; type?: 'external' };
				color?: ApiColor;
			};
			type?: 'callout';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			code: {
				rich_text?: Array<RichTextItemRequest>;
				language?: LanguageRequest;
				caption?: Array<RichTextItemRequest>;
			};
			type?: 'code';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			divider: EmptyObject;
			type?: 'divider';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			embed: { url?: string; caption?: Array<RichTextItemRequest> };
			type?: 'embed';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			equation: { expression: string };
			type?: 'equation';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			file: {
				caption?: Array<RichTextItemRequest>;
				external?: { url: TextRequest };
				name?: StringRequest;
			};
			type?: 'file';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			heading_1: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				is_toggleable?: boolean;
			};
			type?: 'heading_1';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			heading_2: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				is_toggleable?: boolean;
			};
			type?: 'heading_2';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			heading_3: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
				is_toggleable?: boolean;
			};
			type?: 'heading_3';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			image: {
				caption?: Array<RichTextItemRequest>;
				external?: { url: TextRequest };
			};
			type?: 'image';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			link_to_page:
				| { comment_id: IdRequest; type?: 'comment_id' }
				| { database_id: IdRequest; type?: 'database_id' }
				| { page_id: IdRequest; type?: 'page_id' };
			type?: 'link_to_page';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			numbered_list_item: {
				rich_text: Array<RichTextItemRequest>;
				color?: ApiColor;
			};
			type?: 'numbered_list_item';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			paragraph: { rich_text: Array<RichTextItemRequest>; color?: ApiColor };
			type?: 'paragraph';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			pdf: {
				caption?: Array<RichTextItemRequest>;
				external?: { url: TextRequest };
			};
			type?: 'pdf';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			quote: { rich_text: Array<RichTextItemRequest>; color?: ApiColor };
			type?: 'quote';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			synced_block: {
				synced_from: { block_id: IdRequest; type?: 'block_id' } | null;
			};
			type?: 'synced_block';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			table_of_contents: { color?: ApiColor };
			type?: 'table_of_contents';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			table_row: { cells: Array<Array<RichTextItemRequest>> };
			type?: 'table_row';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			table: { has_column_header?: boolean; has_row_header?: boolean };
			type?: 'table';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			template: { rich_text: Array<RichTextItemRequest> };
			type?: 'template';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			to_do: {
				rich_text?: Array<RichTextItemRequest>;
				checked?: boolean;
				color?: ApiColor;
			};
			type?: 'to_do';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			toggle: { rich_text: Array<RichTextItemRequest>; color?: ApiColor };
			type?: 'toggle';
			archived?: boolean;
			in_trash?: boolean;
	  }
	| {
			video: {
				caption?: Array<RichTextItemRequest>;
				external?: { url: TextRequest };
			};
			type?: 'video';
			archived?: boolean;
			in_trash?: boolean;
	  };

export type UpdateBlockParameters = UpdateBlockPathParameters & UpdateBlockBodyParameters;

export type UpdateBlockResponse = BlockObjectResponse | PartialBlockObjectResponse;

export const updateBlock = {
	method: 'patch',
	pathParams: ['block_id'],
	queryParams: [],
	bodyParams: [
		'embed',
		'type',
		'archived',
		'in_trash',
		'bookmark',
		'image',
		'video',
		'pdf',
		'file',
		'audio',
		'code',
		'equation',
		'divider',
		'breadcrumb',
		'table_of_contents',
		'link_to_page',
		'table_row',
		'heading_1',
		'heading_2',
		'heading_3',
		'paragraph',
		'bulleted_list_item',
		'numbered_list_item',
		'quote',
		'to_do',
		'toggle',
		'template',
		'callout',
		'synced_block',
		'table',
	],
	path: (p: UpdateBlockPathParameters): string => `blocks/${p.block_id}`,
} as const;

export interface DeleteBlockPathParameters {
	block_id: IdRequest;
}

export type DeleteBlockParameters = DeleteBlockPathParameters;

export type DeleteBlockResponse = BlockObjectResponse | PartialBlockObjectResponse;

export const deleteBlock = {
	method: 'delete',
	pathParams: ['block_id'],
	queryParams: [],
	bodyParams: [],
	path: (p: DeleteBlockPathParameters): string => `blocks/${p.block_id}`,
} as const;

export interface ListBlockChildrenPathParameters {
	block_id: IdRequest;
}

export interface ListBlockChildrenQueryParameters {
	page_size?: number;
	start_cursor?: string;
}

export type ListBlockChildrenParameters = ListBlockChildrenPathParameters &
	ListBlockChildrenQueryParameters;

export interface ListBlockChildrenResponse {
	block: EmptyObject;
	has_more: boolean;
	next_cursor: string | null;
	object: 'list';
	results: Array<BlockObjectResponse | PartialBlockObjectResponse>;
	type: 'block';
}

export const listBlockChildren = {
	method: 'get',
	pathParams: ['block_id'],
	queryParams: ['start_cursor', 'page_size'],
	bodyParams: [],
	path: (p: ListBlockChildrenPathParameters): string => `blocks/${p.block_id}/children`,
} as const;

export interface AppendBlockChildrenPathParameters {
	block_id: IdRequest;
}

export interface AppendBlockChildrenBodyParameters {
	after?: IdRequest;
	children: Array<BlockObjectRequest>;
}

export type AppendBlockChildrenParameters = AppendBlockChildrenPathParameters &
	AppendBlockChildrenBodyParameters;

export interface AppendBlockChildrenResponse {
	block: EmptyObject;
	has_more: boolean;
	next_cursor: string | null;
	object: 'list';
	results: Array<BlockObjectResponse | PartialBlockObjectResponse>;
	type: 'block';
}

export const appendBlockChildren = {
	method: 'patch',
	pathParams: ['block_id'],
	queryParams: [],
	bodyParams: ['children', 'after'],
	path: (p: AppendBlockChildrenPathParameters): string => `blocks/${p.block_id}/children`,
} as const;

export interface GetDatabasePathParameters {
	database_id: IdRequest;
}

export type GetDatabaseParameters = GetDatabasePathParameters;

export type GetDatabaseResponse = DatabaseObjectResponse | PartialDatabaseObjectResponse;

export const getDatabase = {
	method: 'get',
	pathParams: ['database_id'],
	queryParams: [],
	bodyParams: [],
	path: (p: GetDatabasePathParameters): string => `databases/${p.database_id}`,
} as const;

export interface UpdateDatabasePathParameters {
	database_id: IdRequest;
}

export interface UpdateDatabaseBodyParameters {
	archived?: boolean;
	cover?: { external: { url: TextRequest }; type?: 'external' } | null;
	description?: Array<RichTextItemRequest>;
	in_trash?: boolean;
	is_inline?: boolean;
	title?: Array<RichTextItemRequest>;
	icon?:
		| { emoji: EmojiRequest; type?: 'emoji' }
		| { external: { url: TextRequest }; type?: 'external' }
		| null
		| null;
	properties?: Record<
		string,
		| {
				checkbox: EmptyObject;
				type?: 'checkbox';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				created_by: EmptyObject;
				type?: 'created_by';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				created_time: EmptyObject;
				type?: 'created_time';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				date: EmptyObject;
				type?: 'date';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				email: EmptyObject;
				type?: 'email';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				files: EmptyObject;
				type?: 'files';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				formula: { expression?: string };
				type?: 'formula';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				last_edited_by: EmptyObject;
				type?: 'last_edited_by';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				last_edited_time: EmptyObject;
				type?: 'last_edited_time';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				multi_select: {
					options?: Array<
						| {
								id: StringRequest;
								name?: StringRequest;
								color?: SelectColor;
								description?: StringRequest | null;
						  }
						| {
								name: StringRequest;
								id?: StringRequest;
								color?: SelectColor;
								description?: StringRequest | null;
						  }
					>;
				};
				type?: 'multi_select';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| { name: string }
		| {
				number: { format?: NumberFormat };
				type?: 'number';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				people: EmptyObject;
				type?: 'people';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				phone_number: EmptyObject;
				type?: 'phone_number';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				relation:
					| {
							dual_property: Record<string, never>;
							database_id: IdRequest;
							type?: 'dual_property';
					  }
					| {
							single_property: EmptyObject;
							database_id: IdRequest;
							type?: 'single_property';
					  };
				type?: 'relation';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				rich_text: EmptyObject;
				type?: 'rich_text';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				rollup:
					| {
							relation_property_name: string;
							rollup_property_id: string;
							function: RollupFunction;
							rollup_property_name?: string;
							relation_property_id?: string;
					  }
					| {
							rollup_property_id: string;
							relation_property_id: string;
							function: RollupFunction;
							rollup_property_name?: string;
							relation_property_name?: string;
					  }
					| {
							rollup_property_name: string;
							relation_property_id: string;
							function: RollupFunction;
							relation_property_name?: string;
							rollup_property_id?: string;
					  }
					| {
							rollup_property_name: string;
							relation_property_name: string;
							function: RollupFunction;
							rollup_property_id?: string;
							relation_property_id?: string;
					  };
				type?: 'rollup';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				select: {
					options?: Array<
						| {
								id: StringRequest;
								name?: StringRequest;
								color?: SelectColor;
								description?: StringRequest | null;
						  }
						| {
								name: StringRequest;
								id?: StringRequest;
								color?: SelectColor;
								description?: StringRequest | null;
						  }
					>;
				};
				type?: 'select';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				title: EmptyObject;
				type?: 'title';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				unique_id: { prefix?: string | null };
				type?: 'unique_id';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				url: EmptyObject;
				type?: 'url';
				name?: string;
				description?: PropertyDescriptionRequest | null;
		  }
		| null
		| null
		| null
		| null
		| null
		| null
		| null
		| null
		| null
		| null
		| null
		| null
		| null
		| null
		| null
		| null
		| null
		| null
		| null
		| null
		| null
	>;
}

export type UpdateDatabaseParameters = UpdateDatabasePathParameters & UpdateDatabaseBodyParameters;

export type UpdateDatabaseResponse = DatabaseObjectResponse | PartialDatabaseObjectResponse;

export const updateDatabase = {
	method: 'patch',
	pathParams: ['database_id'],
	queryParams: [],
	bodyParams: [
		'title',
		'description',
		'icon',
		'cover',
		'properties',
		'is_inline',
		'archived',
		'in_trash',
	],
	path: (p: UpdateDatabasePathParameters): string => `databases/${p.database_id}`,
} as const;

export interface QueryDatabasePathParameters {
	database_id: IdRequest;
}

export interface QueryDatabaseQueryParameters {
	filter_properties?: Array<string>;
}

export interface QueryDatabaseBodyParameters {
	archived?: boolean;
	in_trash?: boolean;
	page_size?: number;
	start_cursor?: string;
	filter?:
		| PropertyFilter
		| TimestampCreatedTimeFilter
		| TimestampLastEditedTimeFilter
		| {
				and: Array<
					| PropertyFilter
					| TimestampCreatedTimeFilter
					| TimestampLastEditedTimeFilter
					| { and: Array<PropertyFilter> }
					| { or: Array<PropertyFilter> }
				>;
		  }
		| {
				or: Array<
					| PropertyFilter
					| TimestampCreatedTimeFilter
					| TimestampLastEditedTimeFilter
					| { and: Array<PropertyFilter> }
					| { or: Array<PropertyFilter> }
				>;
		  };
	sorts?: Array<
		| { property: string; direction: 'ascending' | 'descending' }
		| {
				timestamp: 'created_time' | 'last_edited_time';
				direction: 'ascending' | 'descending';
		  }
	>;
}

export type QueryDatabaseParameters = QueryDatabasePathParameters &
	QueryDatabaseQueryParameters &
	QueryDatabaseBodyParameters;

export interface QueryDatabaseResponse {
	has_more: boolean;
	next_cursor: string | null;
	object: 'list';
	page_or_database: EmptyObject;
	type: 'page_or_database';
	results: Array<
		| DatabaseObjectResponse
		| PageObjectResponse
		| PartialDatabaseObjectResponse
		| PartialPageObjectResponse
	>;
}

export const queryDatabase = {
	method: 'post',
	pathParams: ['database_id'],
	queryParams: ['filter_properties'],
	bodyParams: ['sorts', 'filter', 'start_cursor', 'page_size', 'archived', 'in_trash'],
	path: (p: QueryDatabasePathParameters): string => `databases/${p.database_id}/query`,
} as const;

export interface ListDatabasesQueryParameters {
	page_size?: number;
	start_cursor?: string;
}

export type ListDatabasesParameters = ListDatabasesQueryParameters;

export interface ListDatabasesResponse {
	database: EmptyObject;
	has_more: boolean;
	next_cursor: string | null;
	object: 'list';
	results: Array<DatabaseObjectResponse | PartialDatabaseObjectResponse>;
	type: 'database';
}

export const listDatabases = {
	method: 'get',
	pathParams: [],
	queryParams: ['start_cursor', 'page_size'],
	bodyParams: [],
	path: (): string => `databases`,
} as const;

export interface CreateDatabaseBodyParameters {
	cover?: { external: { url: TextRequest }; type?: 'external' } | null;
	description?: Array<RichTextItemRequest>;
	is_inline?: boolean;
	title?: Array<RichTextItemRequest>;
	icon?:
		| { emoji: EmojiRequest; type?: 'emoji' }
		| { external: { url: TextRequest }; type?: 'external' }
		| null
		| null;
	parent:
		| { database_id: IdRequest; type?: 'database_id' }
		| { page_id: IdRequest; type?: 'page_id' };
	properties: Record<
		string,
		| {
				checkbox: EmptyObject;
				type?: 'checkbox';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				created_by: EmptyObject;
				type?: 'created_by';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				created_time: EmptyObject;
				type?: 'created_time';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				date: EmptyObject;
				type?: 'date';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				email: EmptyObject;
				type?: 'email';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				files: EmptyObject;
				type?: 'files';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				formula: { expression?: string };
				type?: 'formula';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				last_edited_by: EmptyObject;
				type?: 'last_edited_by';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				last_edited_time: EmptyObject;
				type?: 'last_edited_time';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				multi_select: {
					options?: Array<{
						name: StringRequest;
						color?: SelectColor;
						description?: StringRequest | null;
					}>;
				};
				type?: 'multi_select';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				number: { format?: NumberFormat };
				type?: 'number';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				people: EmptyObject;
				type?: 'people';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				phone_number: EmptyObject;
				type?: 'phone_number';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				relation:
					| {
							dual_property: Record<string, never>;
							database_id: IdRequest;
							type?: 'dual_property';
					  }
					| {
							single_property: EmptyObject;
							database_id: IdRequest;
							type?: 'single_property';
					  };
				type?: 'relation';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				rich_text: EmptyObject;
				type?: 'rich_text';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				rollup:
					| {
							relation_property_name: string;
							rollup_property_id: string;
							function: RollupFunction;
							rollup_property_name?: string;
							relation_property_id?: string;
					  }
					| {
							rollup_property_id: string;
							relation_property_id: string;
							function: RollupFunction;
							rollup_property_name?: string;
							relation_property_name?: string;
					  }
					| {
							rollup_property_name: string;
							relation_property_id: string;
							function: RollupFunction;
							relation_property_name?: string;
							rollup_property_id?: string;
					  }
					| {
							rollup_property_name: string;
							relation_property_name: string;
							function: RollupFunction;
							rollup_property_id?: string;
							relation_property_id?: string;
					  };
				type?: 'rollup';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				select: {
					options?: Array<{
						name: StringRequest;
						color?: SelectColor;
						description?: StringRequest | null;
					}>;
				};
				type?: 'select';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				title: EmptyObject;
				type?: 'title';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				unique_id: { prefix?: string | null };
				type?: 'unique_id';
				description?: PropertyDescriptionRequest | null;
		  }
		| {
				url: EmptyObject;
				type?: 'url';
				description?: PropertyDescriptionRequest | null;
		  }
	>;
}

export type CreateDatabaseParameters = CreateDatabaseBodyParameters;

export type CreateDatabaseResponse = DatabaseObjectResponse | PartialDatabaseObjectResponse;

export const createDatabase = {
	method: 'post',
	pathParams: [],
	queryParams: [],
	bodyParams: ['parent', 'properties', 'icon', 'cover', 'title', 'description', 'is_inline'],
	path: (): string => `databases`,
} as const;

export interface SearchBodyParameters {
	filter?: { property: 'object'; value: 'database' | 'page' };
	page_size?: number;
	query?: string;
	start_cursor?: string;
	sort?: {
		timestamp: 'last_edited_time';
		direction: 'ascending' | 'descending';
	};
}

export type SearchParameters = SearchBodyParameters;

export interface SearchResponse {
	has_more: boolean;
	next_cursor: string | null;
	object: 'list';
	page_or_database: EmptyObject;
	type: 'page_or_database';
	results: Array<
		| DatabaseObjectResponse
		| PageObjectResponse
		| PartialDatabaseObjectResponse
		| PartialPageObjectResponse
	>;
}

export const search = {
	method: 'post',
	pathParams: [],
	queryParams: [],
	bodyParams: ['sort', 'query', 'start_cursor', 'page_size', 'filter'],
	path: (): string => `search`,
} as const;

export type CreateCommentBodyParameters =
	| { discussion_id: IdRequest; rich_text: Array<RichTextItemRequest> }
	| {
			parent: { page_id: IdRequest; type?: 'page_id' };
			rich_text: Array<RichTextItemRequest>;
	  };

export type CreateCommentParameters = CreateCommentBodyParameters;

export type CreateCommentResponse = CommentObjectResponse | PartialCommentObjectResponse;

export const createComment = {
	method: 'post',
	pathParams: [],
	queryParams: [],
	bodyParams: ['parent', 'rich_text', 'discussion_id'],
	path: (): string => `comments`,
} as const;

export interface ListCommentsQueryParameters {
	block_id: IdRequest;
	page_size?: number;
	start_cursor?: string;
}

export type ListCommentsParameters = ListCommentsQueryParameters;

export interface ListCommentsResponse {
	comment: EmptyObject;
	has_more: boolean;
	next_cursor: string | null;
	object: 'list';
	results: Array<CommentObjectResponse>;
	type: 'comment';
}

export const listComments = {
	method: 'get',
	pathParams: [],
	queryParams: ['block_id', 'start_cursor', 'page_size'],
	bodyParams: [],
	path: (): string => `comments`,
} as const;

export interface OauthTokenBodyParameters {
	code: string;
	external_account?: { key: string; name: string };
	grant_type: string;
	redirect_uri?: string;
}

export type OauthTokenParameters = OauthTokenBodyParameters;

export interface OauthTokenResponse {
	access_token: string;
	bot_id: string;
	duplicated_template_id: string | null;
	token_type: 'bearer';
	workspace_icon: string | null;
	workspace_id: string;
	workspace_name: string | null;
	owner:
		| {
				type: 'user';
				user:
					| PartialUserObjectResponse
					| {
							type: 'person';
							person: { email: string };
							name: string | null;
							avatar_url: string | null;
							id: IdRequest;
							object: 'user';
					  };
		  }
		| { type: 'workspace'; workspace: true };
}

export const oauthToken = {
	method: 'post',
	pathParams: [],
	queryParams: [],
	bodyParams: ['grant_type', 'code', 'redirect_uri', 'external_account'],
	path: (): string => `oauth/token`,
} as const;
