
/* 
function showCity()
{    console.log(villeCourante)
    //alert(villeCourante);      

}
let villeCourante="Lyon";
*/

function showCity() {
 
    let nomVilleSelectionnee = document.getElementById("menu").value;
  
   
    let cities = document.getElementsByClassName("city");
    let l=cities.length;
    for (i=0; i<l; i++) {
      if (cities[i].id == nomVilleSelectionnee ) {
        //garder l'element visible -> 
        cities[i].style.display="block";
          
      } else {
        //cacher lelement -> 
        cities[i].style.display="none";
      }
       }
       }