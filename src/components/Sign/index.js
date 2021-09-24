/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
import React from 'react'
import './index.css'
import {Form, Input, Button, message} from 'antd'

import {UserOutlined, LockOutlined, MailOutlined} from '@ant-design/icons'

const Register = ({users, setUsers, toConvert, setRightOrder}) => {
  const onFinish = values => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === values.username) {
        message.error('User Already Exist')
        return
      }
    }
    const newUser = {username: values.username, password: values.password}
    setUsers(users.concat(newUser))
    setRightOrder(0)
    toConvert('login')
  }
  return (
    <div className="container">
      <div className="header">REGISTER</div>
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
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
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
            <Form.Item
              name="passwordconfirm"
              rules={[
                {
                  required: true,
                  message: 'Please confirm your Password!',
                },
                ({getFieldValue}) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('Passwords do not match!'))
                  },
                }),
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
                allowClear
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Register
