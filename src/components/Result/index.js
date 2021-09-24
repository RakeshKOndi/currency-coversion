/* eslint-disable no-unused-vars */
import React from 'react'

const Answer = ({currency, target, amount, exchangeRates}) => (
  <div>
    {target.map(t => (
      <p key={t} style={{fontWeight: '600', color: 'white', fontSize: '20px'}}>
        {t} <br />
        <p style={{color: 'black', fontWeight: '600', fontSize: '30px'}}>
          {' '}
          {(
            amount *
            (1 / exchangeRates.rates[currency]) *
            exchangeRates.rates[t]
          ).toFixed(2)}
        </p>
      </p>
    ))}
  </div>
)

export default Answer
