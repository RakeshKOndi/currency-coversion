/* eslint-disable jsx-a11y/no-static-element-interactions */
import './App.css'
import React from 'react'
import Register from './components/Sign'
import Login from './components/Login'
import Conversion from './components/conversion'

function App() {
  const [appState, setAppState] = React.useState('login')
  const [rightDisplay, setRightDisplay] = React.useState('Register')
  const [rightOrder, setRightOrder] = React.useState(0)
  const [loginName, setLoginName] = React.useState('')
  const [users, setUsers] = React.useState([
    {username: 'Swagat', password: 'swag'},
  ])
  const changeAppState = () => {
    if (appState === 'login') {
      setAppState('register')
      setRightDisplay('Login')
      setRightOrder(1)
    } else if (appState === 'register') {
      setAppState('login')
      setRightDisplay('Register')
      setRightOrder(0)
    }
  }
  if (appState === 'converter') {
    return (
      <div className="App">
        <Conversion name={loginName} />
      </div>
    )
  }
  return (
    <div className="App">
      <div className="login">
        <div className="login-container" style={{order: rightOrder}}>
          {appState === 'login' && (
            <Login
              onLogin={setLoginName}
              users={users}
              toConvert={setAppState}
            />
          )}
          {appState === 'register' && (
            <Register
              users={users}
              setUsers={setUsers}
              toConvert={setAppState}
              setRightOrder={setRightOrder}
            />
          )}
        </div>
        <RightSide current={rightDisplay} onClick={changeAppState} />
      </div>
    </div>
  )
}
const RightSide = ({containerRef, onClick, current}) => (
  <div className="right-side" ref={containerRef} onClick={onClick}>
    <div className="inner-container">
      <div className="text">{current}</div>
    </div>
  </div>
)
export default App
