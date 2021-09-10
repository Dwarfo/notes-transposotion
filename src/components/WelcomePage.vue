<template>
    <div class='nav_container'>
    <ul class='flex'>
        <li class="router-link" >
            Welcome
        </li>
    </ul>
    <div>
        You currently have {{numberOfNotelists}} notelists available
    </div>
</div>
</template>

<script>

export default {
    data(){
        return{
            numberOfNotelists: 0
        }
    }
}
</script>


<style scoped>
.router-link {
    font-weight: 700; 
    color: blue;
    list-style-type: none;
    margin-left: 10px;
}

.router-link:hover{
    cursor: pointer;
    background-color: aqua;
}

.rtlink-is-active {
    font-weight: 1000; 
    color: orange;
}

.flex {
    display: flex;
    padding: 0;
}

:host {
    display: block;
    background-color: #c6c6c7;
}
</style>>