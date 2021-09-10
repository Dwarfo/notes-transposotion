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
import axios from 'axios';

export default {
    components:{
        'notes-sheet': NoteList
    },
    data() {
        return {
            noteListArray:[]
        }
    },
    methods:{
        writeDebug(){
            console.log('notelist id: ' + this.$route.query.notelistId);
        },
        init(){
            this.innerWidth = window.innerWidth;
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

        axios.get('http://localhost:3000/notes/1')
        .then( response => {
            console.log('Response is: ' + response);
            this.setNotes(response);
        })
        .catch(e => {
            this.errors.push(e);
        })

        this.writeDebug();
        this.init();
    }
}
</script>

<style scoped>
    .line_offset
    {
        margin-top: 50px
    }
</style>