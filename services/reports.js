
import { nanoid } from 'nanoid'

function createReport(id, terroristName = 'Muhammad — unknown last name', weapons, text)
 {
    if (terroristName.length < 1) {
        terroristName = 'Muhammad — unknown last name';
    }
    if (id.length < 1) {
        id = nanoid(5);
    }
    let report = {
    id: id,
    terroristName: terroristName,
    weapons: weapons,
    text: text
}
    return report

 }

export {createReport}