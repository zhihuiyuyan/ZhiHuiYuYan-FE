import React, { useState } from 'react';

import { genKey } from '@/common/utils/keyGen';
import UploadFile from '@/modules/conversation/components/chatZone/components/input/plugins/uploadFile';
const ChatInput: React.FC<InputProps> = () => {
  const [pluginOutputs, setPluginOutputs] = useState<string[]>([]);
  const [plugins, setPlugins] = useState<React.ReactNode>([UploadFile()]);
  const handleSubmit = () => {
    console.log(pluginOutputs);
  };
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
      {plugins.map((plugin) =>
        React.cloneElement(plugin, {
          onSuccess: (res) => setPluginOutputs(res),
          key: genKey.next().value,
        })
      )}
    </div>
  );
};

export default ChatInput;
