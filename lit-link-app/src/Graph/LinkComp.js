import { React, useState } from "react";

const LinkComp = ({ node, nodePos, relationship, childTapped, currentDescription }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [mousePos, setMousePos] = useState([]);

  const showDetailsBox = () => {
    if (showDetails) {
      return (
        <text x={mousePos[0]} y={mousePos[1]}>
          {relationship.description}
        </text>
      );
    } else {
      return [];
    }
  };
  const handleClick = (event) => {
    childTapped(relationship.description);
    // setShowDetails(!showDetails);
    // setMousePos([event.clientX, event.clientY])
  };

  return (
    <>
      <line
        x1={relationship.relationNode.circlePos[0]}
        y1={relationship.relationNode.circlePos[1]}
        x2={node.circlePos[0]}
        y2={node.circlePos[1]}
        stroke={currentDescription == relationship.description ? "#44C4FB" : "white"}
        stroke-width="6.5"
        onClick={handleClick}
        style={{'cursor': 'pointer'}}
      />
      {showDetailsBox()}
    </>
  );
};

export default LinkComp;
