import React from "react";
import { Card } from "antd";

export class AdBox extends React.Component {
  render() {

    const {ad} = this.props;

    console.log(ad)
    return (
      <Card
        title={ad.title}
        extra={<a href="#">More</a>}
        style={{ width: "100%" }}
      >
        <p>{ad.description}</p>
        <p>{ad.price}</p>
      </Card>
    );
  }
}
