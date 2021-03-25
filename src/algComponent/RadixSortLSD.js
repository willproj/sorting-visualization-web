function getRadixSortLSDAnimations(array){
    const animations=[];
    RadixSort(array,animations);
    return animations;
}

function RadixSort(array,animations){
    let buckets=[
        [],[],[],[],[],[],[],[],[],[]
    ];
    console.log(array);
    
    let digits=getMaxDigits(array);
    for(let i=0;i<digits;i++){
        let temp=[];
        for(let j=0;j<array.length;j++){
            let digit=(Math.floor(array[j]/Math.pow(10,i)))%10;
            console.log("digit:"+digit);
            buckets[digit].push(array[j]);
            temp.push(j);
        }
        
        
        animations.push(temp);
        
        
        let index=0;
        temp=[];
        for(let j=0;j<buckets.length;j++){
            for(let k=0;k<buckets[j].length;k++){
                array[index]=buckets[j][k];
                temp.push([index,array[index]]);
                index++;
            }

        }

        animations.push(temp);
        buckets = [
            [],[],[],[],[],[],[],[],[],[]
        ];
    }
    
}


function getMaxDigits(array){
    let num=0;
    let maxInteger=-1;
    for(let i=0;i<array.length;i++){
        maxInteger=Math.max(maxInteger,array[i]);
    }
    console.log("max"+maxInteger);
    while(maxInteger!=0){
        num++;
        maxInteger=Math.floor(maxInteger/10);
    }
    return num;
}

export default getRadixSortLSDAnimations;


