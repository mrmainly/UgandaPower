import React from "react";
import Layout from "../components/header/LayoutHeader";
import styled from "styled-components";
import CoursesBody from "../components/myCoursesFolder/CoursesBody";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const myCourses = () => {
  return (
    <Layout>
      <MainDiv>
        <CoursesBody />
      </MainDiv>
    </Layout>
  );
};

export default myCourses;
