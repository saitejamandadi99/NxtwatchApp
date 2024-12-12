import styled from 'styled-components'

export const LoginRouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  height: 100%;
  background-color: ${props => props.bgColor};
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.cardBgColor};
  padding: 30px 20px;
  border-radius: 10px;
  width: 100%;
  @media screen and (min-width: 576px) {
    max-width: 400px;
  }
`

export const AppLogoImage = styled.img`
  width: 120px;
  align-self: center;
  padding-bottom: 30px;
`
export const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  padding-bottom: 4px;
  color: ${props => props.color};
`
export const Input = styled.input`
  font-size: 15px;
  margin-bottom: 20px;
  padding: 12px;
  border-radius: 7px;
  border: none;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const CheckBoxInput = styled.input`
  width: 20px;
  height: 20px;
`

export const CheckBoxLabel = styled.label`
  font-size: 15px;
  font-weight: 400;
  color: ${props => props.color};
`

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: blue;
  padding: 12px 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
`
export const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  margin: 0px;
  margin-top: 10px;
  padding-left: 5px;
`
