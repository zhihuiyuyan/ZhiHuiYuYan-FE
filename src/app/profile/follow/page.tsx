import { NextPage } from 'next';

import Profile from '@/modules/profile';

const Page: NextPage = () => {
  return (
    <>
      <Profile route="follow" />
    </>
  );
};

export default Page;
