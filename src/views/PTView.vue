<script setup>
import { ref } from 'vue';

const panelPt = ref({
    hooks: {
        onMounted: () => {
            //panel mounted
            console.log('onMounted!')
        },
        onUnmounted: () => {
            //panel unmounted
            console.log('onUnMounted!')
        }
    }
});
</script>

<template>
  <main class="p-6">
    <Panel header="Header" toggleable
        class="mb-3"
        :pt="{
            header: (options) => ({
                // options 提供 d_collapsed 判斷該 Panel 是否為收合狀態(state)
                id: 'panelHeader',
                style: {
                    'user-select': 'none'
                },
                class: [
                    'border-rose-100',
                    {
                        'bg-rose-400 text-rose-100': options.state.d_collapsed, // 收合
                        'text-rose-700 bg-rose-100': !options.state.d_collapsed // 展開
                    }
                ]
            }),
            title: 'text-xl',  
            content: { class: 'text-lg text-gray-400' },
        }"
    >
        <p class="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
        </p>
    </Panel>
    <Panel header="Header" toggleable
        class="mb-3"
        :pt="{
            root: {
                class: 'border border-dashed border-2'
            },
            header: {
                id: 'headerId',
                'data-header-info': 'headerInfo',
                class: 'text-rose-700 bg-rose-100 text-xl'
            }
        }"
    >
        <p class="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
        </p>
    </Panel>
    <Panel header="Header" toggleable
        pt:root:class="border border-dashed border-2"
        pt:header:id="headerId"
        pt:header:data-header-info="headerInfo"
        pt:header:class="text-rose-700 bg-rose-100 text-xl"
    >
        <p class="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
        </p>
    </Panel>

    <div class="mt-3">
        <Button label="Home" icon="pi pi-home" class="me-3" :pt="panelPt" />
        <Button label="Check" icon="pi pi-check" severity="info" />
    </div>
  </main>
</template>