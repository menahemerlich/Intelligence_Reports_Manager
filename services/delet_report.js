
function deletReportById(database, id) {
    let del = null
    database.findIndex((repo, index) => {
        if (repo['id'] === id) {
            del = index;
            
        }
    })
    if (del >= 0) {
        console.log('TEST');
        
        database.splice(del, 1)
    } else {
        throw new Error("Report does not exist.");
    }
}
export {deletReportById}

