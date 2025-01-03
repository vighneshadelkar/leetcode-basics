
function QuickSort(A,l,h){
    if(l<h){
        let j=partition(A,l,h);
        QuickSort(A,l,j);
        QuickSort(A,j+1,h);       
    }
}

function partition(A,l,h){
}