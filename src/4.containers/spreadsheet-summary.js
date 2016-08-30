import React, { Component, PropTypes } from 'react'
import groupBy from 'lodash.groupby'
import map from 'lodash.map'

import {LineChart, Line} from 'recharts';

const isNumberField = (field) => field.type === 'number'

const distributeNumberField = (data, field) => {
  const dataGroupedByValue = groupBy(data, datum => datum[field.name])
  return map(dataGroupedByValue, (items, valueStr) => {
    return {
      value: Number(valueStr),
      items
    }
  })
}



class SpreedsheetSummary extends Component {
  render() {
    const { spreadsheet } = this.props;
    const data = spreadsheet.data;
    const fields = spreadsheet.fields;
    const numberFields = fields.filter(isNumberField);
    const numberFieldDistributions = numberFields.map(field => {
      return {
        field,
        distribuition: distributeNumberField(data, field)
      }
    })

    return (
      <div>
        {
          numberFieldDistributions.map(({field, distribuition}) =>
            <div key={`number-field-distribution--${field.name}`}>
              <p>{field.name}</p>
              <LineChart width={300} height={100} data={distribuition}>
                <Line type='monotone' dataKey='value' stroke='#8884d8' strokeWidth={2} />
              </LineChart>
            </div>
          )
        }
      </div>
    )
  }
}

SpreedsheetSummary.propTypes = {
  spreadsheet: PropTypes.object.isRequired
}

export default SpreedsheetSummary;
