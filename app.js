$(function(){

  // speechSynthesis.onvoiceschanged = function() {

  //   var $voicelist = $('#voicelist');
        
  //   speechSynthesis.getVoices().forEach(function(voice, index) {
  //     console.log(index, voice.name, voice.default ? '(default)' :'');
  //     var $option = $('<option>')
  //     .val(index)
  //     .html(voice.name + (voice.default ? ' (default)' :''));
      
  //     $voicelist.append($option);
  //   });
  // }
  
  $('#speak-btn').click(function(){
    var text = $('#speech-input').val();
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[$('#voicelist').val()];
    msg.text = text;

    // msg.onend = function(e) {
    //   console.log('Finished in ' + event.elapsedTime + ' seconds.');
    // };

    speechSynthesis.speak(msg);
  })
});
