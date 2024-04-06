<script setup>
    const props = defineProps({
        tech: Object
    });
</script>

<template>
    <div class="shadow border-2 border-emerald-800 rounded-xl min-h-[60px] min-w-[250px] my-1">
        <div class="text-teal-700 flex text-lg mt-3 mb-5 justify-center">
            <div class="flex mx-2">
                <p class="mr-2">{{tech.style}}</p>
                <p class="mr-2">|</p>
                <p class="mr-2">{{tech.name}}</p>
            </div>
        </div>
    </div>
</template>