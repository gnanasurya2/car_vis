import React, { useRef } from "react";
import { Canvas, useThree, extend, useFrame } from "react-three-fiber";
import Cube from "./Cube";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import styled from "styled-components";

const Board = styled(Canvas)`
  width: 70%;
  background-color: ${(props) => props.color};
  position: fixed;
  left: 30%;
`;
extend({ OrbitControls });
const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};
const Scene = (props) => {
  return (
    <Board style={{ height: "100vh", width: "70%" }} color={props.background}>
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube color={props.color} size={props.size} />
    </Board>
  );
};

export default Scene;
