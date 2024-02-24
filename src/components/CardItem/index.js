import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import ToggleTheme from '../../Context/ToggleTheme'
import {
  CardList,
  TextContainer,
  Logo,
  Title,
  Container,
  SubTitle,
  Image,
  DetailsContainer,
  ExtraSmallDevice,
  LinkElement,
} from './styledComponents'

const CardItem = props => {
  const {videoList} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = videoList
  const {profileImageUrl, name} = channel
  const date = formatDistanceToNow(new Date(publishedAt))

  return (
    <>
      <ToggleTheme.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <CardList>
                <LinkElement to={`/videos/${id}`}>
                  <div>
                    <Image src={thumbnailUrl} alt="video thumbnail" />
                  </div>
                  <TextContainer>
                    <div>
                      <Logo src={profileImageUrl} alt="profile" />
                    </div>
                    <div>
                      <Title isdark={isDark}>{title}</Title>
                      <DetailsContainer>
                        <SubTitle isdark={isDark}>{name}</SubTitle>
                        <ExtraSmallDevice>
                          <BsDot color="#4a566b" fontSize="20px" />
                        </ExtraSmallDevice>
                        <Container>
                          <SubTitle isdark={isDark}>{viewCount} views</SubTitle>
                          <BsDot color="#4a566b" fontSize="20px" />
                          <SubTitle isdark={isDark}>
                            {date.split(' ')[1]} years ago
                          </SubTitle>
                        </Container>
                      </DetailsContainer>
                    </div>
                  </TextContainer>
                </LinkElement>
              </CardList>
            </>
          )
        }}
      </ToggleTheme.Consumer>
    </>
  )
}

export default CardItem
