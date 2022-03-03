import React from "react";
import "./History.css";

const History = () => {
  return (
    <div>
      <header className="history">
        <div className="history-header1">
          <div className="history-img">
            <h1 className="thema">History</h1>
          </div>

          {/* Events */}
          <div className="events1">
            <div>
              <h3 className="histor">…And How it All Began</h3>
              <h4 className="hs4">POST-GRADUATION BLUES</h4>
              <p className="paragr">
                It was a dark and stormy night in South Bend, Indiana. College
                friends and ultimate frisbee teammates Xavier and Kreece were
                sitting around after graduation wondering what to do next. The
                economy was in the gutter, the dot com boom had recently gone
                bust, and prospects for Internet businesses were slim. This
                didn’t bode well for guys with degrees in information systems
                and mechanical engineering.
              </p>
            </div>
            <section>
              <div className="paragr">
                <h4 className="hs4">THE FORTUITOUS DISCOVERY</h4>
                <p className="paragr">
                  The best gig they could find was tutoring the Notre Dame
                  football team on the finer points of calculus and computer
                  programming. A thankless job to be sure, and it didn’t exactly
                  pay the tab at the ol’ Linebacker Lounge. Tired of seeing all
                  the piles of old textbooks sitting around the apartment,
                  Kreece tried a hunch and put his roommate’s old books for sale
                  on the Internet. The campus bookstore never paid much for used
                  books, but perhaps he could sell them on the Internet and get
                  more. (Buying and selling stuff on the Internet hadn’t gone
                  mainstream yet). Even though it was the middle of the summer,
                  the textbooks started selling like proverbial hotcakes.
                  Xavier, ever the entrepreneur, knew a good thing when he saw
                  one and proceeded to sell off his old textbooks and those of
                  all his roommates’ who had fled and left their books behind.
                  He became intrigued by the online book market, and wondered
                  how he could find a lot more books.
                </p>
                <div className="pictur">
                  <img
                    src="https://st4.depositphotos.com/1029440/31099/i/600/depositphotos_310996048-stock-photo-open-book-hardback-books-on.jpg"
                    alt=""
                  />
                  <div>
                    <h4 className="hs4">THE BEGINNINGS OF A SOCIAL VENTURE</h4>
                    <p className="paragr">
                      The following winter, Kreece and Xavier talked often about
                      a plan to collect all the unwanted books at Notre Dame. As
                      the spring approached, in a burst of gumption, they
                      decided to make it happen. Having volunteered in the past
                      at the local community center, they knew it had everything
                      they needed: a great cause, a fast Internet connection,
                      and a back room that could hold some books. Xavier
                      convinced Jay, the center’s director, to take a gamble on
                      this idea and then they were off. 6 months later, 2,000
                      books had been collected and resold and $10,000 had been
                      raised. More importantly, Kreece and Xavier found
                      themselves with the glimmerings of a revolutionary new
                      business model.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </header>
    </div>
  );
};

export default History;
