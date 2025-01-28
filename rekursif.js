function tampilAngka(n) {
<<<<<<< Updated upstream
    if(n == 0) {
        return;
    }
    console.log(n);
    tampilAngka(n-1);
    
=======
    if(n === 0){
        return;
    }
    console.log(n);
    return tampilAngka(n-1);
>>>>>>> Stashed changes
}

tampilAngka(10);