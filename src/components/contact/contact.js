import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  background: #eee;
  font-family: 'Montaser light';
`;

const Description = styled.div`
  padding: 1em;
  font-size: 1.3em;
`;

const Form = styled.form`
position:relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;`;

const Item = styled.div`
  padding: 1em 0;
  width: ${(props) => (props.isMobile ? "75%" : "50%")};;
`;

const Title = styled.div`
  padding-bottom: 1em;
`;

const CustomInput = styled.input`
  background: inherit;
  border-color: #2a2a2a;
  border-width: 0px 0px 1px 0px;
  border-radius: 0px 0px 0px 0px;
  width: 100%;
  line-height: 1.2em;

  :focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  background: inherit;
  border-color: #2a2a2a;
  border-width: 0px 0px 1px 0px;
  border-radius: 0px 0px 0px 0px;
  width: 100%;
  resize: none;

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.5em 1em;
  border: 1px solid #2a2a2a;
  font-size: 1.3em;

  transition: all 0.4s ease-in-out;

  :hover {
    background: #2a2a2a;
    color: white;
  }
`;

const Required = styled.div`
  padding: 1em 0;
`;

const Contact = () => {

 const submit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <Container>
      <Description>
        Jeśli jesteś zainteresowany moją ofertą zapraszam do szybkiego kontaktu
        poprzez formularz!
      </Description>
      <Form onSubmit={submit}>
        <Item isMobile={isMobile}>
          <Title>Imię i Nazwisko *</Title>
          <CustomInput required></CustomInput>
        </Item>
        <Item isMobile={isMobile}>
          <Title>Adres email *</Title>
          <CustomInput type="email" required></CustomInput>
        </Item>
        <Item isMobile={isMobile}>
          <Title>Nr telefonu</Title>
          <CustomInput type="tel" autocomplete="tel" pattern="[0-9]{9}"></CustomInput>
        </Item>
        <Item isMobile={isMobile}>
          <Title>Treść *</Title>
          <TextArea rows="4" required></TextArea>
        </Item>
        <Button type="submit">Wyślij</Button>
        <Required>* pola wymagane</Required>
      </Form>
    </Container>
  );
};

export default Contact;
