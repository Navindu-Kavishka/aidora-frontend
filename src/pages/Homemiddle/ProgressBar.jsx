import React, { useState, useEffect } from "react";
import "./ProgressBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProgressBar = () => {
  const [donatedAmount, setDonatedAmount] = useState(7500);
  const [donorCount, setDonorCount] = useState(150);

  const goalAmount = 10000;
  const percentage = (donatedAmount / goalAmount) * 100;

  useEffect(() => {
    // Any logic to fetch or update donations can be added here
  }, [donatedAmount]);

  return (
    <div className="charity-page">
      <div className="row second-row">
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${percentage}%`,
              backgroundColor: percentage >= 100 ? "#4caf50" : "#ff9800",
            }}
          >
            <span className="donated-percentage">{percentage.toFixed(2)}%</span>
          </div>
          <span className="goal">Goal: ${goalAmount}</span>
        </div>
      </div>
      <div className="row third-row">
        <div className="column">
          <p id="donars">Donors</p>
          <p className="number-of-donors">{donorCount}</p>
        </div>
      </div>
      <div className="row fourth-row">
        <div className="column">
          <p id="donated"> Donated</p>
          <p className="donated-amount">${donatedAmount}</p>
        </div>
      </div>
      <div className="row fifth-row">
        <button className="donate-button">Donate Now</button>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <div className="row sixth-row">
        <div className="column2">
          <div>
            <p id="story">Story</p>
          </div>
          <div>
            <p id="faq">FAQ</p>
          </div>
        </div>
      </div>
      <div className="row seventh-row">
        <h3 id="story2">Story</h3>
      </div>
      <div className="row eighth-row">
        <p id="how">How did this come to our attention?</p>
        <p id="during">
          During the 19th century a profusion of charitable organizations
          emerged to alleviate the awful conditions of the working class in the
          slums. The Labourer’s Friend Society, chaired by Lord Shaftesbury in
          the United Kingdom in 1830, aimed to improve working-class conditions.
          It promoted, for example, the allotment of land to labourers for
          “cottage husbandry” that later became the allotment movement. In 1844
          it became the first Model Dwellings Company.
        </p>
        <p id="there">
          There was strong growth in municipal charities. The Brougham
          Commission led on to the Municipal Corporations Act 1835, which
          reorganized multiple local charities by incorporating them into single
          entities under supervision from local government.
        </p>
      </div>

      <div className="column">
        <hr />
        <br />
        <br />
        <br />
      </div>
      <div className="boxx">
        <div className="ninerow">
          <div>
            <h2 id="want">Want to donate by phone?</h2>
          </div>
          <br />
          <div>
            <h5 id="q">Not a problem. Call us now</h5>
          </div>
          <div>
            <h3 id="to">1800-12455-1245</h3>
          </div>
          <br />
          <div>
            <h5 id="q">Or email us :</h5>
          </div>
          <div>
            <h3 id="to">donate@chariti.heme</h3>
          </div>
        </div>
      </div>
      <div className="row tenth-row">
        <p id="clean">
          Clean water, sanitation, and hygiene education are basic necessities
          for a healthy environment and a productive life and well-being
        </p>
      </div>
      <div className="pic3">
        <div className="eleventhrow">
          <div className="eleventh">
            <div className="pic">
              <img src="/images/dbbl.png" alt="" />
            </div>
            <div className="data">
              <h4>100k</h4>
              <h5>Children Helped</h5>
            </div>
          </div>
          <div className="eleventh">
            <div className="pic">
              <img src="/images/ath.png" alt="" />
            </div>
            <div className="data">
              <h4>18,000</h4>
              <h5>Volunteers Worldwide</h5>
            </div>
          </div>
          <div className="eleventh">
            <div>
              <img className="pic" src="/images/coin.png" alt="" />
            </div>
            <div className="data">
              <h4>$ 100M</h4>
              <h5>Found Raised</h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row twelfth-row">
        <div className="column">
          <hr />
          <br />
          <br />
        </div>
        <div className="column5">
          <h2 id="the">THE STORY OF US</h2>

          <iframe
            width="400"
            height="300"
            
            src="https://www.youtube.com/embed/EOFd1YQIc2U"
            title="Partnering with Sri Lankan Charities: Exploring the Latest Trends in Charity and Donation"
            frameborder="0"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="row thirteenth-row">
        <h3 id="faq2">FAQ</h3>
      </div>
      <div className="detals">
        <div className="faq3">
          <div>
            <h4 id="topic">What is charity ?</h4>
            <br />
          </div>
          <div>
            <div>
              <h5>
                – During the 19th century a profusion of charitable
                organizations emerged to alleviate the awful conditions of the
                working class in the slums. The Labourer’s Friend Society,
                chaired by Lord Shaftesbury in the United Kingdom in 1830, aimed
                to improve working-class conditions.
              </h5>
              <br />
              <hr />
              <br />
              <br />
            </div>
          </div>
          <div>
            <div>
              <h4 id="topic">
                How do you make sure my gifts to Chariti are spent wisely?
              </h4>
              <br />
            </div>
            <div>
              <h5>
                – In the Enlightenment era charitable and philanthropic activity
                among voluntary associations and rich benefactors became a
                widespread cultural practice.
              </h5>
              <br />
              <hr />
              <br />
              <br />
            </div>
          </div>
          <div>
            <div>
              <h4 id="topic">How do you know which children need help?</h4>
              <br />
            </div>
            <div>
              <h5>
                – Charities also began to adopt campaigning roles, where they
                would champion a cause and lobby the government for legislative
                change.
              </h5>
              <br />
              <hr />
              <br />
              <br />
            </div>
          </div>
          <div>
            <div>
              <h4 id="topic">Is my donation tax-deductible</h4>
              <br />
            </div>
            <div>
              <h5>– If you’re in the U.S., yes, you can.</h5>
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="faq4">
          <div>
            <h4 id="topic">Where does my money actually go?</h4>
            <br />
          </div>
          <div>
            <div>
              <h5>
                – In the Enlightenment era charitable and philanthropic activity
                among voluntary associations and rich benefactors became a
                widespread cultural practice.
              </h5>
              <br />
              <hr />
              <br />
              <br />
            </div>
          </div>
          <div>
            <div>
              <h4 id="topic">
                How do you choose locations to build a community center?
              </h4>
              <br />
            </div>
            <div>
              <h5>
                – This emerging upper-class fashion for benevolence resulted in
                the incorporation of the first charitable organizations.
              </h5>
              <br />
              <hr />
              <br />
              <br />
            </div>
          </div>
          <div>
            <div>
              <h4 id="topic">
                What percentage of my donation goes towards programs?
              </h4>
              <br />
            </div>
            <div>
              <h5>
                – The Enlightenment also saw growing philosophical debate
                between those who championed state intervention and those who
                believed that private charities should provide welfare. The
                Reverend Thomas Malthus.
              </h5>
              <br />
              <hr />
              <br />
              <br />
            </div>
          </div>
          <div>
            <div>
              <h4 id="topic">What’s your goal?</h4>
              <br />
            </div>
            <div>
              <h5>
                – Charities also began to adopt campaigning roles, where they
                would champion a cause and lobby the government for legislative
                change.
              </h5>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProgressBar;
