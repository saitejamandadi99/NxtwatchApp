import styled from 'styled-components'

export const VideoPlayer = styled.div`
  border: 5px solid ${props => props.lightBgColor};
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoPlayerLG = styled.div`
  border: 5px solid ${props => props.lightBgColor};
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const VideoTitle = styled.p`
  font-size: 17px;
  line-height: 26px;
  color: ${props => props.color};
`

export const VideoViewAndLikeAndOther = styled.div`
  font-size: 50px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const ViewAndPublishedAt = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  @media screen and (min-width: 576px) {
    padding-bottom: 0px;
  }
`

export const LikeCount = styled.p`
  font-size: 15px;
  color: #606060;
  padding-right: 10px;
  @media screen and (min-width: 768px) {
    padding-right: 20px;
  }
`

export const PublishedAt = styled.p`
  font-size: 15px;
  color: #606060;
`

export const LikeAndDislikeContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  @media screen and (min-width: 576px) {
    padding-bottom: 0px;
  }
`

export const VideoReactionButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  margin-right: 10px;
`

export const SaveButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  margin-right: 10px;
`

export const LikeText = styled.span`
  font-size: 14px;
  padding-left: 5px;
  color: ${props => props.textColor};
  font-weight: 600;
`

export const SaveText = styled.span`
  font-size: 14px;
  padding-left: 5px;
  color: ${props => props.saveIconColor};
  font-weight: 600;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ChannelLogo = styled.img`
  width: 60px;
`

export const ChannelDetails = styled.div`
  padding-left: 10px;
`

export const ChannelName = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin-top: 0px;
  color: ${props => props.color};
`

export const SubscribersCount = styled.p`
  font-size: 15px;
  color: #616e7c;
`

export const VideoDescription = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  color: #616e7c;
  line-height: 28px;
`
