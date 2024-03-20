<script setup>

const route = useRoute();
useHead({
    title: `Creating ${route.params.characterName}`
});

const inputCharName = ref(route.params.characterName);
const handleCreateCharacter = () => {

}
</script>

<template>
    <div class="mx-auto mt-16 max-w-7xl px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5 flex items-top">
        <div class="flex flex-col">
            <!-- CHARACTER FACE IMAGE -->
            <div class="shadow w-[150px] mr-10 mb-10 z-30 h-[150px]">
                <div class="border-4 border-stone-600 w-full h-full flex cursor-pointer bg-contain bg-[url('https://i.pinimg.com/736x/d1/73/49/d17349c94053fd3586f5baa0312df8b1.jpg')] rounded-full"></div>
            </div>
            <!-- CHARACTER FULL BODY IMAGE -->
            <div class="shadow w-[150px] mr-10 mb-10 z-30 h-[250px]">
                <div
                    class="border-4 border-stone-600 w-full h-full flex cursor-pointer bg-contain bg-[url('https://i.imgur.com/4T7gI1C.jpeg')] rounded-xl">
                </div>
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
                name="character-age" id="character-age" value="22" />

            <label for="character-gender">Gender</label>
            <select class="bg-inherit focus:outline-none ml-3 border rounded-xl p-1 border-sky-700" type="number"
                name="character-age" id="character-age" value="22">
                <option value="0">Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
            </select>

            <label class="" for="character-backstory">Backstory</label>
            <textarea style="resize: none;"
                class="bg-inherit focus:outline-none ml-3 mb-3 border rounded-xl p-1 border-sky-700" rows="5"
                name="character-backstory"
                id="character-backstory">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis consectetur dicta quos beatae ad eveniet laborum nobis sit quia, illo exercitationem odio? Amet iure illo minus hic quod tempore?</textarea>

            <button class="text-lg rounded bg-sky-700 mx-auto px-2 text-white" @click="handleCreateCharacter">Create</button>
        </div>
    </div>
</template>