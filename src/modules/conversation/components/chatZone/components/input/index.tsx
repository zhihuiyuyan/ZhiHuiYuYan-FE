import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';

import { genKey } from '@/common/utils/keyGen';

import { PluginProps } from './plugins/pluginTemplate';
import UploadFile, { ChatFiles } from './plugins/uploadFile';
import { useChat } from '@/common/hooks/useChatStore';

interface ChatInputProps {
  onSubmit?: (context: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = () => {
  const {inputs, userSendMessage, setText, setPlugins} = useChat()
 const [plugins] = useState<React.FC<PluginProps<any>>[]>([
    UploadFile,
  ]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    adjustHeight();
  }, [inputs.text]);
  const handleSubmit = () => {
    userSendMessage()
    setText('')
  }
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
   setText(e.target.value)
  };
  const handleSetPluginInputs = (name: string, res: string) => {
    setPlugins(name, res);
  };
  const adjustHeight = (height?: string) => {
    const textarea = textareaRef.current as HTMLTextAreaElement;
    textarea.style.height = '3rem';
    textarea.style.height = `${textarea.scrollHeight}px`;
    textarea.scrollTop = textarea.scrollHeight;
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (event.shiftKey) {
        setText(inputs.text + '\n');
      } else {
        handleSubmit();
      }
      return;
    }
  };

  return (
    <div className="absolute bottom-0 mx-auto mb-6 flex h-auto w-4/5 items-end p-4">
      {/* input */}
      <div className="rounded-lg border border-gray-300 outline-transparent focus:outline-darkRed relative ml-24 h-auto flex-grow flex w-full flex-1 self-baseline items-end">
        <textarea
          ref={textareaRef}
          value={inputs['text']}
          onKeyDown={handleKeyDown}
          className="h-12 z-20 bg-transparent outline-0 max-h-40 overflow-scroll resize-none  flex-1 mx-3"
          onChange={handleInput}
        />
        {!inputs.text &&
          <div className="z-10 text-gray-400 absolute top-1/2 -translate-y-1/2 left-3">输入您的问题 shift + enter
            换行</div>}
        <button
          onClick={handleSubmit}
          className="flex h-12 w-20 items-center justify-center rounded-lg bg-darkRed px-4 text-white transition-all hover:bg-red-700 focus:outline-none"
        >
          发送
        </button>
        {inputs.files && (
          <div className='absolute -top-12 rounded-t-4 flex'>
            {inputs.files.map((file, index) => <ChatFiles index={index} key={genKey.next().value as number} fileInfo={file}></ChatFiles>)}
          </div>
        )}
      </div>
      {/*  plugins */}
      {plugins &&
        plugins.map((Plugin) => (
          <Plugin
            key={genKey.next().value as number}
            onSuccess={handleSetPluginInputs}
          >
            {' '}
          </Plugin>
        ))}
    </div>
  );
};

export default ChatInput;
