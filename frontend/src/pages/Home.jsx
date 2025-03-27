import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import styled from "styled-components";
import ProfilPixMale from "../assets/icon/homme.png";
import ProfilPixFemale from "../assets/icon/femme.png";

// Styled Components
const Page = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;

  span {
    color: "#ff0000";
  }
`;

const Avatars = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 30px;

  img {
    width: 100px;
    height: 100px;
  }
`;

const Form = styled.form`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Input = styled.input`
  width: 250px;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${({ $submit }) => ($submit ? "#ff0000" : "#cccccc")};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;

const InfoText = styled.p`
  margin-top: 20px;
  font-size: 0.9rem;
  color: #777;
`;

export default function Home() {
  const navigate = useNavigate();
  const userId = useRef("");

  function handleSubmit(event) {
    event.preventDefault();
    if (userId.current === "" || userId.current === null) {
      alert("Merci de saisir un userId");
    } else {
      navigate(`/profile/${userId.current}`);
    }
  }

  return (
    <Page>
      <Title>
        Bienvenue sur <span>SportSee</span> !
      </Title>
      <Avatars>
        <img src={ProfilPixMale} alt="Profil homme" />
        <img src={ProfilPixFemale} alt="Profil femme" />
      </Avatars>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="userId"
          name="userId"
          placeholder="Saisir votre userId ici *"
          onChange={(event) => (userId.current = event.target.value)}
        />
        <br />
        <span>Saisie obligatoire *</span>
        <ButtonGroup>
          <Button type="reset">Reset</Button>
          <Button type="submit" $submit={true}>Submit</Button>
        </ButtonGroup>
        <InfoText>
          (Pour utiliser les datas dupliquées, rajouter un "0" à votre userId)
        </InfoText>
      </Form>
    </Page>
  );
}
