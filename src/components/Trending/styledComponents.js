import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  min-height: 85vh;
`

export const HeadingContainer = styled.section`
  display: flex;
  padding: 10px;
  align-items: center;
  background-color: ${props => (props.isdark ? '#181818' : '#f1f1f1')};
`

export const Heading = styled.h1`
  color: ${props => (props.isdark ? '#F5FBFC' : '#1F293B')};
`

export const IconContainer = styled.div`
  background-color: ${props => (props.isdark ? '#0F0F0F' : '#e1e9f0')};
  padding: 10px;
  border-radius: 50%;
  margin-right: 15px;
`

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${props => (props.isdark ? '#0F0F0F' : '#F9F9F9')};
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const TrendingListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-direction column;
  align-items: center;
  @media screen and (min-height: 1024px) {
    height: 46rem;
    overflow-y: auto;
  }
  @media screen and (min-height: 1180px) {
    height: 53rem;
    overflow-y: auto;
  }
  @media screen and (min-height: 1366px) {
    height: 63rem;
    overflow-y: auto;
  }
  @media (min-width: 1024px) and (max-height: 600px) {
    height: 24rem;
    overflow-y: auto;
  }
  @media (min-width: 1280px) and (max-height: 800px) {
    height: 34rem;
    overflow-y: auto;
  }
  @media (min-width: 2560px) and (max-height: 600px) {
    height: 34rem;
    overflow-y: auto;
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
