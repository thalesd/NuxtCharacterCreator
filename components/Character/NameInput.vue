<script setup>
    const route = useRoute();
    const charName = ref("");

    const props = defineProps({
        seriesName: String
    });

    const handleCreate = (e) => {
        e.preventDefault();
        navigateTo(`/${props.seriesName}/createCharacter/${charName.value}`);
    }
</script>

<template>
    <form @submit="handleCreate" class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
        <input 
            name="charName"
            type="text" 
            class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" 
            placeholder="Name your character!" 
            v-model="charName"/>
        <button class="bg-sky-500 px-10 text-white" @click="handleCreate">Create</button>
    </form>
</template>