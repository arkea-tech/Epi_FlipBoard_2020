# Client endpoints

## `Sign Up`

Method: `POST`
URL: `localhost:3000/api/auth/signup`
Parameters:


| Value    | Type |
|:------- | -------:|
| email | string |
| password | string |


Body example:

```json
{
	"email": "bryan.molly@deep.com",
	"password": "test123"
}
```

**Response Exemple**:

```json
{
    "status": 201,
    "msg": "User added successfully !"
}
```

## `Log In`

Method: `POST`
URL: `localhost:3000/api/auth/login`
Parameters:


| Value    | Type |
|:------- | -------:|
| email | string |
| password | string |


Body example:

```json
{
	"email": "bryan.molly@deep.com",
	"password": "test123"
}
```

**Response Exemple**:

```json
{
    "status": 200,
    "userId": "5ebe06e7b39f0045641ec7be",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWJlMDZlN2IzOWYwMDQ1NjQxZWM3YmUiLCJpYXQiOjE1ODk5Mjg0MzcsImV4cCI6MTU5MDAxNDgzN30.2ADh7uNW_4L1LpCkJJmXHUNfO4EK92yWsdlWfoEeze"
}
```

## `get sport articles`

Method: `GET`
URL: `localhost:3000/api/articles/sport`


Authorization:

| Value    | Type |
|:------- | -------:|
| authorization | Bearer Token |
| token | string |


**Response Exemple**:

```json
[
    {
        "Id": 0,
        "Tags": "Sports",
        "Desc": "Tuesday’s vote will prevent teams from blocking assistant coaches and executives who plan to interview for new jobs. But team owners tabled a measure to upgrade the draft status of franchises that hire nonwhite candidates for leadership positions.",
        "Title": "N.F.L. Team Owners Enhance Rooney Rule, but Stop Short of Incentives",
        "Source": "The New York Times",
        "Link": "https://www.nytimes.com/2020/05/19/sports/football/nfl-rooney-rule-minority-coaches.html",
        "Author": "By Ken Belson",
        "Date": "19/5/2020",
        "Image": "https://static01.nyt.com/images/2020/05/19/sports/19nfl-meeting/merlin_168049419_e6a395df-0391-4db7-b302-65a3f87612d0-articleLarge.jpg"
    },
    "..."
]
```

## `get science articles`

Method: `GET`
URL: `localhost:3000/api/articles/science`


Authorization:

| Value    | Type |
|:------- | -------:|
| authorization | Bearer Token |
| token | string |


**Response Exemple**:

```json
[
    {
        "Id": 0,
        "Tags": "Science",
        "Desc": "The large reptiles make decoy nests to distract predators during an oft-ignored behavior following their egg laying, researchers say.",
        "Title": "Mother Sea Turtles Might Be Sneakier Than They Look",
        "Source": "The New York Times",
        "Link": "https://www.nytimes.com/2020/05/19/science/sea-turtles-decoy-nests.html",
        "Author": "By David Waldstein",
        "Date": "19/5/2020",
        "Image": "https://static01.nyt.com/images/2020/05/19/science/19TB-SEATURTLES1/merlin_172460943_6538f4e4-77fd-4a18-89e7-13d5eff092f8-articleLarge.jpg"
    },
    "..."
]
```

## `get culture articles`

Method: `GET`
URL: `localhost:3000/api/articles/culture`


Authorization:

| Value    | Type |
|:------- | -------:|
| authorization | Bearer Token |
| token | string |


**Response Exemple**:

```json
[
    {
       "Id": 0,
       "Tags": "Culture",
       "Desc": "How do you get discovered in a teetering art world? Graduating students organize shows with peers, team up with dealers — and lobby for relief funds. Will they bring change?",
       "Title": "Newly Minted Artists, Facing a Precarious Future, Take Action",
       "Source": "The New York Times",
       "Link": "https://www.nytimes.com/2020/05/19/arts/design/art-schools-covid.html",
       "Author": "By Hilarie M. Sheets",
       "Date": "19/5/2020",
       "Image": "https://static01.nyt.com/images/2020/05/20/arts/20artschool-virus1/20artschool-virus1-articleLarge.jpg"
    },
    "..."
]
```
