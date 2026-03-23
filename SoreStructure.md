# Store Structure (Current Implementation)

This project currently uses a **file-based server store** for studies data, not a client state library (such as Redux/Zustand).

## 1) Store Location

- Main store module: `nextjs-app/src/app/api/studies/studiesStore.ts`
- Backing data file: `nextjs-app/src/app/api/studies/mock/studiesData.json`
- Shared store type model: `nextjs-app/src/types/Study.ts`

## 2) How the Store Is Built

The store is implemented as a small repository-like module with three exported async functions:

- `loadStudies()`  
  Reads JSON from disk and returns `Study[]`.
- `saveStudies(studies)`  
  Writes full `Study[]` back to disk using stable pretty JSON formatting.
- `updateStudyStatusById(id, status)`  
  Loads all studies, finds one by id, updates status, saves all data, and returns updated record (or `null`).

Internally:

- `STUDIES_DATA_PATH` is resolved with Node path utilities (`path`, `fileURLToPath`) so the JSON file is located relative to the store file.
- JSON parsing happens in `parseStudies(json)` and is cast to `Study[]`.

## 3) API Routes Using the Store

### `nextjs-app/src/app/api/studies/route.ts`
- Uses `loadStudies()`.
- Returns summarized study list (`StudySummary[]`).

### `nextjs-app/src/app/api/studies/[id]/route.ts`
- `GET` uses `loadStudies()` to return full study by id.
- `PATCH` validates request status and calls `updateStudyStatusById()`.

### `nextjs-app/src/app/api/studies/selected/[id]/route.ts`
- Same pattern as `[id]/route.ts`:
  - `GET` via `loadStudies()`
  - `PATCH` via `updateStudyStatusById()`

## 4) Type Contract

From `nextjs-app/src/types/Study.ts`:

- `Study` includes:
  - `id`, `patientName`, `patientId`, `studyDate`
  - `indication` (`StudyIndication` enum)
  - `lvef`
  - `status` (`StudyStatus` enum: `pending | reviewed`)
  - `thumbnailUrl`
- `StudySummary` is a `Pick<Study, ...>` without `thumbnailUrl`.

## 5) Data Flow

1. API route receives request.
2. Route calls store function (`loadStudies` or `updateStudyStatusById`).
3. Store reads/writes JSON file.
4. Route returns typed JSON response.

## 6) Important Note

`nextjs-app/src/app/api/summary/route.ts` currently imports the JSON file directly (`studiesData.json`) instead of using `studiesStore.ts`.
So summary data is reading the same source file but bypassing the store abstraction.
