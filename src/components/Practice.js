import React from 'react';
import "./Practice.css";

function Practice(){

    const myArray1 = [
                        {tag:"name", string: "Edward"}, {tag:"Food", string: "rice"}, {tag: "interest" , string:"code"}];
    const myMap = new Map(Object.entries(myArray1));

    const components = myArray1.map(item =>
        <div className='cards'>
            <h5>key : {item.tag}</h5>
            <h5>value: {item.string}</h5>
        </div>
    )

    const longString = myArray1.filter(item =>
        ((item.tag.length + item.string.length) > 5)? true: false
    ).map(item =>
        <div className='cards'>
            <h5>key : {item.tag}</h5>
            <h5>value: {item.string}</h5>
        </div>
    )

    console.log("practice map object result:")
    console.log(longString)
    // for(const [key,value] of myMap){
    //     components.push(
    //         <div className='cards'>
    //             <h4>
    //                 Key : {key.toString()}
    //             </h4>
    //             <h5>
    //                 Value : {value}
    //             </h5>
    //         </div>
    //     )
    // }
    
    return(<div className='Practice'>
        {components}
        {longString}
    </div>);
}

export default Practice;