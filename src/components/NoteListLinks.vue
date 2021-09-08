<template>
    <router-link 
        :to="setNoteListLink(entry.id)"
        :key=entry.id
        v-for="entry in notesListEntry"
        >
        {{entry.name}}
    </router-link>
    <router-view></router-view>
</template>

<script>

export default {
    computed:{
        noteListLink(){
            return {
                name: 'notelist-links',
                params: { notelistId: this.id },
                query: { sort: 'asc' },
            };
        }
    },
    data(){
        return{
            notesListEntry: [
                {id: 1, name: 'testEntry1'},
                {id: 2, name: 'testEntry2'}
            ]
        }
    },
    mounted(){
        /*get note entries from servur
        this.noteService.getListEntries().subscribe( 
            entries => {
                this.notesListEntry = entries;
            }
        );*/
    },
    methods:{
        setNoteListLink(entryId){
            return '/noteLists/' + entryId;
        }
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