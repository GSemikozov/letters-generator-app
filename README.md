# Letters Generator App

<!-- Badges (auto-updated) -->
<p>
<a href="https://app.netlify.com/sites/letters-generator-app/deploys">
  <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/22b0a448-e825-4bd1-b9fa-6d7253863829/deploy-status" />
</a>
  <a href="https://github.com/gsemikozov/letters-generator-app/actions/workflows/deploy-storybook.yml"><img alt="Storybook Deploy" src="https://github.com/gsemikozov/letters-generator-app/actions/workflows/deploy-storybook.yml/badge.svg" /></a>
</p>

## Демо

Demo: https://letters-generator-app.netlify.app
Storybook: https://gsemikozov.github.io/letters-generator-app

Приложение для генерации сопроводительных писем с мотивацией создать минимум 5 писем.

## Технологии

- **React 18 + TypeScript**
- **Vite**
- **Biome**
- **Zustand**
- **IndexedDB**
- **CSS Modules**
- **React Router DOM**
- **Storybook**
- **classnames**
- **zod**
- **react-hook-form**
- **@hookform/resolvers**

## Архитектура

Проект построен по принципам Feature-Sliced Design (FSD) с использованием Atomic Design:

```
src/
├── app/                    # Слой приложения
│   ├── config/            # Конфигурация и константы
│   ├── hooks/             # Глобальные хуки
│   ├── providers/         # Провайдеры контекста
│   └── ui/                # UI компоненты уровня приложения
│       ├── Header/        # Шапка приложения
│       └── Layout/        # Макет страниц
├── shared/                # Переиспользуемые модули
│   ├── ui/                # UI-kit (Atomic Design)
│   │   ├── Button/        # Атомы
│   │   ├── Input/
│   │   ├── Typography/
│   │   ├── Card/          # Молекулы
│   │   ├── CopyButton/
│   │   ├── ProgressIndicator/
│   │   ├── Container/     # Организмы
│   │   ├── Logo/
│   │   └── icons/         # Иконки как отдельные компоненты
│   ├── lib/               # Утилиты, типы, хуки
│   └── api/               # API слой (IndexedDB)
├── entities/              # Бизнес-сущности
│   └── Letter/
├── features/              # Функциональности
│   └── CreateLetter/
├── widgets/               # Виджеты
│   └── GoalBanner/
└── pages/                 # Страницы приложения
    ├── Dashboard/
    └── Form/
```

## Функциональность

### Основные возможности

- Создание сопроводительных писем с помощью AI (OpenAI API)
- Регенерация существующих писем с новыми данными
- Сохранение писем в IndexedDB
- Баннер-цель на 5 писем с индикатором прогресса
- Копирование и удаление писем
- Адаптивный дизайн с оптимизацией для мобильных устройств
- Динамический заголовок формы
- Валидация форм с помощью Zod
- Состояния загрузки с анимированным спиннером

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предварительный просмотр сборки
npm run preview

# Запуск Storybook
npm run storybook

# Сборка Storybook
npm run build-storybook
```

## AI Интеграция

Приложение поддерживает два режима генерации писем:

### Режим OpenAI (по умолчанию)

- Реальная генерация с помощью OpenAI API
- Динамический промпт на основе данных формы
- Настраивается в `src/app/config/aiConfig.ts`

### Режим Mock

- Симуляция AI с задержкой 2-3 секунды
- Используется для разработки и тестирования

### Настройка API ключа

1. **Создайте файл `.env` в корне проекта:**

```bash
cp env.example .env
```

2. **Добавьте ваш OpenAI API ключ в `.env`:**

```env
VITE_OPENAI_API_KEY=your_actual_openai_api_key_here
```

3. **Перезапустите приложение:**

```bash
npm run dev
```

### Конфигурация AI

```typescript
export const AI_CONFIG = {
  SERVICE_TYPE: 'openai' as 'openai' | 'mock',
  GENERATION_DELAY: { MIN: 2000, MAX: 3000 },
};
```

### Легко расширяется если надо подключить другие AI

## Storybook

Проект включает полную документацию UI компонентов в Storybook:

- **Документация**: Все компоненты задокументированы с примерами использования
- **Интерактивные контролы**: Возможность тестировать различные варианты компонентов
- **Отдельный деплой**: Storybook можно развернуть независимо от основного приложения

### Компоненты в Storybook

- **Atoms**: Button, Input, Textarea, Typography
- **Molecules**: Card, CopyButton, Container
- **Organisms**: ProgressIndicator, Logo
- **Icons**: PlusIcon, HomeIcon, CopyIcon, CheckIcon, RepeatIcon, TrashIcon, LoadingIcon
- **Layout**: Header (Layout удален из shared/ui)

## Дизайн-система

### Цветовая палитра

- Основана на дизайне из Figma
- Семантические цвета для фона, текста, границ
- Поддержка состояний (success, error, disabled)

### Типографика

- Шрифт: Fixel
- Адаптивные размеры на основе rem единиц

### Отступы

- Выстраиваем адаптивный дизайн на основе rem

### Компоненты

- Atomic Design принципы
- CSS Modules для изоляции стилей
- Состояния загрузки и интерактивности

## TODO

- Добавить тесты (Vitest + React Testing Library + Playwright)
- Тёмная тема
- Экспорт писем в PDF
- Превью из карты на Главной
- История изменений
- React transitions для плавных переходов
- Мелкие импрувы при переходах и обновлениях (страниц и стора)
- Оптимизация производительности
