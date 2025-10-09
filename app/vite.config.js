import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'], // Авто-импорт из 'vue': ref, reactive, computed, onMounted и т.д. — писать import больше не надо.
      resolvers: [NaiveUiResolver()], // Плюс подтянет useMessage/useDialog/useNotification/useLoadingBar из Naive UI по мере использования.
      dts: 'src/auto-imports.d.ts', // Генерит .d.ts с типами для IDE, чтобы подсказки работали и ошибок не было.
    }),
    Components({
      resolvers: [NaiveUiResolver()], // Встречает <n-button/> в шаблоне — сам добавляет импорт NButton из 'naive-ui'.
      dts: 'src/components.d.ts', // Генерит типы для авто-зарегистрированных компонентов.
    }),
  ],
})
