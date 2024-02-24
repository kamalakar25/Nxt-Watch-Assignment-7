import styled from 'styled-components'
import {IoIosClose, IoIosSearch} from 'react-icons/io'

export const HomeContainer = styled.div`
  min-height: 85vh;
  display: flex;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 15px;
  height: 180px;
  position: relative;
  margin-top: 5px;
`

export const BannerLogo = styled.img`
  width: 150px;
  height: 50px;
`

export const BannerText = styled.p`
  font-size: 16px;
`

export const GetitNow = styled.button`
  padding: 10px;
  border: 1px solid #314154;
  color: #314154;
  font-weight: 600;
  background-color: transparent;
`

export const VideoContainer = styled.div`
  padding: 20px;
`

export const ContentContainer = styled.div`
  min-height: 100%;
  width: 100%;
  background-color: ${props => (props.isdark ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const CloseButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    right: 90px;
  }
`

export const Close = styled(IoIosClose)`
  font-size: 40px;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 2px solid ${props => (props.isdark ? '#5B5555' : '#cccccc')};
  width: 350px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (max-width: 280px) {
    width: 250px;
  }
`

export const SearchInput = styled.input`
  border-width: 0px;
  width: 100%;
  outline: none;
  padding: 10px;
  background-color: ${props => (props.isdark ? 'transparent' : '#ffffff')};
  color: ${props => (props.isdark ? '#ffffff' : '#000000')};
`

export const SearchButton = styled.button`
  width: 80px;
  border-width: 0px;
  border-left: 2px solid ${props => (props.isdark ? '#5B5555' : '#cccccc')};
  background-color: ${props => (props.isdark ? '#303031' : '#F4F4F4')};
`

export const SearchIcon = styled(IoIosSearch)`
  font-size: 15px;
  color: ${props => (props.isdark ? '#5B5555' : '#978f8d')};
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
`

export const VideoListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 768px) and (max-height: 1024px) {
    height: ${props => (props.isbanner ? '47rem' : '35rem')};
    overflow-y: auto;
  }
  @media (min-width: 820px) and (max-height: 1180px) {
    height: ${props => (props.isbanner ? '55rem' : '44rem')};
    overflow-y: auto;
  }
  @media (min-width: 900px) and (min-height: 1300px) {
    height: ${props => (props.isbanner ? '65rem' : '54rem')};
    overflow-y: auto;
  }
  @media (min-width: 1024px) and (max-height: 600px) {
    height: ${props => (props.isbanner ? '24rem' : '13rem')};
    overflow-y: auto;
  }
  @media (min-width: 1280px) and (max-height: 800px) {
    height: ${props => (props.isbanner ? '35rem' : '24rem')};
    overflow-y: auto;
  }
`

export const NoVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  width: 240px;
  height: 300px;
`

export const NoResultFoundText = styled.h1`
  font-family: Roboto;
  color: #1c293c;
`
export const RemoveSearchFilterText = styled.p`
  color: #628fb1;
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
  margin-top: 20px;
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
