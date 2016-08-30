import React, { Component, PropTypes } from 'react'
import groupBy from 'lodash.groupby'
import map from 'lodash.map'

import {LineChart, Line} from 'recharts';

const isNumberField = (field) => field.type === 'number'

const distributeNumberField = (data, field) => {
  const dataGroupedByValue = groupBy(data, datum => datum[field.key])
  return map(dataGroupedByValue, (items, valueStr) => {
    return {
      value: Number(valueStr),
      items
    }
  })
}

function renderValue(datum, field) {
  const value = datum[field.key]
  if (field.type === 'geo') {
    return `lat: ${value.lat} lng: ${value.lng}`
  }

  return value;
}

class SpreedsheetSummary extends Component {
  renderData(fields, data) {
    return (
      <table>
        <thead>
          <tr>
            {fields.map(f =>
              <td key={`data-head--${f.key}`}>{f.key}</td>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((datum, i) =>
            <tr key={`data-body-row--${i}`}>
              {fields.map(f =>
                <td key={`data-body-cell--${i}--${f.key}`}>
                  {renderValue(datum, f)}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    )
  }

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
        {this.renderData(fields, data)}
        {
          numberFieldDistributions.map(({field, distribuition}) =>
            <div key={`number-field-distribution--${field.key}`}>
              <p>{field.key}</p>
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
