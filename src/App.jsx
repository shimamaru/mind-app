import React, { useState } from "react";
import { Tree } from "react-d3-tree";
import treeData from "./../src/treeDate";

const containerStyles = {
  width: "100%",
  height: "100vh",
};

const customNodeStyles = {
  circle: {
    fill: "#6ec9a9",
  },
  text: {
    fill: "#333",
  },
};

function App() {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const onTreeLoad = (treeContainer) => {
    const dimensions = treeContainer.getBoundingClientRect();
    setTranslate({ x: dimensions.width / 2, y: dimensions.height / 2 });
  };

  return (
    <div style={containerStyles}>
      <Tree
        data={treeData}
        orientation="horizontal"
        translate={translate}
        onTreeLoad={onTreeLoad}
        nodeSvgShape={{ shape: "circle", shapeProps: { r: 10 } }}
        textLayout={{ textAnchor: "start", x: 15, y: -7 }}
        styles={{ nodes: customNodeStyles }}
      />
    </div>
  );
}

export default App;
