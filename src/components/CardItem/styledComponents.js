import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CardList = styled.li`
  width: 280px;
  height: 280px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    width: 80%;
    height: 160px;
  }
`

export const TextContainer = styled.article`
  display: flex;
  gap: 10px;
  align-items: center;
  @media screen and (min-width: 576px) {
    align-items: flex-start;
  }
`

export const Image = styled.img`
  width: 280px;
  height: 160px;
`

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const Title = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${props => (props.isdark ? '#F7F6E9' : '#343B4B')};
`

export const SubTitle = styled.p`
  font-size: 12px;
  margin-top: 0px;
  margin-bottom: 5px;
  color: ${props => (props.isdark ? '#cbd5e1' : '#7e858e')};
`

export const Container = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`

export const ExtraSmallDevice = styled.div`
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const LinkElement = styled(Link)`
  text-decoration: none;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`
