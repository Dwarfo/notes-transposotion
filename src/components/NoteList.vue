<template>
    <div class="mrg_t_20 align_horizontal">
    <div class="grow">
        <!--<div *ngIf="isFirstLine" class="note_key">𝄞</div>-->
        <img class="key_img" v-if="applyFirstLineStyle" src="../assets/clef.png">
        <div class="notes_array" :style=firstLineOffset >
            <note-symbol :note=note.note v-for="note in notes" :key=note.time></note-symbol>
        </div>
        <div class="note_row">
            <div class="note_line">
                
            </div>
        </div>
        <div class="note_row">
            <div class="note_line">

            </div>
        </div>
        <div class="note_row">
            <div class="note_line">

            </div>
        </div>
        <div class="note_row">
            <div class="note_line">

            </div>
        </div>
        <div class="note_row">
            <div class="note_line">

            </div>
        </div>
    </div>
</div>
</template>

<script>
import NoteSymbol from './NoteSymbol.vue'

export default {
    components: {
        'note-symbol': NoteSymbol
    },
    props:{
        notes: {
            type: Array,
            required: true
        },
        firstLineIndex:{
            type: Number,
            required: false,
            default: 1
        }
    },
    computed:{
        firstLineOffset(){
            return {left: this.firstLineIndex === 0? "150px" : "20px"}
        }
    },
    methods:{
        applyFirstLineStyle(){
            return this.firstLineIndex === 0;
        }
    }
}
</script>

<style scoped>
    .note_row {
        height:24px; 
        background-color: white;
    
    }

    .note_line {
        height: 12px;
        border-color: black;
        border-bottom: 2px solid black;
    }

    .mrg_t_20{
        margin-top: 100px;
    }

    .note_key {
        height: 100px;
        font-size: 138px;
        top:0px;
        position: absolute;
    }

    .align_horizontal{
        display: flex;
        flex-direction: row;
    }

    .grow{
        flex-grow: 1;
        white-space: nowrap;
    }

    .note_symbol{
        font-size: 90px;
        position: relative;
        bottom: 3px;
    }

    .notes_array{
        position: absolute;
    }

    :host{
        display: block;
    }

    .key_img {
        width: 83px;
        position: absolute;
        top: 115px;
        left: 15px;
    }
</style>
