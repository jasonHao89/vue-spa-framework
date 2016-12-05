<style lang="css" src="./index.css" scoped></style>

<template>
    <div>
        我是index
        <router-link to="/foo">foo</router-link>
        <router-link to="/ec">ec</router-link>
        <router-link to="/mall">mall</router-link>
        <img :src="require('assets/logo.png')"/>
        <pre>{{$data}}</pre>
    </div>
</template>

<script src="./index.js"></script>

