# React Suspense & Error Boundary Demo

Цей проект демонструє використання React Suspense та Error Boundary для асинхронного отримання даних з Promise, а також обробку помилок при завантаженні.

## Основні можливості

- **Асинхронне отримання даних**: Симуляція запиту користувача через Promise з затримкою.
- **React Suspense**: Відображення fallback-компонента під час завантаження даних.
- **Error Boundary**: Відображення повідомлення про помилку, якщо Promise завершується з помилкою.
- **TypeScript**: Типізація компонентів та даних користувача.

## Структура

- `src/components/MessageComponent.tsx` — компонент для відображення даних користувача, використовує хук `use()` (React Server Components) або стандартний підхід з useEffect/useState.
- `src/components/ErrorBoundary.tsx` — функціональний Error Boundary на основі бібліотеки `react-error-boundary`.
- `src/App.jsx` — приклад використання Suspense та Error Boundary для двох сценаріїв: успішне та неуспішне завантаження користувача.

## Запуск

1. Встановіть залежності:

   ```
   npm install
   ```

2. Запустіть проект:

   ```
   npm start
   ```

## Приклад використання

```jsx
<ErrorBoundary
  fallbackRender={({ error }) => (
    <div>
      Сталася помилка при завантаженні користувача.<br />
      <b>{error.message}</b>
    </div>
  )}
>
  <Suspense fallback={<div>Завантаження...</div>}>
    <MessageComponent promise={fetchUser()} />
  </Suspense>
</ErrorBoundary>
```

## Примітки

- Для роботи хуку `use()` потрібна підтримка React Server Components (наприклад, Next.js з app router).
- Для клієнтських застосунків використовуйте useEffect/useState для асинхронного отримання даних.

---

_Автор: Pushkina Anastasiia

