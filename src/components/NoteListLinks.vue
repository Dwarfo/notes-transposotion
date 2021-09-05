<template>
    <div class="router-link" 
        :key=entry.id
        v-for="entry in notesListEntry" >
        {{entry.name}}  {{entry.id}}
    </div>
</template>

<script>

export default {
    data(){
        return{
            notesListEntry: []
        }
    },
    mounted(){
        /*get note entries from servur
        this.noteService.getListEntries().subscribe( 
            entries => {
                this.notesListEntry = entries;
            }
        );*/
    }
}
</script>

<style scoped>
    .router-link {
        font-weight: 400; 
        color: blue;
    }

    .router-link:hover{
        cursor: pointer;
        background-color: aqua;
    }
</style>