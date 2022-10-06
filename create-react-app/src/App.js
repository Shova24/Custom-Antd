import React, { Component, Fragment } from "react";
import { Row, Col, Icon, Breadcrumb, Menu, Layout, Form, Select, Switch, Radio, Card, message, Button, Upload, DatePicker, Progress, Dropdown, Pagination, Checkbox, Badge, List, Avatar } from "antd";
import moment from "moment";

import ColorPicker from "./ColorPicker";
import "./styles/main.less";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class App extends Component {
  constructor(props) {
    super(props);
    let initialValue = {
      "@primary-color": "#00375B",
      "@secondary-color": "#0000ff",
      "@text-color": "#000000",
      "@text-color-secondary": "#eb2f96",
      "@heading-color": "#fa8c16",
      "@layout-header-background": "#b36e94",
      "@btn-primary-bg": "#397dcc",
    };
    let vars = {};

    try {
      vars = Object.assign({}, initialValue, JSON.parse(localStorage.getItem("app-theme")));
    } finally {
      this.state = { vars, initialValue };
      window.less
        .modifyVars(vars)
        .then(() => {})
        .catch((error) => {
          message.error(`Failed to update theme`);
        });
    }
  }

  resetTheme = () => {
    localStorage.setItem("app-theme", "{}");
    this.setState({ vars: this.state.initialValue });
    window.less.modifyVars(this.state.initialValue).catch((error) => {
      message.error(`Failed to reset theme`);
    });
  };

  render() {
    return <div className="App" />;
  }
}

App = Form.create()(App);
export default App;
