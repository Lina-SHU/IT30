<script setup>
import { ref } from 'vue';
const value = ref(35);
const switchValue = ref('indeterminate');
setTimeout(() => {
    switchValue.value = 'determinate';
}, 2000);
</script>

<template>
    <main class="p-6">
        <!-- ProgressBar -->
        <div class="grid grid-cols-4 gap-4 mb-6">
            <div>
                <ProgressBar :value="value"></ProgressBar>
            </div>
            <div>
                <ProgressBar v-if="switchValue === 'indeterminate'" :mode="switchValue" style="height: 6px"></ProgressBar>
            </div>
        </div>
        <!-- Chips -->
        <div class="mb-6">
            <div class="flex space-x-4">
                <Chip label="保濕" />
                <Chip label="抗皺" />
                <Chip label="美白" removable />
                <Chip label="Apple" icon="pi pi-apple" />
                <Chip label="Facebook" icon="pi pi-facebook" removable />
                <Chip label="綠標" image="https://fakeimg.pl/10x10/00cc99" />
                <Chip label="紅標" image="https://fakeimg.pl/10x10/ff0000" />
            </div>
        </div>
        <!-- Badge -->
        <div class="mb-6">
            <div class="flex space-x-4 items-center">
                <Badge value="2"></Badge>
                <Badge value="4" severity="info"></Badge>
                <Badge value="6" size="large" severity="warn"></Badge>
                <Badge value="8" size="xlarge" severity="success"></Badge>
            </div>
        </div>
        <div class="mb-6">
            <div class="card flex flex-wrap justify-center gap-6">
                <OverlayBadge value="2" severity="danger">
                    <i class="pi pi-bell text-yellow-400" style="font-size: 2rem" />
                </OverlayBadge>
                <OverlayBadge value="3" severity="danger">
                    <i class="pi pi-shopping-cart" style="font-size: 2rem" />
                </OverlayBadge>
            </div>
        </div>
        <!-- ScrollTop -->
        <div class="longContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi soluta, alias neque beatae eaque corporis itaque illo eveniet rem perferendis blanditiis consequuntur pariatur, et ut eius sint nisi! Libero quos molestiae ad placeat nobis iusto. Ex quisquam recusandae dignissimos laudantium quae. Sunt natus, facilis et, dicta exercitationem accusamus quae, explicabo tenetur iste eius odio quod doloremque vel repellat accusantium inventore corporis? Pariatur molestias consequuntur odio obcaecati doloribus incidunt animi minus sapiente iure quae assumenda sequi nostrum temporibus veniam, ratione error. Quibusdam qui eius perferendis facere magnam iure voluptates nesciunt! Quam similique a minima eaque aliquid, quaerat corporis quidem esse!
            <div class="mt-96">

                <div v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000">
                    <span class="text-3xl font-bold">fade-in</span>
                </div>

                <div v-animateonscroll="{ enterClass: 'animate-fadeinright', leaveClass: 'animate-fadeoutright' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
                    <span class="text-3xl font-bold">fade-right</span>
                </div>

                <div v-animateonscroll="{ enterClass: 'animate-zoomin', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000">
                    <span class="text-3xl font-bold">zoom</span>
                </div>

                <div v-animateonscroll="{ enterClass: 'animate-flipleft', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
                    <span class="text-3xl font-bold">flip-left</span>
                </div>
            </div>
        </div>
        <div class="card flex justify-center mb-6">
            <ScrollPanel style="width: 250px; height: 200px">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
                    elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
                    feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
                    dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
                    Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
                </p>
                <ScrollTop target="parent" :threshold="100" icon="pi pi-arrow-up" :buttonProps="{ severity: 'info', raised: true, rounded: true }" />
            </ScrollPanel>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.longContent {
    height: 200vh;
}
</style>