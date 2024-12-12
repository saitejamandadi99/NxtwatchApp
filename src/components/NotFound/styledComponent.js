import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bgColor};
  padding-bottom: 70px;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100%;
  width: 100%;
  overflow-y: auto;
  padding-bottom: 100px;
  @media screen and (min-width: 576px) {
    width: 75%;
    flex-grow: 1;
  }
`
export const NotFoundImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
  @media screen and (min-width: 992px) {
    width: 300px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
  }
`

export const NotFoundError = styled.h1`
  font-size: 15px;
  text-align: center;
  padding-top: 10px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`
export const ErrorDescription = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`
