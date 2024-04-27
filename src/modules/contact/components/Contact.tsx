import Breakline from '@/common/components/elements/Breakline';
import { genKey } from '@/common/utils/keyGen';

import ContactCard from './ContactCard';
import { contactConfig } from './contact.config';

const Contact: React.FC = () => {
  return (
    <>
      <div className="mx-auto mt-8 h-86vh w-4/5 rounded-lg bg-white shadow">
        <div className="mx-auto flex w-3/4 justify-between">
          {contactConfig.map((config) => (
            <ContactCard
              key={genKey.next().value as number}
              {...config}
            ></ContactCard>
          ))}
        </div>
        <div className="mx-auto mt-10 w-4/5 p-5">
          <div className="flex h-10 w-28 items-center justify-center rounded-lg bg-darkRed px-4 text-white">
            意见反馈
          </div>
          <textarea className="mt-4 h-64 w-full resize-none rounded-lg border-2 bg-bgDefault p-4 outline-none"></textarea>
          <div className="flex justify-end">
            <button className=" flex h-8 w-24 items-center justify-center rounded-lg border-2 text-sm text-darkRed">
              提交
            </button>
          </div>
        </div>
        <Breakline className="mx-auto mt-8 w-4/5"></Breakline>
        <div className="mx-auto flex w-2/3 justify-between text-xs text-gray-400">
          <p>版权所有：XXX</p>
          <p>网站建设：华中师范大学</p>
          <p>技术支持：XXXXXXXX</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
