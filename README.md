# keatonzelazny.com

Static portfolio site. No build step, no dependencies.

## Deploying to GitHub Pages

1. Create a public repo named `keatonzelazny.github.io`.
2. Push these files to the `main` branch.
3. Settings -> Pages -> Source: `main` / root.
4. Settings -> Pages -> Custom domain: enter `keatonzelazny.com`, tick "Enforce HTTPS".

## DNS (at your registrar)

Four A records for the apex domain:

    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153

One CNAME for www -> `keatonzelazny.github.io`

Propagation is usually under an hour. The HTTPS certificate is issued by GitHub
automatically once DNS resolves — if "Enforce HTTPS" is greyed out, DNS hasn't
propagated yet.

## Adding a project

Everything lives in `assets/main.js`. Copy an object in the `PROJECTS` array:

    {
      title: 'Thing I Built',
      date: 'Fall 2026',
      tags: ['hardware'],          // hardware | firmware | software
      glyph: 'square',             // key from the GLYPH object above
      image: 'assets/img/thing.jpg',
      stack: 'C++ · some board',
      blurb: 'Two sentences.',
      href: 'projects/thing.html'  // optional — omit for blurb-only
    }

## Images

Drop files in `assets/img/` matching the names in `main.js`. If a file isn't
there, the card falls back to its signal glyph — so the site never shows a
broken image. Cards crop to 132px tall, so landscape shots work best.

Expected filenames:

    jaeger.jpg  riscv.jpg  shell.jpg  recipebook.jpg
    ecg.jpg  spider.jpg  lockbox.jpg  derivative.jpg

The hero headshot is `assets/img/keaton.jpg` (square, 640x640).

## Resume

Export your resume to PDF and save it as `assets/Keaton_Zelazny_Resume.pdf`.
The nav and contact section both link to it.
