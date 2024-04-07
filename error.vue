<script setup>
    const error = useError();

    const handleGoBack = () => {
        clearError({
            redirect: "/"
        });
    }
</script>

<template>
    <div class="flex h-screen justify-center items-center flex-col">
        <h1 class="text-9xl">{{error.statusCode}}</h1>
        <p class="mt-7 text-4xl">{{error.message}}</p>
        <button class="bg-black text-white px-4 py-1 mt-2 rounded-lg"
            @click="handleGoBack">Go Back</button>
    </div>
</template>