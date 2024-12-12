import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 75px;
  @media screen and (min-width: 576px) {
    height: 85px;
  }
`
export const HomeLink = styled(Link)`
  text-decoration: none;
`

export const AppLogoImage = styled.img`
  width: 100px;
  @media screen and (min-width: 576px) {
    width: 120px;
  }
`

export const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 7px;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    padding: 10px;
    display: none;
  }
`

export const ThemeButtonLg = styled.button`
  border: none;
  background-color: transparent;
  padding: 7px;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    padding: 10px;
    display: none;
  }
`

export const NavBarButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 7px;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const UserLogo = styled.img`
  width: 30px;
`

export const UserInfoButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 7px;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    padding: 10px;
    display: none;
  }
`

export const LogoutButton = styled.button`
  background-color: ${props => props.bgColor};
  border: 2px solid rgb(0, 68, 255);
  color: rgb(0, 68, 255);
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 7px;
  font-size: 15px;
  font-weight: 550;
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const LogoutPopupWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding: 30px;
  border-radius: 10px;
  margin: 10px;
`

export const PopupMsg = styled.p`
  font-size: 13px;
  color: ${props => props.color};
  padding-bottom: 12px;
`

export const LogoutPopupButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CancelButton = styled.button`
  padding: 10px;
  border: none;
  border: 2px solid ${props => props.color};
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.bgColor};
  margin-right: 20px;
  color: ${props => props.color};
`

export const ConfirmButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgb(0, 68, 255);
  color: white;
`
