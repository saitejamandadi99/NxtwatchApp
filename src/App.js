import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    showNavItems: false,
    isActiveTab: 'Home',
    savedVideos: [],
  }

  onClickDarkMode = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onClickNavbar = () => {
    this.setState(prevState => ({showNavItems: !prevState.showNavItems}))
  }

  onChangeTab = tab => {
    this.setState({isActiveTab: tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideos: updatedSavedVideos})
  }

  render() {
    const {isDarkTheme, showNavItems, isActiveTab, savedVideos} = this.state
    console.log(savedVideos)
    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDarkTheme,
          showNavItems,
          activeTab: isActiveTab,
          savedVideos,
          changeTheme: this.onClickDarkMode,
          toggleNaveItem: this.onClickNavbar,
          changeTab: this.onChangeTab,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
