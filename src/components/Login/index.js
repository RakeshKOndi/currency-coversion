/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React from 'react'
import {GoogleLogin} from 'react-google-login'
import {message, Form, Input, Button} from 'antd'
import './index.css'

import {UserOutlined, LockOutlined} from '@ant-design/icons'

const Login = ({toConvert, onLogin, users}) => {
  const onFinish = values => {
    for (let i = 0; i < users.length; i++) {
      if (JSON.stringify(users[i]) === JSON.stringify(values)) {
        toConvert('converter')
        onLogin(users[i].username)
        return
      }
      if (users[i].username === values.username) {
        message.error('Wrong Password')
        return
      }
    }
    message.error('No Such User Registered!')
  }
  const responseGoogle = val => {
    onLogin(val.profileObj.givenName)
    toConvert('converter')
  }
  return (
    <div className="container">
      <div className="header">LOGIN</div>
      <div className="content">
        <div className="form">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                allowClear
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                allowClear
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
            <GoogleLogin
              clientId="201652775501-mslfa8ghg0md15cjfukflh5vmb7uf89r.apps.googleusercontent.com"
              buttonText="Log in with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
