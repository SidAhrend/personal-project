import React from "react";
import "../About-Us/About-us.css";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div className="about-us">
        <div className="about-us-photo"></div>

        <div className="about-info">
          <div className="about-box">
            <div className="info-box">
              <img
                className="about-info-pics"
                src="https://images.unsplash.com/photo-1526636355180-fe37f8ce86cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt="cat"
              />
              <h2 className="fuckh2">About Us</h2>
              <p className="fuckp">
                Utah Animal Adoption Center (UAAC), a Utah 501(c), is a
                non-euthanizing animal shelter that rescues and finds homes for
                an average of 1,000 dogs and cats each year. Since 1983, we have
                dedicated ourselves to reducing the tragedies of pet
                overpopulation and the euthanasia of healthy adoptable pets. Our
                dogs and cats come from local and regional shelters. We partner
                with these shelters, rescuing pets from their euthanasia lists.
                Individual donors, corporate supporters, and private foundation
                grants fund our mission to save lives by supporting animal
                rescue and providing medical attention. Utah Animal Adoption
                Center Stats
              </p>
            </div>
            <div className="info-box">
              <img
                className="about-info-pics"
                src="https://images.unsplash.com/photo-1492235276442-80d2360d7faa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt="dog"
              />
              <h2 className="fuckh2">Our Shelter</h2>
              <p className="fuckp">
                The dogs and cats in our care enjoy a beautiful 3.5-acre
                sanctuary next to the Jordan River Parkway Trail. Our dogs relax
                in indoor/outdoor kennels and play in three large fenced areas
                where they can safely socialize. Our cats live communally in a
                large room where they interact and relax on abundant cat trees
                and towers. Our feline friends also have access to an outdoor
                enclosure with climbing trellises and an elevated walkway.
              </p>
            </div>
            <div className="info-box">
              <img
                className="about-info-pics"
                src="https://images.unsplash.com/photo-1527416876370-fb74d128c3dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt="cat"
              />
              <h2 className="fuckh2">Become A Sponsor</h2>
              <p className="fuckp">
                Corporate sponsorship is a great way to promote and associate
                your business with an organization with a reputation as leaders
                in the animal welfare movement. UAAC holds several fundraising
                events each year that target pet-loving people from all across
                the Wasatch Front, in addition to the year-round funding
                opportunities available at our shelter. Sponsorships are
                available at all levels and can also include in-kind donations.
                For additional information on how to partner with UAAC, contact
                Samantha Iverson Johnson, at (801) 540-0710 or via email at
                <Link to="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=We%27d+Like+To+Be+A+UAAC+Sponsor!&to=samantha@utahanimals.org">
                  samantha@utahanimals.org.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="team">
          <img
            id="team-pic"
            src="https://utahanimals.org/uploads/2019/10/60943609_10220376605992372_989408693739061248_n.jpg"
            alt="our team"
          />
          <div id="director-box">
            <h2 id="board-title">Board Of Directors</h2>

            <div id="list-box">
              <em>Crystal Rummel</em>
              <em>Jeff Morman, Secretary</em>
              <em>Rachel Eames, Co-Chair</em>
              <em>Jennifer Archer-Rainey, Co-Chair</em>
              <em>Destin Woodruff, Vice President</em>
              <em>Ashley Freeman, Treasurer</em>
              <em>Michele Wright</em>
            </div>

          </div>
        </div>
        <div className="faqs">
            <div className="faq-dropdown">
                <button className='faq-dropbtn'>dropdown</button>
                <div className="faq-dropdown-content">
                    <h5>words</h5>
                    <h5>words</h5>
                    <h5>words</h5>
                </div>
            </div>
        </div>
        <div className="sponsors"></div>
        <div className="about-sub-footer"></div>
      </div>
    );
  }
}

export default About;
