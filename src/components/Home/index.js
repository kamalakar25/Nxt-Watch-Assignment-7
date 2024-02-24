import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import ToggleTheme from '../../Context/ToggleTheme'
import {
  HomeContainer,
  BannerContainer,
  BannerLogo,
  BannerText,
  GetitNow,
  ContentContainer,
  VideoContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  CloseButton,
  Close,
  SearchIcon,
  LoaderContainer,
  VideoListContainer,
  NoVideoContainer,
  NoResultFoundText,
  RemoveSearchFilterText,
  RetryButton,
  Image,
  EmptyContainer,
  SomethingWentWrong,
  NoConnetionImage,
  PleaseTryAgain,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProcess: 'INPROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    removeBanner: false,
    searchValue: '',
    videos: [],
    apiStatus: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onRetry = () => {
    this.getHomeVideos()
  }

  formatInPascalCase = videoList => {
    const video = videoList.map(eachVideo => ({
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
    return video
  }

  getHomeVideos = async () => {
    const {searchValue} = this.state
    this.setState({apiStatus: apiStatusConstant.inProcess})
    const jwtToken = Cookies.get('jwt_token')
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(homeVideosApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const formatData = this.formatInPascalCase(data.videos)
      this.setState({videos: formatData, apiStatus: apiStatusConstant.success})
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  render() {
    const {searchValue, videos, removeBanner} = this.state
    return (
      <>
        <ToggleTheme.Consumer>
          {value => {
            const {isDark} = value

            const onRemoveBanner = () => {
              this.setState({removeBanner: true})
            }

            const handleSearchValue = event => {
              this.setState({searchValue: event.target.value})
            }

            const onSearch = () => {
              this.getHomeVideos()
            }

            const renderBanner = () => (
              <>
                <CloseButton
                  data-testid="close"
                  onClick={onRemoveBanner}
                  type="button"
                >
                  <Close />
                </CloseButton>
                <BannerLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <BannerText>Buy Nxt Watch Premium</BannerText>
                <GetitNow type="button">GET IT NOW</GetitNow>
              </>
            )

            const onSuccessView = () => {
              const showVideo = videos.length > 0
              return (
                <>
                  {showVideo ? (
                    <VideoListContainer isbanner={removeBanner}>
                      {videos.map(eachVideo => (
                        <VideoItem
                          videoDetails={eachVideo}
                          key={eachVideo.id}
                        />
                      ))}
                    </VideoListContainer>
                  ) : (
                    <NoVideoContainer>
                      <Image
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                        alt="no videos"
                      />
                      <NoResultFoundText>
                        No Search results found
                      </NoResultFoundText>
                      <RemoveSearchFilterText>
                        Try different key words or remove search filter
                      </RemoveSearchFilterText>
                      <RetryButton onClick={this.onRetry}>Retry</RetryButton>
                    </NoVideoContainer>
                  )}
                </>
              )
            }

            const onFailureView = () => {
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

            const onLoaderView = () => (
              <>
                <LoaderContainer data-testid="loader">
                  <Loader
                    type="ThreeDots"
                    color="#4f46e5"
                    height="50"
                    width="50"
                  />
                </LoaderContainer>
              </>
            )

            const renderVideo = () => {
              const {apiStatus} = this.state
              switch (apiStatus) {
                case 'SUCCESS':
                  return onSuccessView()
                case 'FAILURE':
                  return onFailureView()
                case 'INPROCESS':
                  return onLoaderView()
                default:
                  return null
              }
            }

            const renderVideoContainer = () => (
              <>
                <SearchContainer isdark={isDark}>
                  <SearchInput
                    isdark={isDark}
                    type="search"
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleSearchValue}
                  />
                  <SearchButton
                    onClick={onSearch}
                    type="button"
                    isdark={isDark}
                    data-testid="searchButton"
                  >
                    <SearchIcon isdark={isDark} />
                  </SearchButton>
                </SearchContainer>
                {renderVideo()}
              </>
            )

            return (
              <>
                <Header />
                <HomeContainer>
                  <SideBar />
                  <ContentContainer data-testid="home" isdark={isDark}>
                    {!removeBanner && (
                      <BannerContainer data-testid="banner">
                        {renderBanner()}
                      </BannerContainer>
                    )}
                    <VideoContainer>{renderVideoContainer()}</VideoContainer>
                  </ContentContainer>
                </HomeContainer>
              </>
            )
          }}
        </ToggleTheme.Consumer>
      </>
    )
  }
}

export default Home
