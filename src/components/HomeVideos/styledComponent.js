import styled from 'styled-components'

export const VideosList = styled.ul`
  padding: 10px;
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`

export const NoVideoViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 70px;
`
export const NoVideoImage = styled.img`
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

export const RetryButton = styled.button`
  padding: 6px 14px;
  background-color: rgb(0, 68, 255);
  color: white;
  border: none;
  border-radius: 3px;
  margin: 10px 0px;
`
