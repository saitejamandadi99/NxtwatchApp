import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoLink,
  VideoCardItem,
  ThumbnailImage,
  GamingDetails,
  GameTitle,
  GamingViewCount,
  GameType,
} from './styledComponent'

const GamingVideoCard = props => {
  const {videoDetails} = props

  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, changeTab} = value

        const color = isDarkTheme ? 'white' : 'black'

        const onClickVideo = () => {
          changeTab(null)
        }

        return (
          <VideoCardItem onClick={onClickVideo}>
            <VideoLink to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingDetails>
                <GameTitle color={color}>{title}</GameTitle>
                <GamingViewCount>{viewCount} Watching</GamingViewCount>
                <GameType>Worldwide</GameType>
              </GamingDetails>
            </VideoLink>
          </VideoCardItem>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default GamingVideoCard
