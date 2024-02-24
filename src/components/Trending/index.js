import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBar from '../SideBar'
import CardItem from '../CardItem'

import {
  TrendingContainer,
  HeadingContainer,
  Heading,
  IconContainer,
  Container,
  TrendingListContainer,
  EmptyContainer,
  NoConnetionImage,
  SomethingWentWrong,
  PleaseTryAgain,
  RetryButton,
} from './styledComponents'

import ToggleTheme from '../../Context/ToggleTheme'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProcess: 'INPROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingList: [], apiStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getTrendingList()
  }

  formatPascalCase = videos => {
    const data = videos.map(eachVideo => ({
      channel: {
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      },
      id: eachVideo.id,
      publishedAt: eachVideo.published_at,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
    }))
    return data
  }

  getTrendingList = async () => {
    this.setState({apiStatus: apiStatusConstant.inProcess})
    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(trendingVideosApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const formatData = this.formatPascalCase(data.videos)
      this.setState({
        trendingList: formatData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onRetry = () => {
    this.getTrendingList()
  }

  render() {
    const {trendingList, apiStatus} = this.state
    return (
      <>
        <ToggleTheme.Consumer>
          {value => {
            const {isDark} = value

            const renderSuccessView = () => (
              <>
                <TrendingListContainer>
                  {trendingList.map(eachTrends => (
                    <CardItem videoList={eachTrends} key={eachTrends.id} />
                  ))}
                </TrendingListContainer>
              </>
            )

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

            const renderTrending = () => {
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
                <TrendingContainer>
                  <SideBar />
                  <Container data-testid="trending" isdark={isDark}>
                    {apiStatus === 'FAILURE' ? (
                      ''
                    ) : (
                      <HeadingContainer isdark={isDark}>
                        <IconContainer isdark={isDark}>
                          <HiFire color="#FF031C" fontSize="30px" />
                        </IconContainer>
                        <Heading isdark={isDark}>Trending</Heading>
                      </HeadingContainer>
                    )}

                    {renderTrending()}
                  </Container>
                </TrendingContainer>
              </>
            )
          }}
        </ToggleTheme.Consumer>
      </>
    )
  }
}

export default Trending
