import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export const VideoListElement = styled.li`
  width: 250px;
  height: 350px;
  margin: 10px;
`
export const ChannelProfileImage = styled.img`
  width: 250px;
  height: 150px;
  @media screen and (min-width: 1024px) {
    height: 120px;
  }
  @media screen and (min-width: 1200px) {
    height: 150px;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 10px;
`

export const ChannelName = styled.p`
  color: #7e858e;
  margin-bottom: 5px;
`

export const Title = styled.p`
  color: #3b5181;
  margin-top: 0px;
  font-weight: 600;
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
`

export const ViewCount = styled.p`
  color: #7e858e;
`

export const Dot = styled(BsDot)``

export const PublishedAt = styled.p`
  color: #7e858e;
`

export const DateAndViews = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const LinkElement = styled(Link)`
  text-decoration: none;
`
