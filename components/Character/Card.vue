<script setup>
    const props = defineProps({
        character: Object
    });
</script>

<template>
    <div class="border-4 border-emerald-600 rounded-xl w-[300px] h-[150px] text-center mx-5 my-5 flex flex-row bg-gray-200">
        <div class="my-auto mx-auto">
            <img 
                :src="character.faceImageUrl"
                :alt="character.name"
                class="border-4 border-emerald-400 w-[100px] h-[100px] rounded-full"
            />
        </div>
        <div class="mx-auto flex flex-col justify-around">
            <p class="text-center">{{character.name}}</p>
            <p class="text-center">{{character.age}} | {{character.gender}}</p>
            <p class="text-center text-sm text-amber-400">{{character.author}}</p>
        </div>
    </div>
</template>