<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAccountsStore } from '@/stores/accounts'
</script>

<template>
  <n-card class="account-card" size="large">
    <template #header>
      <div class="account-card__header">
        <h1 class="account-card__title">Учетные записи</h1>
      </div>
    </template>
      <section
          v-for="(account, index) in accounts"
          :key="account.id"
          class="account-card__item"
      >
        <header class="account-item__header">
        <div class="account-item__title">
          <span class="account-item__index">{{ index + 1 }}.</span>
          <span>Учетная запись</span>
        </div>
        <n-button type="error" quaternary circle>
          <span aria-hidden="true" class="account-card__remove-icon">×</span>
        </n-button>
      </header>

        <div class="account-item__body">
        <n-form label-placement="top" :show-require-mark="false">
          <div class="account-item__grid">
            <n-form-item
                label="Метка"
            >
              <n-input
                  placeholder="например: основная; админ"
                  maxlength="50"
                  show-count
              />
            </n-form-item>

            <n-form-item
                label="Тип записи *"
            >
              <n-select
                  placeholder="Выберите тип"
              />
            </n-form-item>

            <n-form-item
                label="Логин *"
            >
              <n-input
                  placeholder="Введите логин"
                  maxlength="100"
              />
            </n-form-item>

            <n-form-item
                label="Пароль *"
            >
              <n-input
                  type="password"
                  placeholder="Введите пароль"
                  maxlength="100"
              />
            </n-form-item>
          </div>
        </n-form>
      </div>
      </section>
  </n-card>
</template>

<style scoped>

</style>
