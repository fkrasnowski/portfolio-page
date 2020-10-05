import React from "react"
import { DecoratedCard } from "./cards"
import { Grid } from "./grid"

const decorations = ["triangle", "square", "circle", "pentagon"]
export const PinnedCards = ({ data }) => (
  <Grid>
    {data.github.user.pinnedItems.nodes.map(({ name, description }, key) => (
      <DecoratedCard decoration={decorations[key]} linkTo={`/projects/${name}`}>
        <h3>{name}</h3>
        {description}
      </DecoratedCard>
    ))}
  </Grid>
)
