import { Link } from 'react-router-dom';

import { Article } from '../../types/article';

type Props = {
  article: Article;
};

export const HomeArticle = ({ article }: Props): any => {
  return (
    <div className="flex flex-col gap-4 py-4 border-b font-mono">
      <Link to={`/article/${article.id}`} preventScrollReset={true}>
        <picture>
          <img
            src={article.imageUrl}
            alt={article.title}
            className="aspect-video object-cover"
            width="1920"
            height="1080"
            loading="lazy"
          />
        </picture>
      </Link>
      <h2 className="text-2l">{article.title}</h2>
      <p className="text-sm hidden lg:block">{article.summary}</p>
      <p className="text-sm text-gray-500">
        {new Date(article.publishedAt).toLocaleString()}
      </p>
    </div>
  );
};
