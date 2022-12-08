 const btnEl = document.getElementById("btn"); //création const du button
 const emojiNameEl = document.getElementById("emoji-name"); //creation const name
 const emoji = []; // creation du tableau emoji
 console.log(emoji);

    async function getEmoji (){ //creation fonction qui appelle l'emoji
        //creation variable "response" qui fetch 
        let response = await fetch ("https://emoji-api.com/emojis?access_key=a3fc11b7c35599a578b4a2a03b29e78e63ca51be")
        data = await response.json(); //data = la response.json car api
        for (let i = 0 ; i < 1500; i++){ //boucle pour i < veut 1500emojis max et qui passe un par un
        emoji.push({ //le tableau push 
            emojiImage : data[i].character, //image de l'emoji
            emojiCode : data[i].unicodeName // et son nom
        
        });
        }
    }
    getEmoji(); //appelle de l'execution de la fonction


 btnEl.addEventListener("click", () =>{ // declenchement du click =>
        const randomNum = Math.floor(Math.random()*emoji.length); //creation const random (Math.floor = nombre entier inferieur(math.random)) multiplier par emoji.length car tableau
        console.log(randomNum);
        btnEl.innerHTML = emoji[randomNum].emojiImage; // le btn = emoji avec randomNum.son image
        emojiNameEl.innerHTML = emoji[randomNum].emojiCode; // emojiname = emoji avec randomNum.son name
    });