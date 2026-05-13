# AutoDrive

Aplicatie Angular simpla pentru o platforma de vanzare masini rulate.

## Setup development environment

Necesare:

- Node.js 22+
- npm 10+
- Angular CLI 19+

Comenzi:

```bash
npm install
npm start
```

Aplicatia ruleaza local pe `http://localhost:4200/`.

Pe Windows PowerShell, daca `npm` sau `ng` sunt blocate de execution policy, foloseste variantele `.cmd`:

```bash
npm.cmd install
npm.cmd start
```

## Rute principale

| Ruta | Scop |
| --- | --- |
| `/` | Prima pagina AutoDrive, categorii si masini recomandate |
| `/stoc` | Stoc incarcat prin `HttpClient` din `public/data/cars.json` |
| `/vinde` | Formular reactiv pentru cerere de evaluare masina |
| `/login` | Login pentru cont dealer |
| `/dealer` | Panou dealer protejat cu `authGuard` |

