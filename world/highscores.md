# Highscores

Display some Highscores informations from a specific world.

`https://api.tibialabs.com/v1/highscores/WORLD_NAME/POSITION`

If **POSITION** is not passed, it's going to be considered as 1.

#### Example URL

`https://api.tibialabs.com/v1/highscores/Antica/20`

#### Output example

```
Fujitora One (Elder Druid - Level 843) is Top 20 on Antica. Total Exp: 9,948,626,631 experience points.
```

## NightBot Integration

```
!addcom !toplevel $(urlfetch https://api.tibialabs.com/v1/highscores/$(querystring))
```

#### Testing case

```
Wedzy_: !toplevel Belobra
Nightbot: Minutz (Elder Druid - Level 1399) is Top 1 on Belobra. Total Exp: 45,481,868,472 experience points.
```
