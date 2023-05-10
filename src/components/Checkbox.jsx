export default function Checkbox({text,clasName,...rest}){
    return(
        <>
        
        <label className={clasName}>
              <input type="checkbox" {...rest}/>
              <span>{text}</span>
            </label>
        </>
    )
}