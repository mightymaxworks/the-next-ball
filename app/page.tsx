import BallJourney from "./BallJourney";

const Ball = ({ className = "" }: { className?: string }) => (
  <span className={`ball ${className}`} aria-hidden="true" />
);

export default function Home() {
  return (
    <main>
      <BallJourney />
      <nav className="nav">
        <a className="brand" href="#top">THE NEXT BALL <Ball className="navBall" /></a>
        <div className="navlinks">
          <a href="#idea">THE IDEA</a><a href="#darren">DARREN</a><a href="#speaking">SPEAKING</a>
          <a href="#book">BOOK</a><a href="#next-balls">NEXT BALLS</a>
        </div>
        <a className="cta" href="mailto:next@thenextball.com?subject=Speaking%20enquiry">BOOK DARREN</a>
      </nav>

      <section id="top" className="hero cream">
        <div className="heroCourt" aria-hidden="true">
          <span className="courtVertical" />
          <span className="courtHorizontal" />
        </div>
        <p className="eyebrow heroEyebrow">BETTER DECISIONS, ONE POINT AT A TIME.</p>
        <h1><span>THE</span><span>NEXT</span><span>BALL<span className="dot">.</span></span></h1>
        <div className="heroBall ghostBall"><Ball /></div>
        <p className="heroAside">A way of thinking about decisions<br />when the plan stops being useful.</p>
        <a className="scroll" href="#disruption"><span>EXPLORE THE IDEA</span><b aria-hidden="true">↓</b></a>
      </section>

      <section id="disruption" className="disruption cream">
        <div className="storyStage">
          <div className="expectedTrack" aria-hidden="true">
            <span className="trackLabel">THE PLAN</span>
            <span className="trackLine" />
            <Ball className="trackBall" />
          </div>

          <h2>LIFE DOESN’T ALWAYS<br />SEND THE BALL<br /><em>WHERE YOU EXPECT.</em></h2>

          <div className="changeTrack" aria-hidden="true">
            <span className="changeLine first" />
            <span className="bounceMark">×</span>
            <span className="changeLine second" />
            <Ball className="changeBall" />
          </div>

          <div className="now">
            <span>Good.</span>
            <strong>NOW WHAT?</strong>
          </div>
        </div>
      </section>

      <section id="idea" className="principle navy">
        <div className="courtFrame" />
        <p className="eyebrow light">THE IDEA</p>
        <h2>YOU CAN’T PLAY<br />THE LAST BALL.</h2>
        <h3>YOU CAN ONLY PLAY<br /><span>THE NEXT ONE.</span></h3>
        <p className="quote">You can’t control every ball that comes your way. You can decide what you do with the next one.</p>
        <p className="aside">Sometimes the right decision still loses the point.</p>
        <a className="textLink" href="/the-idea">THE IDEA →</a>
      </section>

      <section className="ideaToHuman cream" aria-label="From the idea to the person">
        <p className="bridgeSmall">THE THEORY IS NEAT.</p>
        <h2>LIFE<br/><em>WASN’T.</em></h2>
        <p className="bridgeNote">Which is sort of the point.</p>
        <span className="bridgeLine" aria-hidden="true" />
      </section>

      <section id="darren" className="darren cream">
        <div className="copy">
          <p className="eyebrow">DARREN HO · AUTHOR · SPEAKER · COACH</p>
          <h2>THIS WASN’T<br /><em>THE PLAN.</em></h2>
          <p>Looking backwards, life has a funny way of looking like a plan. Living through it mostly looked like figuring out what to do next.</p>
          <div className="path">
            <span>ENTREPRENEUR</span><i>→</i><span>147KG</span><i>↘</i><span>TRIATHLON</span><i>↗</i>
            <span>WORLD CHAMPIONSHIPS</span><i>→</i><span>PICKLEBALL</span><i>↘</i><span>THE NEXT BALL</span><b className="obviously">Obviously.</b>
          </div>
          <a className="textLink dark" href="/darren">MEET DARREN →</a>
        </div>
        <div className="photoWrap">
          <span className="photoLabel">THE PERSON BEHIND THE IDEA</span>
          <img src="/images/IMG_5435.jpeg" alt="Darren Ho" />
          <span className="photoCut" aria-hidden="true" />
          <p className="photoCaption">Four different courts.<br/>Same question: what do you do next?</p>
        </div>
      </section>

      <section className="perspectives cream" aria-labelledby="perspectives-title">
        <div className="perspectiveIntro">
          <p className="eyebrow">FOUR PERSPECTIVES. ONE QUESTION.</p>
          <h2 id="perspectives-title">SAME BALL.<br/><em>DIFFERENT READ.</em></h2>
          <p>There isn’t one way to see what comes next. The court changes depending on where you’re standing.</p>
        </div>

        <div className="perspectivePlay player">
          <div className="playNumber">01</div>
          <div className="playCopy"><p className="eyebrow">PLAYER</p><h3>WHAT DO I DO<br/>WITH THE BALL<br/><em>I’VE BEEN GIVEN?</em></h3></div>
          <div className="playVisual pickleballVisual" aria-hidden="true"><span className="baseline"/><span className="net"/><span className="target">PLAY IT</span></div>
        </div>

        <div className="perspectivePlay coach">
          <div className="playNumber">02</div>
          <div className="playCopy"><p className="eyebrow">COACH</p><h3>HOW DO I HELP<br/>SOMEBODY ELSE<br/><em>SEE THE COURT?</em></h3></div>
          <div className="playVisual coachVisual" aria-hidden="true"><span className="person one"/><span className="sightline"/><span className="person two"/><span className="target">SEE IT</span></div>
        </div>

        <div className="perspectivePlay entrepreneur">
          <div className="playNumber">03</div>
          <div className="playCopy"><p className="eyebrow">ENTREPRENEUR</p><h3>WHAT HAPPENS<br/>WHEN THE PLAN<br/><em>MEETS REALITY?</em></h3></div>
          <div className="playVisual planVisual" aria-hidden="true"><span className="planStraight"/><span className="planBreak"/><span className="target">ADAPT</span></div>
        </div>

        <div className="perspectivePlay investor">
          <div className="playNumber">04</div>
          <div className="playCopy"><p className="eyebrow">INVESTOR</p><h3>WHICH<br/>OPPORTUNITIES<br/><em>AREN’T WORTH CHASING?</em></h3></div>
          <div className="playVisual investorVisual" aria-hidden="true"><span className="option a">A</span><span className="option b">B</span><span className="option c">C</span><span className="pass">LET IT GO.</span></div>
        </div>

        <div className="perspectiveOutro">
          <p>Four different courts.</p>
          <strong>Same problem.</strong>
          <h3>WHAT DO YOU<br/>DO NEXT?</h3>
        </div>
      </section>

      <section id="speaking" className="live navy">
        <p className="eyebrow light">SPEAKING</p>
        <h2>SERIOUS IDEAS.<br /><span>NOT-SO-SERIOUS<br />DELIVERY.</span></h2>
        <div className="liveBottom">
          <div><h3>THE NEXT BALL — LIVE</h3><p>A funny, thoughtful exploration of what we do when life doesn’t go according to plan.</p><small>STORYTELLING × HUMOUR × DECISION-MAKING</small></div>
          <a className="cta large" href="mailto:next@thenextball.com?subject=Bring%20Darren%20to%20our%20stage">BRING DARREN TO YOUR STAGE →</a>
        </div>
      </section>

      <section id="book" className="book cream">
        <p className="eyebrow">THE BOOK</p>
        <h2>17 CHAPTERS.<br />HUNDREDS OF DECISIONS.<br /><em>ONE QUESTION.</em></h2>
        <p className="bigQuestion">WHAT’S YOUR NEXT BALL?</p>
      </section>

      <section id="next-balls" className="final navy">
        <span className="finalLanding" aria-hidden="true" />
        <p className="eyebrow light">THE QUESTION THAT REMAINS</p>
        <h2>WHAT’S YOUR<br /><span>NEXT BALL?</span></h2>
        <a href="mailto:next@thenextball.com">next@thenextball.com</a>
        <small>Play the next one.</small>
      </section>
    </main>
  );
}
