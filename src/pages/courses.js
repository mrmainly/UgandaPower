import React from "react";
import styled from "styled-components";
import Layout from "../components/header/LayoutHeader";
import BodyCourses from "../components/Courses/BodyCourses";
const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const courses = () => {
  return (
    <Layout>
      <MainDiv>
        <BodyCourses />
      </MainDiv>
    </Layout>
  );
};

export default courses;
