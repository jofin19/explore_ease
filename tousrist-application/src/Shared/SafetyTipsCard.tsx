import SafetyTips from '@/Components/navbar/SafetyTips';


const SafetyTipsCard = () => {
  const safetyTips = [
    {
      title: 'Research Your Destination',
      content:
        'Before you travel, research local customs, laws, and areas to avoid. Understanding your destination can help you stay safe and respectful.',
    },
    {
      title: 'Keep Valuables Secure',
      content:
        'Keep your passports, money, and electronics secure at all times. Use a money belt or hotel safe, and avoid displaying valuable items publicly.',
    },
    {
      title: 'Stay Connected',
      content:
        'Ensure you have a reliable means of communication, such as a local SIM card or an international phone plan, so you can stay in touch with loved ones and access maps or emergency services.',
    },
    {
      title: 'Emergency Contacts',
      content:
        'Always have local emergency numbers and the address of your country’s embassy or consulate on hand. In case of emergencies, these contacts are crucial.',
    },
  ];

  return (
    <section className='py-16 bg-primary-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-2xl md:text-3xl font-bold text-primary-600 mb-8 text-center md:text-left'>
          Safety Tips: Staying Safe on Your Journey
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          {safetyTips.map((tip, index) => (
            <SafetyTips key={index} title={tip.title} content={tip.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyTipsCard;
