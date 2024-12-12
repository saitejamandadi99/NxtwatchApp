import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewError,
  FailureViewDescription,
  RetryButton,
} from './styledComponent'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetryButton = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const color = isDarkTheme ? 'white' : 'black'

        return (
          <FailureViewContainer>
            <FailureViewImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
            />
            <FailureViewError color={color}>
              Oops! Something Went Wrong
            </FailureViewError>
            <FailureViewDescription color={color}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewDescription>
            <RetryButton onClick={onClickRetryButton}>Retry</RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailureView
