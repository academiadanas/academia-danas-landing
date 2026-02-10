# Academia Danas - Landing Page

Landing page profesional para Academia Danas, construida con **Astro + Tailwind CSS + TypeScript** y optimizada para deploy en **Vercel**.

## 🚀 Stack

| Tecnología | Propósito |
|---|---|
| [Astro 5](https://astro.build) | Framework estático (0 JS por defecto) |
| [Tailwind CSS 3](https://tailwindcss.com) | Utilidades CSS |
| [TypeScript](https://typescriptlang.org) | Tipado estático |
| [Vercel](https://vercel.com) | Hosting y CDN |

## 📁 Estructura del Proyecto

```
academia-danas-astro/
├── public/
│   └── img/                  # ⚠️ Copia tus imágenes aquí
├── src/
│   ├── components/
│   │   ├── Navbar.astro      # Navegación + menú móvil
│   │   ├── Hero.astro        # Slider de 3 slides
│   │   ├── Problems.astro    # Sección "¿Te identificas?"
│   │   ├── Benefits.astro    # Sección beneficios
│   │   ├── Instructor.astro  # Perfil de Dalila Pelayo
│   │   ├── Courses.astro     # Cursos con filtros
│   │   ├── CourseCard.astro  # Card reutilizable
│   │   ├── Testimonials.astro
│   │   ├── FAQ.astro
│   │   ├── CTA.astro
│   │   ├── Footer.astro
│   │   ├── WhatsAppButton.astro
│   │   └── ScrollAnimations.astro
│   ├── layouts/
│   │   └── Layout.astro      # Layout base (head, meta, fonts)
│   ├── pages/
│   │   └── index.astro       # Página principal
│   └── styles/
│       └── global.css         # Estilos globales + Tailwind
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── vercel.json
└── package.json
```

## 🛠️ Setup Local

```bash
# 1. Instala dependencias
npm install

# 2. Copia tus imágenes a public/img/
# (ver public/img/README.md para la lista completa)

# 3. Inicia el servidor de desarrollo
npm run dev
# → http://localhost:4321

# 4. Build de producción
npm run build

# 5. Preview del build
npm run preview
```

## 🚢 Deploy a Vercel

### Opción A: Desde GitHub (Recomendado)

1. Sube el proyecto a un repo de GitHub
2. Ve a [vercel.com/new](https://vercel.com/new)
3. Importa tu repositorio
4. Vercel detecta automáticamente que es Astro
5. Click en **Deploy** ✅

### Opción B: CLI de Vercel

```bash
npm i -g vercel
vercel
# Sigue las instrucciones interactivas
```

### Dominio personalizado

En el dashboard de Vercel → Settings → Domains → Agrega `academiadanas.com` o el subdominio que prefieras. Si tu dominio está en Hostinger, solo necesitas apuntar los DNS a Vercel.

## 🔄 Migración desde tu HTML actual

### Lo que ya está migrado:

- ✅ Todo el contenido y estructura de secciones
- ✅ Hero slider con 3 slides + autoplay
- ✅ Filtro de cursos (Cosmetología / Micropigmentación)
- ✅ Menú móvil con animación
- ✅ Scroll animations (IntersectionObserver)
- ✅ Botón flotante de WhatsApp
- ✅ Todas las secciones: problemas, beneficios, instructora, cursos, testimonios, FAQ, CTA
- ✅ Footer completo con redes sociales
- ✅ Google Tag Manager
- ✅ Meta tags SEO + Open Graph + Twitter Cards
- ✅ Tailwind config idéntico (colores, fuentes, sombras)

### Lo que debes hacer:

1. **Copiar imágenes** de `assets/img/` → `public/img/`
2. **Verificar datos de cursos** en `src/components/Courses.astro` (precios, fechas, kits)
3. **Opcional**: Descomentar y agregar el modal de video promo si lo necesitas

## ⚡ Ventajas vs tu HTML actual

| Antes (HTML + CDN Tailwind) | Ahora (Astro) |
|---|---|
| 3,265 líneas en 1 archivo | Componentes modulares |
| Tailwind CDN (~300KB JS) | Tailwind compilado (~15KB CSS) |
| Sin optimización de imágenes | Astro Image optimization |
| Sin minificación | Build optimizado automático |
| Deploy manual a Hostinger | Deploy automático con Vercel |
| Sin TypeScript | TypeScript para datos tipados |

## 📝 Notas

- Los scripts usan `is:inline` solo para GTM (necesita ejecutarse antes del render)
- Los demás scripts de componentes se procesan y optimizan por Astro automáticamente
- El proyecto genera HTML 100% estático — perfecto para SEO y performance
