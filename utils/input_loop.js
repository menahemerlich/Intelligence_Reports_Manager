import input from "analiza-sync";

function inputLoop(num){
    let updates = {}
    for (let index = 0; index < num; index++) {
        let key_up = input('key: ');
        if (key_up === 'id') {
            throw new Error("ID cannot be changed.");
            
        }
        let val_up = input('val: ')
        updates[key_up] = val_up
    }
    return updates
}

export {inputLoop}