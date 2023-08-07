let TREINEN = [{
    id: 1,
    naam: 'HLD62',
    nummer: '6203',
    aandrijving: 'Diesel',
    type: 'Locomotief',
    eigenaar: 'Infrabel',
    huurder: 'none',
    rating: 3,
    foto: 'moet nog komen',
  },
  {
    id: 2,
    naam: 'HLD55',
    nummer: '5508',
    aandrijving: 'Diesel',
    type: 'Locomotief',
    eigenaar: 'TucRail',
    huurder: 'none',
    rating: 4,
    foto: 'moet nog komen',
  },
  {
    id: 3,
    naam: 'HLE27',
    nummer: '2728',
    aandrijving: 'Elecktrisch',
    type: 'Locomotief',
    eigenaar: 'NMBS',
    huurder: 'none',
    rating: 3,
    foto: 'moet nog komen',
  },

  {
    id: 4,
    naam: 'AM64',
    nummer: '767',
    aandrijving: 'Elecktrisch',
    type: 'Motorstel',
    eigenaar: 'NMBS',
    huurder: 'none',
    rating: 3,
    foto: 'moet nog komen',
  },
  {
    id: 5,
    naam: 'MW41',
    nummer: '4166',
    aandrijving: 'Diesel',
    type: 'Motorwagen',
    eigenaar: 'NMBS',
    huurder: 'none',
    rating: 3,
    foto: 'moet nog komen',
  },
  {
    id: 6,
    naam: 'HLE27',
    nummer: '2712',
    aandrijving: 'Elecktrisch',
    type: 'Locomotief',
    eigenaar: 'NMBS',
    huurder: 'none',
    rating: 3,
    foto: 'moet nog komen',
  },
  {
    id: 7,
    naam: 'HLD55',
    nummer: '5511',
    aandrijving: 'Diesel',
    type: 'Locomotief',
    eigenaar: 'NMBS',
    huurder: 'TucRail',
    rating: 3,
    foto: 'moet nog komen',
  },


];

let RITTEN = [{
    id: 1,
    date: '2021-05-08T00:00:00.000Z',
    placevan: {
      id: 1,
      name: 'Gent',
    },
    placenaar: {
      id: 2,
      name: 'Brussel',
    },
    treinid: '1',
  },
  {
    id: 2,
    date: '2021-05-21T12:30:00.000Z',
    placevan: {
      id: 1,
      name: 'Gent',
    },
    placenaar: {
      id: 3,
      name: 'Antwerpen',
    },
    treinid: '2',
  },
  {
    id: 3,
    van: 'Gent',
    naar: 'Oostende',
    date: '2021-05-25T17:40:00.000Z',
    placevan: {
      id: 1,
      name: 'Gent',
    },
    placenaar: {
      id: 4,
      name: 'Oostende',
    },
    treinid: '3',
  },
];

module.exports = {
  TREINEN,
  RITTEN
};