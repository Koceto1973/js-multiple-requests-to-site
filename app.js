window.onload = function(){
  init();

  // myRequest('https://cors-anywhere.herokuapp.com/https://www.google.com',(statusCode) => { 
  //         console.log(statusCode);
  // });
  
};

var url = '';

var init = function(){
  document.querySelector("form").addEventListener('submit',function(evnt){
    evnt.preventDefault();
    document.querySelector("section").innerHTML= '';

    var formInput = document.querySelector('#intro')[0].value;
    url = 'https://cors-anywhere.herokuapp.com/https://' + formInput;
    // console.log(url);
    
    for (i=0;i<5;i++){
      document.querySelector("section").innerHTML += `<div class="line line${i+1}"></div>`;
      for(j=0;j<10;j++){
        document.querySelector(`.line${i+1}`).innerHTML += `<div class="box" id="box${j+1+i*10}"><h1>${j+1+i*10}</h1></div>`;
      }
    }

    for (k=0;k<50;k++) {
      shell(k);
    }
  })
};

var myRequest = async function(reqUrl,callback) {
  try {
      const res = await axios(reqUrl);
      var statusCode = res.status;
      callback(statusCode);
  } catch (error) {
      callback(-1);
  }
};

var shell = function (k) {
  myRequest(url,(statusCode) => {
    showRequest(k+1,statusCode); 
  });
};

var showRequest = function (id,statusCode) {
  document.getElementById(`box${id}`).innerHTML = `<h1>${statusCode}</h1>`;
  if(statusCode===200 || statusCode===201) {
    document.getElementById(`box${id}`).style.backgroundColor = 'green';
  } else {
    document.getElementById(`box${id}`).style.backgroundColor = 'red';
  }
}