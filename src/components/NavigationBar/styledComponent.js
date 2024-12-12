import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavigationItemContainer = styled.div`
  height: 100%;
  background-color: ${props => props.bgColor};
  margin: 0px;
  display: flex;

  @media screen and (min-width: 576px) {
    width: 25%;
    max-width: 280px;
  }
`

export const MobileNavigationItemContainer = styled.div`
  height: 100%;
  padding: 20px 10px;
  width: 100%;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const NavigationOption = styled.ul`
  padding: 0px;
  margin: 0px;
`

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
`

export const NavItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 7px;
  padding: 5px;
  flex-grow: 1;
  border-left: 7px solid ${props => props.activeTabBorderColor};
  border-bottom: 2px solid ${props => props.activeTabBorderColor};
  width: 100%;
  border-radius: 10px;
`

export const OptionName = styled.p`
  font-size: 13px;
  font-weight: ${props => props.fontWeight};
  padding-left: 10px;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const LargestDeviceNavigationItemContainer = styled.div`
  min-height: 90vh;
  max-height: 100%;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const ContactContainer = styled.div`
  padding: 0px 10px;
  max-width: 200px;
`
export const ContactHeading = styled.p`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 10px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SocialMediaLogo = styled.img`
  width: 28px;
  margin: 0px 5px;
`
export const ContactDescription = styled.p`
  font-size: 13px;
  line-height: 22px;
  color: ${props => props.color};
`
