// DynamicHeroIcon.tsx
// Simple Dynamic HeroIcons Component for React (typescript / tsx)
// by: Mike Summerfeldt (IT-MikeS - https://github.com/IT-MikeS)

import * as HIcons from '@heroicons/react/24/outline'
import * as LocalIcons from '../assets/index.js'

const DynamicHeroIcon = ({fill='none',width=20,height=20,...props}) => {
    const {...icons} = {...HIcons,...LocalIcons}
    const TheIcon = icons[props.icon]
    return (
        <>
            {/* eslint-disable-next-line react/prop-types*/}
            {props.icon && <TheIcon className={`${props.className}`} fill={fill} width={width} height={height}/>}
        </>
    )
}

export default DynamicHeroIcon