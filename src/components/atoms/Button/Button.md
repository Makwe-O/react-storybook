# Description

Buttons allow users to take actions, and make choices, with a single tap. Supports all default HTML Button properties.

# Usage

```js
import Button from 'components/Atoms/Button/Button';
```

```js
<Button {props}>{children}</Button>
```

# Button Props

| Name     | Required | Type      | Description                                             |
| -------- | -------- | --------- | ------------------------------------------------------- |
| btnStyle | -        | String    | Describes the style of the button (['btn--primary'])    |
| icon     | -        | Component | If true shows Icon beside beside text                   |
| onClick  | -        | Function  | Describes action to be performed when button is clicked |
| Children | -        | String    | Describes text to show inside button                    |
