<script setup>
import { useForm } from 'vee-validate';

const { handleSubmit, defineField, errors } = useForm({
    initialValues: {
        email: '',
        pwd: ''
    },
    validationSchema: {
        email: {
            required: true,
            email: true
        },
        pwd: {
            required: true,
            min: 8
        }
    }
});

const [email, emailProps] = defineField('email');
const [pwd, pwdProps] = defineField('pwd');

// 登入
const onSubmit = handleSubmit(async (values, { resetForm }) => {
    console.log(values);
    resetForm();
});
</script>

<template>
    <main class="p-6">
        <form>
            <div class="grid grid-cols-4 gap-4">
                <form>
                    <label for="email" class="block text-surface-900 dark:text-surface-0 text-lg font-medium mb-1">帳號</label>
                    <InputText
                        id="email"
                        v-bind="emailProps"
                        v-model.trim="email"
                        type="text"
                        placeholder="請輸入帳號"
                        class="py-2 mb-1"
                        :invalid="!!errors?.['email']"
                        :class="{ 'p-invalid': !!errors['email'] }"
                        fluid
                    />
                    <span class="block text-red-500 mb-4">{{ errors?.['email'] }}</span>

                    <label for="pwd" class="block text-surface-900 dark:text-surface-0 font-medium text-lg mb-1">密碼</label>
                    <Password
                        inputId="pwd"
                        v-bind="pwdProps"
                        v-model="pwd"
                        placeholder="請輸入密碼"
                        :toggleMask="true"
                        :feedback="false"
                        class="py-2 mb-1"
                        :inputProps="{ autocomplete: true }"
                        :invalid="!!errors?.['pwd']"
                        :class="{ 'p-invalid': !!errors['pwd'] }"
                        fluid
                    />
                    <span class="block text-red-500 mb-6">{{ errors?.['pwd'] }}</span>

                    <Button label="登入" class="py-2" @click.prevent="onSubmit" fluid />
                </form>
            </div>
        </form>
    </main>
</template>