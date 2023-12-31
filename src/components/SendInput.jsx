import DynamicHeroIcon from "@/components/Icon.jsx";

const SendInput = ({
                    className,
                    input={placeholder:'',width:'100%',height:'100%',styles:{}},
                    icon={hidden:true,name:'',fill:'',width:20,height:20},
                    style={},
                    children,
                    ...props}) => {
    return <div className={`flex items-center w-full h-full ${className}`} style={style}>
        <div className={`${icon.name === '' && 'hidden'} mr-[8px]`}>
            <DynamicHeroIcon className={`${icon.hidden && 'hidden'}`} fill={icon.fill} icon={icon.name} width={icon.width} height={icon.height}/>
        </div>
        <input style={{width:input.width,height:input.height,lineHeight:input.height}}
               value={input.value}
               onChange={input.onChange}
               type="text"
               placeholder={input.placeholder}/>
        {children}
    </div>
}

export default SendInput;