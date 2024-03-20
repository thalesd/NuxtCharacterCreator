<script setup>
    const charName = ref("");

    const handleCreate = () => {
        navigateTo(`/create/${charName.value}`);
    }
</script>

<template>
    <div class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
        <input type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" placeholder="Name your character!" v-model="charName"/>
        <button class="bg-sky-500 px-10 text-white" @click="handleCreate">Create</button>
    </div>
</template>