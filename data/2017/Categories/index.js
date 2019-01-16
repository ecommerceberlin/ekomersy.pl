

const Categories = {

	"companies" : {

		"description" : "Kategorie dla dostawców produktów, usług dla sprzedających online",
		"icon" : "business",

		"categories" :

		[{
			"name" : "Rozwiązanie wspierające obsługę Klientów",
			"description" : "Usługi/produkty, które ułatwiają bądź pozwalają optymalizować kontakt z klientem i jego obsługę, takie jak: call center, chat, systemy CRM czy systemy do zarządzania reklamacjami. ",
			"ticket_id" : 1222,
			"icon" : "contact_phone",
			"price" : 1000
		},

		{
			"name" : "Rozwiązanie wspierające zarządzanie e-biznesem",
			"description" : "Usługi/produkty, które wspierają całość zarządzania biznesem internetowym od jego zaplecza, takie jak: programy do magazynowania i fakturowania, aplikacje do zarządzania zadaniami, systemy do analityki danych, itd. ",
			"ticket_id" : 1223,
			"icon" : "important_devices",
			"price" : 1000
		},

		{
			"name" : "Rozwiązanie wspierające generowanie leadów i sprzedaży",
			"description" : "Usługi/produkty, które służą pozyskaniu nowych klientów – od e-mail marketingu, przez rozwiązania reklamowe, po zaawansowane systemy remarketingowe. ",
			"ticket_id" : 1224,
			"icon" : "add_shopping_cart",
			"price" : 1000
		},

		{
			"name" : "Rozwiązanie wspierające obsługę posprzedażową",
			"description" : "Usługi/produkty, które pozwalają na budowanie lojalności klientów i ich utrzymanie np. programy lojalnościowe, systemy rekomendacji, programy partnerskie itd.  ",
			"ticket_id" : 1225,
			"icon" : "loyalty",
			"price" : 1000
		},


		{
			"name" : "Rozwiązanie wspierające logistykę (z wyłączeniem firm kurierskich)",
			"description" : "Usługi/produkty wspierające logistykę e-sklepu: od opakowań przez centra logistyczne i spedycyjne, po brokerów usług kurierskich.",
			"ticket_id" : 1226,
			"icon" : "directions",
			"price" : 1000
		},

		{
			"name" : "Firma kurierska",
			"description" : "Firmy zajmujące się doręczeniem zamówień do klienta. ",
			"ticket_id" : 1227,
			"icon" : "local_shipping",
			"price" : 1000
		},

		{
			"name" : "Innowacja płatnicza roku",
			"description" : "Konkretne innowacyjne rozwiązania płatnicze, które pojawiły się na rynku w 2017 roku. ",
			"ticket_id" : 1228,
			"icon" : "euro_symbol",
			"price" : 1000
		},

		{
			"name" : "Debiut roku 2017",
			"description" : "Usługi/produkty, które zadebiutowały na rynku w roku 2017. Oceniany będzie przede wszystkim poziom innowacyjności oraz potencjalny wpływ na rynek e-commerce. ",
			"ticket_id" : 1229,
			"icon" : "child_care",
			"price" : 300
		},

		{
			"name" : "Produkt, usługa wspierająca ekspansję międzynarodową",
			"description" : "Usługi/produkty, które wspierają sklepy internetowe w sprzedaży na rynkach zagranicznych. ",
			"ticket_id" : 1230,
			"icon" : "language",
			"price" : 1000
		},

		{
			"name" : "Rozwiązanie infrastrukturalne i IT",
			"description" : "Usługi/produkty wspierające zaplecze technologiczne sklepu internetowego takie jak: platformy sklepowe, hosting, certyfikaty SSL itp.",
			"ticket_id" : 1231,
			"icon" : "build",
			"price" : 1000
		}]
	},

	"agencies" : {

		"description" : "Kategorie dla agencji",
		"icon" : "link",

		"categories" :

		[{
			"name" : "Najlepsza agencja wspomagająca generowanie sprzedaży",
			"description" : "Agencje prowadzące dla e-sklepu działania, których celem było zwiększenie sprzedaży, konwersji, czy rozpoznawalności marki klienta. ",
			"ticket_id" : 1232,
			"icon" : "trending_up",
			"price" : 1000
		},

		{
			"name" : "Najlepsza agencja wdrożeniowa",
			"description" : "Agencje prowadzące dla e-sklepu działania związane z wdrożeniem nowej szaty graficznej, zmianą platformy, rozbudową oprogramowania, wdrożeniem nowej funkcji itp. ",
			"ticket_id" : 1233,
			"icon" : "usb",
			"price" : 1000
		}
	]},

	"people" : {

		"description" : "Osobowości",
		"icon" : "person",

		"categories" :

		[{
			"name" : "Osobowość w e-commerce",
			"description" : "Osoba, która znacząco przysłużyła się dla rozwoju e-commerce w roku 2017. Zgłoś swojego kandydata!",
			"ticket_id" : 1234,
			"suggestOnly" : 1,
			"icon" : "face"
		}]

	},


	"shops" : {

		"description" : "Kategorie dla sklepów internetowych",
		"icon" : "shopping_cart",

		"categories" :

		[{
			"name" : "Najlepsze wykorzystanie serwisów społecznościowych - mały sklep",
			"description" : "Działania sklepu internetowego w mediach społecznościowych (Facebook, Instagram, LinkedIn, Twitter, Snapchat, Wykop etc.), które przejawiały się oryginalnością, pomysłowością i efektywnością działań. Kategoria dla sklepów, które w roku 2016 wygenerowały przychód poniżej 999 999 PLN",
			"ticket_id" : 1235,
			"icon" : "people",
			"price" : 500
		},

		{
			"name" : "Najlepsze wykorzystanie serwisów społecznościowych - duży sklep",
			"description" : "Działania sklepu internetowego w mediach społecznościowych (Facebook, Instagram, LinkedIn, Twitter, Snapchat, Wykop etc.), które przejawiały się oryginalnością, pomysłowością i efektywnością działań. Kategoria dla sklepów, które w roku 2016 wygenerowały przychód powyżej 1 000 000 PLN",
			"ticket_id" : 1236,
			"icon" : "people",
			"price" : 1000
		},

		{
			"name" : "Spójność doświadczenia zakupowego w róznych kanałach sprzedaży",
			"description" : "Działania Uczestnika, które realizują “omnichannel”, tj. jednakowego doświadczenia zakupowego na wszystkich punktach styku sklepu z Klientem. ",
			"ticket_id" : 1237,
			"icon" : "open_with",
			"price" : 1000
		},

		{
			"name" : "Strategia budowania lojalności klientów",
			"description" : "Spójność działań sklepu internetowego służących lojalizacji i utrzymaniu klientów, takich jak wdrożenie programu lojalnościowego, zautomatyzowane (i spersonalizowane!) działania marketingowe itp. ",
			"ticket_id" : 1238,
			"icon" : "autorenew",
			"price" : 1000
		},

		{
			"name": "Ekspansja zagraniczna",
			"description" : "Spójność działań sklepu internetowego, których celem jest wejście na rynki zagraniczne i sprzedaż globalna.",
			"ticket_id" : 1239,
			"icon" : "flight_takeoff",
			"price" : 1000
		},

		{
			"name" : "Konsekwencja w budowaniu marki i wizerunku - mały sklep",
			"description" : "Kategoria ta służy wyłonieniu sklepu online, który konsekwentnie, zgodnie z przyjętą strategią kreuje i buduje wizerunek swojej marki we wszystkich kanałach dotarcia do klienta. Szczególną uwagę skupiamy na oryginalności podejmowanych działań! Kategoria dla sklepów, które w roku 2016 wygenerowały przychód poniżej 999 999 PLN",
			"ticket_id" : 1240,
			"applicable" : 0,
			"icon" : "fingerprint",
			"price" : 500
		},

		{
			"name" : "Konsekwencja w budowaniu marki i wizerunku - duży sklep",
			"description" : "Kategoria ta służy wyłonieniu sklepu online, który konsekwentnie, zgodnie z przyjętą strategią kreuje i buduje wizerunek swojej marki we wszystkich kanałach dotarcia do klienta. Szczególną uwagę skupiamy na oryginalności podejmowanych działań! Kategoria dla sklepów, które w roku 2016 wygenerowały przychód powyżej 1 000 000 PLN",
			"ticket_id" : 1241,
			"applicable" : 0,
			"icon" : "fingerprint",
			"price" : 1000
		}


	]}


};

export default Categories;
