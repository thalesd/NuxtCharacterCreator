<script setup>
const handleClickAddNew = () => {
    navigateTo('/series/create');
}
</script>

<template>
    <div 
        class="border-4 rounded-lg border-amber-500 text-center py-3 px-6 mx-3 my-4 cursor-pointer text-gray-800 bg-sky-400"
        @click="handleClickAddNew()">
            <Icon class="my-auto" name="material-symbols:add" color="white" size="1.8rem"/>
    </div>
</template>