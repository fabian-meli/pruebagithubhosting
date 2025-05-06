const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const productValue = urlParams.get('product_value')
console.log("product_value = %s", productValue);
const taxes = urlParams.get('taxes')
console.log("taxes = %s", taxes);
const total = urlParams.get('total')
console.log("total = %s", total);

function setParameters() {

  try{
    document.getElementById("productValue").innerHTML = "$" + productValue;
    document.getElementById("taxes").innerHTML = "$" + taxes;
    document.getElementById("total").innerHTML = "$" + total;
  }
  catch(error){
    console.log("parametros invalidos");
  }
};