import React from "react";
import "../About-Us/About-us.css";
import { Link } from "react-router-dom";

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.dropdown);
    return (
      <div className="about-us">
        <div id="header-box"></div>
        <div className="about-us-photo">
          {/* <img src="https://images.wallpaperscraft.com/image/dog_black_underwater_swimming_water_74417_3840x2160.jpg" alt=""/> */}
          <div id='centered'>About Us</div>
        </div>

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
                samantha@utahanimals.org.
              </p>
            </div>
          </div>
        </div>

        {/* this is the board of directors or team section */}
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
        {/* this is the end of directors or team section */}

        <div id='faqs-header'><h1>FAQS</h1></div> {/* this is the start of the FAQS section */}

        <div className="faqs">
          <div id="faq-dropdown-boxes">
            <div className="dropdown-faqs">
              <div id="question">
                What does UAAC stand for and what is your mission?
              </div>
              <div className="dropdown-content">
                <p id="answer">
                  Utah Animal Adoption Center. Our mission is to eliminate
                  euthanasia of healthy, adoptable animals through rescue,
                  spay/neutering, education, and adoption.
                </p>
              </div>
            </div>

            <div className="dropdown-faqs">
              <div id="question">
                Are you part of Best friends Animal Sanctuary and/or No More
                Homeless Pets?
              </div>
              <div className="dropdown-content">
                <p id="answer">
                  No. Although they do give advice to shelters and make grants
                  to some shelters, they are not UAAC's parent organization, and
                  they do not provide us with any operating money.
                </p>
              </div>
            </div>

            <div className="dropdown-faqs">
              <div id="question">
                What's the difference between UAAC and other animal groups, like
                the county shelters?
              </div>
              <div className="dropdown-content">
                <p id="answer">
                  We are a private, non-profit organization, not a municipal or
                  government agency. UAAC does not receive any tax support for
                  any of its services, so we depend upon donations and adoption
                  fees to operate.
                </p>
              </div>
            </div>

          </div> {/* closing tag for faq-droptown-boxes */}

          <br />

          <div id="faq-dropdown-boxes">
            <div className="dropdown-faqs">
              <div id="question">Where do you get your animals?</div>
              <div className="dropdown-content">
                <p id="answer">
                  The majority of our cats and dogs come from local and regional
                  shelters that sadly have to euthanize thousands of animals
                  annually. We partner with these shelters, rescuing pets from
                  their euthanasia lists. A few of our animals are returned to
                  us when changes in circumstances or hardships makes it
                  impossible for the owner to continue caring for their pet. We
                  only accept animals from the public that were originally
                  adopted at our shelter.
                </p>
              </div>
            </div>

            <div className="dropdown-faqs">
              <div id="question">Are you a "no-kill" adoption center?</div>
              <div className="dropdown-content">
                <p id="answer">
                  UAAC does not euthanize any healthy animals. Some animals,
                  sadly, are unable to be safely adopted— those with serious
                  behavior or medical problems.
                </p>
              </div>
            </div>

            <div className="dropdown-faqs">
              <div id="question">
                I need to put my pet up for adoption. Can I bring it to you?
              </div>
              <div className="dropdown-content">
                <p id="answer">
                  We do not take in animals from the general public.
                </p>
              </div>
            </div>
          </div>

          <div id="faq-dropdown-boxes">

            <div className="dropdown-faqs">
              <div id="question">There are stray pets in my neighborhood. Can you come pick them up?</div>
              <div className="dropdown-content">
                <p id="answer">No. UAAC is unable to come out and pick up stray animals; however, we can offer you some suggestions. If there is a stray dog or cat in your neighborhood, you can try to locate the owner by contacting your local Animal Control.
</p>
              </div>
            </div>
            
            <div className="dropdown-faqs">
              <div id="question">How long do you keep the animals at your adoption center?</div>
              <div className="dropdown-content">
                <p id="answer">There is no set time limit for how long an animal can remain in our adoption center. As long as an animal maintains general good health and a sound temperament, we'll keep a pet until it is adopted.
</p>
              </div>
            </div>

            <div className="dropdown-faqs">
              <div id="question">What should I do if I suspect animal cruelty or neglect?</div>
              <div className="dropdown-content">
                <p id="answer">If you witness animal cruelty, call 911 immediately. Also report any cruelty or neglect to animal control at 311. Document what you have witnessed; a camera phone can help. If you suspect neglect, consider offering to help find a new home for the animal. If you are fearful of approaching the family, call the police or animal control confidentially. Contact social services if you are concerned about other family members Do something. There is a link between animal abuse and human abuse. Violence hurts everyone.
What does UAAC do to prevent animal cruelty and neglect? To prevent animal cruelty and neglect, UAAC conducts visits to schools to teach children about kindness to animals, hosts tours and activities at UAAC for children to help animals, neuters and spays animals in need to reduce strays (often victims of violence). UAAC does not investigate animal neglect or cruelty. The police and animal control agencies investigate animal abuse.</p>
              </div>
            </div>

          </div> {/* closing tag for faq-droptown-boxes */}

          <div id="faq-dropdown-boxes">

            <div className="dropdown-faqs">
              <div id="question">Do you board animals?</div>
              <div className="dropdown-content">
                <p id="answer">No, UAAC is not a boarding facility. We shelter and care for needy animals who are looking for new homes.
</p>
              </div>
            </div>

            <div className="dropdown-faqs">
              <div id="question">Do you take other animals?</div>
              <div className="dropdown-content">
                <p id="answer">We are only equipped to care for, and adopt out, dogs and cats.</p>
              </div>
            </div>

            <div className="dropdown-faqs">
              <div id="question">How do I know if a pet is being abused?</div>
              <div className="dropdown-content">
                <p id="answer">There are signs to look for in the physical condition of the animal and also his home environment. Often, if a pet is poorly treated, other family members like children are also mistreated.
Observe the Animal's Physical Condition: Does the animal have an untreated injury or limp? Is the animal extremely thin or weak? Is there a severe flea or tick infestation? Does the animal have much missing hair? Is the animal overly fearful or aggressive?
Observe the Animal's Environment: Is there adequate shelter and water outside? Is the animal left outside alone and in extreme weather? What is the condition of the animal's yard? Is it relatively clean? Is the animal outside during all hours of the day? What is the condition of children living in the house? Do they appear well-cared-for or not?</p>
              </div>
            </div>

            </div> {/* closing tag for faq-droptown-boxes */}

            <div id="faq-dropdown-boxes">

            <div className="dropdown-faqs">
              <div id="question">I'm having difficulties with my pet. Can you help me?</div>
              <div className="dropdown-content">
                <p id="answer">Yes. You can visit our links and resources page to help answer your pet questions.
</p>
              </div>
            </div>
          </div>
          {/* this is the end of the FAQS section */}

     </div>  {/*this is the closing tag for faqs */}


          <div id='sponsor-header'><h1>OUR FANTASTIC SPONSORS</h1></div>
        <div className="sponsors">

          <div className="sponsor-container">
            <div className="sponsor-row">
              <img className='sponsor-image' src="https://athletesforanimals.org/wp-content/themes/bonestrap/library/images/athletesforanimals-logo-hrz-4.png" alt="Athletes for Animals"/>
              <img className='sponsor-image' src="https://www.petcofoundation.org/wp-content/themes/petco/library/images/pf_logo_web.png" alt="Petco Foundation"/>
              <img className='sponsor-image' src="https://utahanimals.org/uploads/2019/07/Bissell-Pet-Foundation.png" alt="Bissell Pet Foundation"/>
            </div>
            <div className="sponsor-row">
              <img className='sponsor-image' src="https://utahanimals.org/uploads/2019/10/dogutah.jpg" alt="Dog Utah"/>
              <img className='sponsor-image' src="https://upload.wikimedia.org/wikipedia/en/5/59/XMission_logo.png" alt="Xmission Internet"/>
              <img className='sponsor-image' src="https://images.medicanimal.com/image/upload/v1524138522/brands-landing-pages/hills/logos/hills-logo--science-plan.png" alt="Hills Science Diet"/>
            </div>
            <div className="sponsor-row">
              <img className='sponsor-image' src="http://www.evanslaundryequipment.com/wp/wp-content/themes/evans/images/logo.png" alt=""/>
              <img className='sponsor-image' src="https://upload.wikimedia.org/wikipedia/commons/d/da/Smith%27s_logo.svg" alt="Smiths"/>
            </div>
          </div>

        </div>
        <div className="about-sub-footer">

            <p>Utah Animal Adoption Center's mission is to eliminate euthanasia of healthy,
              
               adoptable dogs and cats through rescue, spaying, neutering, education, and
               <br/>
                adoption.
            </p>
            <Link to='/donate'><button id='sub-footer-button'>Donate</button></Link>

        </div>
      </div>
    );
  }
}

export default About;
