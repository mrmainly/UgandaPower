import React from "react";
import styled from "styled-components";
import Layout from "../components/header/LayoutHeader";
import HumanGuitar from "../components/mainPagesUganda/HumanGuitar";
import CoursesList from "../components/mainPagesUganda/СoursesList";
const mainPagesUganda = () => {
  return (
    <Layout>
      <HumanGuitar />
      <CoursesList />
    </Layout>
  );
};

export default mainPagesUganda;
