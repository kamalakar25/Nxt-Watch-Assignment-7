import styled from 'styled-components'

export const SavedContainer = styled.div`
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
  color: ${props => (props.isdark ? '#F8FAFC' : '#1F293B')};
  font-size: 25px;
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

export const NoVideoSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Paragraph = styled.p`
  color: ${props => (props.isdark ? '#686d79' : '#5b83a2')};
  font-size: 16px;
  text-align: center;
  margin-top: 0px;
`

export const NoSavedImage = styled.img`
  width: 250px;
  height: 250px;
  @media screen and (min-width: 576px) {
    width: 400px;
  }
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`

export const SavedVideoListContainer = styled.ul`
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
