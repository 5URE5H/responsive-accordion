import { useState } from "react";
import { Accordion } from "./Accordion";

export const Accordions = ({ accordions, idChanged }) => {
  const [expandedId, setExpandedId] = useState(accordions[0].id);

  const onClick = (id: number) => {
    setExpandedId(id);
    idChanged(id);
  };

  return (
    <div className="accordion-container">
      {accordions.map((accordion) => {
        return (
          <Accordion
            key={accordion.id}
            accordion={accordion}
            expandedId={expandedId}
            click={onClick}
          />
        );
      })}
    </div>
  );
};
