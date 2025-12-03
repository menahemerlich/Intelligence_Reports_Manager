

function getAllReport(database) {
    database.sort((a,b) => a.id - b.id)
    return database
}

function getAllReportByField(database, field) {
    database.sort((a,b) => a[field] - b[field])
    return database
}

function searchById(database, id){
    for (const repo of database) {
        if (repo.id === id) {
            return repo
        }
    }throw new Error("Report does not exist.");
    
}

export {getAllReport, getAllReportByField, searchById}




