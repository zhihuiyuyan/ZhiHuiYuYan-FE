import { useEffect, useState } from 'react';

import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import { PaperItem, usePaperInfo } from '@/common/hooks/useInfo';

import EChartComponent from '@/common/components/elements/Chart/Chart';
import { PaperItem as Item } from './Paper';

interface SubjectProps {
  className: string;
  columnStyle: string;
}

const messageContainerStyle: React.CSSProperties = {
  whiteSpace: 'pre-wrap',
};

const Subject: React.FC<SubjectProps> = ({ className, columnStyle }) => {
  // 这边我乱写的  到时候看着改吧
  const area = `啊啊啊啊啊啊啊啊啊啊啊啊
  啊啊啊啊啊
  啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊`;
  const RelatedSubjects = ['人工智能', '大数据科学', '软件工程'];

  const { filteredList } = usePaperInfo();
  const [curItem, setCurItem] = useState<PaperItem>();
  const [recommend, setRecommend] = useState<PaperItem[]>();
  useEffect(() => {
    setCurItem(
      filteredList.filter((item, index) => {
        let judge = item.article_id === Number(3354);
        judge && setRecommend(filteredList.slice(1, index + 6).reverse());
        return judge;
      })[0]
    );
  }, []);

  return (
    <>
      <div className={className}>
        <p className="w-full pl-[2%] text-[2.5vh] font-bold text-blue-800">
          民族语言保护
        </p>
        <div className="flex h-[30vh] w-full items-center justify-center rounded-[1vh] bg-white shadow-sm">
          <div className="h-[80%] w-[95%] rounded-xl bg-gray-300">
            <EChartComponent
              className="h-full w-full"
              type="line"
              data={{
                data: {
                  现代语言: [35, 27, 31],
                  古代汉语: [20, 27, 19],
                  语言学: [8, 12, 15],
                  比较文学: [13, 11, 12],
                },
                title: 'name',
                xNames: ['2022', '2023', '2024'],
              }}
            />
          </div>
        </div>
        <p className="w-full pl-[2%] text-[2.5vh] font-bold text-blue-800">
          热门论文
        </p>
        <div className="flex h-[30vh] w-full items-center justify-center rounded-[1vh] bg-white shadow-sm">
          {recommend && recommend.map((item) => <Item item={item} />)}
        </div>
      </div>
      <div className={`${columnStyle} flex-[1.8] gap-[1vh] shadow-sm`}>
        <p className="mt-[2vh] text-[2vh] font-bold text-blue-800">领域概述</p>
        <div
          className="h-[15vh] w-full text-wrap px-[5%] text-center text-gray-700"
          style={messageContainerStyle}
        >
          {area}
        </div>
        <BreaklineDashed className="w-[80%] border-t-2" />
        <p className="text-[2vh] font-bold text-blue-800">相关学科</p>
        <div className="flex flex-col gap-[0.5vh]">
          {RelatedSubjects.map((item, index) => (
            <div key={index} className="flex cursor-pointer gap-1 text-[1.5vh]">
              <p className="font-bold text-blue-800">{index + 1}.</p>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Subject;
