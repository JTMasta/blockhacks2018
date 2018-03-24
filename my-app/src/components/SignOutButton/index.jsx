import React from "react";
import { Button } from "antd";

export class SignOutButton extends React.Component {
  render() {
    const { handleSignOut } = this.props;
    return (
      <Button
        type="primary"
        onClick={() => {
          handleSignOut();
        }}
      >
        Sign Out
      </Button>
    );
  }
}
