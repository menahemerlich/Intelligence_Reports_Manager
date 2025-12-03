

function savingReport(database, report){
    for (const repo of database) {
        if (repo.id === report.id) {
            throw new Error("The ID already exists.");
        }
            
            
        
    }database.push(report)
}

export {savingReport}


