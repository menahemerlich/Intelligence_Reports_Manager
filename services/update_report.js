import { searchById } from "./get_report.js";

function checkKeys(obj1, obj2){
    let flag = true
    for (const element of obj2) {
    if (!(obj1.includes(element))){flag = false}
}
    return flag
}

function updateReport(database, id, updates) {
    const repo_up = searchById(database, id);
    const keys_obj = Object.keys(database[0]);
    const keys_up = Object.keys(updates);
    
    if (checkKeys(keys_obj, keys_up)) {
        for (const key of keys_up) {
        repo_up[key] = updates[key] 
    }
    }else{
        throw new Error("One or more keys do not exist.");
        
    }

}

export {updateReport}



