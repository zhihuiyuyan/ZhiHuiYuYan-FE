import React, { useState } from 'react';

import UploadFile from '@/modules/conversation/components/chatZone/components/input/plugins/uploadFile';
import { genKey } from '@/common/utils/keyGen';
import { PluginProps } from '@/modules/conversation/components/chatZone/components/input/plugins/pluginTemplate';
const ChatInput: React.FC = () => {
  // const [pluginOutputs, setPluginOutputs] = useState<string[]>([]);
  const [plugins, setPlugins] = useState<React.FC<PluginProps<unknown>>[]>([UploadFile]);
  const handleSubmit = () => {

  }
  return (
    <div className='w-4/5 flex mb-6'>
      {/* input */}
      <div className='w-2/3 h-12 relative flex flex-1'>
        <input type="text" className="border border-gray-300 p-4 rounded-lg flex-grow pr-10"
               placeholder="Enter your message" />
        <button
          onClick={handleSubmit}
          className="absolute flex items-center w-20 justify-center right-0 h-full bg-darkRed text-white p-4 rounded-r-lg focus:outline-none hover:bg-red-700">
          发送
        </button>
      </div>
    {/*  plugins */}
      {plugins && plugins.map((Plugin) => <Plugin key = {genKey.next().value as number} onSuccess={handleSubmit}> </Plugin>)}
    </div>
  )
}

export default ChatInput