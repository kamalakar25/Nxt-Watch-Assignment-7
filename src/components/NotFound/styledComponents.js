import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  min-height: 85vh;
`

export const ContentContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isdark ? '#0F0F0F' : '#F9F9F9')};
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const NotFoundImage = styled.img`
  width: 250px;
  height: 300px;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 350px;
  }
`

export const PageNotFound = styled.h1`
  color: ${props => (props.isdark ? '#e4f9f0' : '#252a3a')};
  font-size: 25px;
  text-align: center;
`

export const WeAreSorry = styled.p`
  color: ${props => (props.isdark ? '#686d79' : '#5b83a2')};
  font-size: 16px;
  text-align: center;
`
