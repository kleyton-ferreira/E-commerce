import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const CustomButtonContainer = styled.button`
  width: 100%;
  background-color: ${Colors.backgound.dark};
  color: ${Colors.text.whithe};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  font-weight: 600;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background: ${Colors.input.placeholder};
    color: ${Colors.primary};
  }
`

export const IconContainer = styled.div`
  margin-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`
