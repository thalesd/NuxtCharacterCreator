<script setup>
import { seriesStore } from '@/stores/seriesStore.js';
const { seriesList } = useSeries();
</script>

<template>
    <!-- HOME -->
    <SeriesSelector />
    
    <div class="border-4 rounded-full p-10 bg-gray-800/60 transparent" v-if="seriesStore.selectedSeriesId > 0">
        <div class="mb-10 mx-10">
            <h1 class="text-5xl text-center font-serif text-white">Create Your Character</h1>
            <CharacterNameInput
                :seriesName="seriesList.find(s => s.id === seriesStore.selectedSeriesId).name" />
        </div>

        <div class="mt-10 mx-10">
            <h1 class="text-5xl text-center font-serif text-white">Search a Character</h1>
            <CharacterSearchInput
                :seriesName="seriesList.find(s => s.id === seriesStore.selectedSeriesId).name" />
        </div>
    </div>
</template>