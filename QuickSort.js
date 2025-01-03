function QuickSort(A,l,h){
    if(l<h){
        let j=partition(A,l,h);
        QuickSort(A,l,j);
        QuickSort(A,j+1,h);       
    }
}

function partition(A,l,h){
    let pivot=A[l];
    let i=l,j=h;
    
    while(i<j){
        do{
            i++;
        }while(A[i]<=pivot);
        
        do{
            j--;
        }while(A[j]>pivot);
        
        if(i<j){
            // swap(A[i],A[j]);
            let temp=A[j];
            A[j]=A[i];
            A[i]=temp;
        }
    }
    
    // swap(A[j],pivot);
    let temp=A[j];
    A[j]=A[l];
    A[l]=temp;

    return j;
}

let arr=[2,1,5,7,0];
QuickSort(arr,0,5);
console.log(arr);

//OUTPUT: [0,1,2,5,7]