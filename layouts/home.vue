<template>
    <div>
        <NavBar />
        <div class="relative h-screen w-full bg-no-repeat bg-cover bg-bottom bg-[url('https://i.ytimg.com/vi/cCWiJGB9MxY/maxresdefault.jpg')]">
            <div class="z-10 absolute w-full h-full flex flex-col justify-around items-around">
                <slot/>
            </div>
            <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
        </div>
    </div>
</template>