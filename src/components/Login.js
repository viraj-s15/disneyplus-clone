import styled from "styled-components"

function Login() {
  return (
    <Container>
      <Content>
        <LoginContainer>
          <LoginImageOne
            src='/images/login-image-one.svg'
            alt='Login Image one'
          />
          <LoginButton>GET ALL THERE</LoginButton>
          <LoginDescription>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 20/10/22, the price of Disney+
            and The Disney Bundle will increase by $1.
          </LoginDescription>
          <LoginImageTwo
            src='/images/login-image-two.png'
            alt='Login Image Two'
          />
        </LoginContainer>
        <BgImage />
      </Content>
    </Container>
  )
}

export default Login

const Container = styled.section`
  overflor: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  --text-colour: #f9f9f9;
  --link-background-colour: #0063e5;
  --background-hover-colour: #0483ee;
`

const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  positon: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 5rem 2.5rem;
`

const BgImage = styled.div`
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`

const LoginContainer = styled.div`
  margin-bottom: 3.5vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  text-align: center;
  transition-timing-function: ease-out;
  transition: opacity 5s;
`

const LoginImageOne = styled.img`
  max-width: 600px;
  min-width: 1px;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  margin: 0 auto;
`
const LoginButton = styled.a`
  font-weight: bold;
  font-size: 1.45em;
  color: var(--text-colour);
  background-color: var(--link-background-colour);
  margin-top: 1rem;
  padding: 1.75rem;
  letter-spacing: 1.5px;
  cursor: pointer;
  border-radius: 0.5rem;
  max-width: 100%;

  &:hover {
    background-color: var(--background-hover-colour);
  }
`

const LoginDescription = styled.p`
  letter-spacing: 1.5px;
  color: var(--text-colour);
  font-size: 0.85rem;
  line-height: 1.5;
`
const LoginImageTwo = styled.img`
  max-width: 100%;
`
