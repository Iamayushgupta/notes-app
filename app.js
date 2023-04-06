const yargs = require("yargs")
const notes = require("./notes.js")
 
yargs.command({
    command:"add",
    describe: "add a new note",
    builder : {
        title : {
            describe : "Note Title",
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : "Note Body",
            demandOption : true ,
            type : 'string'
        }
    },
    handler : (argv)=>notes.addNote(argv.title,argv.body)
})

yargs.command({
    command : "remove",
    describe : "remove a note",
    builder : {
        title : {
            describe : "Note Title",
            demandOption :true , 
            type : 'string'
        }
    },
    handler : (argv)=>notes.removeNote(argv.title)

})

yargs.command({
    command : "read",
    describe : "reading the notes",
    builder : {
        title : {
            describe : "Note Title",
            demandOption : true , 
            type : 'string'
        }
    },
    handler : (argv)=>notes.readNote(argv.title)
})

yargs.command({
    command : "list",
    describe : "List the notes",
    handler : ()=>notes.listNotes()
})

yargs.parse()