import React, { Component } from 'react';
import { Input, List, Button } from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Add from "./Add"
import ListTodo from "./ListTodo"

let tool = (localStorage) => {
  let newList = []
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    newList.push({ "key": key, value: localStorage[key] })
  }
  return newList
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      display: false
    }
  }
  componentWillMount() {
    let newList = tool(localStorage)
    this.state.list = newList;
  }
  _setLocalStorage(e) {
    localStorage.setItem(Date().toString(), e.new)
    this.setState({
      ...this.state,
      list: tool(localStorage)
    })
  }
  _removeListItem(k) {
    localStorage.removeItem(k)
    this.setState({
      ...this.state,
      list: tool(localStorage)
    })
  }
  _updateList() {
    this.setState({
      ...this.state,
      display: !this.state.display
    })
  }
  handleClick(e, nowKey) {
    localStorage.setItem(nowKey, e.update)
    this.setState({
      ...this.state,
      list: tool(localStorage),
      display: !this.state.display
    })
  }
  render() {
    return (
      <div style={{ margin: "10px", width: "400px" }}>
        <Add setLocalStorage={this._setLocalStorage.bind(this)}></Add>
        <ListTodo list={this.state.list} display={this.state.display} removeListItem={this._removeListItem.bind(this)} updateList={this._updateList.bind(this)} handleClick={this.handleClick.bind(this)}></ListTodo>
      </div>
    )
  }
}

export default App;
