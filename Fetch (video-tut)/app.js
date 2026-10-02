




window.addEventListener('load', () => {

    console.log('page is loaded');

   //Load the json data file
   fetch("http://api.open-notify.org/astros.json")
   .then(response => response.json())
   .then(data => {
        console.log(data);
        //Do something with 'data'

   })
   .catch(error => {
       console.log("Error!!! : " + error);
   })

})




//     then(function (response) {

//         console.log(response);

//     })
// })

