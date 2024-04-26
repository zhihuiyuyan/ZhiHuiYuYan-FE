import React from 'react';
import PluginTemplate, { PluginProps } from './pluginTemplate';
import { useChat } from '@/common/hooks/useChatStore';
import { geneRecommendOutput } from '../plugins.config';
const RecommendPlugin: React.FC<Partial<PluginProps<string>>> = (props) => {
  const {sendMessage} = useChat()
  const handleTrigger = () => Promise.resolve('123');
  const handleFail = () => {};
  const handleSuccess = (name: string) => {
    console.log(geneRecommendOutput(name));
    sendMessage('robot', geneRecommendOutput(name))
  }
  return (
    <>
      <PluginTemplate<string>
        {...props}
        name="recommend"
        onTrigger={handleTrigger}
        onFail={handleFail}
        onSuccess={handleSuccess}
      >
        文献推荐
      </PluginTemplate>
    </>
  );
};

export default RecommendPlugin