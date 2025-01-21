<script setup>
defineProps(['items', 'title'])
</script>

<template>
    <h3>{{ items }}</h3>
            <ul>
                <li v-for="item in items" :key="item.id">
                    {{ item.name }}
                    <input type="checkbox" :checked="item.isDone">
                </li>
            </ul>
</template>