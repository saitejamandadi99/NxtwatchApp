import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  showNavItems: false,
  activeTab: 'Home',
  savedVideos: [],
  changeTheme: () => {},
  toggleNaveItem: () => {},
  changeTab: () => {},
  addVideo: () => {},
})

export default ThemeAndVideoContext
