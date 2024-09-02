import CultureFirst from '@/Components/navbar/CultureFirst'
import Irish from '@/assets/Irish.jpg'
import Artist from '@/Shared/Artist'
import IrishMusic from '@/assets/IrishMusic.jpg'
import Festivals from '@/Shared/Festivals'
import CultureData from '@/Shared/CultureData'





function CulturePage() {
  return (
    <div  >
        <CultureFirst  title="Overview of Irish Culture"
        image={Irish}
                content="Irish culture is rich with history, tradition, and modern-day influences. From its ancient Celtic roots to its vibrant music and dance, Ireland offers a unique cultural experience that continues to evolve while honoring its past."

/>
<Artist/>
<CultureFirst title="The Heartbeat of Ireland: Traditional Irish Music" 
 image={IrishMusic}
 content="Step into a world where every note tells a story. Traditional Irish music, with its lively jigs and soulful airs, is the pulse of the nation. From the haunting melodies of the fiddle to the rhythmic beats of the bodhrán, this music has echoed through the ages, bringing communities together in celebration, reflection, and joy."
 reverse
 />
 <Festivals/>
 <CultureData/>

    </div>
  )
}

export default CulturePage