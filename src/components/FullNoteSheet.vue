<template>
    <button @click=transpBbToEb() >Bb -> Eb</button>
    <notes-sheet v-for="(noteList, index) in noteListArray" :key=noteList.id
        :notes=noteList 
        :firstLineIndex=index
        :class="{line_offset: index===0}"
    ></notes-sheet>
</template>

<script>
import NoteList from './NoteList.vue'

export default {
    components:{
        'notes-sheet': NoteList
    },
    data() {
        return {
            allNotes: [
            {
                time:0,
                note: 5,
                order: 0
            },
            {
                time:1,
                note: 8,
                order: 1
            },
            {
                time:2,
                note: 0,
                order: 2
            },
            {
                time:3,
                note: 3,
                order: 2
            },
            {
                time:4,
                note: 0,
                order: 2
            },
            {
                time:5,
                note: 8,
                order: 2
            },
            {
                time:6,
                note: 5,
                order: 0
            },
            {
                time:7,
                note: 8,
                order: 1
            },
            {
                time:8,
                note: 0,
                order: 2
            },
            {
                time:9,
                note: 3,
                order: 2
            },
            {
                time:10,
                note: 0,
                order: 2
            },
            {
                time:11,
                note: 8,
                order: 2
            },
            {
                time:12,
                note: 5,
                order: 0
            },
            {
                time:13,
                note: 8,
                order: 1
            },
            {
                time:14,
                note: 0,
                order: 2
            },
            {
                time:15,
                note: 3,
                order: 2
            },
            {
                time:16,
                note: 0,
                order: 2
            },
            {
                time:17,
                note: 8,
                order: 2
            },
            {
                time:18,
                note: 5,
                order: 0
            },
            {
                time:19,
                note: 8,
                order: 1
            },
            {
                time:20,
                note: 0,
                order: 2
            },
            {
                time:21,
                note: 3,
                order: 2
            },
            {
                time:22,
                note: 0,
                order: 2
            },
            {
                time:23,
                note: 8,
                order: 2
            },
            {
                time:24,
                note: 5,
                order: 0
            },
            {
                time:25,
                note: 8,
                order: 1
            },
            {
                time:26,
                note: 0,
                order: 2
            },
            {
                time:27,
                note: 3,
                order: 2
            },
            {
                time:28,
                note: 0,
                order: 2
            },
            {
                time:29,
                note: 8,
                order: 2
            }
        ]
        }
    },
    methods:{
        writeDebug(){
            console.log(this.$route.query.notelistId);
        },
        init(){
            this.innerWidth = window.innerWidth;
            //this.noteService.getNotesById(this.route.snapshot.params['id']).subscribe(
            //    allNotelist => {
            //        this.allNotes = allNotelist;
            //        this.setNotes(allNotelist);
            //    }
            //);

            this.setNotes(this.allNotes);
        },
        calculateChunk() {
            return Math.floor(this.innerWidth / 40) - 1;
        },

        transpBbToEb() {
            this.allNotes.forEach(note => {
                note.note = note.note - 4;
            });

            this.setNotes(this.allNotes);
        },

        setNotes(allNotelist){
            let allNotes = allNotelist;
            let notesLength = allNotes.length;
            this.noteListArray = [];

            console.log("Notes Length: " + notesLength);

            let chunk = this.calculateChunk();
            this.noteListArray.push(allNotes.slice(0, chunk - 4));
            for (let i = chunk - 4; i < notesLength; i += chunk) {
                let temporary = allNotes.slice(i, i + chunk);
                this.noteListArray.push(temporary);
            }
        }
    },
    created() {
        this.writeDebug();
        this.init();
    }
}
</script>

<style scoped>
    .line_offset
    {
        margin-top: 100px
    }
</style>