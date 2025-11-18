# Collectorsmarks.org – Architectuur (eerste versie)

## 1. Overzicht

Collectorsmarks.org is een digitaal platform voor het onderzoek naar verzamelaarsmerken
(collectors' marks), gebaseerd op de Lugt-catalogus en aanvullend academisch onderzoek.

Doel:
- Een doorzoekbare database van verzamelaars, hun merken en de werken waarop die merken voorkomen.
- Een referentiepunt voor provenance-onderzoek.
- Een platform waar onderzoekers en instellingen informatie kunnen delen en corrigeren.

## 2. Globale architectuur

- **Frontend:** Next.js (op termijn), nu eenvoudige statische HTML op Vercel.
- **Hosting:** Vercel (collectorsmarks.vercel.app + collectorsmarks.org).
- **DNS & domein:** Cloudflare (A-record naar 76.76.21.21 + CNAME voor www).
- **API-laag:** Next.js API routes (REST/JSON) – nog te implementeren.
- **Database:** PostgreSQL (bijv. Supabase/Neon) met relationele tabellen voor
  collectors, marks, artworks, impressions en bronnen.
- **Admin:** Beveiligde omgeving voor het invoeren en valideren van data
  (onderzoekers, professor Swinnen, enz.).

## 3. Datamodel (eerste schets)

### 3.1 Collectors
- id
- name
- lugt_number
- life_dates
- notes
- references

### 3.2 Marks
- id
- collector_id → Collectors
- lugt_number
- type
- description
- image_url
- date_from
- date_to
- notes

### 3.3 Artworks
- id
- title
- artist
- date
- current_location
- inventory_number
- notes

### 3.4 MarkImpressions
- id
- mark_id → Marks
- object_id → Artworks
- position_on_sheet
- certainty
- notes

### 3.5 Sources
- id
- title
- author
- year
- reference_text

## 4. Roadmap (kort)

1. HTML-homepage online zetten ✅
2. Architectuur & datamodel vastleggen (dit document) ✅
3. Next.js-project opzetten op Vercel
4. Database kiezen en schema implementeren
5. Admin-interface voor invoer en correcties
6. Publieke zoekinterface voor onderzoekers
7. Commerciële laag (dealers, donate, partners)
