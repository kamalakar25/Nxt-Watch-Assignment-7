import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'
import CardItem from '../CardItem'

import {
  SavedContainer,
  HeadingContainer,
  Heading,
  IconContainer,
  Container,
  NoVideoSavedContainer,
  Paragraph,
  NoSavedImage,
  SavedVideoListContainer,
} from './styledComponents'

import ToggleTheme from '../../Context/ToggleTheme'
import SavedVideoPlaylist from '../../Context/SavedVideoPlaylist'

const SavedVideos = () => (
  <>
    <ToggleTheme.Consumer>
      {theme => {
        const {isDark} = theme
        return (
          <>
            <SavedVideoPlaylist.Consumer>
              {playlist => {
                const {videoPlaylist} = playlist
                const noVideoSaved = () => (
                  <NoVideoSavedContainer>
                    <NoSavedImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <Heading isdark={isDark}>No saved videos found</Heading>
                    <Paragraph isdark={isDark}>
                      You can save your videos while watching them
                    </Paragraph>
                  </NoVideoSavedContainer>
                )

                const savedVideosList = () => (
                  <SavedVideoListContainer>
                    {videoPlaylist.map(eachSaved => (
                      <CardItem videoList={eachSaved} key={eachSaved.id} />
                    ))}
                  </SavedVideoListContainer>
                )
                return (
                  <>
                    <Header />
                    <SavedContainer>
                      <SideBar />
                      <Container data-testid="savedVideos" isdark={isDark}>
                        {videoPlaylist.length === 0 ? (
                          noVideoSaved()
                        ) : (
                          <HeadingContainer isdark={isDark}>
                            <IconContainer isdark={isDark}>
                              <HiFire color="#FF031C" fontSize="30px" />
                            </IconContainer>
                            <Heading isdark={isDark}>Saved Videos</Heading>
                          </HeadingContainer>
                        )}
                        {videoPlaylist.length !== 0 && savedVideosList()}
                      </Container>
                    </SavedContainer>
                  </>
                )
              }}
            </SavedVideoPlaylist.Consumer>
          </>
        )
      }}
    </ToggleTheme.Consumer>
  </>
)

export default SavedVideos
