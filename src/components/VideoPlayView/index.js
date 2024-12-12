import ReactPlayer from 'react-player'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'
import {formatDistanceToNow} from 'date-fns'

import {
  VideoPlayer,
  VideoPlayerLG,
  VideoTitle,
  VideoViewAndLikeAndOther,
  ViewAndPublishedAt,
  LikeCount,
  PublishedAt,
  LikeAndDislikeContainer,
  VideoReactionButton,
  LikeText,
  SaveText,
  SaveButton,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelDetails,
  ChannelName,
  SubscribersCount,
  VideoDescription,
} from './styledComponent'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const VideoPlayView = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props
  const {
    id,
    title,
    videoUrl,
    channelName,
    profileImageUrl,
    subscriberCount,
    viewCount,
    publishedAt,
    description,
  } = videoDetails

  const onClickLikeIcon = () => {
    clickLiked()
  }

  const onClickDisLikeIcon = () => {
    clickDisLiked()
  }

  const videoPublishedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos, removeVideo} = value

        const color = isDarkTheme ? 'white' : 'black'
        const lightBgColor = isDarkTheme ? '#1a1a1a' : 'rgb(216, 216, 216)'

        const onClickSaved = () => {
          addVideo(videoDetails)
        }

        const onClickUnsaved = () => {
          removeVideo(id)
        }

        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIconColor = isSaved ? 'red' : '#616e7c'

        return (
          <>
            <VideoPlayer lightBgColor={lightBgColor}>
              <ReactPlayer
                url={videoUrl}
                controls
                width="100%"
                height="250px"
              />
            </VideoPlayer>
            <VideoPlayerLG lightBgColor={lightBgColor}>
              <ReactPlayer url={videoUrl} controls width="100%" />
            </VideoPlayerLG>
            <VideoTitle color={color}>{title}</VideoTitle>
            <VideoViewAndLikeAndOther>
              <ViewAndPublishedAt>
                <LikeCount>{viewCount} views</LikeCount>
                <PublishedAt>{videoPublishedDate}</PublishedAt>
              </ViewAndPublishedAt>
              <LikeAndDislikeContainer>
                <VideoReactionButton onClick={onClickLikeIcon}>
                  <AiFillLike
                    size="20"
                    color={isLiked ? 'rgb(0, 68, 255)' : '#616e7c'}
                  />
                  <LikeText textColor={isLiked ? 'rgb(0, 68, 255)' : '#616e7c'}>
                    Like
                  </LikeText>
                </VideoReactionButton>
                <VideoReactionButton onClick={onClickDisLikeIcon}>
                  <AiFillDislike
                    size="20"
                    color={isDisLiked ? 'rgb(0, 68, 255)' : '#616e7c'}
                  />
                  <LikeText
                    textColor={isDisLiked ? 'rgb(0, 68, 255)' : '#616e7c'}
                  >
                    Dislike
                  </LikeText>
                </VideoReactionButton>
                <SaveButton onClick={isSaved ? onClickUnsaved : onClickSaved}>
                  <RiPlayListAddFill size="20" color={saveIconColor} />
                  <SaveText saveIconColor={saveIconColor}>Save</SaveText>
                </SaveButton>
              </LikeAndDislikeContainer>
            </VideoViewAndLikeAndOther>
            <ChannelDetailsContainer>
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
              <ChannelDetails>
                <ChannelName color={color}>{channelName}</ChannelName>
                <SubscribersCount>
                  {subscriberCount} subscribers
                </SubscribersCount>
              </ChannelDetails>
            </ChannelDetailsContainer>
            <VideoDescription>{description}</VideoDescription>
          </>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoPlayView
