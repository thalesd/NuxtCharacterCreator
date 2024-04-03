<script setup>
    const route = useRoute();
    const inputCharName = ref(route.params.characterName);

    const handleSearch = () => {
        navigateTo(`/characters/${inputCharName.value}`);
    }
</script>

<template>
    <div>
        <div class="flex flex-wrap justify-center items-center mt-5">
            <div class="border-4 border-amber-600 rounded-xl w-[200px] h-[100px] text-center p-1 mx-5 my-5">
                <p>Monkey D. Luffy</p>
            </div>
            <div class="border-4 border-amber-600 rounded-xl w-[200px] h-[100px] text-center p-1 mx-5 my-5">
                <p>Roronoa Zoro</p>
            </div>
            <div class="border-4 border-amber-600 rounded-xl w-[200px] h-[100px] text-center p-1 mx-5 my-5">
                <p>Nami</p>
            </div>
            <div class="border-4 border-amber-600 rounded-xl w-[200px] h-[100px] text-center p-1 mx-5 my-5">
                <p>Usopp</p>
            </div>
            <div class="border-4 border-amber-600 rounded-xl w-[200px] h-[100px] text-center p-1 mx-5 my-5">
                <p>Vinsmoke Sanji</p>
            </div>
            <div class="border-4 border-amber-600 rounded-xl w-[200px] h-[100px] text-center p-1 mx-5 my-5">
                <p>Tony Tony Chopper</p>
            </div>
            <div class="border-4 border-amber-600 rounded-xl w-[200px] h-[100px] text-center p-1 mx-5 my-5">
                <p>Vivi</p>
            </div>
            <div class="border-4 border-amber-600 rounded-xl w-[200px] h-[100px] text-center p-1 mx-5 my-5">
                <p>Robin</p>
            </div>
        </div>
    </div>
</template>