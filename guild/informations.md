# Informations

Display some informations about a specific guild.

`https://api.tibialabs.com/v1/guildinfo/GUILD_NAME`

#### Example URL

`https://api.tibialabs.com/v1/guildinfo/Red Rose`

#### Output example

```
Red Rose (World: Antica - Avg Level: 145) has 3/123 members online right now. This guild was founded on Feb 18 2002.
```

## Integration

### NightBot

```
!addcom !charinfo $(urlfetch https://api.tibialabs.com/v1/guildinfo/$(querystring))
```

## StreamElements

```
$(customapi.https://api.tibialabs.com/v1/guildinfo/${queryescape ${1:}})
```

#### Testing case

```
Wedzy_: !guildinfo Rangers
Nightbot: Rangers (World: Belobra - Avg Level: 786) has 30/78 members online right now. This guild was founded on Nov 04 2019.
```
