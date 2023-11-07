<template>
    <div>
        <!--NAVBAR-->
        <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 boder-b bg-white p-4 shadow-md">
            <a class="text-3xl font0mono" href="">CharacterCreator</a>
        </header>

        <!-- CHARACTER PAGE -->
        <div class="mx-auto mt-16 max-w-7xl px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5 flex items-top">
            <div class="flex flex-col">
                <!-- CHARACTER FACE IMAGE -->
                <div class="shadow border w-[150px] mr-10 mb-10 z-30 h-[150px]">
                    <div
                        class="p-2 w-full h-full flex cursor-pointer bg-contain bg-[url('https://i.pinimg.com/736x/d1/73/49/d17349c94053fd3586f5baa0312df8b1.jpg')]"
                    ></div>
                </div>
                <!-- CHARACTER FULL BODY IMAGE -->
                <div class="shadow border w-[150px] mr-10 mb-10 z-30 h-[250px]">
                    <div
                        class="p-2 w-full h-full flex cursor-pointer bg-contain bg-[url('https://i.imgur.com/4T7gI1C.jpeg')]"
                    ></div>
                </div>
            </div>
            <div class="font-mono flex flex-col bg-stone-400 shadow border h-full w-full p-5">
                <!-- CHARACTER INFO -->
                <h2 class="text-4xl text-center mb-1">Character Information</h2>

                <hr class="border-b border-black shadow"/>

                <label for="character-name">Name</label>
                <input class="bg-inherit focus:outline-none ml-3" type="text" name="character-name" id="character-name" value="Roronoa Zoro"/>

                <label for="character-age">Age</label>
                <input class="bg-inherit focus:outline-none ml-3" type="number" name="character-age" id="character-age" value="22"/>

                <label class="" for="character-backstory">Backstory</label>
                <textarea class="bg-inherit focus:outline-none ml-3" rows="10" name="character-backstory" id="character-backstory">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis consectetur dicta quos beatae ad eveniet laborum nobis sit quia, illo exercitationem odio? Amet iure illo minus hic quod tempore?</textarea>

                <button class="text-lg rounded bg-sky-500 mx-auto px-2 text-white">Create</button>
            </div>
        </div>
    </div>
</template>
