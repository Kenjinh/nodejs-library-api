# Library API
:construction:Under development:construction:
###### I'm practicing my Node.js skills by creating a library API with user and books
___
### Steps for run project:
1. <code>$ npm install</code>
2. <code>$ npm run dev</code>
___
### Endoints Books
###### POST /api/books/register
*Body JSON*
```json
{
	"title": "Código Limpo",
	"author": "Robert Cecil Martin"
}
```
###### GET /api/books
*Return*
```json
[
	{
		"_id": "63115664c7bf41699ab83ca2",
		"createdAt": "2022-09-02T01:03:32.283Z",
		"updatedAt": "2022-09-02T01:03:32.283Z",
		"__v": 0,
		"author": "Kiera Cass",
		"title": "A Seleção"
	},
	{
		"_id": "63115a1ee777ae5b7536fb3b",
		"title": "Código Limpo",
		"author": "Robert Cecil Martin",
		"createdAt": "2022-09-02T01:19:26.728Z",
		"updatedAt": "2022-09-02T01:19:26.728Z",
		"__v": 0
	}
]
```

###### DELETE /api/books/delete/:id
*Return*
```json
{
	"_id": "631151716d802951082e00d3",
	"createdAt": "2022-09-02T00:42:25.850Z",
	"updatedAt": "2022-09-02T00:42:25.850Z",
	"__v": 0
}
```
###### PUT /api/books/edit/:id
*Body JSON*
```json
{
	"title": "Harry potter",
	"author": "J. K. Rowling"
}
```
___
### Endpoints Users
###### POST /api/users/register
*Body JSON*
```json
{
	"name": "Test",
	"surname": "Test",
	"email": "email@email.com",
	"password": "password"
}
```
###### GET /api/users
*Return*
```json
[
	{
		"id": "6311597e7224430e69a59121",
		"name": "Teste",
                "surname": "Teste",
		"email": "teste@gmail.com",
		"createdAt": "2022-09-02T01:16:46.643Z",
		"updatedAt": "2022-09-02T01:16:46.643Z"
	},
	{
		"id": "63115a8cd7eff39ffe6a108c",
		"name": "Teste2",
                "surname": "Teste2",
		"email": "teste2@gmail.com",
		"createdAt": "2022-09-02T01:21:16.832Z",
		"updatedAt": "2022-09-02T01:21:16.832Z"
	}
]
```

###### DELETE /api/users/delete/:id
*Return*
```json
{
	"_id": "63115a8ed7eff39ffe6a108e",
	"name": "teste3",
	"surname": "teste3",
	"email": "teste3@gmail.com",
	"password": "teste3",
	"createdAt": "2022-09-02T01:21:18.561Z",
	"updatedAt": "2022-09-02T01:21:18.561Z",
	"__v": 0
}
```
###### PUT /api/books/edit/:id
*Body JSON*
```json
{
	"name": "teste3",
	"surname": "teste3",
	"email": "teste3@gmail.com",
	"password": "teste3"
}
```

