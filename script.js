/* script.js - music persistence and helpers for Deepti Memories */
// This file contains small helper functions used across pages. Major page logic is inline on each HTML page.

(function(global){
  // Helper to save current audio time and playing status
  function persistAudioState(audio){
    try{
      localStorage.setItem('bgMusicTime', audio.currentTime.toString());
      localStorage.setItem('bgMusicPlaying', (!audio.paused).toString());
    }catch(e){}
  }
  // Periodically persist if audio exists
  document.addEventListener('DOMContentLoaded', function(){
    var aud = document.getElementById('bg-music');
    if(!aud) return;
    setInterval(function(){ persistAudioState(aud); }, 800);
    // Also persist before unload
    window.addEventListener('pagehide', function(){ persistAudioState(aud); });
  });
})(window);
