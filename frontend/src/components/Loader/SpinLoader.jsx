import styled, { keyframes } from "styled-components";

// Animation de rotation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Conteneur du loader
const LoaderContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 99;
`;

// Style du loader (cercle en rotation)
const Loader = styled.div`
  border: 10px solid ${({ theme }) => theme.colors.tertiary || "#ddd"};
  border-top: 10px solid ${({ theme }) => theme.colors.primary || "#ff0000"};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
  z-index: 100;
`;

const SpinLoader = () => {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
};

export default SpinLoader;
