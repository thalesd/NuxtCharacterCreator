<script setup>
    import { seriesStore } from '@/stores/seriesStore.js';

    const handleSelectSeries = (seriesId) => seriesStore.selectSeries(seriesId);
</script>

<template>
    <div class="w-[100%] flex flex-row flex-wrap justify-center">
        <SeriesCard 
            v-for="seriesInfo in seriesStore.seriesList" 
            :key="seriesInfo.id" 
            :seriesInfo="seriesInfo" 
            :isSeriesSelected="seriesStore.isSeriesSelected(seriesInfo.id)"
            :handleSelectSeries="handleSelectSeries"
            />
    </div>
</template>