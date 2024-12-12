import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoPlayView from '../VideoPlayView'
import FailureView from '../FailureView'

import {
  VideoItemDetailsMainContainer,
  VideoItemDetailsContainer,
  LoaderContainer,
} from './styledComponent'

const videoItemDetailsApiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: videoItemDetailsApiStatusConstant.initial,
    videoDetails: {},
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  formattedData = videoData => ({
    id: videoData.video_details.id,
    title: videoData.video_details.title,
    videoUrl: videoData.video_details.video_url,
    thumbnailUrl: videoData.video_details.thumbnail_url,
    channelName: videoData.video_details.channel.name,
    profileImageUrl: videoData.video_details.channel.profile_image_url,
    subscriberCount: videoData.video_details.channel.subscriber_count,
    viewCount: videoData.video_details.view_count,
    publishedAt: videoData.video_details.published_at,
    description: videoData.video_details.description,
  })

  getVideoItemDetails = async () => {
    this.setState({apiStatus: videoItemDetailsApiStatusConstant.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(videoItemDetailsApiUrl, options)

    if (response.ok === true) {
      const videoData = await response.json()

      const updateVideoDetails = this.formattedData(videoData)

      this.setState({
        videoDetails: updateVideoDetails,
        apiStatus: videoItemDetailsApiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: videoItemDetailsApiStatusConstant.failure})
    }
  }

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  clickDisLiked = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderSuccessView = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state
    return (
      <VideoPlayView
        videoDetails={videoDetails}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
        clickLiked={this.clickLiked}
        clickDisLiked={this.clickDisLiked}
        clickSaved={this.clickSaved}
      />
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderInProgressView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="rgb(0, 68, 255)" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideoDetailsApiResponse = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case videoItemDetailsApiStatusConstant.success:
        return this.renderSuccessView()

      case videoItemDetailsApiStatusConstant.failure:
        return this.renderFailureView()

      case videoItemDetailsApiStatusConstant.inProgress:
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

          const bgColor = isDarkTheme ? '#080808' : 'white'

          return (
            <>
              <Header />
              <VideoItemDetailsMainContainer bgColor={bgColor}>
                <NavigationBar />
                <VideoItemDetailsContainer>
                  {this.renderVideoDetailsApiResponse()}
                </VideoItemDetailsContainer>
              </VideoItemDetailsMainContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoItemDetails
