<style lang="css" src="./index.css" scoped></style>

<template>
    <div>
        我是index
        <router-link to="/foo">foo</router-link>
        <router-link to="/ec">ec</router-link>
        <router-link to="/mall">mall</router-link>
        <img :src="require('assets/logo.png')"/>
        <pre>{{$data}}</pre>
        {{'2016-10-11' | date_format('yyyy年MM月dd日')}}
        <br/>
        {{'2016/10/11' | date_format('yyyy年MM月dd日')}}
        <br/>
        {{new Date() | date_format('yyyy年MM月dd日 HH时mm分ss秒')}}
    </div>
</template>

<script src="./index.js"></script>

