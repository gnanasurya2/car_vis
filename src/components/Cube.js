import React from "react";

const Cube = (props) => {
  return (
    <mesh>
      <boxBufferGeometry
        attach="geometry"
        args={[props.size, props.size, props.size]}
      />
      <meshPhongMaterial attach="material" color={props.color} />
    </mesh>
  );
};

export default Cube;
