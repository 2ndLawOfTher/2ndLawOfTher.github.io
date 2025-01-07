var Value=0;
var ColourArray = ['red', 'green', 'blue', 'lime', 'gold']

function AddOne(){
  Value += 1;
  document.getElementById('value').innerHTML = 'Current count: ' + Value;
  document.body.style.backgroundColor = ColourArray[(Value - 1) % ColourArray.length];
}

function MinusOne(){
  Value -= 1;
  document.getElementById('value').innerHTML = 'Current count: ' + Value;
  document.body.style.backgroundColor = ColourArray[(Value - 1) % ColourArray.length];
}

function IfElse(){
  CorrectPassword = 'Passwordlahzzz ...';
  if (document.getElementById('InputPassword').value == CorrectPassword){
    alert('Access granted!');
  } else{
    alert('Denied!!!');
  }
}