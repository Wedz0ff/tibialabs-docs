# Dream Scar Boss

Display today's Dream Scar Boss.

`https://api.tibialabs.com/v1/dreamscar/{name}`

If **name** is passed, it's going to return only creature's name.

Informations are gathered from [TibiaWiki](https://tibia.fandom.com/wiki/Dream_Scar/Boss_of_the_Day).

#### Example URL:

`https://api.tibialabs.com/v1/dreamscar/name`

#### Output example

```
Maxxenius
```

## NightBot Integration

```
!addcom !dreamscar $(urlfetch https://api.tibialabs.com/v1/dreamscar)
```

#### Testing case

```
Wedzy_: !dreamscar
Nightbot: Today's Dream Scar Boss should be Maxxenius on most worlds. Info by TibiaWiki.
```
