import styled from 'styled-components'

export const SideContainer = styled.div`
  width: 20%;
  min-height: 100%;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => (props.isdark ? '#212121' : '#ffffff')};
  }
`

export const SidebarListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`

export const ContactUsContainer = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const ContactUsText = styled.p`
  font-size: 20px;
  color: ${props => (props.isdark ? '#ffffff' : '#314154')};
`

export const SocialMediaContainer = styled.div`
  display: flex;
`

export const SocialMediaIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const Paragraph = styled.p`
  color: ${props => (props.isdark ? '#ffffff' : '#314154')};
  font-weight: 500;
`
