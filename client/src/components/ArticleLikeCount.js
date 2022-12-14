import styled from "styled-components";

function ArticleLikeCount({...props}) {
  return (
    <LikeCount {...props}>좋아요 {props.likes_count}개</LikeCount>
  )
}

const LikeCount = styled.span`
  font-weight: ${props => props.theme.fontBold};
`

export default ArticleLikeCount;