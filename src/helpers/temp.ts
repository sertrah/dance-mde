export type socialPlaceData = { link: string, instagramLink: string, name: string, genres: string[], label: string }

export type socialPlace = {
  bachatea: socialPlaceData;
  balconzouk: socialPlaceData;
  socialclub: socialPlaceData;
  almambo: socialPlaceData;
  laazotea: socialPlaceData;
  eloasis: socialPlaceData;
  latindancecenter: socialPlaceData;
  cmDance: socialPlaceData;
  matizBello: socialPlaceData;
  matizRobledo: socialPlaceData;
  matizBuenosAires: socialPlaceData;
  casaritmo: socialPlaceData;
  casaritmoLaureles: socialPlaceData;
  nuevaGuardia: socialPlaceData;
  grandSocial: socialPlaceData;
  saborymasna: socialPlaceData;
  majao: socialPlaceData;
  danceFree: socialPlaceData;
  bachataAlparque: socialPlaceData;
  barcelona: socialPlaceData;
  QuimbaraBara: socialPlaceData;
  madera: socialPlaceData;
  zoukAlParque: socialPlaceData;
  selinamedellin: socialPlaceData;
  aPuroTango: socialPlaceData;
  bloodDanceLaureles: socialPlaceData;
};
export type socialPlaceKeys = keyof socialPlace

export const locationLinks: Record<socialPlaceKeys, socialPlaceData> = {
  selinamedellin: {
    link: "https://maps.app.goo.gl/xYaBHS8ruSTVNgqV8",
    instagramLink: "https://www.instagram.com/selinamedellinn/?hl=en",
    name: 'Selina Medellin',
    genres: ["Salsa"],
    label: '📍 Poblado'
  },
  bachatea: {
    link: "https://goo.gl/maps/m79GirGDDgDiDoha7",
    instagramLink: "https://www.instagram.com/bachateamedellin/?hl=en",
    name: 'Bachatea Medellin',
    genres: ["Bachata", "Salsa"],
    label: '📍 Bachatea'
  },
  balconzouk: {
    link: "https://goo.gl/maps/TqErejGy5YpGEBjr7",
    instagramLink: "https://www.instagram.com/conexiondancemed/",
    name: 'Balcon zouk',
    genres: ["Bachata", "Salsa", "Zouk"],
    label: '📍 Balcon Zouk(Manrrique)'
  },
  socialclub: {
    link: "https://goo.gl/maps/m2WSEDM23mCJMXEb6",
    instagramLink: "https://www.instagram.com/socialclubacademia/",
    name: 'Social Club',
    genres: ["Bachata", "Salsa"],
    label: '📍 Social Club'
  },
  almambo: {
    link: "https://goo.gl/maps/1nxCGw5KkE9zCp4x6",
    instagramLink: "https://www.instagram.com/almambodp/?hl=en",
    name: 'Almambo',
    genres: ["Bachata", "Salsa"],
    label: '📍 Almambo'
  },
  laazotea: {
    link: "https://goo.gl/maps/xHa4ZzDvwZ9yY8zd8",
    instagramLink: "https://www.instagram.com/dancefreeco/",
    name: 'La Azotea',
    genres: ["Bachata", "Salsa"],
    label: '📍 LaAzotea'
  },
  eloasis: {
    link: "https://goo.gl/maps/715USrHsKj86f5qV8",
    instagramLink: "https://www.instagram.com/dancefreeco/",
    name: 'El Oasis',
    genres: ["Bachata", "Salsa"],
    label: '📍 El Oasis'
  },
  latindancecenter: {
    link: "https://goo.gl/maps/PipvE9Z2Lmfu5afM9",
    instagramLink: "https://www.instagram.com/latindancecenterco/?hl=en",
    name: 'Latin Dance Center',
    genres: ["Bachata", "Salsa"],
    label: '📍 Latin Dance Center (Castilla)'
  },
  cmDance: {
    link: "https://goo.gl/maps/TyENT5UiqEQnpBLs9",
    instagramLink: "https://www.instagram.com/cmd.colombia/?hl=en",
    name: 'CM Dance',
    genres: ["Bachata", "Salsa"],
    label: '📍 CM Dance (Belen)'
  },
  matizBello: {
    link: "https://goo.gl/maps/2iNYC3LVTXaJwMHw9",
    instagramLink: "https://www.instagram.com/matizacademiabaile",
    name: 'Matiz sede bello',
    genres: ["Bachata", "Salsa"],
    label: '📍 Matiz sede bello'
  },
  matizRobledo: {
    link: "https://goo.gl/maps/SUHnzsZygMsQj6d26",
    instagramLink: "https://www.instagram.com/matizacademiabaile",
    name: 'Matiz sede Robledo',
    genres: ["Bachata", "Salsa"],
    label: '📍 Matiz sede Robledo'
  },
  matizBuenosAires: {
    link: "https://maps.app.goo.gl/HbH11fdVFbkFPEjTA",
    instagramLink: "https://www.instagram.com/matizacademiabaile",
    name: 'Matiz sede Buenos Aires',
    genres: ["Bachata", "Salsa"],
    label: '📍 Matiz sede Robledo'
  },
  casaritmo: {
    link: "https://goo.gl/maps/X1i4Ay5CodeYmBhc8",
    instagramLink: "https://www.instagram.com/casaritmolatino",
    name: 'Casa ritmo',
    genres: ["Bachata", "Salsa"],
    label: '📍 Casa ritmo (Poblado)'
  },
  casaritmoLaureles: {
    link: "https://maps.app.goo.gl/NfUCYaeDydnXU6jF7",
    instagramLink: "https://www.instagram.com/casaritmolatino",
    name: 'Casa ritmo (Laureles)',
    genres: ["Bachata", "Salsa", "Porro"],
    label: '📍 Laureles'
  },
  nuevaGuardia: {
    link: "https://maps.app.goo.gl/mjUvLoV8dLDKxq2L7",
    instagramLink: "https://www.instagram.com/nuevaguardiadance",
    name: 'Nueva guardia',
    genres: ["Bachata", "Salsa"],
    label: '📍 Laureles'
  },
  grandSocial: {
    link: "https://maps.app.goo.gl/UWzZtuAMpdBZNp7N8",
    instagramLink: "https://www.instagram.com/thegrandsocialmedellin",
    name: 'The Grand social',
    genres: ["Bachata", "Salsa"],
    label: '📍 The Grand Social'
  },
  saborymasna: {
    link: "https://maps.app.goo.gl/DS2M4CamodAyAXce6",
    instagramLink: "https://www.instagram.com/saborymasna/",
    name: "Sabor y más na'",
    genres: ["Bachata", "Salsa"],
    label: "📍 La House Provenza"
  },
  majao: {
    link: "https://maps.app.goo.gl/aEWhyj3MPcdG9iUZ8",
    instagramLink: "https://www.instagram.com/majaobachata",
    name: 'Majao',
    genres: ["Bachata", "Salsa", "Zouk"],
    label: "📍 Barcelona (Laureles)"
  },
  danceFree: {
    link: "https://maps.app.goo.gl/gJCyLU9WTcdN1jVX8",
    instagramLink: "https://www.instagram.com/dancefreeco/",
    name: 'Dance Free',
    genres: ["Bachata", "Salsa"],
    label: "📍 Dance Free"
  },
  bachataAlparque: {
    link: "https://maps.app.goo.gl/jQZu3HT6SQ5Xtfdm7",
    instagramLink: "https://www.instagram.com/bachata_alparque/",
    name: "Bachata al parque",
    genres: ["Bachata"],
    label: "📍 Parques del rio (Laureles)"
  },
  barcelona: {
    link: "https://maps.app.goo.gl/mhfnxs1zR65YbVgVA",
    instagramLink: "https://www.instagram.com/barcelonasmartmed/",
    name: "Barcelona",
    genres: ["Bachata", "Salsa", "Zouk"],
    label: "📍 Barcelona (Laureles)"
  },
  QuimbaraBara: {
    link: "https://maps.app.goo.gl/mhfnxs1zR65YbVgVA",
    instagramLink: "https://www.instagram.com/quimbarac/",
    name: "Clase Bachateros VIP",
    genres: ["Bachata", "Salsa", "Zouk"],
    label: "📍 Químbara Cumbara (Laureles)"
  },
  madera: {
    link: "https://maps.app.goo.gl/zowWFiQkTaimzrDm7",
    instagramLink: "https://www.instagram.com/sdg_movimiento/",
    name: "Madera",
    genres: ["Bachata", "Salsa", "Porro"],
    label: "📍 Estación Madera (Madera)"
  },
  zoukAlParque: {
    link: "https://maps.app.goo.gl/jQZu3HT6SQ5Xtfdm7",
    instagramLink: "https://www.instagram.com/zoukmedellin/",
    name: "Zouk al parque",
    genres: ["Zouk"],
    label: "📍 Parques del rio (Laureles)"
  },
  aPuroTango: {
    link: "https://maps.app.goo.gl/Phb5RASK2xqqqVFT7",
    instagramLink: "https://www.instagram.com/apurotango/",
    name: "A puro Tango",
    genres: ["Tango"],
    label: "📍 A Puro tango"
  },
  bloodDanceLaureles: {
    link: "https://maps.app.goo.gl/X4PHXPfssW7SQPQr5",
    instagramLink: "https://www.instagram.com/blooddancecompany/",
    name: "Blood Dance Company",
    genres: ["Salsa"],
    label: "📍 Laureles"
  },
};


