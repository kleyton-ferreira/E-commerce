import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 100;

  p {
    color: ${Colors.text.whithe};
    font-weight: 300;
    margin-bottom: 30px;
    font-size: 1.7rem;
    max-width: 36%;
    display: inline-block;
    text-align: center;
  }
`
