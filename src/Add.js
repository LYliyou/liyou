import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

class Add extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        setLocalStorage: PropTypes.func.isRequired
    }
    render() {
        let { setLocalStorage } = this.props
        return (
            <Form scrollToFirstError="true"
                onFinish={(e) => {
                    setLocalStorage(e)
                }}>
                <Form.Item name="new" rules={[{ required: true, message: '字符串不能为空!' }]}>
                    <Input placeholder="添加待办" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Add;