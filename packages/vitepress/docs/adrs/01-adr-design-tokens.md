# 01) Design Tokens

Date: 2021-10-11

## Status

accepted

## Context

Design tokens are values that represent the style of the design systems and its UI elements. They are organized in a way that makes it easy to maintain a scalable and consistent visual system for UI development.
Most of the current and legacy design decisions are kept in [wikimedia-ui-base.css](https://gerrit.wikimedia.org/r/plugins/gitiles/wikimedia-ui-base/+/fa1e8c2/wikimedia-ui-base.css), in a technology-specific format. They are also available in `.less`.

For Codex:
- we also want to keep providing the design styles separately from the UI elements
- we want the tokens to be the source of truth for all vue components
- we want to provide the tokens in different output formats

## Considered Actions

### Technology-specific token definition

This option means specifying tokens in a format understood by CSS, Less or Scss.

#### Advantages

* Good IDE support for use of variables
* No need to use any additional tools

#### Downsides

* no native support for structure - one has to decode the structure form the name of the variables
* entails manual work to support several output formats
* limited possibilities of providing specific information about the tokens

### Technology-agnostic token definition 

This option means specifying tokens in a generic format (e.g. JSON/YML) which have to be converted to files as understood by specific technology (css, less, scss etc.)

#### Advantages

* shows on the conceptual level system design comes before concrete implementation
* allows us to store meta information (e.g. comments) alongside the token values
* allows us to support different technologies at the same time
* it is the future-proof option - we can easily add more output formats when/if we need them

#### Downsides

* possibly bad IDE/intellisense support

## Decision

We decided to go with the technology-agnostic token definition.
We choose to use [style-dictionary](https://amzn.github.io/style-dictionary/#/README) to consume and convert the tokens for us.

## Consequences

We achieve agnosticism on the token level and can support many target formats without manual work thanks to our tool of choice.


