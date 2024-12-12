import styled from 'styled-components'

export const VideoItemDetailsMainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const VideoItemDetailsContainer = styled.div`
  height: 90vh;
  width: 100%;
  overflow-y: auto;
  padding-bottom: 100px;
  padding: 15px;
  @media screen and (min-width: 576px) {
    width: 75%;
    flex-grow: 1;
  }
  @media screen and (min-width: 1000px) {
    padding: 40px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`
