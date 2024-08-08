<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const menuList = ref([
    {
        title: 'Header I',
        value: '0',
        items: [
            {
                name: 'page1',
                path: '/accordion/page1'
            }
        ]
    },
    {
        title: 'Header II',
        value: '1',
        items: [
            {
                name: 'page2',
                path: '/accordion/page2'
            }
        ]
    }
])

const panelValue = ref('0');
const checkActiveRoute = (menuroute, value) => {
    if (route.fullPath === menuroute.path) {
        panelValue.value = value; // 開啟該主選單
    }
    return route.fullPath === menuroute.path;
}
</script>
    
<template>
    <main class="bg-surface-200 min-h-screen p-6">
        <div class="grid grid-cols-6 gap-4">
            <div class="col-span-2">
                <Accordion :value="panelValue">
                    <AccordionPanel :value="menu.value" v-for="menu in menuList" :key="menu">
                        <AccordionHeader>{{ menu.title }}</AccordionHeader>
                        <AccordionContent>
                            <router-link v-for="item in menu.items" :key="item" :to="item.path" :class="{ 'text-primary-500': checkActiveRoute(item, menu.value) }">{{ item.name }}</router-link>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
            <div class="col-span-4">
                <Card>
                    <template #content>
                        <RouterView></RouterView>
                    </template>
                </Card>
            </div>
        </div>
    </main>
</template>