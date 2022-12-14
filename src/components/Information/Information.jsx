import { ItemLink, Title } from './Information.styled';

export const Information = ({ prevState }) => {
  return (
    <>
      <Title>Additional information</Title>

      <ul>
        <li>
          <ItemLink to="cast" state={{ from: prevState }}>
            Cast
          </ItemLink>
        </li>
        <li>
          <ItemLink to="reviews" state={{ from: prevState }}>
            Reviews
          </ItemLink>
        </li>
      </ul>
      <hr />
    </>
  );
};
