import { React, useState } from "react";
import { CIRCLE_RADIUS } from "./utils";
import "./Node.css";

const NodeComp = ({ node, nodePos, isPartner, childTapped, currentDescription }) => {
  const [showDetails, setShowDetails] = useState(false);
  const showDetailsBox = () => {
      return (
        <rect
          x={nodePos[0]}
          y={nodePos[1]}
          width="200"
          height="100"
          stroke="green"
          fill="white"
          strokeWidth="2"
          className="details-box"
          opacity={showDetails ? 1 : 0}
        />
      );
  };
  // const handleMouseEnter = () => {
  //   setShowDetails(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowDetails(false);
  // };

  const handleClick = () => {
    console.log(document);
    childTapped(node.bio);
  }

  const displayName = () => {
    return (
      <text x={nodePos[0]} y={nodePos[1]} className="node-text" textAnchor="middle" dy=".35em">
        {node.name}
      </text>
    )
  }
  return (
    <>
      <circle
        key={nodePos[0] + nodePos[1]}
        cx={nodePos[0]}
        cy={nodePos[1]}
        r={CIRCLE_RADIUS}
        stroke={currentDescription == node.bio ? "#44C4FB" : "#282c34"}
        fill="white"
        strokeWidth="4"
        onClick={handleClick}
        className="node"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        
      </circle>
      {displayName()  }
      {/* {showDetailsBox()} */}
    </>
  );
};

export default NodeComp;
