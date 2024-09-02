import Banner from '@/Components/navbar/Banner'
import Card from '@/Shared/Card';
import VideoText from '@/Shared/VideoText';
import FloatingCardData from '@/Shared/FloatingCardData';
import Plan from '@/Components/navbar/Plan';

type Props = {}

const HomePage: React.FC<Props> = () => {
  return (
    <div>
      <Banner 
        title="Discover Ireland: Your Ultimate Guide to the Emerald Isle" 
        subtitle="Tailored Experiences, Cultural Insights, and Unforgettable Journeys Await" 
        buttonText="Start Your Irish Adventure" 
      />

      <Card/>
      <VideoText/>
      <FloatingCardData/>
      <Plan/>

    </div>
  );
};

export default HomePage;
