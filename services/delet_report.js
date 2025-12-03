
function deletReportById(database, id) {
    const del = database.findIndex((repo, index) => {
        if (repo.id === id) {
            console.log(index);
            return index
        }
    })
    if (del >= 0) {
        database.splice(del, 1)
    } else {
        throw new Error("Report does not exist.");
    }
}


