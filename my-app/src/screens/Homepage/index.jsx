import React from "react";
import { BuyButton, SellButton, AdBox } from "../../components";
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

    const { buyAdsList } = this.state;

    let list = [];

    for (var property in buyAdsList) {
      if (buyAdsList.hasOwnProperty(property)) {
        list.push(<AdBox ad={buyAdsList[property]} />);
      }
    }

    return (
      <div>
        <div style={{ display: "flex" }}>
          <BuyButton />
          <SellButton />
        </div>

        <div>{list}</div>
      </div>
    );
  }
}
