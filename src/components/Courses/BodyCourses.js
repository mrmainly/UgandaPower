import React from "react";
import styled from "styled-components";
import { CoursesDiv } from "../../styled";
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width: 750px;
`;

const BodyCourses = () => {
  return (
    <MainDiv>
      <CoursesDiv>wefwef</CoursesDiv>
    </MainDiv>
  );
};

export default BodyCourses;
