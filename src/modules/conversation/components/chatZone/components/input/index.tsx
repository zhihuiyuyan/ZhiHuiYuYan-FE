import React, { useEffect, useRef, useState } from 'react';

import { genKey } from '@/common/utils/keyGen';
import { debounce } from '@/common/utils/throttle';

import { PluginProps } from './plugins/pluginTemplate';
import UploadFile from './plugins/uploadFile';

interface ChatInputProps {
  onSubmit?: (context: string) => void;
}

type inputMap = {
  textInput: string;
  [key: string]: unknown;
};

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const [inputs, setInputs] = useState<inputMap>({ textInput: '' });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [plugins] = useState<React.FC<PluginProps<any>>[]>([
    UploadFile,
    UploadFile,
  ]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    adjustHeight();
  }, [inputs.textInput]);
  const handleSubmit = () => {
    onSubmit && onSubmit(inputs['textInput']);
    setInputs({ ...inputs, textInput: '' });
  };
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputs({ ...inputs, textInput: e.target.value });
    // eslint-disable-next-line no-console
    // debounce(() => console.log(e.target.value), 500);
  };
  const handleSetPluginInputs = (name: string, res: unknown) => {
    setInputs({ ...inputs, [name]: res });
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
        setInputs((prevState) => ({
          ...inputs,
          textInput: prevState.textInput + '\n',
        }));
      } else {
        handleSubmit();
      }
      return;
    }
  };

  return (
    <div className="absolute bottom-0 mx-auto mb-6 flex h-auto w-4/5 items-end p-4">
      {/* input */}
      <div className="relative ml-24 flex h-12 w-full flex-1 items-end">
        <textarea
          ref={textareaRef}
          value={inputs['textInput']}
          onKeyDown={handleKeyDown}
          className=" flex h-full max-h-40 flex-grow resize-none rounded-lg border border-gray-300 py-3 pl-4 pr-10 outline-transparent focus:outline-darkRed"
          placeholder={`输入您的问题 shift + enter 换行`}
          onChange={handleInput}
        />
        <button
          onClick={handleSubmit}
          className="absolute right-0 top-1/2 flex h-12 w-20 -translate-y-1/2 items-center justify-center self-center rounded-lg bg-darkRed p-4 text-white transition-all hover:bg-red-700 focus:outline-none"
        >
          发送
        </button>
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
