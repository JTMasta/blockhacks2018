import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Loginbutton, Registerbutton, SignOutButton } from "./components";
import { Homepage } from "./screens";
import { Layout, Menu, Breadcrumb } from "antd";
import { app } from "./base";
import "./App.css";
const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      email: ""
    };
  }

  componentDidMount() {
    this.checkIfUserIsSignedIn();
  }

  handleSignIn = email => {
    this.setState({
      email: email,
      loggedIn: true
    });
  };

  handleSignOut = () => {
    app
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        this.checkIfUserIsSignedIn();
      })
      .catch(function(error) {
        // An error happened.
      });
  };

  checkIfUserIsSignedIn = () => {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({
          loggedIn: true,
          email: user.email
        });
      } else {
        this.setState({
          loggedIn: false,
          email: user.email
        });
      }
    });
  };

  render() {
    console.log("state: ", this.state);

    const { email, loggedIn } = this.state;

    return (
      <div className="App Layout">
        <Layout className="layout">
          <Header>
            <div className="logo">
              <Link to="/">BarterCoin</Link>
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <Link to="/">Homepage</Link>
              </Menu.Item>

              {loggedIn ? (
                <Menu.Item key="2">
                  <SignOutButton handleSignOut={this.handleSignOut} />
                </Menu.Item>
              ) : (
                <Menu.Item key="2">
                  <Loginbutton handleSignIn={this.handleSignIn} />
                </Menu.Item>
              )}

              {loggedIn ? (
                ""
              ) : (
                <Menu.Item key="3">
                  <Registerbutton />
                </Menu.Item>
              )}
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              <Switch>
                <Route exact path="/" component={Homepage} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            BarterCoin ©2018 Created by New devs on the block
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
