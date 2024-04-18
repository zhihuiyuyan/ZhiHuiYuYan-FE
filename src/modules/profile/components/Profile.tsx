import BreaklineDashed from '@/common/components/elements/BreaklineDashed';

import Experience from './Experience';

import Information from './Information';

interface ProfileProps {
  route: 'profile' | 'follow';
}

const Profile: React.FC<ProfileProps> = ({ route }) => {
  return (
    <>
      <div className="flex h-[92vh] w-full items-center justify-center bg-[#F9FAFC]">
        <div className="relative flex h-[88vh] w-[60%] min-w-[50vh] flex-col items-center rounded-[3vh] bg-white">
          <Information />
          <BreaklineDashed className="relative w-[85%] border-t-2 border-[#B9B9B9]" />
          {route === 'profile' ? <Experience /> : <Follow />}
        </div>
      </div>
    </>
  );
};

export default Profile;
