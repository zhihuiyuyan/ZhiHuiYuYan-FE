import PaperDetail from '@/modules/query/components/paperDetail';

const Article = ({ params }: { params: { paper: number } }) => {
  console.log(params);
  return (
    <>
      <PaperDetail paper_id={params.paper}></PaperDetail>
    </>
  );
};

  export default Article;
