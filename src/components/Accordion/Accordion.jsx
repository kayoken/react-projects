import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="App Accordion">
      <Panel
        title="One"
        index={1}
        onClick={handleClick}
        activeIndex={activeIndex}
      >
        Butcher mumblecore meggings cornhole everyday carry humblebrag, pork
        belly celiac tbh chia tattooed. Austin shabby chic poke, woke meh
        asymmetrical intelligentsia raw denim 8-bit ramps banh mi. Butcher
        sartorial woke seitan hell of beard copper mug street art everyday carry
        organic venmo farm-to-table waistcoat lo-fi intelligentsia. Put a bird
        on it williamsburg palo santo four dollar toast enamel pin try-hard
        mustache kogi cardigan kombucha vinyl green juice jianbing disrupt af.
        Drinking vinegar offal edison bulb, af coloring book XOXO franzen four
        dollar toast 8-bit pabst helvetica man bun whatever hammock
        vexillologist. Succulents polaroid helvetica tumeric, readymade cornhole
        tumblr brunch. Subway tile banh mi hashtag franzen shaman palo santo meh
        heirloom vaporware +1 humblebrag etsy master cleanse vice.
      </Panel>
      <Panel
        title="Two"
        index={2}
        onClick={handleClick}
        activeIndex={activeIndex}
      >
        Butcher mumblecore meggings cornhole everyday carry humblebrag, pork
        belly celiac tbh chia tattooed. Austin shabby chic poke, woke meh
        asymmetrical intelligentsia raw denim 8-bit ramps banh mi. Butcher
        sartorial woke seitan hell of beard copper mug street art everyday carry
        organic venmo farm-to-table waistcoat lo-fi intelligentsia. Put a bird
        on it williamsburg palo santo four dollar toast enamel pin try-hard
        mustache kogi cardigan kombucha vinyl green juice jianbing disrupt af.
        Drinking vinegar offal edison bulb, af coloring book XOXO franzen four
        dollar toast 8-bit pabst helvetica man bun whatever hammock
        vexillologist. Succulents polaroid helvetica tumeric, readymade cornhole
        tumblr brunch. Subway tile banh mi hashtag franzen shaman palo santo meh
        heirloom vaporware +1 humblebrag etsy master cleanse vice.
      </Panel>
      <Panel
        title="Three"
        index={3}
        onClick={handleClick}
        activeIndex={activeIndex}
      >
        Butcher mumblecore meggings cornhole everyday carry humblebrag, pork
        belly celiac tbh chia tattooed. Austin shabby chic poke, woke meh
        asymmetrical intelligentsia raw denim 8-bit ramps banh mi. Butcher
        sartorial woke seitan hell of beard copper mug street art everyday carry
        organic venmo farm-to-table waistcoat lo-fi intelligentsia. Put a bird
        on it williamsburg palo santo four dollar toast enamel pin try-hard
        mustache kogi cardigan kombucha vinyl green juice jianbing disrupt af.
        Drinking vinegar offal edison bulb, af coloring book XOXO franzen four
        dollar toast 8-bit pabst helvetica man bun whatever hammock
        vexillologist. Succulents polaroid helvetica tumeric, readymade cornhole
        tumblr brunch. Subway tile banh mi hashtag franzen shaman palo santo meh
        heirloom vaporware +1 humblebrag etsy master cleanse vice.
      </Panel>
      <Panel
        title="Four"
        index={4}
        onClick={handleClick}
        activeIndex={activeIndex}
      >
        Butcher mumblecore meggings cornhole everyday carry humblebrag, pork
        belly celiac tbh chia tattooed. Austin shabby chic poke, woke meh
        asymmetrical intelligentsia raw denim 8-bit ramps banh mi. Butcher
        sartorial woke seitan hell of beard copper mug street art everyday carry
        organic venmo farm-to-table waistcoat lo-fi intelligentsia. Put a bird
        on it williamsburg palo santo four dollar toast enamel pin try-hard
        mustache kogi cardigan kombucha vinyl green juice jianbing disrupt af.
        Drinking vinegar offal edison bulb, af coloring book XOXO franzen four
        dollar toast 8-bit pabst helvetica man bun whatever hammock
        vexillologist. Succulents polaroid helvetica tumeric, readymade cornhole
        tumblr brunch. Subway tile banh mi hashtag franzen shaman palo santo meh
        heirloom vaporware +1 humblebrag etsy master cleanse vice.
      </Panel>
      <Panel
        title="Five"
        index={5}
        onClick={handleClick}
        activeIndex={activeIndex}
      >
        Butcher mumblecore meggings cornhole everyday carry humblebrag, pork
        belly celiac tbh chia tattooed. Austin shabby chic poke, woke meh
        asymmetrical intelligentsia raw denim 8-bit ramps banh mi. Butcher
        sartorial woke seitan hell of beard copper mug street art everyday carry
        organic venmo farm-to-table waistcoat lo-fi intelligentsia. Put a bird
        on it williamsburg palo santo four dollar toast enamel pin try-hard
        mustache kogi cardigan kombucha vinyl green juice jianbing disrupt af.
        Drinking vinegar offal edison bulb, af coloring book XOXO franzen four
        dollar toast 8-bit pabst helvetica man bun whatever hammock
        vexillologist. Succulents polaroid helvetica tumeric, readymade cornhole
        tumblr brunch. Subway tile banh mi hashtag franzen shaman palo santo meh
        heirloom vaporware +1 humblebrag etsy master cleanse vice.
      </Panel>
    </div>
  );
};

const Panel = ({ children, title, index, onClick, activeIndex }) => {
  const isActive = index === activeIndex;
  return (
    <div>
      <h3 onClick={(e) => onClick(index)}>{title}</h3>
      {isActive && <p>{children}</p>}
    </div>
  );
};

export default Accordion;
