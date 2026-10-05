import { useEffect, useState } from "react";
import "./App.css";

const weddingDate = new Date("2026-12-12T19:00:00+05:30");

const events = [
  {
    icon: "/images/haldi_icon.png",
    title: "Haldi",
    date: "11 December 2026",
    time: "11:00 PM onwards",
    description:
      "A joyful celebration filled with colour, laughter, blessings and togetherness.",
  },
  {
   icon: "/images/mehendi_icon.png",
    title: "Mehendi",
    date: "11 December 2026",
    time: "11:00 PM onwards",
    description:
      "An intimate celebration of beautiful mehendi, music and cherished memories.",
  },
  {
    icon: "/images/sangeet_icon.png",
    title: "Sangeet",
    date: "11 December 2026",
    time: "Evening",
    description:
      "An evening of music, dance, laughter and unforgettable moments.",
  },
  {
    icon: "/images/wedding_icon.png",
    title: "Wedding",
    date: "12 December 2026",
    time: "7:00 PM",
    venue: "Singla Resort · Ganganagar, Rajasthan",
    description:
      "The sacred beginning of a beautiful new chapter in the lives of Pragyan and Kartik.",
    special: true,
  },
  {
    icon: "/images/rings_reception_icon.png",
    title: "Reception",
    date: "19 December 2026",
    time: "7.30 PM onwards",
    venue: "River Inn Resort · Sambalpur, Odisha",
    description:
      "An evening to celebrate love, family and the beautiful journey ahead.",
  },
];

function getCountdown() {
  const difference = weddingDate.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  return {
    days: String(
      Math.floor(difference / (1000 * 60 * 60 * 24))
    ).padStart(2, "0"),

    hours: String(
      Math.floor((difference / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0"),

    minutes: String(
      Math.floor((difference / (1000 * 60)) % 60)
    ).padStart(2, "0"),

    seconds: String(
      Math.floor((difference / 1000) % 60)
    ).padStart(2, "0"),
  };
}

function Countdown() {
  const [time, setTime] = useState(getCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <strong>{time.days}</strong>
        <span>Days</span>
      </div>

      <div className="countdown-divider">:</div>

      <div className="countdown-item">
        <strong>{time.hours}</strong>
        <span>Hours</span>
      </div>

      <div className="countdown-divider">:</div>

      <div className="countdown-item">
        <strong>{time.minutes}</strong>
        <span>Minutes</span>
      </div>

      <div className="countdown-divider">:</div>

      <div className="countdown-item">
        <strong>{time.seconds}</strong>
        <span>Seconds</span>
      </div>
    </div>
  );
}

function FloatingPetals() {
  return (
    <div className="petal-layer" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, index) => (
        <span
          key={index}
          className="petal"
          style={{
            left: `${(index * 17) % 100}%`,
            animationDelay: `${(index % 8) * 1.1}s`,
            animationDuration: `${8 + (index % 5)}s`,
          }}
        >
          ❀
        </span>
      ))}
    </div>
  );
}

function GoldParticles() {
  return (
    <div className="particle-layer" aria-hidden="true">
      {Array.from({ length: 30 }).map((_, index) => (
        <span
          key={index}
          style={{
            left: `${(index * 31) % 100}%`,
            top: `${(index * 43) % 100}%`,
            animationDelay: `${(index % 10) * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}

function Ornament() {
  return (
    <div className="ornament">
      <span />
      <b>✦</b>
      <span />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>

      <h2>{title}</h2>

      <Ornament />

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  );
}

function PhotoPlaceholder({ label }) {
  const images = {
    Bride: "/images/IMG_2249 copy.png",
    Groom: "/images/IMG_2250.png",
  };

  const image = images[label];

  return (
    <div className="photo-frame">
      {image ? (
        <img
          src={image}
          alt={label}
          className="couple-photo"
        />
      ) : (
        <div className="photo-inner">
          <div className="photo-symbol">✦</div>
          <span>{label}</span>
          <small>Photo coming soon</small>
        </div>
      )}
    </div>
  );
}

function App() {
  const [opened, setOpened] = useState(false);
  const [curtainOpened, setCurtainOpened] =
    useState(false);
  const [musicOn, setMusicOn] = useState(false);

  /* =========================================
     AUTOMATIC CURTAIN OPEN
  ========================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurtainOpened(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  /* =========================================
     SCROLL REVEAL
  ========================================= */

  useEffect(() => {
    if (!opened) return;

    const elements =
      document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [opened]);

   
const weddingMap =
  "https://maps.app.goo.gl/PAzWMaZygTnUS5SUA?g_st=ac";
  const receptionMap =
    "https://www.google.com/maps/search/?api=1&query=River+Inn+Resort+Sambalpur+Odisha";

  const whatsappUrl =
    "https://wa.me/917608921654?text=Hello%20Prayag%2C%20I%27m%20excited%20to%20celebrate%20Pragyan%20%26%20Kartik%27s%20wedding!";

  const receptionCalendarUrl =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pragyan+%26+Kartik+Reception&dates=20261219%2F20261220&details=Reception+of+Pragyan+%26+Kartik&location=River+Inn+Resort%2C+Sambalpur%2C+Odisha";
  return (
    <div className="wedding-page">
      <FloatingPetals />
      <GoldParticles />

      {/* =========================================
          OPENING SCREEN
      ========================================= */}

      <section
        className={`opening-screen ${
          curtainOpened
            ? "curtain-opened"
            : ""
        } ${
          opened ? "opened" : ""
        }`}
      >
        <div className="opening-curtain curtain-left">
          <div className="curtain-pattern" />
        </div>

        <div className="opening-curtain curtain-right">
          <div className="curtain-pattern" />
        </div>

        <div className="opening-border" />

        <div className="opening-content">
          <div className="mandala">
            <div className="mandala-ring ring-one" />
            <div className="mandala-ring ring-two" />
            <div className="mandala-ring ring-three" />

            <div className="mandala-center">
              ॐ
            </div>
          </div>

          <p className="ganesh">
            ॥ श्री गणेशाय नमः ॥
          </p>

          <div className="opening-line" />

          <p className="opening-small">
            Together with their families
          </p>

          <p className="opening-request">
            request the pleasure of your presence
          </p>

          <h1 className="opening-names">
            <span>Pragyan</span>
            <em>&</em>
            <span>Kartik</span>
          </h1>

          <p className="opening-tagline">
            A Celebration of Love & Togetherness
          </p>

          <div className="opening-date">
            <span>12</span>
            <i>•</i>
            <span>12</span>
            <i>•</i>
            <span>2026</span>
          </div>

          <p className="opening-location">
            Ganganagar · Rajasthan
          </p>

          <button
            className={`reveal-button ${
              curtainOpened
                ? "button-visible"
                : ""
            }`}
            onClick={() => setOpened(true)}
          >
            <span>✦</span>
            Open Invitation
            <span>✦</span>
          </button>

          <p className="tap-hint">
            Tap to unveil
          </p>
        </div>
      </section>

      {/* =========================================
          MAIN INVITATION
      ========================================= */}

      <main className="invitation">

        {/* MUSIC */}

        <button
          className={`music-button ${
            musicOn
              ? "music-active"
              : ""
          }`}
          onClick={() =>
            setMusicOn(!musicOn)
          }
          aria-label="Toggle music"
        >
          <span>
            {musicOn ? "♫" : "♪"}
          </span>

          <small>
            {musicOn
              ? "Music On"
              : "Music"}
          </small>
        </button>

        {/* =========================================
            HERO
        ========================================= */}

        <section className="hero-section">
          <div className="hero-border" />

          <div className="diya diya-left">
            🪔
          </div>

          <div className="diya diya-right">
            🪔
          </div>

          <div className="hero-content reveal">
            <p className="eyebrow">
              ॥ शुभ विवाह ॥
            </p>

            <p className="hero-blessing">
              With the blessings of our families
            </p>

            <h1 className="hero-names">
              <span>Pragyan</span>
              <em>&</em>
              <span>Kartik</span>
            </h1>

            <p className="hero-description">
              invite you to be a part of their
              <br />
              beautiful beginning.
            </p>

            <Ornament />

            <div className="hero-date">
              <div>
                <strong>12</strong>
                <span>DECEMBER</span>
              </div>

              <div className="date-divider" />

              <div>
                <strong>2026</strong>
                <span>7:00 PM</span>
              </div>
            </div>

            <p className="hero-location">
              ✦ &nbsp; Singla Resort · Ganganagar, Rajasthan &nbsp; ✦
            </p>

            <Countdown />
          </div>

          <div className="scroll-indicator">
            <span>
              Scroll to explore
            </span>
            <b>↓</b>
          </div>
        </section>

        {/* =========================================
            COUPLE
        ========================================= */}

        <section className="couple-section">
          <div className="section-container">

            <SectionHeading
              eyebrow="THE COUPLE"
              title="Two Hearts, One Journey"
              description="And so their beautiful story begins..."
            />

            <div className="couple-grid">

              <div className="person reveal">
                <PhotoPlaceholder label="Bride" />

                <p className="person-role">
                  THE BRIDE
                </p>

                <h3>
                  Pragyan
                </h3>

                <p className="parents">
                  Daughter of
                  <br />
                  <strong>
                    Mrs Leena Nanda & Mr Prasant Dash
                  </strong>
                </p>
              </div>

              <div className="heart-center reveal">
                <div>♥</div>
                <span>
                  Forever
                </span>
              </div>

              <div className="person reveal">
                <PhotoPlaceholder label="Groom" />

                <p className="person-role">
                  THE GROOM
                </p>

                <h3>
                  Kartik
                </h3>

                <p className="parents">
                  Son of
                  <br />
                  <strong>
                    Mrs Kavita Sharma & Mr Shyam Sunder Sharma
                  </strong>
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            GALLERY
        ========================================= */}

        <section className="gallery-section">
          <div className="section-container">

            <SectionHeading
              eyebrow="OUR STORY"
              title="Moments Before Forever"
              description="A little glimpse of the memories that brought them here."
            />

            <div className="gallery-grid">

              <div className="gallery-card gallery-large reveal">
                <PhotoPlaceholder label="Our Story" />
              </div>

              <div className="gallery-card reveal">
                <PhotoPlaceholder label="Moments" />
              </div>

              <div className="gallery-card reveal">
                <PhotoPlaceholder label="Forever" />
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            EVENTS
        ========================================= */}

        <section className="events-section">
          <div className="section-container">

            <SectionHeading
              eyebrow="THE CELEBRATIONS"
              title="Wedding Festivities"
              description="Come celebrate every beautiful moment with us."
            />

            <div className="events-list">

              {events.map(
                (event, index) => (
                  <article
                    key={event.title}
                    className={`event-card reveal ${
                      event.special
                        ? "event-special"
                        : ""
                    }`}
                  >
                    <div className="event-number">
                      0{index + 1}
                    </div>

                    <div className="event-symbol">
  <img
    src={event.icon}
    alt={event.title}
    className="event-icon-image"
  />
</div>

                    <div className="event-content">

                      <p className="event-label">
                        {event.special
                          ? "THE SACRED CEREMONY"
                          : "CELEBRATION"}
                      </p>

                      <h3>
                        {event.title}
                      </h3>

                      <div className="event-meta">
                        <span>
                          ◆ {event.date}
                        </span>

                        <span>
                          ◷ {event.time}
                        </span>
                      </div>

                      {event.venue && (
                        <p className="event-venue">
                          ♢ {event.venue}
                        </p>
                      )}

                      <p className="event-description">
                        {event.description}
                      </p>

                    </div>
                  </article>
                )
              )}

            </div>
          </div>
        </section>

        {/* =========================================
            WEDDING VENUE
        ========================================= */}

        <section className="venue-section">
          <div className="section-container">

            <SectionHeading
              eyebrow="THE SACRED DAY"
              title="The Wedding"
              description="Your presence and blessings will make our special day complete."
            />

            <div className="venue-card reveal">

              <div className="venue-om">
                ॐ
              </div>

              <p className="venue-date">
                SATURDAY · 12 DECEMBER 2026
              </p>

              <h3>
                Pragyan <span>&</span> Kartik
              </h3>

              <div className="venue-details">

                <div>
                  <span>
                    TIME
                  </span>

                  <strong>
                    7:00 PM
                  </strong>
                </div>

                <div>
                  <span>
                    VENUE
                  </span>

                  <strong>
                    Singla Resort 
                  </strong>
                </div>

                <div>
                  <span>
                    LOCATION
                  </span>

                  <strong>
                    Ganganagar, Rajasthan
                  </strong>
                </div>

              </div>

              <div className="button-row">

                <a
                  href={weddingMap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button"
                >
                  ♢ View Location
                </a>

                

              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            RECEPTION
        ========================================= */}

        <section className="reception-section">
          <div className="reception-card reveal">

            <p className="eyebrow">
              ONE MORE CELEBRATION
            </p>

            <div className="reception-symbol">
              ✦
            </div>

            <h2>
              Reception
            </h2>

            <Ornament />

            <p className="reception-date">
              SATURDAY . 19 DECEMBER 2026
            </p>
            <p className="reception-time">
  7:30 PM onwards
</p>

            <h3>
              River Inn Resort
            </h3>

            <p className="reception-location">
              Sambalpur, Odisha
            </p>

            <div className="button-row">
  <a
    href={receptionMap}
    target="_blank"
    rel="noreferrer"
    className="outline-button"
  >
    ♢ View Location
  </a>

  <a
    href={receptionCalendarUrl}
    target="_blank"
    rel="noreferrer"
    className="gold-button"
  >
    + Add to Calendar
  </a>
</div>

          </div>
        </section>

        {/* =========================================
            RSVP
        ========================================= */}

        

        {/* =========================================
            FAMILY
        ========================================= */}

        <section className="family-section">
          <div className="section-container">

            <SectionHeading
              eyebrow="WITH LOVE & BLESSINGS"
              title="Our Families"
              description="With the love and blessings of our families, we begin this new chapter."
            />

            <div className="family-grid reveal">

              <div>
                <span>✦</span>

                <p>
                  With the blessings of
                </p>

                <h3>
                  Mrs Leena Nanda & Mr Prasant Dash
                </h3>

                <small>
                  Family of Pragyan
                </small>
              </div>

              <div className="family-heart">
                ♡
              </div>

              <div>
                <span>✦</span>

                <p>
                  With the blessings of
                </p>

                <h3>
                  Mrs Kavita Sharma & Mr Shyam Sunder Sharma 
                </h3>

                <small>
                  Family of Kartik
                </small>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            CLOSING
        ========================================= */}

        <section className="closing-section">

          <div className="closing-border" />

          <div className="closing-content reveal">

            <div className="closing-mandala">
              ॐ
            </div>

            <p className="ganesh">
              शुभ विवाह
            </p>

            <h2>
              Pragyan
              <em>&</em>
              Kartik
            </h2>

            <p className="closing-message">
              Two souls.
              <br />
              One beautiful journey.
              <br />
              A lifetime of love.
            </p>

            <Ornament />

            <p className="closing-date">
              12 · 12 · 2026
            </p>

            <p className="thank-you">
              Thank you for being a part of our special day.
            </p>

          </div>

          <footer>
            Hosted with <span>♥</span> by Dash Family
          </footer>

        </section>
      </main>
    </div>
  );
}

export default App;