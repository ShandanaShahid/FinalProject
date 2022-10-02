function validate() {
    var rd1 = document.getElementById("t1").value
var rd2 = document.getElementById("p1").value
if ( rd1 == "shandanashahid6@gmail.com" && rd2 == "password" ){
document.location.replace('/article');
}
else {
alert("Please enter valid Login Details..")
window.location.reload(true);
}
}

const searchButton = document.getElementById('search-addon');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  const result = inputValue.toUpperCase();
  if (result==='TECHNOLOGY') {
window.location='http://localhost:8880/findbycategory/${TECHNOLOGY}';
  }
  else if (result==='HEALTH') {
window.location='http://localhost:8880/findbycategory/${HEALTH}';
  }
  else if (result==='ISLAM') {
window.location='http://localhost:8880/findbycategory/${ISLAM}';
  }
  else {
    alert("Sorry!No results found")
    window.location.reload(true);    
  }
 
});
