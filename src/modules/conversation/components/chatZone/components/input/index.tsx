import React, { useState } from 'react';

import { genKey } from '@/common/utils/keyGen';
import { debounce } from '@/common/utils/throttle';
import { PluginProps } from '@/modules/conversation/components/chatZone/components/input/plugins/pluginTemplate';
import UploadFile from '@/modules/conversation/components/chatZone/components/input/plugins/uploadFile';

interface ChatInputProps {
  onSubmit?: (context: string) => void
}
type inputMap = {
  textInput: string,
  [key: string]: unknown
}
const ChatInput: React.FC<ChatInputProps> = ({onSubmit}) => {
  const [inputs, setInputs] = useState<inputMap>({textInput:''});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [plugins, setPlugins] = useState<React.FC<PluginProps<any>>[]>([UploadFile, UploadFile]);
  const handleSubmit = () => {
    onSubmit && onSubmit(inputs['textInput'])
  }
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputs({...inputs, textInput: e.target.value})
  }
  const handleSetPluginInputs = (name: string, res: unknown) => {
    setInputs({...inputs, [name]: res})
  }
  return (
    <div className='w-11/12 flex p-4 mb-6'>
      {/* input */}
      <div className='ml-24 w-full h-12 relative flex flex-1'>
        <input type="text" className="border border-gray-300 focus:outline-darkRed p-4 rounded-lg flex-grow pr-10"
               placeholder="输入您的问题" onChange={debounce(handleInput, 500)} />
        <button
          onClick={handleSubmit}
          className="absolute right-0 flex h-full w-20 items-center justify-center rounded-r-lg bg-darkRed p-4 text-white hover:bg-red-700 focus:outline-none"
        >
          发送
        </button>
      </div>
    {/*  plugins */}
      {plugins && plugins.map((Plugin) => <Plugin key = {genKey.next().value as number} onSuccess={handleSetPluginInputs}> </Plugin>)}
    </div>
  );
};

export default ChatInput;
