# eryk-web-client-common
Common stuff used by me across js projects.

# Naming convention
Interfejs użytkownika dla aplikacji do składania zamówień oraz rezerwacji.

- Dla tworzenia nowych rekordów (obiektów) używaj
    - "create" -> "add"
    - "edit" -> "update"
    - "remove" -> "delete"
- unikaj słowa kluczowego get
- Dla metod przekazywanych dalej dodawaj prefix "on" np. onUpdate
- Dla metod wyszukujących wg kryteriów "fetch<Plural>By..."
- Dla metod z wszystkimi rekordami po prostu "fetch<Plural>"

# Good practices

- do not use colons in labels
-

# How to group refactor tasks
- first of all group by area in app context (rent, chart, making orders) then
  - frontend
    - bugs
    - business ideas
    - performance ideas
    - code-only (readability, scalability) ideas
  - backend
    - bugs
    - performance ideas
    - code-only (readability, scalability) ideas
  - system wide changes
    - business ideas
    - performance ideas
