function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Exemple d'utilisation avec async/await
async function demo() {
    console.log('Attente de 2 secondes...');
    await sleep(2000); // Attend 2000 millisecondes (2 secondes)
    console.log('2 secondes écoulées!');
}
