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
        name: 'company',
        type: 'text'
      },
      {
        name: 'position',
        type: 'text'
      },
      {
        name: 'salary',
        type: 'number'
      },
      {
        name: 'size',
        type: 'number'
      },
      {
        name: 'size',
        type: 'location'
      }
    ]
  }
]
