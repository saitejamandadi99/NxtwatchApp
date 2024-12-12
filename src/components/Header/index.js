import {FaMoon, FaBars} from 'react-icons/fa'
import {HiOutlineLogout} from 'react-icons/hi'
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  HeaderContainer,
  NavContainer,
  HomeLink,
  AppLogoImage,
  NavItemsContainer,
  ThemeButton,
  ThemeButtonLg,
  NavBarButton,
  UserLogo,
  UserInfoButton,
  LogoutIconButton,
  LogoutButton,
  LogoutPopupWindowContainer,
  PopupMsg,
  LogoutPopupButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponent'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme, toggleNaveItem} = value

      const color = isDarkTheme ? 'white' : 'black'
      const bgColor = isDarkTheme ? 'rgb(14, 14, 14)' : 'rgb(216, 216, 216)'

      const onClickDarkMode = () => {
        changeTheme()
      }

      const onClickNavbar = () => {
        toggleNaveItem()
      }

      const onClickLogoutConfirmButton = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderContainer bgColor={bgColor}>
          <NavContainer>
            <HomeLink to="/">
              <AppLogoImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </HomeLink>
            <NavItemsContainer>
              <ThemeButton onClick={onClickDarkMode} data-testid="theme">
                {isDarkTheme ? (
                  <BsFillBrightnessHighFill size="20" color="white" />
                ) : (
                  <FaMoon size="20" />
                )}
              </ThemeButton>
              <ThemeButtonLg onClick={onClickDarkMode} data-testid="theme">
                {isDarkTheme ? (
                  <BsFillBrightnessHighFill size="27" color="white" />
                ) : (
                  <FaMoon size="27" />
                )}
              </ThemeButtonLg>
              <NavBarButton onClick={onClickNavbar}>
                <FaBars size="20" color={color} />
              </NavBarButton>
              <UserInfoButton>
                <UserLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </UserInfoButton>

              <Popup
                modal
                trigger={
                  <LogoutIconButton>
                    <HiOutlineLogout size="20" color={color} />
                  </LogoutIconButton>
                }
              >
                {close => (
                  <LogoutPopupWindowContainer bgColor={bgColor}>
                    <PopupMsg color={color}>
                      Are you sure, you want to logout?
                    </PopupMsg>
                    <LogoutPopupButtonsContainer>
                      <CancelButton
                        color={color}
                        bgColor={bgColor}
                        type="button"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton onClick={onClickLogoutConfirmButton}>
                        Confirm
                      </ConfirmButton>
                    </LogoutPopupButtonsContainer>
                  </LogoutPopupWindowContainer>
                )}
              </Popup>

              <Popup
                modal
                trigger={<LogoutButton bgColor={bgColor}>Logout</LogoutButton>}
              >
                {close => (
                  <LogoutPopupWindowContainer bgColor={bgColor}>
                    <PopupMsg color={color}>
                      Are yoy sure, you want to logout?
                    </PopupMsg>
                    <LogoutPopupButtonsContainer>
                      <CancelButton
                        color={color}
                        bgColor={bgColor}
                        type="button"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton onClick={onClickLogoutConfirmButton}>
                        Confirm
                      </ConfirmButton>
                    </LogoutPopupButtonsContainer>
                  </LogoutPopupWindowContainer>
                )}
              </Popup>
            </NavItemsContainer>
          </NavContainer>
        </HeaderContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default Header
