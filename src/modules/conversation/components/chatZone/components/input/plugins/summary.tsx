import { useChat } from '@/common/hooks/useChatStore';

import { geneSummaryOutput } from '../plugins.config';
import PluginTemplate, { PluginProps } from './pluginTemplate';

const SummaryPlugin: React.FC<Partial<PluginProps<string>>> = (props) => {
  const { sendMessage } = useChat();
  const handleTrigger = () => Promise.resolve('123');
  const handleFail = () => {};
  const handleSuccess = (name: string) => {
    console.log(geneSummaryOutput(name));
    sendMessage('robot', geneSummaryOutput(name));
  };

  return (
    <>
      <PluginTemplate<string>
        {...props}
        name="analyse"
        onTrigger={handleTrigger}
        onSuccess={handleSuccess}
        onFail={handleFail}
      >
        文献总结
      </PluginTemplate>
    </>
  );
};

export default SummaryPlugin;
