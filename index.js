function start(){

    document.getElementById("list_view").innerHTML = "";
    document.getElementById("min_view").innerHTML = "";
    

    var txt = document.getElementById('txt').value;

    var bin_array = txt.split(",").map(function(item) {
        return item.trim();
    });

//    console.log(bin_array);

    let { min, print_element } = hd_finder(bin_array);

    print_element.forEach(element => document.getElementById("list_view").innerHTML += element);

    
    if(min == 1000){
        document.getElementById("min_view").innerHTML = "<b> Something went wrong </b>";
    }else{
        document.getElementById("min_view").innerHTML = "<b> Minimum Hamming Distance: " + min + "</b>";
    }
}


function hd_finder(bin_array){

    let print_element = [];
    let min = 1000; 

    for(let i=0; i<bin_array.length; i++){
        for(let j=i+1; j<bin_array.length; j++){
            hd = xor_one_count(bin_array[i], bin_array[j]);
            min = (min>hd) ? hd : min; 
            print_element.push("<p>" + bin_array[i] + " ^ " + bin_array[j] + " -> " + hd + "<p>");
        }
    }

    return {
        'min': min,
        'print_element': print_element
    }
}


function xor_one_count(a, b){

    let count = 0;

    for(let i=0; i<a.length; i++){
        if(a[i] != b[i]){
            count++;
        }
    }

    return count;
}
