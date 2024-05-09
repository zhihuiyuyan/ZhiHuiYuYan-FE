import SearchBar from '@/common/components/elements/SearchBar';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

type PaperItem = {
  id: number;
  title: string;
  author: string;
  content: string;
  type: string;
  collections: number;
  isCollected: boolean;
  followers: number;
};

interface PaperItemProps {
  item: PaperItem;
}

const RECENT_PAPER_ITEMS: PaperItem[] = [
  {
    id: 1,
    title: "论文化话语的文学生成路径",
    author: "张妍妍;陶成涛",
    content: "文化话语的叙述能力和传播能力直接关系到文化软实力、文化影响力的强弱。文化话语的生成母体是相应的文化资源,文化话语在文化产业或文艺作品对文化资源的挖掘和开发过程中生成。...",
    type: '期刊',
    collections: 75,
    isCollected: true,
    followers: 99,
  },
];

const SEVENDAYS_PAPER_ITEMS: PaperItem[] = [
  {
    id: 1,
    title: "当前电视民生新闻发展的“四个提升”",
    author: "张妍妍",
    content: "目前,中国电视民生新闻同质化现象严重,其发展走到了瓶颈期。如何在纷繁的电视民生新闻中打造特色品牌,树立竞争优势,形成规模和影响力,显得尤为重要。...",
    type: '期刊',
    collections: 23,
    isCollected: true,
    followers: 100,
  },
  {
    id: 2,
    title: "电视节目主持人的信息传播控制探究",
    author: "张妍妍",
    content: "电视节目的播放过程是信息的一种复合传播过程,主持人的传播技巧在这一过程中发挥着至关重要的作用。...",
    type: '期刊',
    collections: 33,
    isCollected: true,
    followers: 100,
  },
  {
    id: 3,
    title: '文章',
    author: '作者',
    content: '內容',
    type: '期刊',
    collections: 999,
    isCollected: true,
    followers: 100,
  },
];

const PaperItem: React.FC<PaperItemProps> = ({ item }) => {
  return (
    <div className="relative my-[1vh] flex h-[20vh] w-full flex-col items-center rounded-[2vh] bg-gray-50">
      <div className="relative my-[3vh] flex h-[14vh] w-full items-center">
        <p className="absolute left-[5%] top-0 text-[2vh] font-semibold">
          {item.title}
        </p>
        <p className="absolute left-[5%] top-[3vh] flex items-center gap-[2vh] text-[1.5vh] text-blue-800">
          {item.author}
        </p>
        <div className="absolute left-[5%] top-[5.5vh] w-[50%] text-[1.3vh] text-gray-700">
          <p className="flex-1">{item.content}</p>
        </div>
        <div className="absolute left-[5%] top-[12vh] flex items-center gap-[5vh] text-[1.3vh] text-gray-700">
          <p>{item.type}</p>
          <p>收藏数：{item.collections}</p>
        </div>
        <p className="absolute right-[7%] top-[2vh] flex cursor-pointer items-center gap-[1vh] text-[1.3vh] text-red-800">
          {item.isCollected ? <IoHeart /> : <IoHeartOutline />}
          已收藏
        </p>
        <p className="absolute right-[8%] top-[12vh] flex cursor-pointer items-center gap-[1vh] text-[1.3vh] text-gray-700">
          下载全文
        </p>
      </div>
    </div>
  );
};

const History = () => {
  return (
    <>
      <SearchBar type="history" />
      <div className="relative top-[8vh] flex h-[73vh] w-[85%] flex-col overflow-y-auto scrollbar-hide">
        <p className="relative left-[5%] my-[1vh] w-[95%] text-[2.3vh] font-semibold text-blue-800">
          最近
        </p>
        <div>
          {RECENT_PAPER_ITEMS.map((item) => (
            <PaperItem key={item.id} item={item} />
          ))}
        </div>
        <p className="relative left-[5%] my-[1vh] w-[95%] text-[2.3vh] font-semibold text-blue-800">
          七天内
        </p>
        {SEVENDAYS_PAPER_ITEMS.map((item) => (
          <PaperItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
export default History;
