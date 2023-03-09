# Why switch from Redux?

- Don't want extra libraries => smaller bundle (minimal in large applications)

# React only approaches:

- Using Context API
    - Example see React Project 'react-replace-redux-context'
    - Good for low frequency updates but not high frequency
        - Logging in / theme
        - Not favourite or shopping cart
        - Context changes is not optimised to know which components need to be rerendered so everything is rerendered

- Custom Hook as a Store
    - Example see React Project 'react-replace-redux-hooks'
    - Or see Custom hooks store

# Other Options

- [Use Global Hook](https://www.npmjs.com/package/use-global-hook)
    - Uses React and works in a similar way to the custom hook store approach here