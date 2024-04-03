<script setup>
    const route = useRoute();
    const inputCharName = ref(route.params.characterName);

    const handleSearch = () => {
        navigateTo(`/characters/${inputCharName.value}`);
    }
</script>

<template>
    <div class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
        <input 
            type="text" 
            class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" 
            placeholder="Search for characters!" 
            v-model="inputCharName"/>
        <button class="bg-sky-500 px-10 text-white" @click="handleSearch">Search</button>
    </div>
</template>