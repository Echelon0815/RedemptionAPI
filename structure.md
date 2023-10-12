# URL
- / ~ to the documentation
- /random ~ respond a random quote
- /search ~ search a certain quote

- /random?num=5 ~ respond 5 quotes. if the maxamonut is reached. Respond all.
- /search?num=5 ~ same

- /search?cast="tim"
- /search?quote="upset"
- /search?author="andy"

# Respond Structure
```javascript
{
    author:"Andy Dufresne",
    cast:"Tim Robbins",
    quote:"If they said so, I really don't remember. I was upset.",
    context:"Andy's Resopnds to the district attorney when the D.A. informed Andy about his neighbor's testimony."
}
```