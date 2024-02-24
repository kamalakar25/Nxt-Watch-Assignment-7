import Header from '../Header'
import SideBar from '../SideBar'

import ToggleTheme from '../../Context/ToggleTheme'

import {
  NotFoundContainer,
  ContentContainer,
  NotFoundImage,
  PageNotFound,
  WeAreSorry,
} from './styledComponents'

const NotFound = () => (
  <ToggleTheme.Consumer>
    {value => {
      const {isDark} = value
      const imageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NotFoundContainer>
            <SideBar />
            <ContentContainer isdark={isDark}>
              <NotFoundImage src={imageUrl} alt="not found" />
              <PageNotFound isdark={isDark}>Page Not Found</PageNotFound>
              <WeAreSorry isdark={isDark}>
                We are sorry, the page you requested could not be found.
              </WeAreSorry>
            </ContentContainer>
          </NotFoundContainer>
        </>
      )
    }}
  </ToggleTheme.Consumer>
)

export default NotFound
