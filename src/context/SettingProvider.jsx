import React, { useCallback, useState } from 'react'
import SettingsContext from './SettingsContext'

const storage = {
  getItem (key) {
    if (localStorage) {
      return localStorage.getItem(key)
    }
  },
  setItem (key, value) {
    if (localStorage) {
      return localStorage.setItem(key, value)
    }
  }
}

const SettingsProvider = props => {
  const [darkTheme, setTheme] = useState(storage.getItem('darkMode') === 'true')
  const toggleTheme = useCallback(
    function () {
      setTheme(!darkTheme)
      storage.setItem('darkMode', !darkTheme)
    },
    [setTheme, darkTheme]
  )

  return (
    <SettingsContext.Provider
      value={{
        darkTheme,
        toggleTheme
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider
