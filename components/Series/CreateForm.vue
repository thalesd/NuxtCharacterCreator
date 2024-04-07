<script setup>
    const { toTitleCase } = useUtilities();
    useHead({
        title: `Creating Series`
    });

    // const seriesName = ref('');
    // const seriesLogoUrl = ref('');

    const seriesData = ref({
        name: '',
        logoUrl: '',
        launchYear: 0,
        type: 0,
        synopsis: ''
    });

    const handleCreateSeries = () => {
        console.log('create series');

        console.log(seriesData.value);
    }
</script>

<template>
    <div class="mx-auto mt-16 max-w-7xl px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5 flex items-top">
        <div class="flex flex-col">
            
        </div>
        
        <div class="font-mono flex flex-col bg-stone-400 shadow border-4 border-sky-700 h-full w-full p-5 rounded-xl">
            <!-- CHARACTER INFO -->
            <h2 class="text-4xl text-center mb-1">Series Information</h2>

            <hr class="border-b border-black shadow" />

            <!-- SERIES LOGO -->
            <div class="border-2 border-dashed rounded-xl my-1 w-full z-30 h-[200px] text-center cursor-pointer flex items-center justify-center">
                <NuxtImg
                    v-if="seriesData.logoUrl.length > 0"
                    class="border-4 border-stone-600 w-full h-full flex cursor-pointer rounded-xl" 
                    :src="seriesLogoUrl"/>

                <Icon v-if="seriesData.logoUrl.length == 0" name="material-symbols:upload" color="black" size="50px"/>
            </div>

            <label for="series-name">Name</label>
            <input class="bg-inherit focus:outline-none ml-3 border rounded-xl p-1 border-sky-700" type="text"
                name="character-name" id="character-name" v-model="seriesData.name"/>

            <label for="series-year">Launch year</label>
            <input class="bg-inherit focus:outline-none ml-3 border rounded-xl p-1 border-sky-700" type="number"
                name="character-age" id="character-age" v-model.number="seriesData.launchYear" />

            <label for="series-type">Type</label>
            <select class="bg-inherit focus:outline-none ml-3 border rounded-xl p-1 border-sky-700" type="number"
                name="character-age" id="character-age" v-model.number="seriesData.type">
                <option value="0">Select Type</option>
                <option value="1">Movies</option>
                <option value="2">Series</option>
                <option value="3">Anime</option>
                <option value="4">Cartoon</option>
                <option value="5">Comic Books</option>
            </select>

            <label class="" for="series-synopsis">Synopsis</label>
            <textarea style="resize: none;"
                class="bg-inherit focus:outline-none ml-3 mb-3 border rounded-xl p-1 border-sky-700" rows="5"
                name="character-backstory"
                id="character-backstory" 
                v-model="seriesData.synopsis"></textarea>

            <button class="text-lg rounded bg-sky-700 mx-auto px-2 text-white" @click="handleCreateSeries">Create</button>
        </div>
    </div>
</template>