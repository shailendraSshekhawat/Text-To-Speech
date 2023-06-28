let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {

    voices = window.speechSynthesis.getVoices();  // get all voices available from the api
    speech.voice = voices[0];   // default voice

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", ()=> {
    speech.voice = voices[voiceSelect.value];
});



document.querySelector("button").addEventListener("click", (e) => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
