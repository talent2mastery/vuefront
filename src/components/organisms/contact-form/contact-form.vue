<template>
  <vf-o-form @submit="onSubmit">
    <template #title>{{$t('elements.common.contact.titleText')}}</template>
    <template #sub-title>{{$t('elements.common.contact.subTitleText')}}</template>

    <vf-m-field :state="$v.form.name.$dirty ? !$v.form.name.$error : null" id="input-name">
      <template #default="data">
        <vf-a-input
          v-bind="data"
          v-model="form.name"
          :placeholder="$t('elements.common.contact.namePlaceholder')"
          size="lg"
          trim
        />
      </template>
      <template #error>{{$t('elements.common.contact.nameError')}}</template>
    </vf-m-field>

    <vf-m-field :state="$v.form.email.$dirty ? !$v.form.email.$error : null" id="input-email">
      <template #default="data">
        <vf-a-input
          v-bind="data"
          v-model="form.email"
          :placeholder="$t('elements.common.contact.emailPlaceholder')"
          size="lg"
          trim
        />
      </template>
      <template #error>{{$t('elements.common.contact.emailError')}}</template>
    </vf-m-field>

    <vf-m-field :state="$v.form.message.$dirty ? !$v.form.message.$error : null" id="input-message">
      <template #default="data">
        <vf-a-textarea
          v-bind="data"
          v-model="form.message"
          :placeholder="$t('elements.common.contact.messagePlaceholder')"
          size="lg"
          trim
        />
      </template>
      <template #error>{{$t('elements.common.contact.messageError')}}</template>
    </vf-m-field>

    <template #button>{{$t('elements.common.contact.buttonSend')}}</template>
  </vf-o-form>
</template>
<script>
import { validationMixin } from "vuelidate";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import maxLength from "vuelidate/lib/validators/maxLength";
import email from "vuelidate/lib/validators/email";
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        message: null
      }
    };
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(32)
      },
      email: {
        required,
        email
      },
      message: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(3000)
      }
    }
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();

      if (!this.$v.form.$invalid) {
        const status = await this.$store.dispatch(
          "common/contact/send",
          this.form
        );
        if (status) {
          this.form.email = null;
          this.form.name = null;
          this.form.message = null;

          this.$nextTick(() => {
            this.$v.$reset();
          });
        }
      }
    }
  }
};
</script>