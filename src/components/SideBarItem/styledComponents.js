import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

export const ListElement = styled.li`
  background-color: ${props => {
    if (props.isdark) {
      return props.isactive ? '#383838' : 'transparent'
    }
    return props.isactive ? '#f1f5f9' : 'transparent'
  }};
  margin-right: 10px;
`
export const TabButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
`

export const Paragraph = styled.p`
  font-size: 16px;
  margin-left: 20px;
  white-space: nowrap;
  color: ${props => {
    if (props.isdark) {
      return props.isactive ? '#ffffff' : ' #606060'
    }
    return props.isactive ? '#314154' : ' #606060'
  }};
  font-weight: ${props => (props.isactive ? '700' : '400')};
`

export const Home = styled(AiFillHome)`
  font-size: 20px;
  color: ${props => (props.isactive ? '#ff0b37' : ' #606060')};
`

export const Trending = styled(HiFire)`
  font-size: 20px;
  color: ${props => (props.isactive ? '#ff0b37' : ' #606060')};
`

export const Gaming = styled(SiYoutubegaming)`
  font-size: 20px;
  color: ${props => (props.isactive ? '#ff0b37' : ' #606060')};
`

export const SavedVideos = styled(CgPlayListAdd)`
  font-size: 20px;
  color: ${props => (props.isactive ? '#ff0b37' : ' #606060')};
`

export const LinkElement = styled(Link)`
  text-decoration: none;
  color: transparent;
`
