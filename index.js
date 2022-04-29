function start(){

    document.getElementById("list_view").innerHTML = "";
    document.getElementById("min_view").innerHTML = "";
    

    var txt = document.getElementById('txt').value;

    var bin_array = txt.split(",").map(function(item) {
        return item.trim();
      });

    let { min, print_element } = hd_finder(bin_array);

    print_element.forEach(element => document.getElementById("list_view").innerHTML += element);

    
    document.getElementById("min_view").innerHTML = "<b> Minimum Hamming Distance: " + min + "</b>";
}


function hd_finder(bin_array){

    let print_element = [];
    let min = 60; 

    for(let i=0; i<bin_array.length; i++){
        for(let j=i; j<bin_array.length; j++){
            if(bin_array[i] != bin_array[j]){
                hd = xor_one_count(bin_array[i], bin_array[j]);
                if (hd < min){
                    min = hd;
                }
                print_element.push("<p>" + bin_array[i] + " ^ " + bin_array[j] + " -> " + hd + "<p>");
            }
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
