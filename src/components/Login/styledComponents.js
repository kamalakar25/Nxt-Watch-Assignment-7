import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.isdark ? '#212121' : ' #f9f9f9')};
`

export const CardContainer = styled.section`
  width: 250px;
  height: 350px;
  padding: 10px;
  background-color: ${props => (props.isdark ? '#0f0f0f' : '#f8fafc')};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => (props.isdark ? '' : '0px 5px 10px 10px #f1f1f1')};
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const WebsiteLogo = styled.img`
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
`

export const Form = styled.form``

export const LabelText = styled.label`
  color: ${props => (props.isdark ? '#ffffff' : '#92A2BE')};
  font-size: 12px;
  font-weight: 600;
`

export const Input = styled.input`
  width: 230px;
  padding: 8px;
  display: block;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid ${props => (props.isdark ? '#2f3944' : '#e6ebf1')};
  color: ${props => (props.isdark ? '#ffffff' : '#0f0f0f')};
  background-color: ${props => (props.isdark ? '#0f0f0f' : '#ffffff')};
  outline: none;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
  cursor: pointer;
`

export const CheckBoxLabel = styled.label`
  color: ${props => (props.isdark ? '#ffffff' : '#495A68')};
  font-size: 14px;
  font-weight: 500;
`

export const LoginButton = styled.button`
  display: block;
  width: 230px;
  cursor: pointer;
  padding: 8px;
  margin-top: 15px;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 5px;
  border-width: 0px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const Error = styled.p`
  color: #ff0000;
`
