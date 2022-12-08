import styled from "styled-components";

// components
import UserRow from "./UserRow";
import ArticleImage from "./ArticleImage";
import ArticleLikeButton from "./ArticleLikeButton";
import ArticleTime from "./ArticleTime";
import ArticleLikeCount from "./ArticleLikeCount";
import ArticleText from "./ArticleText";
import ArticleCommentCount from "./ArticleCommentCount";
import ArticleComment from "./ArticleComment";
import UserRowName from "./UserRowName";
import ArticleCommentInput from "./ArticleCommentInput";
import ArticleCommentButton from "./ArticleCommentButton";

function Article({...props}) {
  return (
    <ArticleWrap>
      <ArticleHeader>
        <UserRow {...props} />
      </ArticleHeader>
      <ArticleContents>
        <ArticleImage />
      </ArticleContents>

      <ArticleSubWrap>
        <ArticleButtons>
          <ArticleLikeButton liked />
          <ArticleTime createdAt="2022-12-08 12:54:07" />
        </ArticleButtons>

        <ArticleTextWrap>
          <ArticleLikeCount like="164" />
          <br />
          <ArticleText text="오운완" />
          <br />
          <ArticleCommentCount comment="5" />
        </ArticleTextWrap>
        <ArticleComments>
          <ArticleCommentRow>
            <UserRowName userName="hee" comment />
            <ArticleComment comment="운동하느라 고생했어" />
          </ArticleCommentRow>
        </ArticleComments>
        <ArticleCommentsForm action="" method="post">
          <ArticleCommentInput />
          <ArticleCommentButton />
        </ArticleCommentsForm>
      </ArticleSubWrap>
    </ArticleWrap>
  )
}

const ArticleWrap = styled.div`
  width: ${props => props.theme.postWidth};
  border: 1px solid ${props => props.theme.elevatedSeparator};
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  background-color: ${props => props.theme.primaryBackground};
`

const ArticleHeader = styled.div`
  width: ${props => props.theme.postWidth};
`

const ArticleContents = styled.div`
  width: ${props => props.theme.postWidth};
`

const ArticleSubWrap = styled.div`
  // padding 동일하니까, 하나로 감싸서 padding 주기
  width: ${props => props.theme.postWidth};
  box-sizing: border-box;
  padding: ${props => props.theme.articlePadding};
`

const ArticleButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ArticleTextWrap = styled.div`
`

const ArticleComments = styled.div`
`

const ArticleCommentRow = styled.div`
  /* padding: 0.2rem 0; */
`

const ArticleCommentsForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme.elevatedSeparator};
  /* padding: 0.5rem 0; */
`

export default Article;