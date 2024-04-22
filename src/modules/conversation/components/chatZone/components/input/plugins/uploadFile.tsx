import PluginTemplate, { PluginProps } from './pluginTemplate';
import Image from 'next/image';
import React from 'react';
import { fileInfoType } from '@/common/hooks/useChatStore';
interface FileProps {
  index: number,
  fileInfo: fileInfoType
}
const UploadFilePlugin: React.FC<Partial<PluginProps<string>>> = (props) => {
  const handleTrigger = () => Promise.resolve('123');
  const handleFail = () => {};
  return (
    <>
      <PluginTemplate<string>
        {...props}
        name="file"
        onTrigger={handleTrigger}
        onFail={handleFail}
      >
        上传文件
      </PluginTemplate>
    </>
  );
};

export default UploadFilePlugin;

export const ChatFiles: React.FC<FileProps> = (props) => {
  const {index, fileInfo} = props
  return (
    <div className='w-8 h-8 transition-all relative rounded-sm shadow border-mdGray m-2 hover:scale-110'>
      <img className='w-full h-full' src={fileInfo.url} alt={`文件-${index}`} />
      <div  className='absolute z-20 -right-1 -top-1 text-sm w-4 h-4 rounded-full border-2 bg-black flex justify-center items-center'>
        <img src='https://s2.loli.net/2024/04/22/xRpmyg7QqBtwPzJ.png' className='w-1/2 h-1/2' alt='close' />
      </div>
      {fileInfo.status === 'success' &&
        <div className='absolute w-full top-0 left-0 h-full z-10 opacity-55 bg-gray-400 rounded-sm'></div>}
    </div>
  )
}