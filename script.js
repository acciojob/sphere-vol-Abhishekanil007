function volume_sphere() {
    //Write your code here
	const pi = Math.PI;
	const radiusValue = parseFloat(document.getElementById("radius").value);
	const volume = (4/3) * pi * Math.pow(radiusValue,3);
	const result = document.getElementById('volume');
  result.value = volume.toFixed(4);
	return false;
} 

window.onload = function(){
	const form  = document.getElementById('MyForm');
	form.onsubmit = volume_sphere;
}
