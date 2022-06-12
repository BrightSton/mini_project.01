import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <Container>
      <Link to={`/post/${post.id}`}>
        <CardImage>
          <img src={post.image} alt="" />
        </CardImage>
        <CardContent>
          <CardLeft>
            <CardSubject>{post.title}</CardSubject>
            <CardAuthor>{post.nickname}</CardAuthor>
            <CardDate>{post.createAt}</CardDate>
          </CardLeft>
          <CardRight>
            <CardLike isActive={post.likeByMe}><FontAwesomeIcon icon={faHeart} /></CardLike>
            <CardLikeCount>{post.likeCount}</CardLikeCount>
          </CardRight>
        </CardContent>
      </Link>
    </Container>
  );
};

const Container = styled.li`
  width: calc(25% - 15px);
  height: 350px;
  box-shadow: 0 0 6px 0 #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
`;

const CardImage = styled.div`
  width: 100%;
  height: 245px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 250px);
`;

const CardLeft = styled.div`
  padding: 20px;
  width: 80%;
  height: 100%;
  flex-shrink: 0;
`;

const CardSubject = styled.div``;

const CardAuthor = styled.div`
  margin-top: 10px;
  color: ${props => props.theme.color.heavyGrey};
`;

const CardDate = styled.div`
  margin-top: 10px;
  color: ${props => props.theme.color.grey};
`;

const CardRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CardLike = styled.div`
  font-size: 24px;

  ${props => props.isActive ? css`
    color: ${props => props.theme.color.red};
  ` : css`
    color: ${props => props.theme.color.whiteSmoke};
  `}
`;

const CardLikeCount = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

export default Card;