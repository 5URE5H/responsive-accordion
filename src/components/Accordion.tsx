export const Accordion = ({ accordion, expandedId, click }) => {
  const isExpanded = accordion.id === expandedId;

  return (
    <div className="accordion">
      <div className="head" onClick={() => click(accordion.id)}>
        {accordion.name}
      </div>
      <div className={`body ${isExpanded ? "active" : ""}`}>
        <div>{accordion.body}</div>
      </div>
    </div>
  );
};
