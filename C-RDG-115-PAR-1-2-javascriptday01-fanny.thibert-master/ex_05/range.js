function range(start, end, step){
    
    array = [];
    if(!step){
        for(let i=start; i<=end; i++){
            array.push(i);
        }
    }

    if(step>=0){
        for(let i=start; i<=end; i+=step){
            array.push(i);
        }
    }
   
    if(step<0){
        for(let i=start; i>=end; i+=step){
            array.push(i);
        }
    }
    return array;
}


/*console.log(range(1, 10, 2));
console.log(range(19, 22));
console.log(range(5, 2, -1));*/

