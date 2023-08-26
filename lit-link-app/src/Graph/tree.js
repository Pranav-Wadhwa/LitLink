import React from "react";
import RootNode from "./rootNode"
const MemoizedRootNode = React.memo(RootNode);
const Tree = ({rootObj, showPartner}) => {
  
  return (
    <div>
      <MemoizedRootNode
        rootObj={rootObj}
        showPartner={showPartner}
        svgCenter={625}
      ></MemoizedRootNode>
    </div>
  );
};

export default Tree;
