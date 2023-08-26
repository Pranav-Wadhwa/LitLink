import React from "react";
import RootNode from "./rootNode"
const MemoizedRootNode = React.memo(RootNode);
const Tree = ({rootObj, childTapped, currentDescription}) => {
  
  return (
    <div>
      <MemoizedRootNode
        rootObj={rootObj}
        childTapped={childTapped}
        svgCenter={700}
        currentDescription={currentDescription}
      ></MemoizedRootNode>
    </div>
  );
};

export default Tree;
