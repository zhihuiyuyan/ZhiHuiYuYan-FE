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
  const area = `在全球化和现代化的进程中，许多民族语言面临着消亡和边缘化的风险，因此，保护和复兴这些语言成为当务之急。政策制定、教育推动、社区参与以及技术创新都是实现民族语言保护的重要途径，而跨文化交流与合作更是推动这一进程的关键因素。`;
  const RelatedSubjects = ['语言学', '社会语言学', '应用语言学', '人类学', '语言政策与规划', '文化研究', '教育学'];

  const { filteredList, setFilteredList } = usePaperInfo();
  const [curItem, setCurItem] = useState<PaperItem>();
  const [recommend, setRecommend] = useState<PaperItem[]>();
  useEffect(() => {
    setFilteredList({name: 'paper', search: '民族', page: 1, pageSize: 3})
    // setRecommend(filteredList)
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
                  "语言维护与复兴": [35, 48, 62, 11, 25, 38, 17, 29, 43, 56],
                  "藏语言学习与教育": [20, 27, 19, 33, 45, 12, 36, 51, 28, 14],
                  "语言认同与文化保护": [28, 52, 15, 41, 37, 24, 59, 16, 30, 47],
                  "蒙古语文化研究": [13, 6, 22, 57, 32, 19, 48, 21, 35, 40],
                  "汉藏语言文化比较研究": [43, 22, 87, 50, 18, 23, 42, 39, 55, 10]
                },
                title: 'name',
                xNames: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
              }}
            />
          </div>
        </div>
        <p className="w-full pl-[2%] text-[2.5vh] font-bold text-blue-800">
          热门论文
        </p>
        <div className="flex h-[30vh] w-full items-center justify-center rounded-[1vh] bg-white shadow-sm">
          {filteredList && filteredList.map((item) => <Item item={item} />)}
        </div>
      </div>
      <div className={`${columnStyle} flex-[1.8] gap-[1vh] shadow-sm`}>
        <p className="mt-[2vh] text-[2vh] font-bold text-blue-800">领域概述</p>
        <div
          className="h-[20vh] w-full text-wrap px-[5%] text-gray-700"
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
