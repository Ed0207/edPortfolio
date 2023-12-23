import {useEffect} from 'react' 
 
function SetAnimation(divRef){

    // observer set element classes for CSS animation
    useEffect(()=>{
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('show')
                    console.log(divRef.current)
                }else{
                    entry.target.classList.remove('show')
                    console.log(divRef.current)
                }
            })
        })
        observer.observe(divRef.current);
    }, [])

}

export default SetAnimation;