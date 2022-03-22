document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible'){
        console.log('Ver vídeo');
    } else {
        console.log('Pausar vídeo');
    }
})