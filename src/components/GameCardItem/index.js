import ToggleTheme from '../../Context/ToggleTheme'

import {
  GameCardList,
  GameImage,
  Name,
  Watching,
  LinkElement,
} from './styledComponents'

const GameCardItem = props => {
  const {gameList} = props
  const {id, thumbnailUrl, title, viewCount} = gameList
  return (
    <>
      <ToggleTheme.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <GameCardList>
                <LinkElement to={`/videos/${id}`}>
                  <div>
                    <GameImage src={thumbnailUrl} alt="video thumbnail" />
                  </div>
                  <Name isdark={isDark}>{title}</Name>
                  <Watching isdark={isDark}>
                    {viewCount} Watching Worldwide
                  </Watching>
                </LinkElement>
              </GameCardList>
            </>
          )
        }}
      </ToggleTheme.Consumer>
    </>
  )
}

export default GameCardItem
