
import styled from 'styled-components';
import profilePic from '../../../assets/Img/aidora.png'; 

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #25934C;
  color: white;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Aidora</Title>
      <ProfilePic src={profilePic} alt="Admin Profile" />
    </HeaderContainer>
  );
};

export default Header;
