<script setup>
import { ref } from 'vue'

const images = ref([
  {
    itemImageSrc: 'https://fakeimg.pl/640x640/',
    thumbnailImageSrc: 'https://fakeimg.pl/80x80/',
    alt: 'Description for Image 1',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://fakeimg.pl/640x640/ffff00',
    thumbnailImageSrc: 'https://fakeimg.pl/80x80/ffff00',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://fakeimg.pl/640x640/00cc99',
    thumbnailImageSrc: 'https://fakeimg.pl/80x80/00cc99',
    alt: 'Description for Image 3',
    title: 'Title 3'
  },
  {
    itemImageSrc: 'https://fakeimg.pl/640x640/D966EF',
    thumbnailImageSrc: 'https://fakeimg.pl/80x80/D966EF',
    alt: 'Description for Image 4',
    title: 'Title 4'
  },
  {
    itemImageSrc: 'https://fakeimg.pl/640x640/A5B4FC',
    thumbnailImageSrc: 'https://fakeimg.pl/80x80/A5B4FC',
    alt: 'Description for Image 5',
    title: 'Title 5'
  }
])
const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4
  },
  {
    breakpoint: '575px',
    numVisible: 3
  }
])
</script>

<template>
  <main class="p-6">
    <div class="mb-6">
      <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        containerStyle="max-width: 640px"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
        </template>
      </Galleria>
    </div>
    <div class="mb-6">
      <Image src="https://fakeimg.pl/240x240/A5B4FC" alt="fakeimg" preview />
    </div>
    <div class="mb-6">
      <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        containerStyle="max-width: 640px"
      >
        <template #item="slotProps">
          <Image
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            style="width: 100%"
            preview
          />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
        </template>
      </Galleria>
    </div>
    <div class="mb-6">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-4 lg:gap-2">
          <div class="font-bold text-4xl mb-4">側邊選單</div>
          <div class="lg:col-span-3">
            <div class="grid lg:grid-cols-2 lg:gap-4">
              <Galleria
                :value="images"
                :responsiveOptions="responsiveOptions"
                :numVisible="4"
                containerClass="mx-auto"
                containerStyle="max-width: 640px"
              >
                <template #item="slotProps">
                  <Image
                    :src="slotProps.item.itemImageSrc"
                    :alt="slotProps.item.alt"
                    style="width: 100%"
                    preview
                  />
                </template>
                <template #thumbnail="slotProps">
                  <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
                </template>
              </Galleria>
              <div class="flex flex-col justify-between py-4">
                <div>
                  <h1 class="font-bold text-4xl mb-4">深層保濕精華</h1>
                  <ul class="flex mb-4">
                    <li class="me-3"><Chip label="深層保濕系列" /></li>
                    <li><Chip label="精華液" /></li>
                  </ul>
                  <ul class="list-disc ps-6 mb-3 lg:mb-0">
                    <li class="mb-2">容量：30g</li>
                    <li class="mb-2">保存期限：3 年</li>
                    <li>
                      由 xxx
                      團隊精心研發，專研出亞洲女性膚質及各年齡層膚質所需，無論季節變化，一滴即可為久旱的肌膚解最滋潤的渴！
                    </li>
                  </ul>
                </div>
                <p class="text-4xl text-red-500 text-end">$ 1,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
