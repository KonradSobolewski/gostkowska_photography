import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { FlexCenterContainer, Colors } from "../../style/common";
import { useSelector, useDispatch } from "react-redux";
import { FormState } from "../../redux/reducers/contactReducer";
import * as contactActions from "../../redux/actions/contactActions";
import MessageResult from "./messageResult";

const Container = styled(FlexCenterContainer)`
  flex-direction: column;
  padding: 2em;
  background: ${Colors.cream};
`;

const Description = styled.div`
  padding: 1em;
  font-size: 1.3em;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Item = styled.div`
  padding: 1em 0;
  width: ${(props) => (props.isMobile ? "75%" : "50em")}; ;
`;

const Title = styled.div`
  padding-bottom: 1em;
`;

const CustomInput = styled.input`
  background: inherit;
  border-color: ${Colors.obsidian};
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
  border-color: ${Colors.obsidian};
  border-width: 0px 0px 1px 0px;
  border-radius: 0px 0px 0px 0px;
  width: 100%;
  resize: none;

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  padding: 0.5em 1em;
  border: 1px solid ${Colors.obsidian};
  font-size: 1.3em;

  transition: all 0.4s ease-in-out;

  :hover {
    background: ${Colors.obsidian};
    color: ${Colors.white};
  }
`;

const Required = styled.div`
  padding: 1em 0;
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(true);
  const sendingState = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sendingState.sendingResult === FormState.SUCCESS) {
      setName("");
      setMessage("");
      setPhoneNumber("");
      setEmail("");
    }
  }, [sendingState.sendingResult]);

  const submit = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      message: message,
      email: email,
      phoneNumber: phoneNumber,
    };
    if (
      !(
        (name.trim().length ||
          email.trim().length ||
          phoneNumber.trim().length) === 0
      )
    ) {
      console.log(name);
      console.log(message);
      console.log(email);
      console.log(phoneNumber);
      dispatch(contactActions.sendMail(body));
    }
  };

  return (
    <Container id="contact">
      <Description>
        Jeśli jesteś zainteresowany moją ofertą zapraszam do szybkiego kontaktu
        poprzez formularz!
      </Description>
      <Form onSubmit={submit}>
        <Item isMobile={isMobile}>
          <Title>Imię i Nazwisko *</Title>
          <CustomInput
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></CustomInput>
        </Item>
        <Item isMobile={isMobile}>
          <Title>Adres email *</Title>
          <CustomInput
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></CustomInput>
        </Item>
        <Item isMobile={isMobile}>
          <Title>Nr telefonu</Title>
          <CustomInput
            type="tel"
            autocomplete="tel"
            pattern="[0-9]{9}"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></CustomInput>
        </Item>
        <Item isMobile={isMobile}>
          <Title>Treść *</Title>
          <TextArea
            rows="4"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></TextArea>
        </Item>
        <div>
          <MessageResult result={sendingState.sendingResult} />
          <Button type="submit">Wyślij</Button>
        </div>
        <Required>* pola wymagane</Required>
      </Form>
    </Container>
  );
};

export default Contact;
