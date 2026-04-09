function MergeSort(arr, leftIndex, rightIndex){

    if(leftIndex < rightIndex){
        let midIndex = parseInt((leftIndex + rightIndex) / 2)
        MergeSort(arr, leftIndex, midIndex)
        MergeSort(arr, midIndex + 1, rightIndex)
        Merge(arr, leftIndex, midIndex, rightIndex)
    }
}

function Merge(arr, leftIndex, midIndex , rightIndex){
    let leftAreaIndex = leftIndex
    let rightAreaIndex = midIndex + 1

    let tempArr = []
    tempArr.length = rightIndex + 1
    tempArr.fill(0, 0, rightIndex + 1)

    for(let i = leftIndex; i <= rightIndex; i++){                          // 1. 범위 수정                                                
        if(leftAreaIndex <= midIndex && rightAreaIndex <= rightIndex){      // 2. 양쪽 다 남았을 때                                       
            if(arr[leftAreaIndex] <= arr[rightAreaIndex]){                                                                                
                tempArr[i] = arr[leftAreaIndex++]                                                                                         
            }else{                                                                                                                     
                tempArr[i] = arr[rightAreaIndex++]                                                                                        
            }                                                                                                                             
        } else if(leftAreaIndex <= midIndex){                              // 3. 왼쪽만 남음                                              
            tempArr[i] = arr[leftAreaIndex++]                                                                                             
        } else{                                                            //    오른쪽만 남음                                            
            tempArr[i] = arr[rightAreaIndex++]                                                                                            
        }                                                                                                                                 
    }

    // 강의 정답 코드 
    // let tempArrIndex = leftIndex;
    // while(leftAreaIndex <= midIndex && rightAreaIndex <= rightIndex){
    //     if(arr[leftAreaIndex] <= arr[rightAreaIndex]){
    //         tempArr[tempArrIndex] = arr[leftAreaIndex++];
    //     }else{
    //         tempArr[tempArrIndex] = arr[rightAreaIndex++];
    //     }
    //     tempArrIndex++;
    // }

    // if(leftAreaIndex > midIndex){
    //     for(let i = rightAreaIndex; i <= rightIndex; i++){
    //         tempArr[tempArrIndex++] = arr[i];
    //     }
    // }else{
    //     for(let i = leftAreaIndex; i <= midIndex; i++){
    //         tempArr[tempArrIndex++] = arr[i];
    //     }
    // }

    
    for(let i = leftIndex; i <= rightIndex; i++){
        arr[i] = tempArr[i]
    }
}


let arr = [3,5,2,4,1,7,8,6];

console.log("===== 정렬 전 =====");
console.log(arr);

MergeSort(arr, 0, arr.length - 1);

console.log("===== 정렬 후 =====");
console.log(arr);