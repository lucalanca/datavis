export const SPREADSHEETS = [
  {
    name: 'Career Move',
    slug: 'career-move',
    data: [
      {
        company: 'Company A',
        position: 'Position A',
        salary: 1000,
        size: 24,
        location: {
          lat: 12,
          lng: 12
        }
      },
      {
        company: 'Company B',
        position: 'Position B',
        salary: 2000,
        size: 150,
        location: {
          lat: 11,
          lng: 11
        }
      },
      {
        company: 'Company C',
        position: 'Position C',
        salary: 1500,
        size: 20,
        location: {
          lat: 11,
          lng: 11
        }
      }
    ],
    fields: [
      {
        key: 'company',
        type: 'text'
      },
      {
        key: 'position',
        type: 'text'
      },
      {
        key: 'salary',
        type: 'number'
      },
      {
        key: 'size',
        type: 'number'
      },
      {
        key: 'location',
        type: 'geo'
      }
    ]
  },
  {
    name: 'New Apartment',
    slug: 'new-apartment',
    data: [
      {
        rent: 1500,
        rooms: 3.5,
        location: {
          lat: 12,
          lng: 12
        }
      },
      {
        rent: 1400,
        rooms: 3,
        location: {
          lat: 12,
          lng: 12
        }
      },
      {
        rent: 1300,
        rooms: 3.5,
        location: {
          lat: 12,
          lng: 12
        }
      },
      {
        rent: 1350,
        rooms: 2.5,
        location: {
          lat: 12,
          lng: 12
        }
      },
      {
        rent: 1360,
        rooms: 4,
        location: {
          lat: 12,
          lng: 12
        }
      },

    ],
    fields: [
      {
        key: 'rent',
        type: 'number'
      },
      {
        key: 'rooms',
        type: 'number'
      },
      {
        key: 'location',
        type: 'geo'
      }
    ]
  }
]
