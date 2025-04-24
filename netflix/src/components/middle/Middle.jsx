import { useRef, useState, useEffect, React } from "react";
import "./Middle.css";
import Poster from "../posters/Poster";
import posters from "../posters/posters.json";
import Feature from "../features/Feature";
import features from "../features/features.json";
import {ReactComponent as IconSvg1} from '../Assets/icon1.svg'
import {ReactComponent as IconSvg2} from '../Assets/icon2.svg'
import {ReactComponent as IconSvg3} from '../Assets/icon3.svg'
import {ReactComponent as IconSvg4} from '../Assets/icon4.svg'

const Middle = () => {
  const scrollRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const icons = [<IconSvg1 />, <IconSvg2 />, <IconSvg3 />, <IconSvg4 />];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
  
    if (direction === "right") {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
    } else {
      container.scrollTo({ left: 0, behavior: "smooth" });
    }
  };
 

  const checkScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    setShowPrev(container.scrollLeft > 0);
    setShowNext(container.scrollLeft + container.clientWidth < container.scrollWidth);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  return (
    <div className="trending-container">
      <h2>Trending Now</h2>
      <div className="scroll-container-btn">
        {showPrev && <button onClick={() => scroll("left")}>⬅️</button>}
        <div
          className="posters-scroll-container"
          ref={scrollRef}
          onScroll={checkScroll}
        >
          <div className="posters-list">
            {posters.imageUrl.map((url, index) => (
              <Poster key={index} imageUrl={url} />
            ))}
          </div>
        </div>
        {showNext && <button onClick={() => scroll("right")}>➡️</button>}
      </div>

      <h2>More reasons to join</h2>
      <div className="feature-list">
        {features.map((feature, index) => (
          <Feature
            key={index}
            headline={feature.headline}
            description={feature.description}
            svgIcon={icons[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Middle;
