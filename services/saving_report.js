
import { database } from "../db/db.js";

function savingReport(report){
    for (const repo of database) {
        if (repo.id !== report.id) {
            database.push(report)
        }else{
            throw new Error("The ID already exists.");
            
        }
    }
}