import React from "react";
import "../Donate/donate.css";

class Donate extends React.Component {
  render() {
    return (
      <div className="donate-page">
        <div className="donate-picture"></div>
        <div id="sub-donate-header">
          <h2>Donate to Utah Animal Adoption Center</h2>
          <h3>
            More than 1,000 dogs and cats each year find forever homes because
            of Utah Animal Adoption Center. We can't continue this lifesaving
            work without the support of our donors. Please consider making a
            tax-deductible donation to support our mission.
          </h3>
          <button>Donate</button>
        </div>

        <div className="types-donation">
          <div className="donations-giving-box">
            <h1>Donations and Giving</h1>
            <div className="donation-types-row">
              <h3>Honor/Memory</h3>
              <h4>
                Make a donation to UAAC in honor or memory of a person or pet.
                You can either mail us your contribution or make a credit card
                gift over the phone by calling (801) 355-PETS (7387).
              </h4>
            </div>
            <div className="donation-types-row">
              <h3>Pledging</h3>
              <h4>
                Split your gift into monthly donations! You choose the amount to
                give and the money is automatically charged to your credit card.
              </h4>
            </div>
            <div className="donation-types-row">
              <h3>Planned Giving</h3>
              <h4>
                Planned giving is a general term that includes several options
                for donors to make gifts through an estate or other deferred
                means.
              </h4>
            </div>
            <div className="donation-types-row">
              <h3>Vehicles for Charity</h3>
              <h4>
                We have partnered with Vehicles for Charity, a Colorado-based
                non-profit. Call VFC at 1-866-628-2277 or complete the online
                form.
              </h4>
            </div>
          </div>
          <img
            id="donate-picture"
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="donate"
          />
        </div>

        <div id="amazon-header">
          <h1>Look at our Amazon Wishlist and Donate an item!</h1>
        </div>
        <div className="amazon-section">
          <div className="animal-wishlist-box">
            <img
              src="https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="cat"
            />
            <button>Amazon Wishlist for Cats</button>
          </div>
          <div className="animal-wishlist-box">
            <img
              src="https://images.unsplash.com/photo-1501472193205-56ffb66400f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="dogs"
            />
            <button>Amazon Wishlist for Dogs</button>
          </div>
        </div>
      </div> //donate-page closing tag
    );
  }
}
export default Donate;
