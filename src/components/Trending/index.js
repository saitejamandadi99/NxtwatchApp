import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {RiFireFill} from 'react-icons/ri'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoCard from '../VideoCard'
import FailureView from '../FailureView'

import {
  TrendingVideosMainContainer,
  TrendingVideosContainer,
  TrendingHeader,
  PageIcon,
  PageName,
  TrendingVideosList,
  LoaderContainer,
} from './styledComponent'

const trendingVideosApiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: trendingVideosApiStatusConstant.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosDetails()
  }

  onRetry = () => {
    this.getVideosDetails()
  }

  getVideosDetails = async () => {
    this.setState({apiStatus: trendingVideosApiStatusConstant.inProgress})

    const trendingVideosApiUrl = `https://apis.ccbp.in/videos/trending`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(trendingVideosApiUrl, options)

    if (response.ok === true) {
      const videoData = await response.json()

      const updateVideoList = videoData.videos.map(eachVideosItem => ({
        channelName: eachVideosItem.channel.name,
        channelProfileImageUrl: eachVideosItem.channel.profile_image_url,
        id: eachVideosItem.id,
        publishedAt: eachVideosItem.published_at,
        thumbnailUrl: eachVideosItem.thumbnail_url,
        title: eachVideosItem.title,
        viewCount: eachVideosItem.view_count,
      }))

      this.setState({
        videosList: updateVideoList,
        apiStatus: trendingVideosApiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: trendingVideosApiStatusConstant.failure})
    }
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <TrendingVideosList>
        {videosList.map(eachVideo => (
          <VideoCard videoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </TrendingVideosList>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderInProgressView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="rgb(0, 68, 255)" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingVideosApiResponse = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case trendingVideosApiStatusConstant.success:
        return this.renderSuccessView()

      case trendingVideosApiStatusConstant.failure:
        return this.renderFailureView()

      case trendingVideosApiStatusConstant.inProgress:
        return this.renderInProgressView()

      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const color = isDarkTheme ? 'white' : 'black'
          const bgColor = isDarkTheme ? '#080808' : 'white'
          const HeaderBgColor = isDarkTheme ? '#242424' : '#b3b3b3'

          return (
            <>
              <Header />
              <TrendingVideosMainContainer bgColor={bgColor}>
                <NavigationBar />
                <TrendingVideosContainer>
                  <TrendingHeader HeaderBgColor={HeaderBgColor}>
                    <PageIcon bgColor={bgColor}>
                      <RiFireFill size="40" color="red" />
                    </PageIcon>
                    <PageName color={color}>Trending</PageName>
                  </TrendingHeader>
                  {this.renderTrendingVideosApiResponse()}
                </TrendingVideosContainer>
              </TrendingVideosMainContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Trending
