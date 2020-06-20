# Informations

Display some informations about a specific character.

`https://api.tibialabs.com/v1/charinfo/CHARACTER_NAME`

#### Example URL

`https://api.tibialabs.com/v1/charinfo/wedzy`

#### Output example

```
Character: Wedzy - Level: 1378 - Vocation: Master Sorcerer - World: Belobra - Guild: Rangers
```

## Integration

### NightBot

```
!addcom !charinfo $(urlfetch https://api.tibialabs.com/v1/charinfo/$(querystring))
```

## StreamElements

```
$(customapi.https://api.tibialabs.com/v1/charinfo/${queryescape ${1:}})
```

#### Testing case

```
Wedzy_: !charinfo Eternal Oblivion
Nightbot: Character: Eternal Oblivion - Level: 297 - Vocation: Knight - World: Solidera
```
