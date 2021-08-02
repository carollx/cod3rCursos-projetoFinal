<template>
    <header class="header">
        <a :class="toggleMenuClicked" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">
            {{ title }}
        </h1>
        <UserDropdown v-if="!hideUserDropdown"/>
    </header>
</template>

<script>
import UserDropdown from './UserDropdown.vue'

export default {
    name: 'Header',
    components: { UserDropdown },
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
    },
    computed: {
        icon() {
            return "fas fa-bars"
        },
        toggleMenuClicked(){
            return this.$store.state.isMenuVisible ? "toggle clicked" : "toggle"
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #19032e, #5f09af);
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a {
        color: #FFF;
        text-decoration: none;
    }

    header.header > a.toggle {
        width: 60px;
        height: 100%;
        color: #FFF;
        justify-self: flex-start;
        text-decoration: none;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header.header > a.toggle:hover {
        background-color: rgba(14, 8, 8, 0.2);
    }

    header.header > a.toggle.clicked {
        background-color: #0f021b;
        color: #7a7a7a;
    }
</style>