const fs = require("fs")
const chalk = require('chalk')

const addNote = (title,body)=>{
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note)=>note.title==title)
    const duplicateNote = notes.find((note)=>note.title==title)
    if (!duplicateNote){
        notes.push({
            title : title , 
            body : body
        })
        saveNotes(notes)
        console.log(chalk.green("Note Added Successfully"))
    }
    else{
        console.log(chalk.red("Note title already taken"))
    }
    
}

const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const notesToKepp = notes.filter((note)=>note.title!==title)
    if (notes.length===notesToKepp.length){
        console.log(chalk.red("Note not found"))
    }
    else{
        console.log(chalk.green("Note was removed"))
    }
    saveNotes(notesToKepp)
}

const readNote = (title)=>{
    const notes= loadNotes()
    const read = notes.find((note)=>note.title===title)
    if (!read){
        console.log(chalk.red("Note not found"))
    }
    else{
        console.log(read[0].body)
    }
}

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.yellow("Your notes are"))
    notes.forEach(note => {
        console.log(note.title + " - " + note.body)
    });

}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e){
        return []
    }   
}

module.exports = {
    addNote : addNote , 
    removeNote : removeNote,
    readNote : readNote,
    listNotes : listNotes
}