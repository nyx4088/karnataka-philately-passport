/* Bulletproof splash fallback: independent of app.js. Removes the splash after 4s no matter what. */
setTimeout(function(){
  try {
    var s = document.getElementById("splash");
    if (s){ s.style.transition = "opacity .4s"; s.style.opacity = "0"; setTimeout(function(){ s.remove(); }, 450); }
  } catch(e){}
}, 4000);
