import styled from 'styled-components'

export const HomeRouteContainer = styled.div`
  min-height: 100vh;
  max-height: 100%;
  background-color: ${props => props.bgColor};
`
export const HomeContainer = styled.div`
  height: 100%;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`
export const MainSectionContainer = styled.div`
  height: 100vh;
  max-height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding-bottom: 80px;
  @media screen and (min-width: 576px) {
    width: 75%;
    flex-grow: 1;
  }
`

export const PremiumBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 200px;
  padding: 20px;
  display: ${props => props.displayPremium};
  @media screen and (min-width: 576px) {
    height: 220px;
  }
`
export const PremiumBanner = styled.div`
  min-width: 100px;
  max-width: 70%;
`

export const AppLogoImage = styled.img`
  width: 120px;
  @media screen and (min-width: 576px) {
    width: 130px;
  }
  @media screen and (min-width: 768px) {
    width: 140px;
  }
`

export const PremiumDescription = styled.p`
  font-size: 15px;
  line-height: 25px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`

export const GetItNowButton = styled.button`
  padding: 10px;
  border: none;
  border: solid black 2px;
  cursor: pointer;
  background-color: transparent;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const XButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: solid 3px ${props => props.lightBgColor};
  margin: 20px;
  border-radius: 6px;
  max-width: 350px;
`

export const SearchInput = styled.input`
  padding: 11px;
  width: 100%;
  border: none;
  color: ${props => props.color};
  border-bottom-right-radius: 10px;
  background-color: ${props => props.lightBgColor};
`
export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 3px 20px;
  border-radius: 6px;
  cursor: pointer;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
`
