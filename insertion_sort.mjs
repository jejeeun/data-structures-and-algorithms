function InsertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let insertingData = arr[i]

        let j;
        for(j = i - 1; j >= 0; j--){
            if(insertingData < arr[j]){
                arr[j+1] = arr[j]
            } else{
                break
            }
        }

        arr[j + 1] = insertingData
    }
}

let arr = [4, 5, 6, 3, 2, 1]

InsertionSort(arr)

console.log(arr)