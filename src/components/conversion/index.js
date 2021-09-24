/* eslint-disable import/extensions */
import React from 'react'
import {Row, Col, InputNumber, Select} from 'antd'
import Answer from '../Result'

import './index.css'

const {Option} = Select

const Conversion = ({name}) => {
  const [amount, setAmount] = React.useState('')
  const [currency, setCurrency] = React.useState('INR')
  const [target, setTarget] = React.useState([])
  const [exchangeRates, setExchangeRates] = React.useState({
    success: true,
    timestamp: 1614937567,
    base: 'EUR',
    date: '2021-03-05',
    rates: {
      AED: 4.380178,
      AFN: 94.004456,
      ALL: 123.274512,
      AMD: 626.053242,
      ANG: 2.15364,
      AOA: 747.016009,
      ARS: 107.688578,
      AUD: 1.554865,
      AWG: 2.14655,
      AZN: 2.032652,
      BAM: 1.949891,
      BBD: 2.422521,
      BDT: 101.737516,
      BGN: 1.952982,
      BHD: 0.449673,
      BIF: 2334.010296,
      BMD: 1.192528,
      BND: 1.597846,
      BOB: 8.284596,
      BRL: 6.761563,
      BSD: 1.19989,
      BTC: 0.00002531948,
      BTN: 87.334352,
      BWP: 13.221029,
      BYN: 3.131362,
      BYR: 23373.54139,
      BZD: 2.418434,
      CAD: 1.514635,
      CDF: 2379.092822,
      CHF: 1.108615,
      CLF: 0.03164,
      CLP: 873.123702,
      CNY: 7.730564,
      COP: 4346.643929,
      CRC: 734.801831,
      CUC: 1.192528,
      CUP: 31.601982,
      CVE: 109.927401,
      CZK: 26.348185,
      DJF: 213.607423,
      DKK: 7.436173,
      DOP: 69.360731,
      DZD: 159.124288,
      EGP: 18.724236,
      ERN: 17.887827,
      ETB: 48.5236,
      EUR: 1,
      FJD: 2.425422,
      FKP: 0.862766,
      GBP: 0.862919,
      GEL: 3.965143,
      GGP: 0.862766,
      GHS: 6.874802,
      GIP: 0.862766,
      GMD: 61.236087,
      GNF: 12161.957286,
      GTQ: 9.226419,
      GYD: 251.013321,
      HKD: 9.257926,
      HNL: 28.91393,
      HRK: 7.574903,
      HTG: 92.442201,
      HUF: 366.177274,
      IDR: 17134.177245,
      ILS: 3.951655,
      IMP: 0.862766,
      INR: 87.083109,
      IQD: 1750.518012,
      IRR: 50211.375372,
      ISK: 152.89356,
      JEP: 0.862766,
      JMD: 180.181177,
      JOD: 0.845523,
      JPY: 129.353529,
      KES: 130.760642,
      KGS: 101.127223,
      KHR: 4888.052232,
      KMF: 490.834226,
      KPW: 1073.22769,
      KRW: 1346.661646,
      KWD: 0.361444,
      KYD: 0.999755,
      KZT: 504.20422,
      LAK: 11225.407982,
      LBP: 1814.533886,
      LKR: 234.861923,
      LRD: 207.347876,
      LSL: 18.234484,
      LTL: 3.521224,
      LVL: 0.721348,
      LYD: 5.368451,
      MAD: 10.722614,
      MDL: 21.11658,
      MGA: 4479.007173,
      MKD: 61.608363,
      MMK: 1691.789535,
      MNT: 3398.364004,
      MOP: 9.587497,
      MRO: 425.732156,
      MUR: 47.522694,
      MVR: 18.377082,
      MWK: 937.419668,
      MXN: 25.316634,
      MYR: 4.858952,
      MZN: 88.878376,
      NAD: 18.234007,
      NGN: 454.650832,
      NIO: 41.873806,
      NOK: 10.259362,
      NPR: 139.73637,
      NZD: 1.670761,
      OMR: 0.45916,
      PAB: 1.199736,
      PEN: 4.386709,
      PGK: 4.212803,
      PHP: 58.049263,
      PKR: 187.709173,
      PLN: 4.5745,
      PYG: 8009.904495,
      QAR: 4.342006,
      RON: 4.882149,
      RSD: 117.153157,
      RUB: 89.044249,
      RWF: 1191.939414,
      SAR: 4.473929,
      SBD: 9.563031,
      SCR: 25.286465,
      SDG: 452.558212,
      SEK: 10.173465,
      SGD: 1.599215,
      SHP: 0.862766,
      SLL: 12167.358931,
      SOS: 695.243691,
      SRD: 16.879059,
      STD: 24187.005006,
      SVC: 10.498024,
      SYP: 611.499208,
      SZL: 18.025894,
      THB: 36.377455,
      TJS: 13.671642,
      TMT: 4.173847,
      TND: 3.281239,
      TOP: 2.723018,
      TRY: 8.976221,
      TTD: 8.140604,
      TWD: 33.310275,
      TZS: 2765.472153,
      UAH: 33.27355,
      UGX: 4387.698502,
      USD: 1.192528,
      UYU: 52.007115,
      UZS: 12535.39782,
      VEF: 11.910365,
      VND: 27468.681243,
      VUV: 128.519637,
      WST: 2.993096,
      XAF: 653.965056,
      XAG: 0.047331,
      XAU: 0.000704,
      XCD: 3.222865,
      XDR: 0.834757,
      XOF: 653.989659,
      XPF: 119.43178,
      YER: 298.605176,
      ZAR: 18.272621,
      ZMK: 10734.174951,
      ZMW: 26.299692,
      ZWL: 383.994289,
    },
  })
  const onCurrencyChange = val => {
    setCurrency(val)
    console.log(val)
  }
  const onTargetChange = val => {
    setTarget(val)
    console.log(val)
  }
  const API_KEY = '0edfd455987d7473fc8cd7515e42c26c'
  const onChange = val => {
    setAmount(val)
  }
  React.useEffect(() => {
    fetch(`https://data.fixer.io/api/latest?access_key=${API_KEY}`)
      .then(res => res.json())
      .then(val => {
        if (val.success) {
          setExchangeRates(val)
        }
        console.log(val)
      })
  }, [])
  return (
    <div>
      <header className="app-header">
        <h1 className="header-heading">Currency Converter </h1>
        <p className="para">by codeyoung</p>
      </header>
      <Row justify="space-around" align="middle">
        <Col span={8} className="middle">
          <div className="contain">
            <InputNumber
              size="large"
              onChange={onChange}
              placeholder="Amount"
              min={0}
              bordered={false}
              style={{
                width: '50%',
                color: 'white',
                marginBottom: '2em',
                backgroundColor: 'black',
              }}
            />
            <p
              style={{
                color: 'whitesmoke',
                marginBottom: '3em',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              Enter the Amount above <br /> From Country <br /> Below
            </p>
            <Select
              showSearch
              style={{width: '50%'}}
              defaultValue="INR"
              optionFilterProp="children"
              onChange={onCurrencyChange}
            >
              <Option value="INR">Indian Rupees</Option>
              <Option value="USD">US Dollars</Option>
              <Option value="EUR">Euros</Option>
              <Option value="CAD">Candian Dollars</Option>
              <Option value="CHF">Swiss Franc</Option>
              <Option value="GBP">British Pound Sterling</Option>
              <Option value="JPY">Japanese Yen</Option>
              <Option value="CNY">Chinese Yuan</Option>
              <Option value="PKR">Pakistani Rupee</Option>
            </Select>
          </div>
        </Col>
        <Col span={8} className="middle">
          <div className="contain">
            <h3
              style={{
                color: 'white',
                marginBottom: '3em',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              Welcome {name}
            </h3>
            <p
              style={{
                color: 'whitesmoke',
                marginBottom: '3em',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              To Country
            </p>
            <Select
              showSearch
              mode="multiple"
              style={{width: '80%'}}
              optionFilterProp="children"
              onChange={onTargetChange}
            >
              <Option value="INR">Indian Rupees</Option>
              <Option value="USD">US Dollars</Option>
              <Option value="EUR">Euros</Option>
              <Option value="CAD">Candian Dollars</Option>
              <Option value="CHF">Swiss Franc</Option>
              <Option value="GBP">British Pound Sterling</Option>
              <Option value="JPY">Japanese Yen</Option>
              <Option value="CNY">Chinese Yuan</Option>
              <Option value="PKR">Pakistani Rupee</Option>
            </Select>
          </div>
        </Col>
        <Col span={8}>
          <p
            style={{
              color: 'whitesmoke',
              marginBottom: '3em',
              marginTop: '20vh',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            Exchange Amounts
          </p>
          <Answer
            currency={currency}
            target={target}
            amount={amount}
            exchangeRates={exchangeRates}
          />
        </Col>
      </Row>
    </div>
  )
}

export default Conversion
