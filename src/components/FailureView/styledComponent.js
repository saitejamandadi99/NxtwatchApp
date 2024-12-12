// === Failure View

import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 70px;
`
export const FailureViewImage = styled.img`
  width: 200px;
  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`

export const FailureViewError = styled.h1`
  font-size: 15px;
  text-align: center;
  padding-top: 10px;
  color: ${props => props.color};
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`
export const FailureViewDescription = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${props => props.color};
  @media screen and (min-width: 1200px) {
    font-size: 17px;
  }
`

export const RetryButton = styled.button`
  padding: 6px 14px;
  background-color: rgb(0, 68, 255);
  color: white;
  border: none;
  border-radius: 3px;
  margin: 10px 0px;
  @media screen and (min-width: 768px) {
    padding: 10px 20px;
    font-size: 15px;
  }
`
