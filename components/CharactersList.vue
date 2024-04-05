<script setup>
    const { characters } = useCharacters();

    const route = useRoute();
    const inputCharName = ref(route.params.characterName);

    const handleSearch = () => {
        navigateTo(`/characters/${inputCharName.value}`);
    }
</script>

<template>
    <div>
        <div class="flex flex-wrap justify-center items-center mt-5">
            <CharacterCard v-for="char in characters" :key="char.id" :character="char"/>
        </div>
    </div>
</template>