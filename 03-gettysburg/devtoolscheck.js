/*!
  devtools-detect
  Detect if DevTools is open
  https://github.com/sindresorhus/devtools-detect
  by Sindre Sorhus
  MIT License
*/
(function () {
  'use strict';
  var devtools = {open: false};
  var threshold = 160;
  var emitEvent = function (state) {
    window.dispatchEvent(new CustomEvent('devtoolschange', {
      detail: {
        open: state
      }
    }));
  };

  setInterval(function () {
    if ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold) {
      if (!devtools.open) {
        emitEvent(true);
      }
      devtools.open = true;
    } else {
      if (devtools.open) {
        emitEvent(false);
      }

      devtools.open = false;
    }
  }, 500);

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = devtools;
  } else {
    window.devtools = devtools;
  }
})();
(function () {
  var nopes = document.querySelectorAll('.nope');
  var yays = document.querySelectorAll('.yay');
  window.addEventListener('devtoolschange', toggle);
  function toggle(evt) {
    var n;
    var nopeState;
    var yayState;

    if (evt.detail.open) {
      nopeState = 'hide';
      yayState = 'show';
    } else {
      nopeState = 'show';
      yayState = 'hide';
    }

    n = nopes.length;
    while (n--) {
      if (nopeState == 'show') {
        nopes[n].classList.remove('hide');
      } else {
        nopes[n].classList.add('hide');
      }
    }

    n = yays.length;
    while (n--) {
      if (yayState == 'show') {
        yays[n].classList.remove('hide');
      } else {
        yays[n].classList.add('hide');
      }
    }
  }
}());