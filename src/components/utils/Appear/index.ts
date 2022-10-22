import styled, { keyframes } from 'styled-components'

const appearAnimation = keyframes`
    0% { opacity: 0; transform: translateY(20px); }
    100%   { opacity: 1; transform: translateY(0px); }
`

export default styled.div`
  animation-name: ${appearAnimation};
  animation-duration: 0.2s;
`
