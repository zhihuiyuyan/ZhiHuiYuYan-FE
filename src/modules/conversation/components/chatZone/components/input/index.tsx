import React, { useEffect, useRef, useState } from 'react';

import { genKey } from '@/common/utils/keyGen';

import { useChat } from '@/common/hooks/useChatStore';
import { PluginProps } from './plugins/pluginTemplate';
import UploadFile, { ChatFiles } from './plugins/uploadFile';

interface ChatInputProps {
  onSubmit?: (context: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = () => {
  const { inputs, userSendMessage, setText, setPlugins } = useChat();
  const [plugins] = useState<React.FC<PluginProps<any>>[]>([UploadFile]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    adjustHeight();
  }, [inputs.text]);
  const handleSubmit = () => {
    userSendMessage();
    setText('');
  };
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
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
      <div className="relative ml-24 flex h-auto w-full flex-1 flex-grow items-end self-baseline rounded-lg border border-gray-300 outline-transparent focus:outline-darkRed">
        <textarea
          ref={textareaRef}
          value={inputs['text']}
          onKeyDown={handleKeyDown}
          className="z-20 mx-3 h-12 max-h-40 flex-1 resize-none overflow-scroll  bg-transparent outline-0"
          onChange={handleInput}
        />
        {!inputs.text && (
          <div className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-gray-400">
            输入您的问题 shift + enter 换行
          </div>
        )}
        <button
          onClick={handleSubmit}
          className="flex h-12 w-20 items-center justify-center rounded-lg bg-darkRed px-4 text-white transition-all hover:bg-red-700 focus:outline-none"
        >
          发送
        </button>
        {inputs.files && (
          <div className="rounded-t-4 absolute -top-12 flex">
            {inputs.files.map((file, index) => (
              <ChatFiles
                index={index}
                key={genKey.next().value as number}
                fileInfo={file}
              ></ChatFiles>
            ))}
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
