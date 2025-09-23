# Letters Generator App

<!-- Badges (auto-updated) -->
<p>
<a href="https://app.netlify.com/sites/letters-generator-app/deploys">
  <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/22b0a448-e825-4bd1-b9fa-6d7253863829/deploy-status" />
</a>
  <a href="https://github.com/gsemikozov/letters-generator-app/actions/workflows/deploy-storybook.yml"><img alt="Storybook Deploy" src="https://github.com/gsemikozov/letters-generator-app/actions/workflows/deploy-storybook.yml/badge.svg" /></a>
</p>

## Демо

Live Demo: https://letters-generator-app.netlify.app
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
- Создание сопроводительных писем по шаблону
- Сохранение писем в IndexedDB
- Баннер-цель на 5 писем
- Индикатор прогресса
- Копирование и удаление писем
- Адаптивный дизайн

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
- **Отдельный деплой**: Storybook можно развернуть независимо от основного приложения

### Компоненты в Storybook

- **Atoms**: Button, Input, Typography
- **Molecules**: Card, CopyButton, Container
- **Organisms**: ProgressIndicator, Logo
- **Icons**: PlusIcon, HomeIcon, CopyIcon, CheckIcon, RepeatIcon, TrashIcon, LoadingIcon
- **Layout**: Layout, Header

## TODO

- Добавить тесты (Vitest + React Testing Library)
- Тёмная тема
- Экспорт писем в PDF
- Шаблоны писем
- История изменений
- Доп. оптимизация загрузки шрифтов