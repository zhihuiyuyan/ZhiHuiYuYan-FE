'use client';

import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import ConversationPage from '@/modules/conversation';

interface ConversationProps {
  params: {
    sessionId: string;
  };
}

const Conversation: NextPage<ConversationProps> = ({ params }) => {
  if (!params.sessionId) {
    const token = localStorage.getItem('token');
    const router = useRouter();

    useEffect(() => {
      (async () => {
        try {
          console.log(`Bearer ${token}`);
          const { data } = await axios.post(
            'http://124.222.113.16:5000/llm/sessions',
            {},
            {
              headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
              },
            }
          );
          router.push(`/conversation/${data.data.session_id}`);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('请求出错:', error);
        }
      })();
    }, []);
  }

  return (
    <>
      <ConversationPage sessionId={params.sessionId} />
    </>
  );
};

export default Conversation;
