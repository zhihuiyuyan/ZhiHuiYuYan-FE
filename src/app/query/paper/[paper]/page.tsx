import PaperDetail from '@/modules/query/components/paperDetail';

const Article = ({ params }: { params: { paper: number } }) => {
  return (
    <>
      <PaperDetail paper_id={params.paper}></PaperDetail>
    </>
  );
};

export default Article;
