<template>
    <div>
        <div>我是header</div>
            <router-link to="/ec">ec</router-link>
            <router-link to="/mall/product">product</router-link>
            <router-link to="/mall/brand">brand</router-link>
            <router-view></router-view>
        <div>我是footer</div>
    </div>
</template>