const Ball = ({className=""}:{className?:string}) => <span className={`ball ${className}`} aria-hidden="true" />;

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">THE NEXT BALL <Ball className="navBall"/></a>
        <div className="navlinks">
          <a href="#idea">THE IDEA</a><a href="#darren">DARREN</a><a href="#speaking">SPEAKING</a>
          <a href="#book">BOOK</a><a href="#next-balls">NEXT BALLS</a>
        </div>
        <a className="cta" href="mailto:next@thenextball.com?subject=Speaking%20enquiry">BOOK DARREN</a>
      </nav>

      <section id="top" className="hero cream">
        <div className="courtLine vline"/>
        <p className="eyebrow">BETTER DECISIONS, ONE POINT AT A TIME.</p>
        <h1>THE<br/>NEXT<br/>BALL<span className="dot">.</span></h1>
        <div className="heroBall"><Ball/></div>
        <a className="scroll" href="#disruption">EXPLORE THE IDEA ↓</a>
      </section>

      <section id="disruption" className="disruption cream">
        <div className="trajectory straight"><Ball/></div>
        <h2>LIFE DOESN’T ALWAYS<br/>SEND THE BALL<br/><em>WHERE YOU EXPECT.</em></h2>
        <div className="trajectory broken"><Ball/></div>
        <div className="now"><span>GOOD.</span><strong>NOW WHAT?</strong></div>
      </section>

      <section id="idea" className="principle navy">
        <div className="courtFrame"/>
        <p className="eyebrow light">THE IDEA</p>
        <h2>YOU CAN’T PLAY<br/>THE LAST BALL.</h2>
        <h3>YOU CAN ONLY PLAY<br/><span>THE NEXT ONE.</span></h3>
        <p className="quote">You can’t control every ball that comes your way. You can decide what you do with the next one.</p>
        <p className="aside">Sometimes the right decision still loses the point.</p>
        <a className="textLink" href="/the-idea">THE IDEA →</a>
      </section>

      <section id="darren" className="darren cream">
        <div className="copy">
          <p className="eyebrow">DARREN HO · AUTHOR · SPEAKER · COACH</p>
          <h2>THIS WASN’T<br/><em>THE PLAN.</em></h2>
          <p>Looking backwards, life has a funny way of looking like a plan. Living through it mostly looked like figuring out what to do next.</p>
          <div className="path">
            <span>ENTREPRENEUR</span><i>→</i><span>147KG</span><i>↘</i><span>TRIATHLON</span><i>↗</i>
            <span>WORLD CHAMPIONSHIPS</span><i>→</i><span>PICKLEBALL</span><i>↘</i><span>THE NEXT BALL</span>
          </div>
          <a className="textLink dark" href="/darren">MEET DARREN →</a>
        </div>
        <div className="photoWrap">
          <img src="/images/IMG_5435.jpeg" alt="Darren Ho" />
          <Ball className="photoBall"/>
        </div>
      </section>

      <section id="speaking" className="live navy">
        <p className="eyebrow light">SPEAKING</p>
        <h2>SERIOUS IDEAS.<br/><span>NOT-SO-SERIOUS<br/>DELIVERY.</span></h2>
        <div className="liveBottom">
          <div><h3>THE NEXT BALL — LIVE</h3><p>A funny, thoughtful exploration of what we do when life doesn’t go according to plan.</p><small>STORYTELLING × HUMOUR × DECISION-MAKING</small></div>
          <a className="cta large" href="mailto:next@thenextball.com?subject=Bring%20Darren%20to%20our%20stage">BRING DARREN TO YOUR STAGE →</a>
        </div>
      </section>

      <section id="book" className="book cream">
        <p className="eyebrow">THE BOOK</p>
        <h2>17 CHAPTERS.<br/>HUNDREDS OF DECISIONS.<br/><em>ONE QUESTION.</em></h2>
        <p className="bigQuestion">WHAT’S YOUR NEXT BALL?</p>
      </section>

      <section id="next-balls" className="final navy">
        <Ball className="finalBall"/>
        <p className="eyebrow light">THE QUESTION THAT REMAINS</p>
        <h2>WHAT’S YOUR<br/><span>NEXT BALL?</span></h2>
        <a href="mailto:next@thenextball.com">next@thenextball.com</a>
        <small>Play the next one.</small>
      </section>
    </main>
  );
}
