import React from "react";
import {
  createPaths,
  constructTree,
  calculateNumberOfNodesLeftAndRight,
  createPathsCircle,
  constructGraph,
} from "./utils";

const RootNode = ({ rootObj, childTapped, svgCenter, currentDescription }) => {
  // const rootNode = constructTree(rootObj);
  // calculateNumberOfNodesLeftAndRight(rootNode)
  const nodes = constructGraph(rootObj);

  return (
    <>
      <svg width="1400" height="1400" xmlns="http://www.w3.org/2000/svg">
        {/* <g>{createPaths(rootNode, [svgCenter, 200], showPartner)}</g> */}
        <g>{createPathsCircle(nodes, [svgCenter, 700], childTapped, currentDescription)}</g>
      </svg>
    </>
  );
};

export default RootNode;
