# Letters Generator App

<!-- Badges (auto-updated) -->
<p>
<a href="https://app.netlify.com/sites/letters-generator-app/deploys">
  <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/22b0a448-e825-4bd1-b9fa-6d7253863829/deploy-status" />
</a>
  <a href="https://github.com/gsemikozov/letters-generator-app/actions/workflows/deploy-storybook.yml"><img alt="Storybook Deploy" src="https://github.com/gsemikozov/letters-generator-app/actions/workflows/deploy-storybook.yml/badge.svg" /></a>
</p>

## 🚀 Демо

🌐 **Live Demo:** [Загружается...](https://letters-generator-app.netlify.app)
📚 **Storybook:** [Загружается...](https://gsemikozov.github.io/letters-generator-app)

Приложение для генерации сопроводительных писем с мотивацией создать минимум 5 писем. Современное веб-приложение с красивым UI, построенное по принципам Feature-Sliced Design.

## Технологии

- **React 18 + TypeScript** - Современный фреймворк с строгой типизацией
- **Vite** - Быстрый сборщик и dev-сервер
- **Biome** - Современный линтер и форматтер кода
- **Zustand** - Легковесный стейт-менеджер
- **IndexedDB** - Клиентское хранение данных
- **CSS Modules** - Изолированные стили компонентов
- **React Router DOM** - Маршрутизация
- **Storybook** - Документация и разработка UI компонентов
- **classnames** - Утилита для условного объединения CSS классов
- **zod** - Схема валидации с TypeScript-first подходом
- **react-hook-form** - Производительная библиотека для работы с формами
- **@hookform/resolvers** - Интеграция react-hook-form с различными валидаторами

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
- ✅ **Создание сопроводительных писем** - Генерация персонализированных писем по шаблону
- ✅ **Персистентное хранение** - Сохранение писем в IndexedDB
- ✅ **Мотивационная система** - Баннер с целью создания 5 писем
- ✅ **Прогресс-трекинг** - Визуальный индикатор прогресса
- ✅ **Управление письмами** - Копирование и удаление писем
- ✅ **Адаптивный дизайн** - Оптимизация для всех устройств

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

## Деплой

### CI/CD (автоматизация)

- Продакшен деплой на Netlify запускается при пуше в ветку `main` (GitHub Actions: `.github/workflows/deploy-netlify.yml`).
  - Требуются секреты: `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID` (настраиваются в Settings → Secrets → Actions).
- Storybook автоматически билдится и публикуется на GitHub Pages при пуше в `main` (`.github/workflows/deploy-storybook.yml`).
  - Публикация в ветку `gh-pages`. Включите Pages: Settings → Pages → Deploy from branch → `gh-pages` / root.

После первого успешного деплоя замените плейсхолдеры в бейджах и ссылках:

- Netlify status badge: `REPLACE_NETLIFY_SITE`, `REPLACE_BADGE_ID`
- GitHub ссылки: `REPLACE_OWNER/REPLACE_REPO`

### Ссылки

- Приложение (Netlify): https://REPLACE_NETLIFY_SITE.netlify.app
- Storybook (GitHub Pages): https://REPLACE_OWNER.github.io/REPLACE_REPO

## Особенности реализации

### Архитектура и код
- **🏗️ Feature-Sliced Design** - Четкая архитектура с разделением на слои
- **⚛️ Atomic Design** - Компоненты организованы по принципам атомарного дизайна
- **📦 Кастомный UI-kit** - Все компоненты созданы с нуля без внешних зависимостей
- **🎯 TypeScript** - Строгая типизация для всех компонентов и утилит
- **🔧 Typed Function Expressions** - Современный подход к типизации компонентов
- **📝 Zod + React Hook Form** - Современная валидация форм с TypeScript-first подходом

### Стилизация и дизайн
- **🎨 CSS Modules** - Изолированные стили для каждого компонента
- **🎨 CSS Variables** - Готовые переменные для темизации и глобальных настроек
- **📱 Responsive Design** - Адаптивный дизайн для всех устройств
- **🎨 Figma Integration** - Дизайн точно соответствует макетам

### Инструменты разработки
- **⚡ Biome** - Современный инструмент для линтинга и форматирования
- **📚 Storybook** - Полная документация UI компонентов
- **🔍 classnames** - Утилита для условного объединения CSS классов

### Хранение данных и состояние
- **💾 IndexedDB** - Клиентское хранение данных без серверной части
- **🔄 Zustand** - Легковесный стейт-менеджер
- **🔗 React Router** - Клиентская маршрутизация

## Структура данных

```typescript
interface Letter {
  id: string;
  jobTitle: string;
  company: string;
  skills: string;
  additionalDetails: string;
  generatedText: string;
  createdAt: string;
}
```

## Шаблон письма

```
Dear [Company] Team,

I am writing to express my interest in the [JobTitle] position.

My experience in the realm combined with my skills in [SkillsList] make me a strong candidate for this role.

[AdditionalDetails]

I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.
```

## Storybook

Проект включает полную документацию UI компонентов в Storybook:

- **Документация**: Все компоненты задокументированы с примерами использования
- **Интерактивные контролы**: Возможность тестировать различные варианты компонентов
- **Проверка доступности**: Автоматическая проверка ARIA-атрибутов
- **Темы**: Поддержка светлой и темной тем для тестирования
- **Отдельный деплой**: Storybook можно развернуть независимо от основного приложения

### Компоненты в Storybook

- **Atoms**: Button, Input, Typography
- **Molecules**: Card, CopyButton, Container
- **Organisms**: ProgressIndicator, Logo
- **Icons**: PlusIcon, HomeIcon, CopyIcon, CheckIcon, RepeatIcon, TrashIcon, LoadingIcon
- **Layout**: Layout, Header

### Запуск Storybook

```bash
npm run storybook
```

Storybook будет доступен по адресу: http://localhost:6006

## TODO

- можно добавить тесты (Jest/Vitest + React Testing Library)
- можно добавить темную тему
- можно добавить экспорт писем в PDF
- можно добавить шаблоны писем
- можно добавить историю изменений
- оптимизировать загрузку шрифтов, улучшить TTFB и CLS