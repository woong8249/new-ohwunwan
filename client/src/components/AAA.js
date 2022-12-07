import styled from "styled-components";

function AAA({...props}) {
  return (
    <BBB {...props}></BBB>
  )
}

const BBB = styled.span`
`

export default AAA;