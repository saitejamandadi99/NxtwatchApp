import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import HomeVideoCard from '../HomeVideoCard'

import {
  VideosList,
  NoVideoViewContainer,
  NoVideoImage,
  NotFoundError,
  ErrorDescription,
  RetryButton,
} from './styledComponent'

const HomeVideos = props => {
  const {homeVideoList, onRetry} = props
  const videoCount = homeVideoList.length

  const onClickRetryButton = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const color = isDarkTheme ? 'white' : 'black'

        return videoCount > 0 ? (
          <VideosList>
            {homeVideoList.map(eachVideos => (
              <HomeVideoCard key={eachVideos.id} videoDetails={eachVideos} />
            ))}
          </VideosList>
        ) : (
          <NoVideoViewContainer>
            <NoVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NotFoundError color={color}>No Search results found</NotFoundError>
            <ErrorDescription color={color}>
              Try different key words or remove search filter
            </ErrorDescription>
            <RetryButton onClick={onClickRetryButton}>Retry</RetryButton>
          </NoVideoViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideos
