import ArticlePage from '@/modules/articles';

const Article = ({ params }: { params: { article: string } }) => {
  return (
    <>
      <ArticlePage article={params.article}></ArticlePage>
    </>
  );
};

export default Article;
