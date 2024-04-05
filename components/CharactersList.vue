<script setup>
    const { characters } = useCharacters();
</script>

<template>
    <div>
        <div class="flex flex-wrap justify-center items-center mt-5">
            <CharacterCard v-for="char in characters" :key="char.id" :character="char"/>
        </div>
    </div>
</template>