import styled from 'styled-components'

export const TrendingVideosMainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bgColor};
  padding-bottom: 70px;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const TrendingVideosContainer = styled.div`
  height: 100vh;
  max-height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding-bottom: 100px;
  @media screen and (min-width: 576px) {
    width: 75%;
    flex-grow: 1;
  }
`

export const TrendingVideosList = styled.ul`
  padding: 10px;
  @media screen and (min-width: 1000px) {
    padding: 40px;
  }
`
export const TrendingHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.HeaderBgColor};
  padding: 10px;
  padding-left: 30px;
`
export const PageIcon = styled.div`
  background-color: ${props => props.bgColor};
  padding: 10px;
  border-radius: 50px;
`

export const PageName = styled.h1`
  font-size: 30px;
  padding-left: 20px;
  color: ${props => props.color};
  @media screen and (max-width: 576px) {
    font-size: 20px;
    padding-left: 10px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`
