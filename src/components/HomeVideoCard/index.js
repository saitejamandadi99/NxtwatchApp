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

const HomeVideoCard = props => {
  const {videoDetails} = props

  const {
    id,
    title,
    channel,
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
          <VideoCardItem onClick={onClickVideo}>
            <VideoLink to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <LogoAndVideoDetails>
                <ChannelLogo
                  src={channel.profile_image_url}
                  alt="channel logo"
                />
                <VideoDetails>
                  <VideoTitle color={color}>{title}</VideoTitle>
                  <ChannelNameAndOtherDetails>
                    <ChannelName>{channel.name}</ChannelName>
                    <ViewAndPublishedAt>
                      <VideoViews>{viewCount} views</VideoViews>
                      <PublishedAt>{videoPublishedDate}</PublishedAt>
                    </ViewAndPublishedAt>
                  </ChannelNameAndOtherDetails>
                </VideoDetails>
              </LogoAndVideoDetails>
            </VideoLink>
          </VideoCardItem>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideoCard
