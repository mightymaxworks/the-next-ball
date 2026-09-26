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
          <div className="playVisual courtDiagram playerCourt" aria-hidden="true"><span className="courtNet"/><span className="kitchen top"/><span className="kitchen bottom"/><span className="courtPlayer near">●</span><span className="paddle nearPaddle">◐</span><span className="shotLine"/><span className="landingSpot">×</span><span className="diagramNote">YOUR BALL. YOUR DECISION.</span></div>
        </div>

        <div className="perspectivePlay coach">
          <div className="playNumber">02</div>
          <div className="playCopy"><p className="eyebrow">COACH</p><h3>HOW DO I HELP<br/>SOMEBODY ELSE<br/><em>SEE THE COURT?</em></h3></div>
          <div className="playVisual courtDiagram coachCourt" aria-hidden="true"><span className="courtNet"/><span className="kitchen top"/><span className="kitchen bottom"/><span className="courtPlayer coachMark">●</span><span className="courtPlayer athleteMark">●</span><span className="sightCone"/><span className="landingSpot">×</span><span className="diagramNote">HELP THEM SEE THE OPEN COURT.</span></div>
        </div>

        <div className="perspectivePlay entrepreneur">
          <div className="playNumber">03</div>
          <div className="playCopy"><p className="eyebrow">ENTREPRENEUR</p><h3>WHAT HAPPENS<br/>WHEN THE PLAN<br/><em>MEETS REALITY?</em></h3></div>
          <div className="playVisual decisionDiagram" aria-hidden="true"><div className="decisionPlan"><small>THE PLAN</small><span className="planArrow">→</span><b>EXPECTED</b></div><div className="realityHit"><span>×</span><small>REALITY</small></div><div className="decisionResponse"><span className="turnArrow">↘</span><b>ADAPT</b></div><p>Plans are useful.<br/>Until reality gets a vote.</p></div>
        </div>

        <div className="perspectivePlay investor">
          <div className="playNumber">04</div>
          <div className="playCopy"><p className="eyebrow">INVESTOR</p><h3>WHICH<br/>OPPORTUNITIES<br/><em>AREN’T WORTH CHASING?</em></h3></div>
          <div className="playVisual choiceDiagram" aria-hidden="true"><div className="incoming"><small>OPPORTUNITIES</small><span>●</span><span>●</span><span>●</span></div><div className="decisionGate"><b>DO I NEED<br/>TO HIT THIS?</b></div><div className="choiceOutcomes"><span className="hit">PLAY</span><span className="leave">LET IT GO.</span></div></div>
        </div>

        <div className="perspectiveOutro">
          <p>Four different courts.</p>
          <strong>Same problem.</strong>
          <h3>WHAT DO YOU<br/>DO NEXT?</h3>
        </div>
      </section>

      <section id="speaking" className="live navy">
        <div className="liveTop">
          <p className="eyebrow light">THE NEXT BALL — LIVE</p>
          <p className="stageAside">The ideas are serious.<br/>The delivery doesn’t have to be.</p>
        </div>
        <h2>SERIOUS IDEAS.<br /><span>NOT-SO-SERIOUS<br />DELIVERY.</span></h2>
        <div className="liveRule" aria-hidden="true"><span>LAUGH</span><i>→</i><span>STORY</span><i>→</i><span>INSIGHT</span><i>→</i><span>NEXT BALL</span></div>
        <div className="liveBottom">
          <div><h3>KEYNOTE × STORYTELLING × STAND-UP</h3><p>A live exploration of decisions, change and what happens when the plan meets reality.</p><small>LEADERSHIP · ENTREPRENEURSHIP · SPORT · CHANGE · RESILIENCE</small></div>
          <a className="cta large" href="mailto:next@thenextball.com?subject=Bring%20Darren%20to%20our%20stage">BRING DARREN TO YOUR STAGE →</a>
        </div>
      </section>

      <section id="book" className="book cream">
        <div className="bookMeta"><p className="eyebrow">THE BOOK</p><span>BETTER DECISIONS, ONE POINT AT A TIME.</span></div>
        <div className="bookGrid">
          <div>
            <h2>THE IDEA<br/><em>STARTED WITH<br/>A BALL.</em></h2>
            <p className="bookLead">Seventeen chapters about decisions in sport, life and business — and why the next decision matters more than the last result.</p>
            <a className="textLink dark" href="/book">EXPLORE THE BOOK →</a>
          </div>
          <div className="bookObject" aria-label="The Next Ball book placeholder">
            <div className="bookCover"><small>THE</small><strong>NEXT<br/>BALL.</strong><i>●</i><span>DARREN HO</span></div>
            <p>17 chapters.<br/>Hundreds of decisions.<br/><em>One question.</em></p>
          </div>
        </div>
      </section>

      <section id="next-balls" className="nextBalls cream">
        <div className="nextBallsHead"><p className="eyebrow">NEXT BALLS</p><h2>SMALL IDEAS.<br/><em>USEFUL COURTS.</em></h2><p>Notes, observations and things worth thinking about before the next point begins.</p></div>
        <article className="nextStory"><span>001</span><div><p>DECISIONS</p><h3>SOMETIMES THE RIGHT DECISION HAS THE WRONG RESULT.</h3></div><b>→</b></article>
        <article className="nextStory"><span>002</span><div><p>ENTREPRENEURSHIP</p><h3>EVERY ENTREPRENEUR HAS A PLAN. THEN CUSTOMERS GET INVOLVED.</h3></div><b>→</b></article>
        <a className="textLink dark" href="/next-balls">READ THE NEXT BALLS →</a>
      </section>

      <section id="one-to-one" className="oneToOne cream">
        <p className="eyebrow">ONE TO ONE</p>
        <div className="oneGrid">
          <h2>SOMETIMES<br/>YOU’RE TOO<br/><em>CLOSE TO<br/>THE BALL.</em></h2>
          <div><p>Sometimes you don’t need someone to give you the answer. You need someone who can help you see the court.</p><a className="textLink dark" href="mailto:next@thenextball.com?subject=One%20to%20One">SEE THE COURT →</a></div>
        </div>
      </section>

      <section id="finale" className="final navy">
        <span className="finalLanding" aria-hidden="true" />
        <p className="eyebrow light">THE QUESTION THAT REMAINS</p>
        <h2>WHAT’S YOUR<br /><span>NEXT BALL?</span></h2>
        <a href="mailto:next@thenextball.com">next@thenextball.com</a>
        <small>Play the next one.</small>
      </section>
    </main>
  );
}
