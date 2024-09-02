import Accomodation from '@/Components/navbar/Accomodation';
import Accomodation_1  from '@/assets/Accomodation/accomodation_1.jpeg'
import Accomodation_2  from '@/assets/Accomodation/accomodation_2.jpeg'
import Accomodation_3  from '@/assets/Accomodation/accomodation_3.jpeg'
import Accomodation_4  from '@/assets/Accomodation/accomodation_4.jpeg'
import Accomodation_5  from '@/assets/Accomodation/accomodation_5.jpeg'
import Accomodation_6  from '@/assets/Accomodation/accomodation_6.jpeg'

import React from 'react'

const accommodationsData = [
    {
      image: Accomodation_1,
      price: '€ 650',
      title: 'Permanent Accommodation For Female',
      location: 'Crumlin, Dublin, Ireland',
    },
    {
      image: Accomodation_2,
      price: '€ 750',
      title: 'Double Bedroom in MILLVIEW DEMENSE, RATHANGAN',
      location: 'Kildare, Kildare, Ireland',
    },
    {
      image: Accomodation_3,
      price: '€ 600',
      title: 'Private room available in Dublin 22',
      location: 'Clondalkin, Dublin, Ireland',
    },
    {
        image: Accomodation_4,
        price: '€ 650',
        title: 'Permanent Accommodation For Female',
        location: 'Crumlin, Dublin, Ireland',
      },
      {
        image: Accomodation_5,
        price: '€ 750',
        title: 'Double Bedroom in MILLVIEW DEMENSE, RATHANGAN',
        location: 'Kildare, Kildare, Ireland',
      },
      {
        image: Accomodation_6,
        price: '€ 600',
        title: 'Private room available in Dublin 22',
        location: 'Clondalkin, Dublin, Ireland',
      }
  ];
  const AccomodationSEctionData: React.FC = () => {
    return (
      <div>
        <Accomodation
          sectionTitle="Rest Near the Sights"
          sectionSubtitle="Popular Properties in Ireland"
          accommodations={accommodationsData}
        />
        {/* More sections */}
      </div>
    );
  };
  
export default AccomodationSEctionData