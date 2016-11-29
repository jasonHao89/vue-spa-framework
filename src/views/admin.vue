<template>
    <div>
        <ul>
            <router-link to="/mall"><li>返回mall</li></router-link>
            <router-link to="/ec/user"><li>user</li></router-link>
            <router-link to="/ec/brand"><li>brand</li></router-link>
            <li>菜单4</li>
            <li>菜单5</li>                        
        </ul>
        <router-view></router-view>
    </div>
</template>