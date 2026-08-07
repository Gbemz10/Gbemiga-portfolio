# Oluwagbemiga Shoga — Portfolio (Flutter Web)

A real Flutter Web project built on the **perfect-ui-flutter** design system
(Plus Jakarta Sans, indigo/violet brand color, the full component kit —
copied into `lib/design_system/`).

This zip contains the Dart source (`lib/`) and `pubspec.yaml`, but not the
generated native platform folders (`web/`, `android/`, `ios/`, etc.) —
those are large, SDK-version-specific, and better generated fresh on your
machine than shipped pre-built. Setup below takes about 2 minutes.

## Setup

You need the [Flutter SDK](https://docs.flutter.dev/get-started/install) installed.

1. **Generate platform folders in a throwaway project:**
   ```bash
   flutter create temp_shell
   ```
2. **Copy the platform folders it created into this project** (copy `web/`
   and any of `android/`, `ios/`, `macos/`, `linux/`, `windows/` you want —
   `web/` is the one that matters here). Do **not** copy `temp_shell`'s
   `lib/`, `pubspec.yaml`, or `test/` — this project already has its own.
   ```bash
   cp -r temp_shell/web ./
   rm -rf temp_shell
   ```
3. **Install dependencies:**
   ```bash
   flutter pub get
   ```
4. **Run it:**
   ```bash
   flutter run -d chrome
   ```
   Or build a static production bundle:
   ```bash
   flutter build web
   # output lands in build/web/ — deploy that folder anywhere
   # (GitHub Pages, Vercel, Netlify, Firebase Hosting, etc.)
   ```

## Adding real screenshots

Kolo already has real screenshots wired in (`assets/screenshots/kolo/`).
For NairaT, SplitNaija, and ModelMe, each currently shows a dashed
placeholder frame instead. To swap in the real thing:

1. Drop your screenshots into a new folder, e.g. `assets/screenshots/nairat/`.
2. Register that folder in `pubspec.yaml` under `flutter: assets:`:
   ```yaml
   flutter:
     assets:
       - assets/screenshots/kolo/
       - assets/screenshots/nairat/
   ```
3. In `lib/data/projects_data.dart`, replace the `null` entries in that
   project's `screenshotAssets` list with the asset paths, e.g.:
   ```dart
   screenshotAssets: [
     'assets/screenshots/nairat/splash.png',
     'assets/screenshots/nairat/home.png',
   ],
   ```
4. Run `flutter pub get` again and the real screenshots will render in the
   same phone-frame styling the placeholders use.

## Editing content

Everything text-based (bio, project descriptions, tech stack, links,
contact info) lives in:

- `lib/data/projects_data.dart` — all four project cards
- `lib/widgets/about_section.dart` — bio + skills list
- `lib/widgets/contact_section.dart` — email/phone/GitHub/LinkedIn
- `lib/widgets/hero_section.dart` — headline + tagline

No UI code needs touching to update any of that.

## Structure

```
lib/
  main.dart                  — app entry point
  design_system/             — perfect-ui-flutter kit (theme + components)
  data/                      — project content (project.dart, projects_data.dart)
  screens/portfolio_page.dart — page shell, scroll-to-section wiring
  widgets/                   — nav bar, hero, about, projects, contact, footer,
                                project card, screenshot frame/placeholder
assets/screenshots/kolo/     — real Kolo screenshots
```
