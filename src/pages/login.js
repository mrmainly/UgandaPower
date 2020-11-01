import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Cookie from "js-cookie";
import history from "./../components/history";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  border: 2px solid #0000;
  border-radius: 4px;
  width: 400px;
  height: 50px;
`;

const Button = styled.button`
  border: 2px solid #0000;
  border-radius: 4px;
  width: 400px;
  height: 50px;
`;
const Login = ({ history }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const PostFunc = () => {
    axios({
      url: "https://1dfd378a8e4a.ngrok.io/graphql",
      method: "POST",
      data: {
        query: `
          mutation{
            authUser(data:{
              login: "${login}",
              
              password: "${password}"
            }){
              token
            }
          }
            `,
      },
    }).then((res) => {
      console.log(res);
      if (res.status == 200) {
        Cookie.set("jwttoken", res.data.data.authUser.token);
        history.push("/");
      }
    });
  };

  return (
    <Container>
      <Input
        placeholder="login"
        value={login}
        onChange={(e) => {
          setLogin(e.target.value);
        }}
      />
      <Input
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button onClick={PostFunc}>Войти</Button>
    </Container>
  );
};

export default Login;
