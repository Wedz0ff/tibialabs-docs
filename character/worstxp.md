# Worst Experience

Display which character lost most experience yesterday.

`https://api.tibialabs.com/v1/worstxp`

#### Output example

```
Doc Silvershine was worst exp. yesterday, he lost 125.595.933 experience points. Info by: TibiaFrags.com
```

## NightBot Integration

```
!addcom !worstxp $(urlfetch https://api.tibialabs.com/v1/worstxp)
```

#### Testing case

```
Wedzy_: !worstxp
Nightbot: Doc Silvershine was worst exp. yesterday, he lost 125.595.933 experience points. Info by: TibiaFrags.com
```
