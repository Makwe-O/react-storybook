# Description

Select allow users to select from a list of options. Mainly used to filter through the countries by regions

# Usage

```js
import Select from 'components/Atoms/Select/Select';
```

```js
<Select {props}/>
```

# Header Props

| Name         | Required | Type     | Description                                                                                   |
| ------------ | -------- | -------- | --------------------------------------------------------------------------------------------- |
| placeholder  | -        | String   | Placeholder text to be shown as the default text of the select component                      |
| options      | -        | array    | List of options used in the Select component                                                  |
| handleChange | -        | Function | Describes action to be performed when user changes the selected option of the Select omponent |
