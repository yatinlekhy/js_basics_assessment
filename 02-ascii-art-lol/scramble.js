(function () {
  let orig = document.getElementById('dolla-bill');
  let lines = orig.innerHTML.split('\n');
  orig.innerHTML = '';
  
  let yeah = [];
  
  lines.forEach(function (line) {
    yeah.push(line, 'lol'.repeat(40));
  });

  document.getElementById('fixed').innerHTML = yeah.join('\n');

  window.artArray = yeah;
  window.writeAscii = writeAscii;
  
  function writeAscii(arr) {
    document.getElementById('fixed').innerHTML = arr.join('\n');
  }
}());