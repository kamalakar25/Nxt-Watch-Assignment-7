import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ToggleTheme from '../../Context/ToggleTheme'
import {
  LoginContainer,
  CardContainer,
  WebsiteLogo,
  Form,
  LabelText,
  Input,
  CheckBox,
  CheckBoxLabel,
  LoginButton,
  Error,
} from './styledComponents'

class Login extends Component {
  state = {userName: '', password: '', errorMsg: '', showPassword: false}

  onFailureLogin = error => {
    this.setState({errorMsg: error})
  }

  onSuccessLogin = tokenValue => {
    Cookies.set('jwt_token', tokenValue, {expires: 30})
    const {history} = this.props
    console.log(history)
    history.replace('/')
  }

  onLogin = async () => {
    const {userName, password} = this.state
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username: userName, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessLogin(data.jwt_token)
      this.setState({errorMsg: ''})
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.onLogin()
  }

  render() {
    const {errorMsg, password, showPassword, userName} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <ToggleTheme.Consumer>
          {value => {
            const {isDark} = value
            const websiteLogoImageUrl = isDark
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

            const handleUserName = event => {
              this.setState({userName: event.target.value})
            }

            const handlePassword = event => {
              this.setState({password: event.target.value})
            }

            const handleShowPassword = () => {
              this.setState(preValue => ({
                showPassword: !preValue.showPassword,
              }))
            }

            return (
              <>
                <LoginContainer isdark={isDark}>
                  <CardContainer isdark={isDark}>
                    <WebsiteLogo src={websiteLogoImageUrl} alt="website logo" />
                    <Form onSubmit={this.onSubmitForm}>
                      <LabelText isdark={isDark} htmlFor="username">
                        USERNAME
                      </LabelText>
                      <Input
                        onChange={handleUserName}
                        value={userName}
                        id="username"
                        placeholder="Username"
                        type="text"
                        isdark={isDark}
                      />
                      <LabelText isdark={isDark} htmlFor="password">
                        PASSWORD
                      </LabelText>
                      <Input
                        onChange={handlePassword}
                        value={password}
                        id="password"
                        placeholder="Password"
                        type={showPassword ? 'text' : 'password'}
                        isdark={isDark}
                      />
                      <CheckBox
                        id="showPassword"
                        onClick={handleShowPassword}
                        type="checkbox"
                      />
                      <CheckBoxLabel htmlFor="showPassword" isdark={isDark}>
                        Show Password
                      </CheckBoxLabel>
                      <LoginButton type="submit">Login</LoginButton>
                      {errorMsg !== '' ? <Error>{errorMsg}</Error> : ''}
                    </Form>
                  </CardContainer>
                </LoginContainer>
              </>
            )
          }}
        </ToggleTheme.Consumer>
      </>
    )
  }
}

export default Login
