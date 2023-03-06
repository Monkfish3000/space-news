import { useParams } from 'react-router-dom';

export const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="container mx-auto">
      <h1>Article ID: {id}</h1>
    </div>
  );
};
