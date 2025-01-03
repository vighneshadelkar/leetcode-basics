
function MergeSort(A,l,h){
    if(l<h){
        let mid=Math.floor((l+h)/2);
        MergeSort(A,l,mid);
        MergeSort(A,mid+1,h);
        Merge(A,l,mid,h);
    }
}

function Merge(A,l,mid,h){
    let B=A.slice(l,mid+1); //left half of array A
    let C=A.slice(mid+1,h+1); //right half of array A
    
    let i=0,j=0,k=l;
    
    while(i<B.length && j<C.length){
        if(B[i]<=C[j]){
            A[k++]=B[i++];
        }
        else{
            A[k++]=C[j++];
        }
    }
    
    while(i<B.length){
        A[k++]=B[i++];
    }
    while(j<C.length){
        A[k++]=C[j++];
    }
}

let arr=[2,1,5,7,0];
MergeSort(arr,0,4);
console.log(arr);