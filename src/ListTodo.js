import React, { Component } from 'react';
import { Input, List, Button, Form } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

let nowKey = "";
class ListTodo extends Component {
    constructor(props) {
        super(props)
    }
    static propTypes = {
        removeListItem:PropTypes.func.isRequired,
        updateList:PropTypes.func.isRequired,
        handleClick:PropTypes.func.isRequired,
        display:PropTypes.bool.isRequired,
        list:PropTypes.array.isRequired
      }
    render() {

        var { removeListItem, updateList, handleClick, display ,list} = this.props
        return (
            <div>
                <List
                    style={{ marginTop: "10px", width: "500px" }}
                    itemLayout="horizontal"
                    bordered
                    dataSource={list}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <Button type="text" k={item.key} onClick={(event) => {
                                    updateList()
                                    nowKey = event.currentTarget.getAttribute("k")

                                }} >edit</Button>,
                                <Button type="text" k={item.key} className=" delete" onClick={(event) => {
                                    removeListItem(event.currentTarget.getAttribute("k"))
                                }}>delete</Button>]}
                        >
                            {item.value}
                        </List.Item>

                    )}
                >
                </List>
                <Form style={{ display: (display) ? "block" : "none", marginTop: "10px" }}
                    onFinish={(e) => {
                        handleClick(e, nowKey)
                    }}
                >
                    <Form.Item
                        name="update"
                        rules={[{ required: true, message: '字符串不能为空!' }]}
                    >
                        <Input placeholder="回车修改事项" />
                    </Form.Item>

                </Form>
            </div>

        )
    }
}

export default ListTodo;