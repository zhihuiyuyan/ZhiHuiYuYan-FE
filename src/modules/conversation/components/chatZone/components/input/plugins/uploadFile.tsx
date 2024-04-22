import { fileInfoType } from '@/common/hooks/useChatStore';
import React from 'react';
import PluginTemplate, { PluginProps } from './pluginTemplate';
interface FileProps {
  index: number;
  fileInfo: fileInfoType;
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
  const { index, fileInfo } = props;
  return (
    <div className="relative m-2 h-8 w-8 rounded-sm border-mdGray shadow transition-all hover:scale-110">
      <img className="h-full w-full" src={fileInfo.url} alt={`文件-${index}`} />
      <div className="absolute -right-1 -top-1 z-20 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-black text-sm">
        <img
          src="https://s2.loli.net/2024/04/22/xRpmyg7QqBtwPzJ.png"
          className="h-1/2 w-1/2"
          alt="close"
        />
      </div>
      {fileInfo.status === 'success' && (
        <div className="absolute left-0 top-0 z-10 h-full w-full rounded-sm bg-gray-400 opacity-55"></div>
      )}
    </div>
  );
};
