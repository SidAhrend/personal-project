import React from "react";
import "../Get-Involved/get-involved.css";

class GetInvolved extends React.Component {
  render() {
    return (
      <div className="getInvolved">
        <div id="header-box"></div>
        <div className="get-involved-photo">
          <div id='centered'>Get Involved</div>
        </div>
        <div className="thank-you-section">
          <h1>Thank you for your interest in getting involved with UAAC!</h1>
          <h4>
            Your donations, volunteering, sponsorship, and fostering will help
            UAAC continue to find loving
            <br />
            homes for our rescue animals.
          </h4>
        </div>
        <div id="volunteer-header">
          <h1>Volunteer</h1>
        </div>
        <div className="volunteer">
          <div className="shelter-volunteer">
            <div style={{ textAlign: "center" }}>
              <h4>Shelter Volunteers</h4>
            </div>
            <h5>
              Responsible volunteers are needed seven days a week between 10 AM
              and 6 PM to complete the following tasks:
            </h5>
            <h5>Brush and groom animals</h5>
            <h5>Maintain facilities</h5>
            <h5>Answer office phones</h5>
            <h5>
              Walk dogs (18 years and older, unless accompanied by a parent or
              guardian)
            </h5>
            <h5>
              Are you outgoing? Come help our animals find their forever homes
              at our next adoption event! Times and locations vary.
            </h5>
          </div>
          <div className="young-volunteer">
            <div style={{ textAlign: "center" }}>
              <h4>Young Volunteers (Under 16)</h4>
            </div>
            <h5>Below are some suggestions for younger volunteers:</h5>
            <h5>Coordinate donation drives for items on the UAAC wishlist</h5>
            <h5>Host an event to raise donation money</h5>
            <h5>
              Put together goodie bags for adopted animals to take home (we
              provide supplies)
            </h5>
            <h5>Make blankets, beds, or cat towers for the kennels</h5>
            <h5>
              Help spread the word by passing our flyers and informing your
              local community
            </h5>
          </div>
        </div>

        <div className="foster-section">
          <div className="foster-box">
            <h1>Foster</h1>
            <h3 style={{ textAlign: "center", color: "grey" }}>
              Love Cats? We need foster homes for our special needs and older
              cats, as well as mother cats and their kittens.
            </h3>
            <h3 style={{ textAlign: "center", color: "grey" }}>
              Love dogs? We also need special homes for older dogs and puppies.
            </h3>
          </div>
          <div id="foster-photo-box">
            <img
              id="foster-photo"
              src="https://images.unsplash.com/photo-1558618047-f4b511aae74d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="cat"
            />
          </div>
        </div>

        <div className="sponsor-section">
          <h1>Become a Sponsor</h1>
          <h3 style={{ textAlign: "center" }}>
            Corporate sponsorship is a great way to promote and associate your
            business with an organization with a reputation as leaders in the
            animal welfare movement in Utah. UAAC holds several fundraising
            events each year that target pet-loving people from all across the
            Wasatch Front, in addition to the year-round funding opportunities
            available at our shelter. Sponsorship is available at all levels and
            can also include in-kind donations.
          </h3>
          <h3 style={{ textAlign: "center" }}>
            For additional information on how to partner with UAAC, contact
            Samantha Iverson Johnson, at (801) 540-0710 or via email at
            samantha@utahanimals.org. We will be happy to discuss various ways
            you and your business can lend your support. At UAAC, we appreciate
            any and all opportunities to customize sponsorship experiences for
            our business and community leaders.
          </h3>
        </div>
        <div className="sub-footer-link-box">
          <img
            id="doggo-photo"
            src="https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="dog"
          />
          <div id="link-boxes">
            <div className="links-resources">
              <h1 style={{ textAlign: "center" }}>Links & Resources</h1>
              <a href="http://www.utahpets.org/">No More Homeless Pets in Utah</a>
              <a href="http://www.bestfriends.org/">Best Friends Animal Society</a>
              <a href="http://animalservices.slco.org/">Salt Lake County Animal Services</a>
              <a href="http://www.co.utah.ut.us/dept/anim/index.asp">Utah County Animal Control</a>
              <a href="http://www.utahhumane.org/">Humane Society of Utah</a>
              <a href="http://foautah.org/">Friends of Animals Utah</a>
            </div>
            <div className="pet-care">
              <h1 style={{ textAlign: "center" }}>Pet Care Information</h1>
              <a href="http://www.aspca.org/pet-care/" target="_blank">www.aspca.org</a>
              <a href="http://www.petcaregt.com/" target='_blank'>www.petcaregt.com</a>
              <a href="http://www.bestfriends.org/theanimals/petcare/">www.bestfriends.org</a>
              <a href="http://www.humanesociety.org/animals/pets/">www.humanesociety.org</a>
              <a href="http://www.bbcleaningservice.com/pet-friendly-home-cleaning.html">www.bbcleaningservice.com</a>
              <a href="https://www.obrella.com/news/10-dog-breeds-that-could-raise-your-home-insurance-rate/">www.obrella.com</a>
            </div>
          </div>
        </div>
      </div> //this is the closing tag for getInvolved
    );
  }
}
export default GetInvolved;
