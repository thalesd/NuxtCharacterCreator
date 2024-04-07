<script setup>
    const props = defineProps({
        seriesInfo: Object,
        handleSelectSeries: Function,
        isSeriesSelected: Boolean
    });
</script>

<template>
    <div 
        :class="'border-4 rounded-lg border-amber-500 text-center py-3 px-6 mx-3 my-4 cursor-pointer ' + (isSeriesSelected ? 'text-white bg-emerald-700' : 'text-gray-800 bg-gray-400')"
        @click="props.handleSelectSeries(props.seriesInfo.id)">
        {{ props.seriesInfo.name }}
    </div>
</template>