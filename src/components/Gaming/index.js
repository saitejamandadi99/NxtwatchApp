import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaGamepad} from 'react-icons/fa'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import GamingVideoCard from '../GamingVideoCard'
import FailureView from '../FailureView'

import {
  GamingVideosMainContainer,
  GamingVideosContainer,
  GamingHeader,
  PageIcon,
  PageName,
  GamingVideosList,
  LoaderContainer,
} from './styledComponent'

const gamingVideosApiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: gamingVideosApiStatusConstant.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosDetails()
  }

  onRetry = () => {
    this.getVideosDetails()
  }

  getVideosDetails = async () => {
    this.setState({apiStatus: gamingVideosApiStatusConstant.inProgress})

    const gamingVideosApiUrl = `https://apis.ccbp.in/videos/gaming`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(gamingVideosApiUrl, options)

    if (response.ok === true) {
      const videoData = await response.json()

      const updateVideoList = videoData.videos.map(eachVideosItem => ({
        id: eachVideosItem.id,
        title: eachVideosItem.title,
        thumbnailUrl: eachVideosItem.thumbnail_url,
        viewCount: eachVideosItem.view_count,
      }))

      this.setState({
        videosList: updateVideoList,
        apiStatus: gamingVideosApiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: gamingVideosApiStatusConstant.failure})
    }
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <GamingVideosList>
        {videosList.map(eachVideo => (
          <GamingVideoCard videoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </GamingVideosList>
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
      case gamingVideosApiStatusConstant.success:
        return this.renderSuccessView()

      case gamingVideosApiStatusConstant.failure:
        return this.renderFailureView()

      case gamingVideosApiStatusConstant.inProgress:
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
              <GamingVideosMainContainer bgColor={bgColor}>
                <NavigationBar />
                <GamingVideosContainer>
                  <GamingHeader HeaderBgColor={HeaderBgColor}>
                    <PageIcon bgColor={bgColor}>
                      <FaGamepad size="40" color="red" />
                    </PageIcon>
                    <PageName color={color}>Gaming</PageName>
                  </GamingHeader>
                  {this.renderTrendingVideosApiResponse()}
                </GamingVideosContainer>
              </GamingVideosMainContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Gaming
