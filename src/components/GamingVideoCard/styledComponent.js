import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const VideoCardItem = styled.li`
  list-style: none;
  padding: 10px;
  width: 50%;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) {
    width: 33%;
  }
  @media screen and (min-width: 1200px) {
    width: 25%;
    padding: 8px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const GamingDetails = styled.div`
  padding: 5px 0px;
`

export const GameTitle = styled.p`
  font-size: 15px;
  color: ${props => props.color};
  @media screen and (min-width: 576px) {
    font-size: 17px;
  }
`

export const GamingViewCount = styled.p`
  font-size: 13px;
  color: #616e7c;
  margin-bottom: 5px;
  font-weight: 500;
  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`

export const GameType = styled.p`
  font-size: 13px;
  color: #616e7c;
  margin-top: 0px;
  font-weight: 500;
  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`
