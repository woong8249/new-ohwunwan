import styled from "styled-components";

function ArticleLikeCount({...props}) {
  return (
    <LikeCount {...props}>좋아요 {props.like}개</LikeCount>
  )
}

const LikeCount = styled.span`
  font-weight: ${props => props.theme.fontBold};
`

export default ArticleLikeCount;