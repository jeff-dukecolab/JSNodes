function createParagraph() {
  var p = document.createElement("p");
  p.innerText = "Et quisque cubilia class tristique torquent maecenas urna nascetur, mattis dui sem feugiat accumsan at vel ante, ornare montes commodo convallis sed magnis adipiscing.";
  
  append(p);
}

function createImage() {
  var i = document.createElement("img");
  i.src = "https://placekitten.com/200/300";
  append(i);
}

function createButton() {
  var b = document.createElement("button");
  b.innerText = "nuke it!";
  b.classList = "button is-primary";
  b.onclick = function() { document.getElementById('dynamicContent').innerHTML = ''; }
  
  append(b);
}

function createUl() {
  var hr = document.createElement('hr');
  append(hr);
  var u = document.createElement('ul');
  append(u);
}

function createLi() {
  /*
    TRY this on multiple ULs
  */
  
  var uls = document.getElementsByTagName('ul');
  
  for (i = 0; i < uls.length; i++) {
   var l = document.createElement('li');
   l.innerText = "Pharetra Quisque maecenas risus"
    uls[i].appendChild(l);
  }
  
}

function append(element) {
  document.getElementById('dynamicContent').appendChild(element);
}

document.getElementById('paragraphButton').addEventListener('click', function(e){
  createParagraph();
});