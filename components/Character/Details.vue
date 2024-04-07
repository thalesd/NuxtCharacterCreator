<script setup>
    const route = useRoute();
    const { character } = useCharacter(route.params.characterId);

    if(!character){
        throw createError({
            statusCode: 404,
            statusMessage: `Character with ID of ${route.params.characterId} does not exist.`
        });
    }
</script>

<template>
    <!-- CHARACTER DETAIL PAGE -->
    <div class="mx-auto mt-16 max-w-7xl px-4 xs:px-8 sm:px-10 lg:px-16 pb-6 w-3/5 flex items-top">
        <div class="flex flex-col">
            <!-- CHARACTER FACE IMAGE -->
            <div class="w-[150px] mr-10 mb-10 z-30 h-[150px]">
                <NuxtImg class="border-4 border-emerald-800 w-full h-full flex cursor-pointer rounded-full" 
                    :src="character.faceImageUrl"
                />

            </div>
            <!-- CHARACTER FULL BODY IMAGE -->
            <div class="shadow w-[150px] mr-10 mb-10 z-30 h-[250px]">
                <NuxtImg class="border-4 border-emerald-800 w-full h-full flex cursor-pointer rounded-xl" 
                    :src="character.fullImageUrl"
                />
            </div>
        </div>

        <div class="font-mono flex flex-col bg-emerald-100 shadow border-4 border-emerald-800 h-full w-full p-5 pb-0 rounded-xl">
            <!-- CHARACTER INFO -->

            <h2 class="text-4xl text-emerald-500 text-center mb-1">{{character.name}}</h2>

            <hr class="border-b border-emerald-500 shadow" />

            <div class="text-emerald-600 flex text-lg mt-3 mb-5 justify-between">
                <div class="flex border-b border-emerald-600">
                    <p class="mr-2">{{character.gender}}</p>
                    <p class="mr-2">|</p>
                    <p class="mr-2">Age {{character.age}}</p>
                </div>
            </div>

            <p class="text-emerald-900">{{character.story}}</p>

            <!-- CHARACTER Techniques -->
            <h2 class="text-3xl text-emerald-500 text-center mb-1 mt-4">Techniques</h2>
            <hr class="border-b border-emerald-500 mb-4" />

            <div class="flex flex-wrap justify-around">
                <CharacterTechnique v-for="tech in character.techniques" :key="tech.id" :tech="tech"/>
            </div>

            <div class="flex mt-4 text-zinc-400">
                <p>Author: Eiichiro Oda</p>
            </div>
        </div>
    </div>
</template>