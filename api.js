const form = document.querySelector('form');
const resultDiv= document.querySelector('.result');

form.addEventListener('submit' , (e)=>{ 
    e.preventDefault();
    getWordInfo(form.elements[0].value);


});

const getWordInfo = async(word)=>{
    

    resultDiv.innerHTML = "Fetching Data .....";
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    


    resultDiv.innerHTML =`
    <h2><strong>Word:</strong>${data[0].word}</h2>
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p><strong>Meaning:</strong>${data[0].meanings[0].definitions[0].definition}</p>
    <p><strong>Example:</strong>${data[0].meanings[0].definitions[0].example}</p>
    <ul><strong>Antonyms:</strong>
    `;
    data[0].meanings[0].definitions[0].antonyms.forEach((antonym) => {
        resultDiv.innerHTML += `<li>${antonym}</li>`;
    });

    resultDiv.innerHTML += `</ul>`;

    resultDiv.innerHTML += `<div><a href ="${data[0].sourceUrls}" target ="_blank">Read More</a></div>`;

I
 





       
   
   console.log(data);
}