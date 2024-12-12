import {RiFireFill} from 'react-icons/ri'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoCard from '../VideoCard'

import {
  SavedVideosMainContainer,
  SavedVideosContainer,
  SavedHeader,
  PageIcon,
  PageName,
  SavedVideosList,
  NoVideoViewContainer,
  NoVideoImage,
  NotFoundError,
  ErrorDescription,
} from './styledComponent'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value

      const color = isDarkTheme ? 'white' : 'black'
      const bgColor = isDarkTheme ? '#080808' : 'white'
      const HeaderBgColor = isDarkTheme ? '#242424' : '#b3b3b3'
      console.log(savedVideos)

      const isEmptyVideo = savedVideos.length !== 0

      return (
        <>
          <Header />
          <SavedVideosMainContainer bgColor={bgColor}>
            <NavigationBar />
            <SavedVideosContainer>
              <SavedHeader HeaderBgColor={HeaderBgColor}>
                <PageIcon bgColor={bgColor}>
                  <RiFireFill size="40" color="red" />
                </PageIcon>
                <PageName color={color}>Saved Videos</PageName>
              </SavedHeader>
              {isEmptyVideo ? (
                <SavedVideosList>
                  {savedVideos.map(eachVideo => (
                    <VideoCard videoDetails={eachVideo} key={eachVideo.id} />
                  ))}
                </SavedVideosList>
              ) : (
                <NoVideoViewContainer>
                  <NoVideoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NotFoundError color={color}>
                    No saved videos found
                  </NotFoundError>
                  <ErrorDescription color={color}>
                    You can save your videos while watching them
                  </ErrorDescription>
                </NoVideoViewContainer>
              )}
            </SavedVideosContainer>
          </SavedVideosMainContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
