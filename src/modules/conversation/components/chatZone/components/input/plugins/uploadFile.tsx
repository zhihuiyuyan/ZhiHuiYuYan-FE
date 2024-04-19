import React from 'react';

import PluginTemplate, {
  PluginProps,
} from '@/modules/conversation/components/chatZone/components/input/plugins/pluginTemplate';

const UploadFilePlugin: React.FC<Partial<PluginProps<string>>> = (props) => {
  const handleTrigger = () => Promise.resolve('123')
  const handleFail = () => {

  }
  return (
    <>
      <PluginTemplate<string> {...props} name='file' onTrigger={handleTrigger} onFail={handleFail}>上传文件</PluginTemplate>
    </>
  )
}

export default UploadFilePlugin