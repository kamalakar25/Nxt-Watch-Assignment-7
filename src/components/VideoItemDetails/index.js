import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Component} from 'react'
import ToggleTheme from '../../Context/ToggleTheme'
import SavedVideoPlaylist from '../../Context/SavedVideoPlaylist'

import {
  VideoItemDetailsContainer,
  VideoContainer,
  LoaderContainer,
  PlayerContainer,
  Container,
  ChannelLogo,
  HorizontalLine,
  Title,
  ChannelName,
  DateAndViews,
  ViewCount,
  PublishedAt,
  Dot,
  Description,
  Subscribers,
  Button,
  LikeText,
  DislikeText,
  DetailsContainer,
  Like,
  Dislike,
  Save,
  SaveText,
  EmptyContainer,
  NoConnetionImage,
  SomethingWentWrong,
  PleaseTryAgain,
  RetryButton,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../SideBar'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProcess: 'INPROCESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videos: {},
    apiStatus: apiStatusConstant.initial,
    isLike: false,
    isDislike: false,
  }

  componentDidMount() {
    this.getVideo()
  }

  onRetry = () => {
    this.getVideo()
  }

  getVideo = async () => {
    this.setState({apiStatus: apiStatusConstant.inProcess})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(videoItemDetailsApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const formatData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        isSaved: false,
      }
      this.setState({videos: formatData, apiStatus: apiStatusConstant.success})
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  render() {
    const {videos, isLike, isDislike} = this.state
    return (
      <ToggleTheme.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <SavedVideoPlaylist.Consumer>
                {playlist => {
                  const {onSaveVideos, videoPlaylist} = playlist
                  const setSaved = () => {
                    const isPresent = videoPlaylist.find(
                      eachVideo => eachVideo.id === videos.id,
                    )
                    return isPresent
                  }
                  const onSaveVideo = () => {
                    this.setState(
                      previousValue => ({
                        videos: {
                          ...previousValue.videos,
                          isSaved: !previousValue.videos.isSaved,
                        },
                      }),
                      onSaveVideos(videos),
                    )
                  }
                  const video = setSaved()
                  const isSave = video === undefined ? false : video.isSaved

                  const setLike = () => {
                    this.setState(previousValue => ({
                      isLike: !previousValue.isLike,
                      isDislike: false,
                    }))
                  }
                  const setDislike = () => {
                    this.setState(previousValue => ({
                      isDislike: !previousValue.isDislike,
                      isLike: false,
                    }))
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

                  const onSuccessView = () => {
                    const {
                      videoUrl,
                      title,
                      viewCount,
                      publishedAt,
                      channel,
                      description,
                    } = videos
                    const {profileImageUrl, name, subscriberCount} = channel
                    const date = formatDistanceToNow(new Date(publishedAt))
                    return (
                      <>
                        <PlayerContainer>
                          <ReactPlayer
                            url={videoUrl}
                            width="100"
                            height="250px"
                            controls={`${true}`}
                          />
                        </PlayerContainer>
                        <Title isdark={`${isDark}`}>{title}</Title>
                        <DetailsContainer>
                          <DateAndViews>
                            <ViewCount>{viewCount} views</ViewCount>
                            <Dot />
                            <PublishedAt key="published_at">
                              {date.split(' ')[1]} years ago
                            </PublishedAt>
                          </DateAndViews>
                          <Container>
                            <Button onClick={setLike}>
                              <Like islike={isLike} />
                              <LikeText islike={isLike}>Like</LikeText>
                            </Button>
                            <Button onClick={setDislike}>
                              <Dislike isdislike={isDislike} />
                              <DislikeText isdislike={isDislike}>
                                Dislike
                              </DislikeText>
                            </Button>
                            <Button onClick={onSaveVideo}>
                              <Save issaved={isSave} />
                              <SaveText issaved={isSave}>
                                {isSave ? 'Saved' : 'Save'}
                              </SaveText>
                            </Button>
                          </Container>
                        </DetailsContainer>
                        <HorizontalLine isdark={`${isDark}`} />
                        <Container>
                          <div>
                            <ChannelLogo
                              alt="channel logo"
                              src={profileImageUrl}
                            />
                          </div>
                          <div>
                            <ChannelName isdark={`${isDark}`}>
                              {name}
                            </ChannelName>
                            <Subscribers>
                              {subscriberCount} subscribers
                            </Subscribers>
                            <Description isdark={`${isDark}`}>
                              {description}
                            </Description>
                          </div>
                        </Container>
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

                  return (
                    <>
                      <Header />
                      <VideoItemDetailsContainer>
                        <SideBar />
                        <VideoContainer
                          data-testid="videoItemDetails"
                          isdark={`${isDark}`}
                        >
                          {renderVideo()}
                        </VideoContainer>
                      </VideoItemDetailsContainer>
                    </>
                  )
                }}
              </SavedVideoPlaylist.Consumer>
            </>
          )
        }}
      </ToggleTheme.Consumer>
    )
  }
}

export default VideoItemDetails
