import styled from "styled-components";

function Iframe({...props}) {
  return (
    <NoFrame {...props} name="submitIframe"></NoFrame>
  )
}

const NoFrame = styled.iframe`
  display: none;
`

export default Iframe;