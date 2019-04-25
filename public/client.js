console.log('Client-side code running');

const button = document.getElementById('myButton');
const button2 = document.getElementById('myButton2');
const button3 = document.getElementById('myButton3');


//Bernie listener
button.addEventListener('click', function(e) {
  console.log('button was clicked');

  fetch('/bernie', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

//Kamala listener
button2.addEventListener('click', function(e) {
    console.log('button was clicked');
  
    fetch('/kamala', {method: 'POST'})
      .then(function(response) {
        if(response.ok) {
          console.log('Click was recorded');
          return;
        }
        throw new Error('Request failed.');
      })
      .catch(function(error) {
        console.log(error);
      });
  });

//Biden Listerner
button3.addEventListener('click', function(e) {
    console.log('button was clicked');
  
    fetch('/joe', {method: 'POST'})
      .then(function(response) {
        if(response.ok) {
          console.log('Click was recorded');
          return;
        }
        throw new Error('Request failed.');
      })
      .catch(function(error) {
        console.log(error);
      });
  });


setInterval(function() {
    fetch('/bernie', {method: 'GET'})
      .then(function(response) {
        if(response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(function(data) {
        document.getElementById('counter').innerHTML = ` ${data.length} VOTES`;
      })
      .catch(function(error) {
        console.log(error);});
      
      fetch('/kamala', {method: 'GET'})
      .then(function(response) {
        if(response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(function(data) {
        document.getElementById('counter2').innerHTML = ` ${data.length} VOTES`;
      })
      .catch(function(error) {
        console.log(error);
      });
      
      fetch('/joe', {method: 'GET'})
      .then(function(response) {
        if(response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(function(data) {
        document.getElementById('counter3').innerHTML = ` ${data.length} VOTES`;
      })
      .catch(function(error) {
        console.log(error);
      })
  }, 500);