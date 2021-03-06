function getBubbleSortAnimation(array){
    const animation=[];
    bubbleSort(array,animation);
    return animation;
}

function bubbleSort(array,animation){
    let length=array.length;
    for(let i=0;i<length-1;i++){
        for(let j=0;j<length-i-1;j++){
            if(array[j]>array[j+1]){
                animation.push([j,j+1]);
                animation.push([j,j+1]);
                animation.push([j,array[j+1]]);
                animation.push([j+1,array[j]]);
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
}



export default getBubbleSortAnimation;