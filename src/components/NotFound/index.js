import {
  NotFoundMainContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundError,
  ErrorDescription,
} from './styledComponent'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const color = isDarkTheme ? 'white' : 'black'
      const bgColor = isDarkTheme ? '#080808' : 'white'

      return (
        <>
          <Header />
          <NotFoundMainContainer bgColor={bgColor}>
            <NavigationBar />
            <NotFoundContainer>
              <NotFoundImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
                alt="no videos"
              />
              <NotFoundError color={color}>Page Not Found</NotFoundError>
              <ErrorDescription color={color}>
                We are sorry, the page you requested could not be found.
              </ErrorDescription>
            </NotFoundContainer>
          </NotFoundMainContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
