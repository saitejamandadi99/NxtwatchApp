import {FaHome, FaGamepad} from 'react-icons/fa'
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import {RiFireFill} from 'react-icons/ri'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavigationItemContainer,
  MobileNavigationItemContainer,
  NavigationOption,
  NavigationLink,
  NavItem,
  OptionName,
  LargestDeviceNavigationItemContainer,
  ContactContainer,
  ContactHeading,
  SocialMediaContainer,
  SocialMediaLogo,
  ContactDescription,
} from './styledComponent'

const NavigationBar = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {showNavItems, isDarkTheme, activeTab, changeTab} = value

      const bgColor = isDarkTheme ? '#1a1a1a' : 'rgb(199, 199, 199)'

      const color = isDarkTheme ? 'white' : 'black'

      const onClickHome = () => {
        changeTab('Home')
      }

      const onClickTrending = () => {
        changeTab('Trending')
      }

      const onClickGaming = () => {
        changeTab('Gaming')
      }

      const onClickSaved = () => {
        changeTab('Saved')
      }

      return (
        <NavigationItemContainer bgColor={bgColor}>
          {showNavItems && (
            <MobileNavigationItemContainer>
              <NavigationOption>
                <NavigationLink to="/" color={color}>
                  <NavItem
                    onClick={onClickHome}
                    activeTabBorderColor={
                      activeTab === 'Home' ? 'rgb(0, 68, 255)' : 'none'
                    }
                  >
                    <FaHome
                      size="20"
                      color={activeTab === 'Home' ? 'red' : null}
                    />
                    <OptionName
                      fontWeight={activeTab === 'Home' ? 'bold' : null}
                    >
                      Home
                    </OptionName>
                  </NavItem>
                </NavigationLink>
                <NavigationLink to="/trending" color={color}>
                  <NavItem
                    onClick={onClickTrending}
                    activeTabBorderColor={
                      activeTab === 'Trending' ? 'rgb(0, 68, 255)' : 'none'
                    }
                  >
                    <RiFireFill
                      size="20"
                      color={activeTab === 'Trending' ? 'red' : null}
                    />
                    <OptionName
                      fontWeight={activeTab === 'Trending' ? 'bold' : null}
                    >
                      Trending
                    </OptionName>
                  </NavItem>
                </NavigationLink>
                <NavigationLink to="/gaming" color={color}>
                  <NavItem
                    onClick={onClickGaming}
                    activeTabBorderColor={
                      activeTab === 'Gaming' ? 'rgb(0, 68, 255)' : 'none'
                    }
                  >
                    <FaGamepad
                      size="20"
                      color={activeTab === 'Gaming' ? 'red' : null}
                    />
                    <OptionName
                      fontWeight={activeTab === 'Gaming' ? 'bold' : null}
                    >
                      Gaming
                    </OptionName>
                  </NavItem>
                </NavigationLink>
                <NavigationLink to="/saved-videos" color={color}>
                  <NavItem
                    onClick={onClickSaved}
                    activeTabBorderColor={
                      activeTab === 'Saved' ? 'rgb(0, 68, 255)' : 'none'
                    }
                  >
                    <BsFillCollectionPlayFill
                      size="20"
                      color={activeTab === 'Saved' ? 'red' : null}
                    />
                    <OptionName
                      fontWeight={activeTab === 'Saved' ? 'bold' : null}
                    >
                      Saved videos
                    </OptionName>
                  </NavItem>
                </NavigationLink>
              </NavigationOption>
            </MobileNavigationItemContainer>
          )}
          <LargestDeviceNavigationItemContainer>
            <NavigationOption>
              <NavigationLink to="/" color={color}>
                <NavItem
                  onClick={onClickHome}
                  activeTabBorderColor={
                    activeTab === 'Home' ? 'rgb(0, 68, 255)' : 'none'
                  }
                >
                  <FaHome
                    size="20"
                    color={activeTab === 'Home' ? 'red' : null}
                  />
                  <OptionName fontWeight={activeTab === 'Home' ? 'bold' : null}>
                    Home
                  </OptionName>
                </NavItem>
              </NavigationLink>
              <NavigationLink to="/trending" color={color}>
                <NavItem
                  onClick={onClickTrending}
                  activeTabBorderColor={
                    activeTab === 'Trending' ? 'rgb(0, 68, 255)' : 'none'
                  }
                >
                  <RiFireFill
                    size="20"
                    color={activeTab === 'Trending' ? 'red' : null}
                  />
                  <OptionName
                    fontWeight={activeTab === 'Trending' ? 'bold' : null}
                  >
                    Trending
                  </OptionName>
                </NavItem>
              </NavigationLink>
              <NavigationLink to="/gaming" color={color}>
                <NavItem
                  onClick={onClickGaming}
                  activeTabBorderColor={
                    activeTab === 'Gaming' ? 'rgb(0, 68, 255)' : 'none'
                  }
                >
                  <FaGamepad
                    size="20"
                    color={activeTab === 'Gaming' ? 'red' : null}
                  />
                  <OptionName
                    fontWeight={activeTab === 'Gaming' ? 'bold' : null}
                  >
                    Gaming
                  </OptionName>
                </NavItem>
              </NavigationLink>
              <NavigationLink to="/saved-videos" color={color}>
                <NavItem
                  onClick={onClickSaved}
                  activeTabBorderColor={
                    activeTab === 'Saved' ? 'rgb(0, 68, 255)' : 'none'
                  }
                >
                  <BsFillCollectionPlayFill
                    size="20"
                    color={activeTab === 'Saved' ? 'red' : null}
                  />
                  <OptionName
                    fontWeight={activeTab === 'Saved' ? 'bold' : null}
                  >
                    Saved videos
                  </OptionName>
                </NavItem>
              </NavigationLink>
            </NavigationOption>
            <ContactContainer>
              <ContactHeading color={color}>CONTACT US</ContactHeading>
              <SocialMediaContainer>
                <SocialMediaLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialMediaLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialMediaLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaContainer>
              <ContactDescription color={color}>
                Enjoy! Now to see your channels and recommendations!
              </ContactDescription>
            </ContactContainer>
          </LargestDeviceNavigationItemContainer>
        </NavigationItemContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NavigationBar
