import React from "react";
import { BuyButton, SellButton } from "../../components";
import { database } from "../../base";

export class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyAdsList: {}
    };
  }

  componentDidMount() {
    this.checkForData();
  }

  checkForData = () => {
    const buyAdsRef = database.ref("/buyAds");
    buyAdsRef.once("value", snapshot => {
      console.log(snapshot.val());
      this.setState({
        buyAdsList: snapshot.val()
      });
    });
  };

  render() {
    console.log(this.state);

    let list = []

    for (var property in this.state.buyAdsList) {
      if (this.state.buyAdsList.hasOwnProperty(property)) {
        list.push(this.state.buyAdsList[property].description);
      }
    }

    return (
      <div>
        <BuyButton />
        <SellButton />
        {list}
      </div>
    );
  }
}
