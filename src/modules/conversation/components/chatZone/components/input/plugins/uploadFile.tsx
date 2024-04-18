import React from 'react';
import PluginTemplate from '@/modules/conversation/components/chatZone/components/input/plugins/pluginTemplate';

const UploadFilePlugin: React.FC = () => {
  const handleTrigger = () => {

  }
  const handleFail = () => {

  }
  const handleSuccess = () => {

  }
  return (
    <>
      <PluginTemplate onTrigger={handleTrigger} onFail={handleFail} onSuccess={handleSuccess}>上传文件</PluginTemplate>
    </>
  )
}

export default UploadFilePlugin