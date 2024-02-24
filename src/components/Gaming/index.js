import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import GameCardItem from '../GameCardItem'

import ToggleTheme from '../../Context/ToggleTheme'

import {
  GamingContainer,
  HeadingContainer,
  Heading,
  IconContainer,
  Container,
  EmptyContainer,
  NoConnetionImage,
  SomethingWentWrong,
  PleaseTryAgain,
  RetryButton,
  GamingListContainer,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProcess: 'INPROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingList: [], apiStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  onRetry = () => {
    this.getGamingVideos()
  }

  formatPascalCase = videos => {
    const data = videos.map(eachVideo => ({
      id: eachVideo.id,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
    }))
    return data
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProcess})
    const jwtToken = Cookies.get('jwt_token')
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(gamingVideosApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const formatData = this.formatPascalCase(data.videos)
      this.setState({
        gamingList: formatData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  render() {
    const {gamingList, apiStatus} = this.state
    return (
      <>
        <ToggleTheme.Consumer>
          {value => {
            const {isDark} = value

            const renderFailureView = () => {
              const imageUrl = isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              return (
                <>
                  <EmptyContainer isdark={isDark}>
                    <NoConnetionImage src={imageUrl} alt="failure view" />
                    <SomethingWentWrong isdark={isDark}>
                      Oops! Something Went Wrong
                    </SomethingWentWrong>
                    <PleaseTryAgain isdark={isDark}>
                      We are having some trouble to complete your request.
                      Please try again.
                    </PleaseTryAgain>
                    <RetryButton type="button" onClick={this.onRetry}>
                      Retry
                    </RetryButton>
                  </EmptyContainer>
                </>
              )
            }

            const renderSuccessView = () => (
              <>
                <GamingListContainer>
                  {gamingList.map(eachGames => (
                    <GameCardItem gameList={eachGames} key={eachGames.id} />
                  ))}
                </GamingListContainer>
              </>
            )

            const renderLoader = () => (
              <>
                <EmptyContainer isdark={isDark} data-testid="loader">
                  <Loader
                    type="ThreeDots"
                    color="#4f46e5"
                    height="50"
                    width="50"
                  />
                </EmptyContainer>
              </>
            )

            const renderGaming = () => {
              switch (apiStatus) {
                case 'INPROCESS':
                  return renderLoader()
                case 'SUCCESS':
                  return renderSuccessView()
                case 'FAILURE':
                  return renderFailureView()
                default:
                  return ''
              }
            }

            return (
              <>
                <Header />
                <GamingContainer>
                  <SideBar />
                  <Container data-testid="gaming" isdark={isDark}>
                    <HeadingContainer isdark={isDark}>
                      <IconContainer isdark={isDark}>
                        <SiYoutubegaming color="#FF031C" fontSize="30px" />
                      </IconContainer>
                      <Heading isdark={isDark}>Gaming</Heading>
                    </HeadingContainer>
                    {renderGaming()}
                  </Container>
                </GamingContainer>
              </>
            )
          }}
        </ToggleTheme.Consumer>
      </>
    )
  }
}

export default Gaming
