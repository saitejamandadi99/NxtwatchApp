import {formatDistanceToNow} from 'date-fns'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoLink,
  VideoCardItem,
  ThumbnailImage,
  LogoAndVideoDetails,
  ChannelLogo,
  VideoDetails,
  VideoTitle,
  ChannelNameAndOtherDetails,
  ChannelName,
  ViewAndPublishedAt,
  VideoViews,
  PublishedAt,
} from './styledComponent'

const VideoCard = props => {
  const {videoDetails} = props

  const {
    id,
    title,
    channelProfileImageUrl,
    channelName,
    publishedAt,
    thumbnailUrl,
    viewCount,
  } = videoDetails

  const videoPublishedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, changeTab} = value

        const color = isDarkTheme ? 'white' : 'black'

        const onClickVideo = () => {
          changeTab(null)
        }

        return (
          <VideoLink to={`/videos/${id}`}>
            <VideoCardItem onClick={onClickVideo}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <LogoAndVideoDetails>
                <ChannelLogo src={channelProfileImageUrl} alt="channel logo" />
                <VideoDetails>
                  <VideoTitle color={color}>{title}</VideoTitle>
                  <ChannelNameAndOtherDetails>
                    <ChannelName>{channelName}</ChannelName>
                    <ViewAndPublishedAt>
                      <VideoViews>{viewCount} views</VideoViews>
                      <PublishedAt>{videoPublishedDate}</PublishedAt>
                    </ViewAndPublishedAt>
                  </ChannelNameAndOtherDetails>
                </VideoDetails>
              </LogoAndVideoDetails>
            </VideoCardItem>
          </VideoLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoCard
