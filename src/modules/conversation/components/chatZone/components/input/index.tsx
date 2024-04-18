import React, { useState } from 'react';

import { genKey } from '@/common/utils/keyGen';
import UploadFile from '@/modules/conversation/components/chatZone/components/input/plugins/uploadFile';
import { PluginProps } from '@/modules/conversation/components/chatZone/components/input/plugins/pluginTemplate';
const ChatInput: React.FC = () => {
  // const [pluginOutputs, setPluginOutputs] = useState<string[]>([]);
  const [plugins, setPlugins] = useState<React.FC<PluginProps<unknown>>[]>([UploadFile]);
  const handleSubmit = () => {

  }
  return (
    <div className="mb-6 flex w-4/5">
      {/* input */}
      <div className="relative flex h-12 w-2/3 flex-1">
        <input
          type="text"
          className="flex-grow rounded-lg border border-gray-300 p-4 pr-10"
          placeholder="Enter your message"
        />
        <button
          onClick={handleSubmit}
          className="absolute right-0 flex h-full w-20 items-center justify-center rounded-r-lg bg-darkRed p-4 text-white hover:bg-red-700 focus:outline-none"
        >
          发送
        </button>
      </div>
    {/*  plugins */}
      {plugins && plugins.map((Plugin) => <Plugin key = {genKey.next().value as number} onSuccess={handleSubmit}> </Plugin>)}
    </div>
  );
};

export default ChatInput;
