<template>
    <span class="note_symbol" :style=bottomOffset >&#9833;
        <span v-for="noteLine in noteLines" :key="noteLine.id" class="additional_line" :style="'bottom:' +  noteLine.height + 'px'"></span>
    </span>
</template>

<script>

export default{
    props:{
        note: {
            type: Number,
            required: true
        }
    },
    data: function () {
        return {
          offset: 0,
          noteLines: []
        }
    },
    computed: {
        bottomOffset(){
            return {bottom : this.offset + 'px'};
        }
    },
    methods:{
        init(){
            this.offset = 3 + (this.note - 6) * 12;
            if(this.note < 3){
                this.noteLines.push(this.note%2?{height:21, id: 0}:{height:33, id: 0});

                for(let i = this.note; i < 2; i++){
                    if(i%2 != 0){
                        if(this.note%2 != 0)
                            this.noteLines.push({height:Math.abs(i)*26 + 21, id: i + 1});
                        else{
                            this.noteLines.push({height:Math.abs(i)*26 + 33, id: i + 1});
                        }
                    }
                }
            }

            if(this.note > 13){
                this.noteLines.push(this.note%2?{height:21, id: 0}:{height:33, id: 0});

                for(let i = this.note; i > 15; i--){
                    if(i%2 == 0){
                        if(this.note%2 != 0)
                            this.noteLines.push({height:-Math.abs(i - 15)*26 + 25, id: i + 1});
                        else{
                            this.noteLines.push({height:-Math.abs(i - 15)*26 + 37, id: i + 1});
                        }
                    }
                }
            }
        }
    },
    mounted: function(){
        this.init();
    }
}
</script>

<style scoped>
    .note_symbol{
        font-size: 90px; 
        position: relative; 
        display: inline-grid; 
        width: 40px
    }
    .additional_line{
        border-bottom: 2px solid black; 
        width: 80%; 
        position:relative
    }
    .note_a_low{
        bottom: 48px
    }
    .note_b_low{
        bottom: 74px
    }
</style>
