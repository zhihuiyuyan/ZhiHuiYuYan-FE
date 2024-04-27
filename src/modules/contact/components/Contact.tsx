import ContactCard from '@/modules/contact/components/ContactCard';
import { contactConfig } from '@/modules/contact/components/contact.config';
import { genKey } from '@/common/utils/keyGen';
import Breakline from '@/common/components/elements/Breakline';

const Contact: React.FC = () => {
  return (
    <>
      <div className='w-4/5 rounded-lg bg-white mx-auto mt-8 h-86vh shadow'>
        <div className='flex justify-between mx-auto w-3/4'>
          {contactConfig.map((config) => <ContactCard key={genKey.next().value as number} {...config}></ContactCard>)}
        </div>
        <div className='w-4/5 mt-10 mx-auto p-5'>
          <div className='flex h-10 w-28 items-center justify-center rounded-lg bg-darkRed px-4 text-white'>意见反馈</div>
          <textarea className='w-full mt-4 border-2 h-64 bg-bgDefault resize-none rounded-lg outline-none p-4'></textarea>
          <div className='flex justify-end'>
            <button
              className=' rounded-lg border-2 h-8 text-sm w-24 text-darkRed flex items-center justify-center'>提交
            </button>
          </div>
        </div>
        <Breakline className='w-4/5 mx-auto mt-8'></Breakline>
        <div className='flex justify-between text-xs w-2/3 mx-auto text-gray-400'>
          <p>版权所有：XXX</p>
          <p>网站建设：华中师范大学</p>
          <p>技术支持：XXXXXXXX</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
