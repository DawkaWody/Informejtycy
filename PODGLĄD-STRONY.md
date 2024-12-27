Jeśli chcesz zobaczyć podgląd wejdź na:

https://dawkawody.github.io/Informejtycy

Jeśli po kliknięciu czegoś w spisie treści jest 404 to znaczy że tego artykułu jeszcze nie ma

cURL na ręczny rebuild strony (może się przydać):


curl --location --request POST 'https://api.github.com/repos/DawkaWody/Informejtycy/pages/builds' \
--header 'Accept: application/vnd.github+json' \
--header 'Authorization: Bearer <WKLEJ TOKEN Z DC> \
--header 'X-GitHub-Api-Version: 2022-11-28'


ten token działa tylko na to repo 😼