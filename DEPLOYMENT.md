# 🚀 Инструкция по настройке CI/CD

## 1. Подготовка репозитория

```bash
# Инициализация git (если еще не сделано)
git init
git add .
git commit -m "Initial commit"

# Подключение к GitHub репозиторию
git remote add origin https://github.com/YOUR_USERNAME/letters-generator-app.git
git branch -M main
git push -u origin main
```

## 2. Настройка Netlify

### 2.1. Создание сайта
1. Перейдите на [netlify.com](https://netlify.com) и войдите в аккаунт
2. Нажмите **"New site from Git"**
3. Выберите **GitHub** и найдите ваш репозиторий
4. Настройте сборку:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `20`

### 2.2. Получение токенов
1. **NETLIFY_AUTH_TOKEN:**
   - Перейдите в Netlify Dashboard
   - User settings → Applications → Personal access tokens
   - Создайте новый токен

2. **NETLIFY_SITE_ID:**
   - Перейдите в Site settings → General → Site details
   - Скопируйте Site ID

## 3. Настройка GitHub Secrets

1. Перейдите в ваш GitHub репозиторий
2. **Settings → Secrets and variables → Actions**
3. Добавьте следующие секреты:

| Secret Name | Описание | Где получить |
|-------------|----------|--------------|
| `NETLIFY_AUTH_TOKEN` | Токен для авторизации в Netlify | Netlify Dashboard → User settings |
| `NETLIFY_SITE_ID` | ID сайта в Netlify | Netlify Dashboard → Site settings |
| `GITHUB_TOKEN` | Токен GitHub (создается автоматически) | GitHub Actions (автоматически) |

## 4. Настройка GitHub Pages

1. Перейдите в **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` (создается автоматически)
4. **Folder:** `/ (root)`

## 5. Обновление README

После настройки замените плейсхолдеры в README.md:

```markdown
<!-- Замените эти значения: -->
REPLACE_NETLIFY_SITE → ваш-site-id
REPLACE_BADGE_ID → ваш-badge-id
REPLACE_OWNER → ваш-github-username
REPLACE_REPO → letters-generator-app
```

## 6. Тестирование

1. **Сделайте коммит и пуш:**
   ```bash
   git add .
   git commit -m "Add CI/CD workflows"
   git push origin main
   ```

2. **Проверьте GitHub Actions:**
   - Перейдите в **Actions** в вашем репозитории
   - Убедитесь, что workflows запустились успешно

3. **Проверьте деплои:**
   - **Netlify:** Ваш сайт должен быть доступен по URL
   - **GitHub Pages:** Storybook должен быть доступен по `https://YOUR_USERNAME.github.io/letters-generator-app`

## 7. Автоматическое обновление ссылок

Workflow `update-readme.yml` автоматически обновит ссылки в README после успешного деплоя.

## 🔧 Troubleshooting

### Проблема: Netlify деплой не работает
- Проверьте правильность `NETLIFY_AUTH_TOKEN` и `NETLIFY_SITE_ID`
- Убедитесь, что токен имеет права на создание сайтов

### Проблема: GitHub Pages не работает
- Проверьте, что GitHub Pages включен в Settings
- Убедитесь, что workflow имеет права на запись в Pages

### Проблема: Storybook не собирается
- Проверьте, что все зависимости установлены
- Убедитесь, что `npm run build-storybook` работает локально

## 📊 Мониторинг

- **Netlify:** [app.netlify.com](https://app.netlify.com) → ваш сайт
- **GitHub Actions:** Ваш репозиторий → Actions
- **GitHub Pages:** Settings → Pages

## 🎯 Результат

После настройки у вас будет:
- ✅ Автоматический деплой на Netlify при каждом push в main
- ✅ Автоматический деплой Storybook на GitHub Pages
- ✅ Автоматическое обновление ссылок в README
- ✅ Бейджи статуса деплоя
- ✅ Полная автоматизация CI/CD
