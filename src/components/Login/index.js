import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  LoginRouteContainer,
  LoginFormContainer,
  AppLogoImage,
  Label,
  Input,
  ShowPasswordContainer,
  CheckBoxInput,
  CheckBoxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponent'

class Login extends Component {
  state = {
    inputUserName: '',
    inputPassword: '',
    showPassword: false,
    errorMsg: '',
    ShowErrorMsg: false,
  }

  onChangeUsername = event => {
    this.setState({inputUserName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({inputPassword: event.target.value})
  }

  onClickCheckBox = () => {
    this.setState(prevEvent => ({showPassword: !prevEvent.showPassword}))
  }

  loginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    const {history} = this.props
    history.replace('/')
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()

    const loginApiUrl = 'https://apis.ccbp.in/login'

    const {inputUserName, inputPassword} = this.state

    const userData = {username: inputUserName, password: inputPassword}

    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }

    const response = await fetch(loginApiUrl, options)
    const loginData = await response.json()

    if (response.ok) {
      this.loginSuccess(loginData.jwt_token)
    } else {
      this.setState({ShowErrorMsg: true, errorMsg: loginData.error_msg})
    }
  }

  render() {
    const {
      inputUserName,
      inputPassword,
      showPassword,
      ShowErrorMsg,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const color = isDarkTheme ? 'white' : 'black'
          const bgColor = isDarkTheme ? 'rgb(14, 14, 14)' : 'rgb(216, 216, 216)'
          const cardBgColor = isDarkTheme ? 'black' : 'white'

          return (
            <LoginRouteContainer bgColor={bgColor}>
              <LoginFormContainer
                onSubmit={this.onSubmitLoginForm}
                cardBgColor={cardBgColor}
              >
                <AppLogoImage
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <Label htmlFor="Username" color={color}>
                  USERNAME
                </Label>
                <Input
                  id="Username"
                  placeholder="Username"
                  type="username"
                  onChange={this.onChangeUsername}
                  value={inputUserName}
                  bgColor={bgColor}
                  color={color}
                />
                <Label htmlFor="Password" color={color}>
                  PASSWORD
                </Label>
                <Input
                  id="Password"
                  placeholder="Password"
                  type={showPassword ? 'username' : 'password'}
                  onChange={this.onChangePassword}
                  value={inputPassword}
                  bgColor={bgColor}
                  color={color}
                />
                <ShowPasswordContainer>
                  <CheckBoxInput
                    id="CheckBox"
                    type="checkbox"
                    onClick={this.onClickCheckBox}
                  />
                  <CheckBoxLabel htmlFor="CheckBox" color={color}>
                    Show Password
                  </CheckBoxLabel>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                {ShowErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
              </LoginFormContainer>
            </LoginRouteContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Login
