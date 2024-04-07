<script setup>
    const { toTitleCase } = useUtilities();

    const route = useRoute();
    useHead({
        title: `Creating ${route.params.characterName ? toTitleCase(route.params.characterName) : "character"}`
    });

    const inputCharName = ref(route.params.characterName);
    const handleCreateCharacter = () => {

    }
</script>

<template>
    <div class="mx-auto mt-16 max-w-7xl px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5 flex items-top">
        <div class="flex flex-col">
            <!-- CHARACTER FACE IMAGE -->
            <div class="w-[150px] mr-10 mb-10 z-30 h-[150px]">
                <NuxtImg 
                    class="border-4 border-stone-600 w-full h-full flex cursor-pointer rounded-full" 
                    src="https://www.centroceres.cl/wp-content/uploads/2021/06/icono-perfil.png"/>
            </div>
            <!-- CHARACTER FULL BODY IMAGE -->
            <div class="shadow w-[150px] mr-10 mb-10 z-30 h-[250px]">
                <NuxtImg
                    class="border-4 border-stone-600 w-full h-full flex cursor-pointer rounded-xl" 
                    src="https://cdn1.vectorstock.com/i/1000x1000/09/50/human-body-vector-4090950.jpg"/>
            </div>
        </div>
        
        <div class="font-mono flex flex-col bg-stone-400 shadow border-4 border-sky-700 h-full w-full p-5 rounded-xl">
            <!-- CHARACTER INFO -->
            <h2 class="text-4xl text-center mb-1">Character Information</h2>

            <hr class="border-b border-black shadow" />

            <label for="character-name">Name</label>
            <input class="bg-inherit focus:outline-none ml-3 border rounded-xl p-1 border-sky-700" type="text"
                name="character-name" id="character-name" v-model="inputCharName"/>

            <label for="character-age">Age</label>
            <input class="bg-inherit focus:outline-none ml-3 border rounded-xl p-1 border-sky-700" type="number"
                name="character-age" id="character-age" value="" />

            <label for="character-gender">Gender</label>
            <select class="bg-inherit focus:outline-none ml-3 border rounded-xl p-1 border-sky-700" type="number"
                name="character-age" id="character-age" value="">
                <option value="0">Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
            </select>

            <label class="" for="character-backstory">Backstory</label>
            <textarea style="resize: none;"
                class="bg-inherit focus:outline-none ml-3 mb-3 border rounded-xl p-1 border-sky-700" rows="5"
                name="character-backstory"
                id="character-backstory"></textarea>

            <button class="text-lg rounded bg-sky-700 mx-auto px-2 text-white" @click="handleCreateCharacter">Create</button>
        </div>
    </div>
</template>