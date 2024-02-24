import {formatDistanceToNow} from 'date-fns'

import {
  VideoListElement,
  ChannelProfileImage,
  Container,
  ChannelName,
  Title,
  ChannelLogo,
  ViewCount,
  DateAndViews,
  PublishedAt,
  Dot,
  LinkElement,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {publishedAt, thumbnailUrl, title, viewCount, id} = videoDetails
  const {name, profileImageUrl} = videoDetails.channel
  const date = formatDistanceToNow(new Date(publishedAt))
  return (
    <>
      <VideoListElement>
        <LinkElement to={`/videos/${id}`}>
          <ChannelProfileImage alt="video thumbnail" src={thumbnailUrl} />

          <Container>
            <div>
              <ChannelLogo alt="channel logo" src={profileImageUrl} />
            </div>
            <div>
              <Title>{title}</Title>
              <ChannelName>{name}</ChannelName>
              <DateAndViews>
                <ViewCount>{viewCount} views</ViewCount>
                <Dot />
                <PublishedAt key="published_at">
                  {date.split(' ')[1]} years ago
                </PublishedAt>
              </DateAndViews>
            </div>
          </Container>
        </LinkElement>
      </VideoListElement>
    </>
  )
}

export default VideoItem
