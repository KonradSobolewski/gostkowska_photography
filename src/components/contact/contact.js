import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { FlexCenterContainer, Colors } from "../../style/common";
import { useSelector, useDispatch } from "react-redux";
import { FormState } from "../../redux/reducers/contactReducer";
import * as contactActions from "../../redux/actions/contactActions";
import USER from "../../assets/user.png";
import PHONE from "../../assets/phone.png";
import MAIL from "../../assets/mail.png";
import SEND from "../../assets/send.png";
import PEN from "../../assets/pen.png";

const Container = styled(FlexCenterContainer)`
  flex-direction: column;
  padding: 2em;
  background: ${Colors.lightCream};
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

const Item = styled(FlexCenterContainer)`
  padding: 1em 0;
  width: ${(props) => (props.isMobile ? "75%" : "50em")};
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
  padding: 0em 1em;
  border: 1px solid ${Colors.obsidian};
  font-size: 1.3em;
  transition: all 0.4s ease-in-out;
  display:flex;
  align-items:center;
  :hover {
    background: ${Colors.lightBlack};
    color: ${Colors.white};
    
    img {
      filter: invert(1);
    }
  }


`;

const Required = styled.div`
  padding: 1em 0;
`;

const IMG = styled.img`
  width: 1.5em;
  padding: 1em;
`;

const SUBMIT = styled.img`
  width: 1.3em;
  padding: 1em 0 1em 1em;
  transition: all 0.4s ease-in-out;
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
    <Container id="test">
      <Description>
        Jeśli jesteś zainteresowany moją ofertą zapraszam do szybkiego kontaktu
        poprzez formularz!
      </Description>
      <Form onSubmit={submit}>
        <Item isMobile={isMobile}>
          <IMG src={USER} />
          <CustomInput
            required
            value={name}
            placeholder="Imię i Nazwisko *"
            onChange={(e) => setName(e.target.value)}
          ></CustomInput>
        </Item>
        <Item isMobile={isMobile}>
          <IMG src={MAIL} />
          <CustomInput
            type="email"
            required
            value={email}
            placeholder="Adres email *"
            onChange={(e) => setEmail(e.target.value)}
          ></CustomInput>
        </Item>
        <Item isMobile={isMobile}>
          <IMG src={PHONE} />
          <CustomInput
            type="tel"
            autocomplete="tel"
            pattern="[0-9]{9}"
            placeholder="Nr telefonu"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></CustomInput>
        </Item>
        <Item isMobile={isMobile}>
          <IMG src={PEN} />
          <TextArea
            rows="4"
            required
            value={message}
            placeholder="Treść *"
            onChange={(e) => setMessage(e.target.value)}
          ></TextArea>
        </Item>
        <div>
          <Button type="submit">
            Wyślij
            <SUBMIT src={SEND} loading="lazy" />
          </Button>
        </div>
        <Required>* pola wymagane</Required>
      </Form>
    </Container>
  );
};

export default Contact;
