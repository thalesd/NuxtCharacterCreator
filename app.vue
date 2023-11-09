<template>
    <div>
        <!--NAVBAR-->
        <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 boder-b bg-white p-4 shadow-md">
            <a class="text-3xl font0mono" href="">CharacterCreator</a>
        </header>

        <!-- CHARACTER DETAIL PAGE -->
        <div class="mx-auto mt-16 max-w-7xl px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5 flex items-top">
            <div class="flex flex-col">
                <!-- CHARACTER FACE IMAGE -->
                <div class="shadow w-[150px] mr-10 mb-10 z-30 h-[150px]">
                    <div
                        class="border-4 border-stone-600 w-full h-full flex cursor-pointer bg-contain bg-[url('https://i.pinimg.com/736x/d1/73/49/d17349c94053fd3586f5baa0312df8b1.jpg')] rounded-full"
                    ></div>
                </div>
                <!-- CHARACTER FULL BODY IMAGE -->
                <div class="shadow w-[150px] mr-10 mb-10 z-30 h-[250px]">
                    <div
                        class="border-4 border-stone-600 w-full h-full flex cursor-pointer bg-contain bg-[url('https://i.imgur.com/4T7gI1C.jpeg')] rounded-xl"
                    ></div>
                </div>
            </div>
            <div
                class="font-mono flex flex-col bg-stone-400 shadow border-4 border-sky-700 h-full w-full p-5 rounded-xl"
            >
                <!-- CHARACTER INFO -->
                <h2 class="text-4xl text-center mb-1">Roronoa Zoro</h2>

                <hr class="border-b border-black shadow"/>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolore? Vitae quis rem tempora velit harum sunt architecto tenetur quia illum ipsum officia quisquam voluptas illo, voluptates exercitationem ut officiis.</p>
            </div>
        </div>
    </div>
</template>
