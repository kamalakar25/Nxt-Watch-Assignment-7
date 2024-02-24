import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {
  SideContainer,
  SidebarListContainer,
  ContactUsContainer,
  ContactUsText,
  SocialMediaIcon,
  Paragraph,
  SocialMediaContainer,
} from './styledComponents'

import SideBarItem from '../SideBarItem'

import ToggleTheme from '../../Context/ToggleTheme'

const tabList = [
  {optionId: 'HOME', displayText: 'Home'},
  {optionId: 'TRENDING', displayText: 'Trending'},
  {optionId: 'GAMING', displayText: 'Gaming'},
  {optionId: 'SavedVideos', displayText: 'Saved videos'},
]

class SideBar extends Component {
  state = {activeTab: tabList[0].optionId}

  onActiveTab = id => {
    this.setState({activeTab: id})
  }

  getTabId = () => {
    const {match} = this.props
    const {path} = match
    switch (path) {
      case '/':
        return 'HOME'
      case '/trending':
        return 'TRENDING'
      case '/gaming':
        return 'GAMING'
      case '/saved-videos':
        return 'SavedVideos'
      default:
        return ''
    }
  }

  renderSideContainer = () => {
    const tabId = this.getTabId()
    return (
      <>
        <SidebarListContainer>
          {tabList.map(eachTab => (
            <SideBarItem
              key={eachTab.optionId}
              tabItem={eachTab}
              onActiveTab={this.onActiveTab}
              isActive={tabId === eachTab.optionId}
            />
          ))}
        </SidebarListContainer>
      </>
    )
  }

  render() {
    return (
      <>
        <ToggleTheme.Consumer>
          {value => {
            const {isDark} = value
            return (
              <>
                <SideContainer isdark={isDark}>
                  {this.renderSideContainer()}
                  <ContactUsContainer>
                    <ContactUsText isdark={isDark}>CONTACT US</ContactUsText>
                    <SocialMediaContainer>
                      <SocialMediaIcon
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                      />
                      <SocialMediaIcon
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                        alt="twitter logo"
                      />
                      <SocialMediaIcon
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                        alt="linked in logo"
                      />
                    </SocialMediaContainer>

                    <Paragraph isdark={isDark}>
                      Enjoy! Now to see your channels and recommendations!
                    </Paragraph>
                  </ContactUsContainer>
                </SideContainer>
              </>
            )
          }}
        </ToggleTheme.Consumer>
      </>
    )
  }
}

export default withRouter(SideBar)
