import React from "react";
import styled from "styled-components";
import { CoursesDiv } from "../../styled";

const MainBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 70px;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-left: 61px;
`;

const P = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
`;
const DivText = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const CoursesBody = () => {
  return (
    <MainBody>
      <DivText>
        <P>Мои курсы</P>
      </DivText>
      <Div>
        <CoursesDiv>sgre</CoursesDiv>
        <Text>Курс основ программирования </Text>
      </Div>
    </MainBody>
  );
};

export default CoursesBody;
