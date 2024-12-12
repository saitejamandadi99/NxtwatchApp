import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const VideoCardItem = styled.li`
  list-style: none;
  width: 100%;
  padding: 10px;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  border-radius: 5px;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
`

export const LogoAndVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
`

export const ChannelLogo = styled.img`
  width: 50px;
  padding-right: 5px;
  padding-top: 5px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoDetails = styled.div`
  height: 100%;
  padding: 10px;
`

export const VideoTitle = styled.p`
  font-size: 15px;
  margin: 0px;
  line-height: 19px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 27px;
  }
  @media screen and (min-width: 992px) {
    font-size: 17px;
    line-height: 28px;
  }
`
export const ChannelNameAndOtherDetails = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelName = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin: 6px 0px;
  color: #616e7c;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 992px) {
    font-size: 16px;
    padding: 10px 0px;
  }
`
export const ViewAndPublishedAt = styled.div`
  display: flex;
  align-items: center;
`

export const VideoViews = styled.p`
  font-size: 12px;
  margin: 0px;
  padding: 0px 10px;
  color: #606060;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    padding-left: 0px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding-right: 20px;
  }
`
export const PublishedAt = styled.p`
  font-size: 12px;
  margin: 0px;
  color: #606060;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
