import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

export const VideoItemDetailsContainer = styled.div`
  min-height: 85vh;
  display: flex;
`

export const VideoContainer = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${props =>
    props.isdark === 'true' ? '#0f0f0f' : '#f9f9f9'};
  @media screen and (min-width: 768px) {
    width: 80%;
    padding: 20px;
    height: 85vh;
    overflow-y: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
`
export const PlayerContainer = styled.div`
  background-color: #0f0f0f;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
`

export const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`

export const ChannelName = styled.p`
  color: ${props => (props.isdark === 'true' ? '#ffffff' : '#3b5181')};
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 16px;
  font-weight: 500;
`

export const Title = styled.p`
  color: ${props => (props.isdark === 'true' ? '#ffffff' : '#3b5181')};
  margin-top: 20px;
  font-weight: 600;
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
`

export const ViewCount = styled.p`
  color: #7e858e;
`

export const Dot = styled(BsDot)`
  color: #4a566b;
  font-size: 20px;
`

export const PublishedAt = styled.p`
  color: #7e858e;
`

export const DateAndViews = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const HorizontalLine = styled.hr`
  color: ${props => (props.isdark === 'true' ? '#7e858e' : '#e5e6e6')};
`

export const Subscribers = styled.p`
  color: #7e858e;
  font-size: 14px;
  margin-top: 5px;
`

export const Description = styled.p`
  color: ${props => (props.isdark === 'true' ? '#ffffff' : '#64748b')};
`

export const Button = styled.button`
  background-color: transparent;
  border-width: 0px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

export const Like = styled(BiLike)`
  color: ${props => (props.islike ? '#2563eb' : '#64748b')};
  font-size: 20px;
`

export const Dislike = styled(BiDislike)`
  color: ${props => (props.isdislike ? '#2563eb' : '#64748b')};
  font-size: 20px;
`

export const Save = styled(CgPlayListAdd)`
  color: ${props => (props.issaved ? '#2563eb' : '#64748b')};
  font-size: 20px;
`

export const ButtonText = styled.p`
  color: #7e858e;
`

export const SaveText = styled(ButtonText)`
  color: ${props => (props.issaved ? '#2563eb' : '#64748b')};
`

export const LikeText = styled(ButtonText)`
  color: ${props => (props.islike ? '#2563eb' : '#64748b')};
`
export const DislikeText = styled(ButtonText)`
  color: ${props => (props.isdislike ? '#2563eb' : '#64748b')};
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`

export const EmptyContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isdark ? '#181818' : '#f9f9f9')};
`

export const NoConnetionImage = styled.img`
  width: 250px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const SomethingWentWrong = styled.h1`
  color: ${props => (props.isdark ? '#e4f9f0' : '#252a3a')};
  font-size: 25px;
  text-align: center;
`

export const PleaseTryAgain = styled.p`
  color: ${props => (props.isdark ? '#686d79' : '#5b83a2')};
  font-size: 16px;
  text-align: center;
`

export const RetryButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #4a47e0;
  color: #e0f2fb;
  border-width: 0px;
  width: 80px;
`
