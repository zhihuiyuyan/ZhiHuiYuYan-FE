import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import { ReactNode } from 'react';
import Experience from './Experience';
import Follow from './Follow';
import History from './History';
import Information from './Information';

interface ProfileProps {
  route: 'profile' | 'follow' | 'history';
}

type SharedContentProps = {
  children: ReactNode;
};

const Profile: React.FC<ProfileProps> = ({ route }) => {
  const commonStyles =
    'relative flex h-[88vh] w-[60%] min-w-[50vh] flex-col items-center rounded-[3vh] bg-white';
  const SharedContent: React.FC<SharedContentProps> = ({ children }) => {
    return (
      <div className={commonStyles}>
        <Information />
        <BreaklineDashed className="relative w-[85%] border-t-2 border-gray-300" />
        {children}
      </div>
    );
  };

  return (
    <>
      <div className="flex h-[92vh] w-full items-center justify-center bg-gray-50">
        {route === 'history' && (
          <div className={commonStyles}>
            <History />
          </div>
        )}
        {route === 'profile' && (
          <SharedContent>
            <Experience />
          </SharedContent>
        )}
        {route === 'follow' && (
          <SharedContent>
            <Follow />
          </SharedContent>
        )}
      </div>
    </>
  );
};

export default Profile;
