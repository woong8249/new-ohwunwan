import styled from "styled-components";

function LoginInput({...props}) {
  return (
    <Input {...props}></Input>
  )
}

const Input = styled.input`
`

export default LoginInput;