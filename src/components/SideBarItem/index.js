import {
  ListElement,
  Paragraph,
  TabButton,
  Home,
  Trending,
  SavedVideos,
  Gaming,
  LinkElement,
} from './styledComponents'

import ToggleTheme from '../../Context/ToggleTheme'

const SideBarItem = props => {
  const {tabItem, onActiveTab, isActive} = props
  const {optionId, displayText} = tabItem
  const activeTab = () => {
    onActiveTab(optionId)
  }

  const renderIcon = () => {
    switch (optionId) {
      case 'HOME':
        return <Home isactive={isActive} />
      case 'TRENDING':
        return <Trending isactive={isActive} />
      case 'GAMING':
        return <Gaming isactive={isActive} />
      case 'SavedVideos':
        return <SavedVideos isactive={isActive} />
      default:
        return ''
    }
  }

  const renderPath = () => {
    switch (optionId) {
      case 'HOME':
        return '/'
      case 'TRENDING':
        return '/trending'
      case 'GAMING':
        return '/gaming'
      case 'SavedVideos':
        return '/saved-videos'
      default:
        return ''
    }
  }

  return (
    <>
      <ToggleTheme.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <ListElement isdark={isDark} isactive={isActive}>
                <LinkElement to={renderPath()}>
                  <TabButton type="button" onClick={activeTab}>
                    {renderIcon()}
                    <Paragraph isdark={isDark} isactive={isActive}>
                      {displayText}
                    </Paragraph>
                  </TabButton>
                </LinkElement>
              </ListElement>
            </>
          )
        }}
      </ToggleTheme.Consumer>
    </>
  )
}

export default SideBarItem
