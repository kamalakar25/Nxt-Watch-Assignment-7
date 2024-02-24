import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {
  NavBar,
  WebsiteLogo,
  NavLink,
  CustomButton,
  DarkMode,
  LightMode,
  Avatar,
  LogOutButton,
  HamburgerMenu,
  LogoutIcon,
  Modal,
  ModalMessage,
  CancelButton,
  ConfirmButton,
} from './styledComponents'
import ToggleTheme from '../../Context/ToggleTheme'

const Header = props => (
  <ToggleTheme.Consumer>
    {value => {
      const {isDark, onChangeTheme} = value
      const changeTheme = () => {
        onChangeTheme(isDark)
      }

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const logoImageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const renderDesktopView = () => (
        <>
          <Avatar
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <Popup
            trigger={
              <LogOutButton isdark={isDark} type="button">
                Logout
              </LogOutButton>
            }
            className="popup-content"
            modal
          >
            {close => (
              <Modal isdark={isDark}>
                <ModalMessage isdark={isDark}>
                  Are you sure, you want to logout
                </ModalMessage>
                <div>
                  <CancelButton type="button" onClick={close}>
                    Cancel
                  </CancelButton>
                  <ConfirmButton type="button" onClick={onLogout}>
                    Confirm
                  </ConfirmButton>
                </div>
              </Modal>
            )}
          </Popup>
        </>
      )

      const renderMobileView = () => (
        <>
          <CustomButton type="button">
            <HamburgerMenu isdark={isDark} />
          </CustomButton>
          <Popup
            trigger={
              <CustomButton type="button">
                <LogoutIcon isdark={isDark} />
              </CustomButton>
            }
            modal
            nested
          >
            {close => (
              <Modal isdark={isDark}>
                <ModalMessage isdark={isDark}>
                  Are you sure you want to logout?
                </ModalMessage>
                <div>
                  <CancelButton type="button" onClick={close}>
                    Cancel
                  </CancelButton>
                  <ConfirmButton type="button" onClick={onLogout}>
                    Confirm
                  </ConfirmButton>
                </div>
              </Modal>
            )}
          </Popup>
        </>
      )
      return (
        <>
          <NavBar isdark={isDark}>
            <Link to="/">
              <WebsiteLogo src={logoImageUrl} alt="website logo" />
            </Link>
            <NavLink>
              <CustomButton
                data-testid="theme"
                onClick={changeTheme}
                type="button"
              >
                {isDark ? <LightMode /> : <DarkMode />}
              </CustomButton>
              {renderDesktopView()}
              {renderMobileView()}
            </NavLink>
          </NavBar>
        </>
      )
    }}
  </ToggleTheme.Consumer>
)

export default withRouter(Header)
