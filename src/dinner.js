import React from 'react';


function Dinner(props){
return(<div> <h1>Today we had {props.dishName}</h1>
            <h1> and also we had {props.sweetDish}</h1>
</div>);
    
}

export default Dinner;