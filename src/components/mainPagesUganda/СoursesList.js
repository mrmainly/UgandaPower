import React from "react";
import styled from "styled-components";
const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;
const CoursesText = styled.p`
  font-size: 18px;
  color: gray;
`;
const CoursesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width: 750px;
`;
const CoursesBlock = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  width: 215px;
  height: 215px;
  background: #ffffff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const CoursesList = () => {
  return (
    <MainDiv>
      <CoursesDiv>
        <CoursesBlock>ewf</CoursesBlock>
        <CoursesBlock>ewf</CoursesBlock>
        <CoursesBlock>ewf</CoursesBlock>
        <CoursesBlock>ewf</CoursesBlock>
        <CoursesBlock>ewf</CoursesBlock>
        <CoursesBlock>ewf</CoursesBlock>
      </CoursesDiv>
    </MainDiv>
  );
};

export default CoursesList;
