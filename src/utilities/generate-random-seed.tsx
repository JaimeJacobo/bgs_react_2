function generateRandomSeed () {
    let seed = '';
    for (let i = 0; i < 5; i++){
       const randomNumber = Math.floor(Math.random()*10) 
       seed += randomNumber;
    }
    return seed
}

export default generateRandomSeed;