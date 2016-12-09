<template>
    <div>
        {{foo}}
        <input v-model="foo"/>
        <router-link to="/">index</router-link>
        <input type="checkbox" id="jack" value="Jack" v-model="query.checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="query.checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="query.checkedNames">
        <label for="mike">Mike</label>
        <input v-model="query.foo"/>
        <pre>{{query}}</pre>
    </div>
</template>
<script src="./foo.js"></script>