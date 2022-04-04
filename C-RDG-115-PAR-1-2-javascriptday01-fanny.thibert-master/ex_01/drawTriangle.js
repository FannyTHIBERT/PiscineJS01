function drawTriangle(height){
    let Triangle = "";
    try{
        for (let i=1; i<=height; i++)
        {  
                Triangle += '$'.repeat(i) + "\n";     
        }
        console.log(Triangle);
    }catch(e){
        console.log(e);
    }
}

//drawTriangle(6);
