function mapChar(N) {
    let names = 'abcdefghijklmnopqrstuvwxyz';

    for(let i=1;i<=N;i++){
        console.log(names[i-1]+"-"+i)
    }
}
const userInput = process.argv[2];

console.log("User input:", userInput);
mapChar(userInput);