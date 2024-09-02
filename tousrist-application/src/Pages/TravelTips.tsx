import React from 'react'
import PackingEssentials from '@/Shared/PackageEssentials'
import SafetyTipsCard from '@/Shared/SafetyTipsCard'
import CulturalEtiquetteTips from '@/Shared/CulturalEtiquetteTips'
import HealthWellnessTips from '@/Shared/HealthWellnessTips'


const TravelTips:React.FC=()=> {
  return (
    <div>
        <PackingEssentials/>
        <CulturalEtiquetteTips/>
        <SafetyTipsCard/>
        <HealthWellnessTips/>
    </div>
  )
}

export default TravelTips