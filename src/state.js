let state = {
  sidebar: {
    selectTaxonData: [
      {
        id: 'red-book-ukraine',
        htmlFor: 'red-book-ukraine',
        title: 'Червона Книга України',
        value: '1'
      },
      {
        id: 'red-list',
        htmlFor: 'red-list',
        title: 'Червоний список МСОП',
        value: '2'

      },
      {
        id: 'no-data',
        htmlFor: 'no-data',
        title: 'Немає даних',
        value: '3'

      },
    ],

    positioningErrorData: [
      {
        id: 'none-data',
        htmlFor: 'none-data',
        title: 'Немає даних',
      },
      {
        id: 'up-to-30m',
        htmlFor: 'up-to-30m',
        title: 'До 30 м',
      },
      {
        id: 'up-to-100m',
        htmlFor: 'up-to-100m',
        title: 'До 100 м',
      },
      {
        id: 'up-to-1km',
        htmlFor: 'up-to-1km',
        title: 'До 1 км',
      },
      {
        id: 'more-than-1km',
        htmlFor: 'more-than-1km',
        title: 'Понад 1 км',
      },
    ],
  },
  aside: {
    baseLayersData: [
      {
        id: 'orthophotomap',
        htmlFor: 'orthophotomap',
        title: 'Ортофотоплани',
      },
      {
        id: 'open-street-map',
        htmlFor: 'open-street-map',
        title: 'Open Street Map',
      },
      {
        id: 'google-satellite',
        htmlFor: 'google-satellite',
        title: 'Google супутник',
      },
      {
        id: 'google-hybrid',
        htmlFor: 'google-hybrid',
        title: 'Google гібрид',
      },
    ],
    biodiversityData: [
      {
        id: 'gbif',
        htmlFor: 'gbif',
        title: 'GBIF',
      },
      {
        id: 'other',
        htmlFor: 'other',
        title: 'інше',
      },
    ],
    openSpatialBasesData: [
      {
        id: 'kadastr',
        htmlFor: 'kadastr',
        title: 'Кадастровий поділ',
      },
      {
        id: 'admin',
        htmlFor: 'admin',
        title: 'Адміністративний поділ',
      },
      {
        id: 'soil',
        htmlFor: 'soil',
        title: 'Ґрунти',
      },
      {
        id: 'nature-reserve-fund',
        htmlFor: 'nature-reserve-fund',
        title: 'ПЗФ',
      },
      {
        id: 'water',
        htmlFor: 'water',
        title: 'Водоохоронні зони',
      },
      {
        id: 'bowels',
        htmlFor: 'bowels',
        title: 'Геонадра',
      },
      {
        id: 'emerald',
        htmlFor: 'emerald',
        title: 'Смарагдова мережа',
      },
      {
        id: 'spatial-other',
        htmlFor: 'spatial-other',
        title: 'інше',
      },
    ],
  },
}

export default state
