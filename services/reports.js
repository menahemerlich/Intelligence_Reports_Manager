
import { nanoid } from 'nanoid'

export function createReport(terroristName = 'Muhammad — unknown last name', weapons, text)
 {
    let report = {
    id: nanoid(),
    terroristName: terroristName,
    weapons: weapons,
    text: text
}
    return report

 }

