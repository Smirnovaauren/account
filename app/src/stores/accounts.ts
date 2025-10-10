export type AccountType = 'LDAP' | 'Локальная'

export interface AccountForm {
    id: string
    label: string
    type: AccountType | null
    login: string
    password: string
}

// генерим случайный id
const createAccountId = () => `${Date.now()}-${Math.random().toString(16).slice(2, 10)}`

const createEmptyAccount = (): AccountForm => ({
    id: createAccountId(),
    label: '',
    type: null,
    login: '',
    password: '',
})


export const useAccountsStore = defineStore('accounts', () => {
    const accounts = ref<AccountForm[]>([])

    // добавляем новый аккаунт
    const addAccount = () => {
        accounts.value.push(createEmptyAccount())
    }

    // удаляем аккаунт
    const removeAccount = (id: AccountForm['id']) => {
        accounts.value = accounts.value.filter((account) => account.id !== id)
    }

    return {
        accounts,
        addAccount,
        removeAccount,
    }
})