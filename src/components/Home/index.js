import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {GrFormClose} from 'react-icons/gr'
import {BiSearch} from 'react-icons/bi'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import HomeVideos from '../HomeVideos'
import FailureView from '../FailureView'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  HomeRouteContainer,
  HomeContainer,
  MainSectionContainer,
  PremiumBannerContainer,
  PremiumBanner,
  AppLogoImage,
  PremiumDescription,
  GetItNowButton,
  XButton,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
} from './styledComponent'

const searchApiConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    showPremium: true,
    searchInputValue: '',
    homeVideos: [],
    searchApiStatus: searchApiConstant.initial,
  }

  componentDidMount() {
    this.fetchSearchData()
  }

  onClickXButton = () => {
    this.setState({showPremium: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInputValue: event.target.value})
  }

  fetchSearchData = async () => {
    this.setState({searchApiStatus: searchApiConstant.inprogress})

    const {searchInputValue} = this.state

    const searchApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInputValue}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {Authorization: `bearer ${jwtToken}`},
      method: 'GET',
    }

    const response = await fetch(searchApiUrl, options)

    if (response.ok === true) {
      const searchData = await response.json()

      const updateData = searchData.videos.map(eachVideosItem => ({
        channel: eachVideosItem.channel,
        id: eachVideosItem.id,
        publishedAt: eachVideosItem.published_at,
        thumbnailUrl: eachVideosItem.thumbnail_url,
        title: eachVideosItem.title,
        viewCount: eachVideosItem.view_count,
      }))

      this.setState({
        homeVideos: updateData,
        searchApiStatus: searchApiConstant.success,
      })
    } else {
      this.setState({searchApiStatus: searchApiConstant.failure})
    }
  }

  onClickSearchButton = () => {
    this.fetchSearchData()
  }

  onRetry = () => {
    this.setState({searchInputValue: ''}, this.fetchSearchData)
  }

  renderSuccussView = () => {
    const {homeVideos} = this.state
    return <HomeVideos homeVideoList={homeVideos} onRetry={this.onRetry} />
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderInProgressView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="rgb(0, 68, 255)" height="50" width="50" />
    </LoaderContainer>
  )

  renderApiResponseHomeVideos = () => {
    const {searchApiStatus} = this.state

    switch (searchApiStatus) {
      case searchApiConstant.success:
        return this.renderSuccussView()

      case searchApiConstant.failure:
        return this.renderFailureView()

      case searchApiConstant.inprogress:
        return this.renderInProgressView()

      default:
        return null
    }
  }

  render() {
    const {showPremium, searchInputValue} = this.state
    const displayPremium = showPremium ? 'visible' : 'none'

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const color = isDarkTheme ? 'white' : 'black'
          const lightBgColor = isDarkTheme ? '#1a1a1a' : 'rgb(216, 216, 216)'
          const bgColor = isDarkTheme ? 'black' : 'white'

          const {history} = this.props

          return (
            <HomeRouteContainer bgColor={bgColor}>
              <Header history={history} />
              <HomeContainer>
                <NavigationBar />
                <MainSectionContainer>
                  <PremiumBannerContainer
                    displayPremium={displayPremium}
                    data-testid="banner"
                  >
                    <PremiumBanner>
                      <AppLogoImage
                        src={
                          isDarkTheme
                            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        }
                        alt="nxt watch logo"
                      />
                      <PremiumDescription>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </PremiumDescription>
                      <GetItNowButton>GET IT NOW</GetItNowButton>
                    </PremiumBanner>
                    <>
                      <XButton
                        onClick={this.onClickXButton}
                        data-testid="close"
                      >
                        <GrFormClose size="25" />
                      </XButton>
                    </>
                  </PremiumBannerContainer>
                  <SearchInputContainer lightBgColor={lightBgColor}>
                    <SearchInput
                      placeholder="Search"
                      type="search"
                      lightBgColor={lightBgColor}
                      bgColor={bgColor}
                      color={color}
                      onChange={this.onChangeSearchInput}
                      value={searchInputValue}
                    />
                    <SearchButton
                      onClick={this.onClickSearchButton}
                      lightBgColor={lightBgColor}
                      data-testid="searchButton"
                    >
                      <BiSearch size="23" color="rgb(99, 99, 99)" />
                    </SearchButton>
                  </SearchInputContainer>
                  {this.renderApiResponseHomeVideos()}
                </MainSectionContainer>
              </HomeContainer>
            </HomeRouteContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
