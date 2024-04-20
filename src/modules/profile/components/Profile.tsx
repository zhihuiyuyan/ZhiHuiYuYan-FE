import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import Experience from './Experience';
import Follow from './Follow';
import Information from './Information';

interface ProfileProps {
  route: 'profile' | 'follow' | 'history';
}

const Profile: React.FC<ProfileProps> = ({ route }) => {
  const commonStyles = "relative flex h-[88vh] w-[60%] min-w-[50vh] flex-col items-center rounded-[3vh] bg-white";
  const sharedContent = (
    <div className={commonStyles}>
      <Information />
      <BreaklineDashed className="relative w-[85%] border-t-2 border-[#B9B9B9]" />
    </div>
  );

  return (
    <div className="flex h-[92vh] w-full items-center justify-center bg-[#F9FAFC]">
      {route === 'history' && (
        <div className={commonStyles}>
          <>123</>
        </div>
      )}
      {route === 'profile' && (
        <div className={commonStyles}>
          {sharedContent}
          <Experience />
        </div>
      )}
      {route === 'follow' && (
        <div className={commonStyles}>
          {sharedContent}
          <Follow />
        </div>
      )}
    </div>
  );
};

export default Profile;