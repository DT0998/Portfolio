<script setup lang="ts">
import TitleBinary from '@/components/TitleBinary/index.vue';
import Notch from '@/components/Notch/index.vue';
import { useDark } from '@vueuse/core';
import { reactive, ref } from 'vue';
import { variables } from '@/assets/style/variables';
import HightLightLine from '@/components/HightlightLine/index.vue';
import * as yup from 'yup';
import { Form, Field, type SubmissionHandler } from 'vee-validate';
const isDark = useDark();

interface IContactFormFocusRef {
    email: boolean;
    message: boolean;
}

interface IContactFormModel {
    email: string;
    message: string;
}

const isFocusContractForm = ref<IContactFormFocusRef>({
    email: false,
    message: false,
});


// dark theme style button
const darkThemeStyleBtn = reactive({
    background: `${variables.$mainColor}`,
})

// white theme style button
const lightThemeStyleBtn = reactive({
    background: `${variables.$colorMixLight}`,
})

// validate contact form
const contactFormSchema = yup.object({
    email: yup.string().required().email(),
    message: yup.string().required(),
});

// submit contact form
const handleSubmit = (values: IContactFormModel) => {
    console.log('submit', values);
}
</script>
<template>
    <div class="flex justify-center flex-col items-center">
        <div class="w-[480px] py-[64px]">
            <h1>
                <TitleBinary title="Say hello" extraClass="text-[2rem] font-bold" />
            </h1>
            <Notch extraClassLine="max-w-full" extraClassNotch="max-w-[90px]"
                extraClassContainer="mt-[30px] mb-[40px] px-[10px]" />
            <!-- contact form -->
            <Form @submit="handleSubmit as SubmissionHandler<IContactFormModel>" :validation-schema="contactFormSchema">
                <div class="flex flex-col">
                    <Field name="email" v-slot="{ field, errorMessage }">
                        <!-- email -->
                        <div class="overflow-hidden">
                            <div class="relative z-0 mt-[12px]">
                                <input v-bind="field" type="text" id="email"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " :class="{ 'text-white': isDark, 'text-black': !isDark }"
                                    @focusin="isFocusContractForm.email = true"
                                    @focusout="isFocusContractForm.email = false" />
                                <HightLightLine :isDark="isDark"
                                    :isActive="isFocusContractForm.email || field.value" />
                                <label for="email"
                                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto text-[16px]">Your
                                    email</label>
                            </div>
                            <!-- error email-->
                            <div class="pt-[8px] text-red-600 flex" v-if="errorMessage">
                                <v-icon name="co-warning" width="24" height="24" class="mr-[4px] btn-icon" />
                                <span>{{ errorMessage }}</span>
                            </div>
                        </div>
                    </Field>
                    <Field name="message" v-slot="{ field, errorMessage }">
                        <!-- message -->
                        <div class="overflow-hidden mt-[10px]">
                            <div class="relative z-0 mt-[32px]">
                                <textarea v-bind="field" type="text" id="message"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " :class="{ 'text-white': isDark, 'text-black': !isDark }"
                                    @focusin="isFocusContractForm.message = true"
                                    @focusout="isFocusContractForm.message = false" />
                                <HightLightLine :isDark="isDark"
                                    :isActive="isFocusContractForm.message || field?.value" />
                                <label for="message"
                                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 -top-1 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto text-[16px]">Message</label>
                            </div>
                            <!-- error message-->
                            <div class="pt-[8px] text-red-600 flex" v-if="errorMessage">
                                <v-icon name="co-warning" width="24" height="24" class="mr-[4px] btn-icon" />
                                <span>{{ errorMessage }}</span>
                            </div>
                        </div>
                    </Field>
                </div>
                <button class="flex items-center w-fit py-[10px] px-[24px] btn-viewproject cursor-pointer mt-[32px]"
                    :style="[isDark ? darkThemeStyleBtn : lightThemeStyleBtn]"
                    :class="{ 'text-black': isDark, 'text-white': !isDark }" type="submit">
                    <v-icon name="io-send" width="24" height="24" class="mr-[4px] btn-icon" />
                    <span class="text-[18px]">
                        Send message
                    </span>
                </button>
            </Form>
        </div>
    </div>
</template>